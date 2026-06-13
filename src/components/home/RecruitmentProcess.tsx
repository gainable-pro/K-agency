import { useTranslations } from 'next-intl';

const steps = [
  {
    number: '01',
    title: 'Analyse & Stratégie',
    description: 'Immersion totale dans votre culture d\'entreprise. Nous définissons ensemble le profil idéal, les compétences clés et la stratégie de sourcing ciblée (Maroc, Europe, Afrique).'
  },
  {
    number: '02',
    title: 'Chasse & Sourcing',
    description: 'Approche directe des meilleurs talents. Nous activons notre réseau exclusif et nos outils de chasse de têtes pour identifier les profils rares et passifs.'
  },
  {
    number: '03',
    title: 'Évaluation Premium',
    description: 'Entretiens approfondis, tests de personnalité et contrôles de références. Nous ne vous présentons que la shortlist des candidats parfaitement alignés.'
  },
  {
    number: '04',
    title: 'Intégration & Suivi',
    description: 'Accompagnement dans la négociation et suivi rigoureux pendant toute la période d\'essai pour garantir un recrutement pérenne et réussi.'
  }
];

export default function RecruitmentProcess() {
  const t = useTranslations('Index'); // If needed later

  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background elegant lines */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="absolute left-[20%] top-0 h-full" width="1" height="100%" viewBox="0 0 1 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
        <svg className="absolute left-[50%] top-0 h-full" width="1" height="100%" viewBox="0 0 1 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
        <svg className="absolute left-[80%] top-0 h-full" width="1" height="100%" viewBox="0 0 1 100" preserveAspectRatio="none">
          <line x1="0" y1="0" x2="0" y2="100" stroke="currentColor" strokeWidth="1" strokeDasharray="4 8" />
        </svg>
      </div>

      <div className="container relative z-10 px-6 mx-auto max-w-7xl">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <span className="text-primary font-light uppercase tracking-[0.2em] text-sm mb-4 block">Notre Expertise</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight text-foreground">
              L'art de dénicher <br />
              <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">les profils rares.</span>
            </h2>
          </div>
          <p className="text-muted-foreground font-light max-w-md text-lg">
            Un processus sur-mesure, rigoureux et confidentiel, garantissant l'adéquation parfaite entre vos ambitions et le talent identifié.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {steps.map((step, index) => (
            <div key={index} className="group relative bg-card/40 backdrop-blur-md border border-border/50 rounded-xl p-8 shadow-xl shadow-black/10 hover:shadow-primary/5 hover:border-primary/30 transition-all duration-500">
              <div className="mb-6">
                <span className="text-5xl font-light text-primary/20 group-hover:text-primary transition-colors duration-500">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-medium text-foreground mb-4">{step.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {step.description}
              </p>
              
              {/* Connector line for large screens */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-[60%] w-full h-px bg-border group-hover:bg-primary/50 transition-colors duration-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
