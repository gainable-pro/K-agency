import { createClient } from '@/utils/supabase/server';
import { Briefcase, FileText, Users, ArrowUpRight } from 'lucide-react';

export default async function AdminDashboardPage() {
  const supabase = createClient();

  // Fetch counts
  const [{ count: jobsCount }, { count: appsCount }, { count: leadsCount }] = await Promise.all([
    supabase.from('jobs').select('*', { count: 'exact', head: true }),
    supabase.from('applications').select('*', { count: 'exact', head: true }),
    supabase.from('contacts').select('*', { count: 'exact', head: true }),
  ]);

  return (
    <div className="max-w-5xl">
      <h1 className="text-3xl font-light text-foreground mb-8">Vue d'ensemble</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-1 rounded">Actives</span>
          </div>
          <h3 className="text-muted-foreground text-sm font-medium">Offres d'emploi</h3>
          <p className="text-3xl font-light text-foreground mt-1">{jobsCount || 0}</p>
        </div>

        <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
          </div>
          <h3 className="text-muted-foreground text-sm font-medium">Candidatures reçues</h3>
          <p className="text-3xl font-light text-foreground mt-1">{appsCount || 0}</p>
        </div>

        <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-start mb-4">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <span className="text-xs font-medium text-orange-500 bg-orange-500/10 px-2 py-1 rounded">À traiter</span>
          </div>
          <h3 className="text-muted-foreground text-sm font-medium">Leads B2B (Entreprises)</h3>
          <p className="text-3xl font-light text-foreground mt-1">{leadsCount || 0}</p>
        </div>
      </div>

      <h2 className="text-xl font-light text-foreground mb-6">Actions rapides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <a href="/fr/admin/jobs" className="group bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:border-primary/50 transition-colors flex justify-between items-center">
          <div>
            <h4 className="font-medium text-foreground">Publier une nouvelle offre</h4>
            <p className="text-sm text-muted-foreground mt-1">Créer une fiche de poste et la mettre en ligne.</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
        <a href="/fr/admin/applications" className="group bg-card border border-border/50 rounded-xl p-6 shadow-sm hover:border-primary/50 transition-colors flex justify-between items-center">
          <div>
            <h4 className="font-medium text-foreground">Traiter les candidatures</h4>
            <p className="text-sm text-muted-foreground mt-1">Consulter les derniers CV reçus.</p>
          </div>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </a>
      </div>
    </div>
  );
}
