import urllib.request
import re
import json
import time
from html.parser import HTMLParser

class InsightsParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.articles = []
        self.current_article = None
        self.in_list_title = False
        self.in_list_name = False
        self.in_categories = False
        self.in_date = False
        self.in_article_image = False
        self.recording_title_link = False

    def handle_starttag(self, tag, attrs):
        attrs_dict = dict(attrs)
        
        # Detect article block
        if tag == 'div' and 'class' in attrs_dict:
            classes = attrs_dict['class'].split()
            if 'article' in classes and 'in_list' in classes:
                self.current_article = {
                    'title': '',
                    'link': '',
                    'image': '',
                    'category': '',
                    'date': ''
                }
                
        if self.current_article is not None:
            if tag == 'div' and 'class' in attrs_dict:
                classes = attrs_dict['class'].split()
                if 'article_image' in classes:
                    self.in_article_image = True
                elif 'listTitle' in classes:
                    self.in_list_title = True
                elif 'listName' in classes:
                    self.in_list_name = True
            
            elif tag == 'span' and 'class' in attrs_dict:
                classes = attrs_dict['class'].split()
                if 'categories' in classes:
                    self.in_categories = True
                elif 'date' in classes:
                    self.in_date = True
                    
            elif tag == 'img' and self.in_article_image:
                if 'src' in attrs_dict:
                    self.current_article['image'] = attrs_dict['src']
                    
            elif tag == 'a':
                if self.in_article_image and 'href' in attrs_dict:
                    self.current_article['link'] = attrs_dict['href']
                elif self.in_list_name and 'href' in attrs_dict:
                    self.current_article['link'] = attrs_dict['href']
                    self.recording_title_link = True

    def handle_endtag(self, tag):
        if self.current_article is not None:
            if tag == 'div':
                if self.in_article_image:
                    self.in_article_image = False
                elif self.in_list_name:
                    self.in_list_name = False
                elif self.in_list_title:
                    self.in_list_title = False
                    # End of article block usually follows listTitle
                    self.articles.append(self.current_article)
                    self.current_article = None
            elif tag == 'span':
                if self.in_categories:
                    self.in_categories = False
                elif self.in_date:
                    self.in_date = False
            elif tag == 'a':
                if self.recording_title_link:
                    self.recording_title_link = False

    def handle_data(self, data):
        if self.current_article is not None:
            if self.in_categories:
                self.current_article['category'] += data.strip()
            elif self.in_date:
                self.current_article['date'] += data.strip()
            elif self.recording_title_link:
                self.current_article['title'] += data.strip()

def scrape_page(page_id):
    url = f"https://insights.morganphilips.cn/fr/pgrid/629/pageid/{page_id}"
    print(f"Scraping page {page_id}: {url}")
    try:
        req = urllib.request.Request(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'}
        )
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
        parser = InsightsParser()
        parser.feed(html)
        print(f"Found {len(parser.articles)} articles on page {page_id}")
        return parser.articles
    except Exception as e:
        print(f"Error on page {page_id}: {e}")
        return []

def main():
    all_articles = []
    # Loop from page 1 to 36
    for page in range(1, 37):
        articles = scrape_page(page)
        if not articles:
            print("No articles returned or error, stopping.")
            # Let's break if page returns nothing to prevent infinite loops/wasted requests
            if page > 1: # if page 1 fails we might want to try other page, but generally if page empty we stop
                break
        all_articles.extend(articles)
        time.sleep(0.5) # rate limit friendly
        
    print(f"\nScraping complete. Total articles found: {len(all_articles)}")
    
    # Save to a raw JSON file
    with open('scraped_articles.json', 'w', encoding='utf-8') as f:
        json.dump(all_articles, f, ensure_ascii=False, indent=2)
    print("Saved to scraped_articles.json")

if __name__ == '__main__':
    main()
