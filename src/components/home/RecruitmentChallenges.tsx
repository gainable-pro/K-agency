import { AlertTriangle, FileWarning, RefreshCcw, Globe2 } from 'lucide-react';

export default function RecruitmentChallenges() {
  return (
    <section className="py-24 bg-card border-y border-border/40 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right z-0"></div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Text Side */}
          <div className="lg:w-1/2">
            <span className="text-primary font-medium uppercase tracking-[0.2em] text-sm mb-4 block">Notre Constat</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6 text-foreground leading-tight">
              Recruter n'est pas une transaction. <br />
              <span className="font-medium text-primary">C'est un pari sur l'humain.</span>
            </h2>
            <div className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p>
                Le recrutement international est devenu complexe. Aujourd'hui, les entreprises font face à des défis majeurs qui menacent leur croissance et leur stabilité organisationnelle.
              </p>
              <p>
                En tant que cabinet de recrutement international opérant entre le Maroc et l'Europe, nous avons compris que "vendre de l'humain" est non seulement inefficace, mais risqué. Il ne s'agit pas de placer des ressources, mais de créer des synergies durables entre des talents exigeants et des entreprises ambitieuses.
              </p>
            </div>
            
            <div className="mt-10 pt-10 border-t border-border/50">
              <div className="flex items-center gap-4 text-foreground">
                <Globe2 className="w-10 h-10 text-primary shrink-0" strokeWidth={1} />
                <div>
                  <h4 className="font-medium text-lg">Cabinet International</h4>
                  <p className="text-sm text-muted-foreground font-light">Des talents sourcés sans frontières, du Maroc vers l'Europe et inversement.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Grid Side (Challenges) */}
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            {/* Challenge 1 */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all shadow-xl shadow-black/20 backdrop-blur-sm">
              <div className="mb-6 border border-border/50 w-12 h-12 rounded-lg flex items-center justify-center bg-background/50">
                <RefreshCcw className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-3 text-foreground">Le coût du Turnover</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Une erreur de casting coûte en moyenne 30 000 à 50 000 euros. Nous sécurisons vos recrutements via une évaluation comportementale (soft-skills) approfondie pour garantir l'engagement à long terme.
              </p>
            </div>

            {/* Challenge 2 */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all shadow-xl shadow-black/20 backdrop-blur-sm md:translate-y-8">
              <div className="mb-6 border border-border/50 w-12 h-12 rounded-lg flex items-center justify-center bg-background/50">
                <FileWarning className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-3 text-foreground">L'inflation des faux CV</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Plus de 60% des CV comportent des exagérations. Notre processus inclut une vérification systématique et rigoureuse des diplômes, des expériences et une prise de références à 360°.
              </p>
            </div>

            {/* Challenge 3 */}
            <div className="bg-card border border-border/50 rounded-xl p-8 hover:border-primary/50 transition-all shadow-xl shadow-black/20 backdrop-blur-sm md:col-span-2 mt-4 md:mt-0">
              <div className="mb-6 border border-border/50 w-12 h-12 rounded-lg flex items-center justify-center bg-background/50">
                <AlertTriangle className="w-5 h-5 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-medium mb-3 text-foreground">Pénurie des profils rares</h3>
              <p className="text-sm text-muted-foreground font-light leading-relaxed">
                Les meilleurs talents (C-Level, profils tech, experts pointus) ne répondent plus aux annonces classiques. Nous utilisons notre réseau international et notre approche directe pour aller les chasser là où ils excellent.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
