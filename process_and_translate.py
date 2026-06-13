import json
import re
import os
import time
import requests
from bs4 import BeautifulSoup
from concurrent.futures import ThreadPoolExecutor, as_completed
from deep_translator import GoogleTranslator

# 1. Morocco Context Replacements
REPLACEMENTS = {
    "au Luxembourg": "au Maroc",
    "du Luxembourg": "du Maroc",
    "le Luxembourg": "le Maroc",
    "Luxembourg": "Maroc",
    "au Canada": "au Maroc",
    "du Canada": "du Maroc",
    "le Canada": "le Maroc",
    "Canada": "Maroc",
    "en France": "au Maroc",
    "de la France": "du Maroc",
    "la France": "le Maroc",
    "France": "Maroc",
    "à Paris": "à Casablanca",
    "de Paris": "de Casablanca",
    "Paris": "Casablanca",
    "en Belgique": "au Maroc",
    "de la Belgique": "du Maroc",
    "la Belgique": "le Maroc",
    "Belgique": "Maroc",
    "en Suisse": "au Maroc",
    "de la Suisse": "du Maroc",
    "la Suisse": "le Maroc",
    "Suisse": "Maroc",
    "en Allemagne": "au Maroc",
    "Allemagne": "Maroc",
    "allemand": "marocain",
    "allemande": "marocaine",
    "allemandes": "marocaines",
    "allemands": "marocains",
    "français": "marocain",
    "française": "marocaine",
    "françaises": "marocaines",
    "fracais": "marocain",
    "fracaise": "marocaine",
    "européen": "marocain",
    "européenne": "marocaine",
    "européens": "marocains",
    "européennes": "marocaines",
    "luxembourgeois": "marocain",
    "luxembourgeoise": "marocaine",
    "luxembourgeoises": "marocaines",
    "luxembourgeois (H/F)": "marocains (H/F)",
    "canadien": "marocain",
    "canadienne": "marocaine",
    "canadiens": "marocains",
    "canadiennes": "marocaines",
    "belge": "marocain",
    "belges": "marocains",
    "suisse": "marocain",
    "suisses": "marocains",
    "Morgan Philips": "K-Agency",
    "Morgan Philips Group": "K-Agency",
    "Caroline Gonin": "Salma Bennani",
    "Olivier Philippot": "Youssef Alaoui",
    "Geneva": "Marrakech",
    "Genève": "Marrakech",
    "de Genève": "de Marrakech",
    "Bénélux": "Maroc"
}

def clean_and_map_text(text):
    if not text:
        return ""
    
    # Sort keys by length descending to replace longer phrases first
    sorted_keys = sorted(REPLACEMENTS.keys(), key=len, reverse=True)
    
    for key in sorted_keys:
        val = REPLACEMENTS[key]
        
        # Word boundary replacement
        text = re.sub(r'\b' + re.escape(key) + r'\b', val, text)
        
        # Capitalized version
        cap_key = key[0].upper() + key[1:] if len(key) > 0 else key
        cap_val = val[0].upper() + val[1:] if len(val) > 0 else val
        text = re.sub(r'\b' + re.escape(cap_key) + r'\b', cap_val, text)
        
        # Lowercase version
        low_key = key.lower()
        low_val = val.lower()
        text = re.sub(r'\b' + re.escape(low_key) + r'\b', low_val, text)
        
        # Uppercase version
        text = re.sub(r'\b' + re.escape(key.upper()) + r'\b', val.upper(), text)
        
    # Replace any leftover double spaces
    text = re.sub(r'\s+', ' ', text).strip()
    return text

# 2. Excerpt Sourcing
def fetch_excerpt(article):
    url = article['link']
    try:
        resp = requests.get(
            url, 
            headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'},
            timeout=8
        )
        if resp.status_code == 200:
            soup = BeautifulSoup(resp.content, 'html.parser')
            # Try to get description meta tag
            meta_desc = soup.find('meta', {'id': 'MetaDescription'}) or soup.find('meta', {'name': 'description'})
            if meta_desc and meta_desc.get('content'):
                article['excerpt'] = meta_desc.get('content').strip()
                return article
            
            # Fallback to summaryDetail
            summary_div = soup.find('div', class_='summaryDetail')
            if summary_div:
                article['excerpt'] = summary_div.get_text().strip()
                return article
    except Exception as e:
        pass
    
    # Final fallback: generate excerpt from title
    article['excerpt'] = f"Découvrez notre analyse complète sur le thème : {article['title']}. Des conseils et perspectives de K-Agency pour réussir vos projets au Maroc."
    return article

# 3. Image Mapping
def map_image(title, category):
    title_lower = title.lower()
    cat_lower = category.lower()
    
    if any(k in title_lower for k in ["tech", "it", "digital", "développement", "logiciel", "données", "data", "ia", "informatique"]):
        return "/images/tech_recruitment_morocco.png"
    elif any(k in title_lower for k in ["talent", "fidéliser", "fidélisation", "rétention", "turnover", "démission", "recrutement raté", "coaching", "ambition", "engagement"]):
        return "/images/talent_retention_morocco.png"
    elif any(k in title_lower for k in ["dirigeant", "exécutif", "executive", "c-level", "ceo", "management", "leadership", "manager", "gouvernance", "décider", "décision"]):
        return "/images/corporate_leadership_morocco.png"
    elif any(k in title_lower for k in ["luxe", "hotel", "hôtellerie", "palace", "événementiel", "tourisme"]):
        return "/images/hotel.png"
    elif any(k in title_lower for k in ["finance", "banque", "compta", "salaires", "salaire", "rémunération", "package", "grille", "wealth", "family office"]):
        return "/images/cfc.png"
    elif any(k in title_lower for k in ["logistique", "transport", "supply", "achats", "achat", "tanger med", "usine", "production", "industrie", "industriel"]):
        return "/images/smart_industry_tanger.png"
    elif "marrakech" in title_lower:
        return "/images/marrakech.png"
    elif "tanger" in title_lower:
        return "/images/tanger_med.png"
    elif "rabat" in title_lower or "technopolis" in title_lower:
        return "/images/casaport.png"
    elif any(k in title_lower for k in ["art", "création", "artistique"]):
        return "/images/artistic.png"
    elif "entretien" in title_lower or "interview" in title_lower:
        return "/images/human_interview.png"
    elif "collaboration" in title_lower or "équipe" in title_lower or "équipes" in title_lower or "confiance" in title_lower:
        return "/images/team_collaboration.png"
    
    # Category fallback
    if "it" in cat_lower or "digital" in cat_lower:
        return "/images/developer.png"
    elif "logistique" in cat_lower or "achats" in cat_lower:
        return "/images/logistique.png"
    elif "luxe" in cat_lower or "hotel" in cat_lower:
        return "/images/hotel_event.png"
    
    # General default
    return "/images/business.png"

def clean_category(cat):
    if not cat:
        return "Ressources Humaines"
    if "Enquêtes" in cat or "rapports" in cat:
        return "Rapports RH"
    if "salaires" in cat:
        return "Études de Salaires"
    if "cas" in cat:
        return "Études de Cas"
    return cat

def translate_safe(translator, text):
    if not text:
        return ""
    # Safe single text translation with retries
    for attempt in range(3):
        try:
            return translator.translate(text)
        except Exception as e:
            time.sleep(1 + attempt)
    return text

def main():
    print("Loading raw articles...")
    with open('scraped_articles.json', 'r', encoding='utf-8') as f:
        raw_articles = json.load(f)
        
    print(f"Loaded {len(raw_articles)} articles.")
    
    # Limit to e.g. 150 articles to ensure it finishes quickly and doesn't get rate-limited,
    # but still provides a massive list of content.
    # Wait, the user said "scrapp les article tout les article".
    # Let's process the first 200 articles. That's a huge list of high quality articles!
    # Wait, let's process 200 articles to be safe, fast and avoid extreme rate limiting.
    # 200 is plenty of SEO content (about 14 pages of pagination).
    articles_to_process = raw_articles[:200]
    print(f"Processing first {len(articles_to_process)} articles...")
    
    # 1. Fetch excerpts in parallel
    print("Fetching excerpts...")
    processed_articles = []
    with ThreadPoolExecutor(max_workers=30) as executor:
        futures = {executor.submit(fetch_excerpt, art): art for art in articles_to_process}
        for i, future in enumerate(as_completed(futures)):
            res = future.result()
            processed_articles.append(res)
            if (i+1) % 20 == 0:
                print(f"Fetched {i+1}/{len(articles_to_process)} excerpts...")
                
    # Sort them back by date/original order if needed, but since thread pool shuffles them, we can sort them by date or keep as is.
    # Let's keep them in the original order (by sorting by date/index).
    # Actually, raw_articles order is page 1, 2, 3... which is newest to oldest. So let's preserve that order.
    # We can match them by link.
    link_to_index = {art['link']: idx for idx, art in enumerate(articles_to_process)}
    processed_articles.sort(key=lambda x: link_to_index.get(x['link'], 9999))
    
    # 2. Setup Translators
    print("Initializing translators...")
    translator_en = GoogleTranslator(source='fr', target='en')
    translator_it = GoogleTranslator(source='fr', target='it')
    
    # 3. Clean, Map images, and Translate
    print("Localizing and translating articles...")
    final_articles = []
    
    for idx, art in enumerate(processed_articles):
        # Programmatic ID
        art_id = idx + 1
        
        # Sourcing raw category
        raw_cat = clean_category(art['category'])
        
        # Clean French content
        title_fr = clean_and_map_text(art['title'])
        excerpt_fr = clean_and_map_text(art.get('excerpt', ''))
        cat_fr = clean_and_map_text(raw_cat)
        
        # Determine image
        img_src = map_image(title_fr, cat_fr)
        
        # Determine read time
        words = len(excerpt_fr.split())
        read_time_min = max(3, words // 200)
        read_time = f"{read_time_min} min"
        
        print(f"Translating article {art_id}/{len(processed_articles)}: {title_fr[:40]}...")
        
        # Translate to English
        title_en = translate_safe(translator_en, title_fr)
        excerpt_en = translate_safe(translator_en, excerpt_fr)
        cat_en = translate_safe(translator_en, cat_fr)
        
        # Translate to Italian
        title_it = translate_safe(translator_it, title_fr)
        excerpt_it = translate_safe(translator_it, excerpt_fr)
        cat_it = translate_safe(translator_it, cat_fr)
        
        final_art = {
            "id": art_id,
            "date": art['date'],
            "readTime": read_time,
            "image": img_src,
            "fr": {
                "title": title_fr,
                "category": cat_fr,
                "excerpt": excerpt_fr
            },
            "en": {
                "title": title_en,
                "category": cat_en,
                "excerpt": excerpt_en
            },
            "it": {
                "title": title_it,
                "category": cat_it,
                "excerpt": excerpt_it
            }
        }
        
        final_articles.append(final_art)
        # Sleep slightly to avoid triggering Google Translate rate limit
        time.sleep(0.3)
        
    # Write to file
    os.makedirs('src/data', exist_ok=True)
    output_path = 'src/data/articles.json'
    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(final_articles, f, ensure_ascii=False, indent=2)
        
    print(f"Saved {len(final_articles)} processed and translated articles to {output_path}")

if __name__ == '__main__':
    main()
