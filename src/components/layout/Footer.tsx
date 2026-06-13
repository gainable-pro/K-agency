import { Link } from '@/i18n/routing';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border/20 pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center space-x-2 mb-6">
              <span className="font-light text-2xl tracking-[0.15em] text-foreground uppercase">
                K<span className="text-primary">-</span>Agency
              </span>
            </Link>
            <p className="text-muted-foreground font-light text-sm leading-relaxed mb-6">
              Cabinet de recrutement premium et d'executive search au Maroc et à l'international. L'excellence humaine au service de la performance.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-medium uppercase tracking-widest text-sm mb-6">Services</h4>
            <ul className="space-y-4 text-sm font-light text-muted-foreground">
              <li><Link href="/recrutement" className="hover:text-primary transition-colors">Recrutement C-Level</Link></li>
              <li><Link href="/chasse-de-tetes" className="hover:text-primary transition-colors">Chasse de têtes</Link></li>
              <li><Link href="/implantations" className="hover:text-primary transition-colors">Nos zones d'intervention</Link></li>
              <li><Link href="/expertises" className="hover:text-primary transition-colors">Nos expertises sectorielles</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium uppercase tracking-widest text-sm mb-6">Candidats & Médias</h4>
            <ul className="space-y-4 text-sm font-light text-muted-foreground">
              <li><Link href="/offres-emploi" className="hover:text-primary transition-colors">Offres d'emploi</Link></li>
              <li><Link href="/deposer-cv" className="hover:text-primary transition-colors">Candidature spontanée</Link></li>
              <li><Link href="/chasse-de-tetes" className="hover:text-primary transition-colors">Représentation de Dirigeants</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog & Ressources RH</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium uppercase tracking-widest text-sm mb-6">Contact</h4>
            <ul className="space-y-4 text-sm font-light text-muted-foreground">
              <li>Casablanca Finance City, Tour 1</li>
              <li>contact@k-agency.com</li>
              <li>+212 5 22 00 00 00</li>
              <li className="pt-4"><Link href="/contact" className="text-primary hover:underline">Nous contacter</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-light text-muted-foreground">
          <p>© {currentYear} K-Agency. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-primary transition-colors">Mentions légales</Link>
            <Link href="#" className="hover:text-primary transition-colors">Politique de confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
