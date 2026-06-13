import { Calendar, Clock, ChevronLeft, ArrowLeft, Send } from 'lucide-react';
import Image from 'next/image';
import { getLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Link } from '@/i18n/routing';
import articlesData from '@/data/articles.json';

type Props = {
  params: Promise<{ id: string; locale: string }>;
};

export default async function ArticleDetailPage({ params }: Props) {
  const { id, locale } = await params;
  
  const article = articlesData.find((art) => art.id === parseInt(id));
  if (!article) {
    notFound();
  }

  const t = await getTranslations('Blog');
  const tContact = await getTranslations('Contact');
  
  const langKey = (locale === 'en' || locale === 'it') ? locale : 'fr';
  const localized = (article as any)[langKey] || (article as any)['fr'];

  // Dynamic context paragraphs in target locale to simulate complete articles
  const getContextParagraphs = (cat: string, title: string) => {
    const catLower = cat.toLowerCase();
    
    if (locale === 'en') {
      let p2 = "The Moroccan job market is undergoing rapid evolution, particularly driven by regional hubs and foreign direct investments. Identifying active leaders who can align technical skills with local cultural requirements is a core challenge for ambitious companies.";
      if (catLower.includes('it') || catLower.includes('tech') || catLower.includes('digital')) {
        p2 = "Within the booming technology hubs of Rabat Technopolis and Casablanca Nearshore, competition for senior tech profiles is fierce. K-Agency leverages its direct sourcing network to attract talent that is typically passive, ensuring they align with both your technical stack and corporate culture.";
      } else if (catLower.includes('finan') || catLower.includes('banqu') || catLower.includes('salair')) {
        p2 = "Casablanca Finance City (CFC) has consolidated its position as the premier financial hub in Africa. Attracting experienced analysts, wealth managers, and CFOs requires precise salary benchmarking and a compelling value proposition that goes beyond simple remuneration.";
      } else if (catLower.includes('logist') || catLower.includes('supply') || catLower.includes('indus')) {
        p2 = "Powered by the industrial acceleration zones and the world-class hub of Tangier Med, logistics and supply chain roles in Morocco demand world-class efficiency. K-Agency supports industrial leaders in recruiting operational directors and engineering experts who can drive performance.";
      }
      return {
        body: p2,
        cta: "Interested in recruiting or expanding your executive team in Casablanca, Rabat, Tangier, or Marrakech? Get in touch with our specialist partners to discuss your recruitment challenges."
      };
    } else if (locale === 'it') {
      let p2 = "Il mercato del lavoro in Marocco sta vivendo una rapida evoluzione, guidata da hub regionali e investimenti diretti esteri. Identificare leader in grado di allineare competenze tecniche con le esigenze culturali locali è una sfida fondamentale per le aziende.";
      if (catLower.includes('it') || catLower.includes('tech') || catLower.includes('digital')) {
        p2 = "Nei poli tecnologici in forte crescita di Rabat Technopolis e Casablanca Nearshore, la competizione per profili tecnologici senior è serrata. K-Agency sfrutta la sua rete di sourcing diretto per attrarre talenti passivi, garantendo l'allineamento con il vostro stack tecnologico e la cultura aziendale.";
      } else if (catLower.includes('finan') || catLower.includes('banqu') || catLower.includes('salair')) {
        p2 = "Casablanca Finance City (CFC) ha consolidato la sua posizione come principale hub finanziario in Africa. Attrarre analisti esperti, gestori patrimoniali e CFO richiede un benchmarking salariale preciso e una proposta di valore convincente.";
      } else if (catLower.includes('logist') || catLower.includes('supply') || catLower.includes('indus')) {
        p2 = "Alimentato dalle zone di accelerazione industriale e dall'hub mondiale di Tangeri Med, il settore della logistica e della supply chain in Marocco richiede un'efficienza globale. K-Agency supporta i leader industriali nel reclutamento di direttori operativi ed esperti di ingegneria.";
      }
      return {
        body: p2,
        cta: "Siete interessati a reclutare o ampliare il vostro team esecutivo a Casablanca, Rabat, Tangeri o Marrakech? Contattate i nostri partner specializzati per discutere le vostre sfide di recruiting."
      };
    } else {
      // Default French
      let p2 = "Le marché de l'emploi au Maroc traverse une période de structuration et de dynamisme inédite, portée par des projets d'infrastructures d'envergure nationale. Pour les entreprises en croissance, attirer des profils C-Level capables d'accompagner ces transformations exige une méthodologie rigoureuse de chasse de tête.";
      if (catLower.includes('it') || catLower.includes('tech') || catLower.includes('digital')) {
        p2 = "Au sein des écosystèmes en pleine ébullition de Rabat Technopolis et de Casablanca Nearshore, la course aux profils Tech seniors est lancée. K-Agency active son réseau de sourcing direct pour approcher les talents passifs et valider leur adéquation culturelle avec vos projets.";
      } else if (catLower.includes('finan') || catLower.includes('banqu') || catLower.includes('salair')) {
        p2 = "Casablanca Finance City (CFC) s'impose désormais comme la première place financière d'Afrique. Recruter des analystes chevronnés, des gestionnaires de fortune ou des directeurs financiers requiert un étalonnage salarial précis et une approche directe confidentielle.";
      } else if (catLower.includes('logist') || catLower.includes('supply') || catLower.includes('indus')) {
        p2 = "Portés par la dynamique de Tanger Med et des zones franches industrielles, les métiers de la logistique et de la supply chain au Maroc exigent une excellence opérationnelle de premier plan. K-Agency accompagne les industriels dans le recrutement d'ingénieurs et de directeurs de site clés.";
      }
      return {
        body: p2,
        cta: "Vous envisagez un recrutement clé ou l'ouverture d'une direction à Casablanca, Rabat, Tanger, Marrakech ou Agadir ? Discutez de vos enjeux avec un associé expert de K-Agency."
      };
    }
  };

  const paragraphs = getContextParagraphs(localized.category, localized.title);

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        
        {/* Back Link */}
        <div className="mb-10 pt-4">
          <Link href="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors text-sm font-medium uppercase tracking-wider">
            <ArrowLeft className="w-4 h-4" /> {t('back_to_blog', { defaultValue: "Retour aux articles" })}
          </Link>
        </div>

        {/* Article Header */}
        <div className="space-y-6 mb-12">
          <span className="inline-block bg-primary/10 text-primary border border-primary/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-sm">
            {localized.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-light tracking-tight leading-tight text-foreground">
            {localized.title}
          </h1>
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/30">
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> {article.date}</span>
            <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> {article.readTime}</span>
          </div>
        </div>

        {/* Feature Image */}
        <div className="relative h-[450px] w-full rounded-2xl overflow-hidden mb-12 border border-border/40 shadow-xl">
          <Image 
            src={article.image} 
            alt={localized.title} 
            fill 
            priority
            className="object-cover"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-invert max-w-none space-y-8 text-muted-foreground font-light text-lg leading-relaxed mb-16">
          <p className="text-foreground text-xl leading-relaxed font-light border-l-2 border-primary pl-6 py-2">
            {localized.excerpt}
          </p>
          <p>
            {paragraphs.body}
          </p>
        </div>

        {/* Call to Action Card */}
        <div className="bg-card/40 backdrop-blur-md border border-primary/20 p-8 md:p-10 rounded-2xl shadow-xl shadow-black/20 flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <div className="flex-1 space-y-3">
            <h3 className="text-xl font-medium text-foreground">{tContact('form_title', { defaultValue: "Parlons de vos enjeux" })}</h3>
            <p className="text-muted-foreground text-sm font-light leading-relaxed max-w-xl">
              {paragraphs.cta}
            </p>
          </div>
          <Link 
            href="/contact" 
            className="flex items-center gap-3 bg-foreground hover:bg-primary text-background hover:text-primary-foreground px-6 py-3.5 uppercase tracking-widest text-xs font-semibold transition-colors rounded-sm shrink-0 shadow-lg shadow-black/10"
          >
            <Send className="w-4 h-4" /> {tContact('form_submit', { defaultValue: "Nous contacter" })}
          </Link>
        </div>

      </div>
    </div>
  );
}
