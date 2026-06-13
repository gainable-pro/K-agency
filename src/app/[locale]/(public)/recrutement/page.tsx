import { useTranslations } from 'next-intl';
import { Target, Users, Search, Award, HeartHandshake, Lightbulb, Compass } from 'lucide-react';
import Image from 'next/image';

export default function RecrutementPage() {
  const t = useTranslations('Recrutement');

  return (
    <div className="bg-background min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <div className="relative border-b border-border/40 py-24 overflow-hidden bg-secondary/30">
        <div className="container relative z-20 mx-auto px-6 max-w-7xl text-center">
          <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-6 block">Le Capital Humain avant tout</span>
          <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-6 text-foreground">
            Des talents pour <span className="font-medium text-primary">façonner demain</span>
          </h1>
          <p className="text-muted-foreground text-xl max-w-3xl mx-auto font-light leading-relaxed">
            Chez K-Agency, nous ne recrutons pas que des CV, nous recrutons des personnalités, des ambitions et des histoires. Notre mission est de créer des rencontres professionnelles durables et épanouissantes, fondées sur la confiance et la transparence.
          </p>
        </div>
      </div>

      {/* Philosophy Section with Photo */}
      <div className="container mx-auto px-6 max-w-7xl py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light tracking-tight mb-6">L'Humain au Centre de Notre Démarche</h2>
            <div className="h-px w-24 bg-primary mb-8"></div>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed text-lg">
              <p>
                Dans un monde professionnel en perpétuelle mutation, la véritable valeur ajoutée d'une entreprise réside dans ses collaborateurs. Nous croyons profondément que le succès d'un recrutement ne se mesure pas seulement à l'adéquation technique, mais surtout au "fit" culturel et humain.
              </p>
              <p>
                Nos consultants, experts dans leurs secteurs respectifs, prennent le temps de comprendre l'ADN de votre entreprise : vos valeurs, votre vision, et l'environnement de travail que vous offrez. 
              </p>
              <p>
                Du côté des candidats, nous agissons comme de véritables coachs de carrière. Nous écoutons leurs aspirations, évaluons leurs soft skills avec bienveillance, et les orientons vers des opportunités où ils pourront s'épanouir pleinement et donner le meilleur d'eux-mêmes.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <HeartHandshake className="text-primary w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Empathie</h4>
                  <p className="text-sm text-muted-foreground">Comprendre avant de proposer.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Lightbulb className="text-primary w-8 h-8 shrink-0" strokeWidth={1.5} />
                <div>
                  <h4 className="font-medium text-foreground mb-1">Transparence</h4>
                  <p className="text-sm text-muted-foreground">Une communication claire et honnête.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-[600px] rounded-xl overflow-hidden shadow-2xl">
            <Image 
              src="/images/team_collaboration.png" 
              alt="Équipe heureuse et collaborative" 
              fill 
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Approach Section */}
      <div className="bg-card border-y border-border/40 py-24">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light tracking-tight">{t('approach_title')}</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">Une méthode éprouvée qui allie rigueur analytique et intelligence émotionnelle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Step 1 */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Compass className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-4">{t('approach_1_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Immersion dans vos locaux, entretiens avec les managers opérationnels pour capter l'essence du besoin. Nous co-rédigeons le profil idéal en intégrant vos enjeux stratégiques.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Users className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-4">{t('approach_2_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Chasse ciblée, activation de notre vivier exclusif et diffusion multicanale. Nous contactons les candidats potentiels avec des messages personnalisés et valorisants.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-card/40 backdrop-blur-md border border-border/50 p-8 rounded-xl shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Award className="w-6 h-6 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium mb-4">{t('approach_3_title')}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                Au-delà des compétences techniques, nous évaluons la personnalité, le potentiel de leadership et la capacité d'adaptation via des entretiens approfondis et des tests psychométriques reconnus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
