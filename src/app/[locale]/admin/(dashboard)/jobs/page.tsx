import { createClient } from '@/utils/supabase/server';
import { Plus, Pencil, Trash2 } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default async function AdminJobsPage() {
  const supabase = createClient();
  const { data: jobs } = await supabase.from('jobs').select('*').order('created_at', { ascending: false });

  return (
    <div className="max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-light text-foreground">Gestion des Offres d'emploi</h1>
        <button className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-md hover:bg-primary/90 transition-colors text-sm font-medium">
          <Plus className="w-4 h-4" />
          Nouvelle Offre
        </button>
      </div>

      <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="p-4 text-sm font-medium text-muted-foreground">Titre du poste</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Entreprise</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Localisation</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Type</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Statut</th>
              <th className="p-4 text-sm font-medium text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobs && jobs.length > 0 ? (
              jobs.map((job) => (
                <tr key={job.id} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <td className="p-4 font-medium text-foreground">{job.title}</td>
                  <td className="p-4 text-muted-foreground text-sm">{job.company}</td>
                  <td className="p-4 text-muted-foreground text-sm">{job.location}</td>
                  <td className="p-4 text-muted-foreground text-sm">
                    <span className="bg-secondary px-2 py-1 rounded text-xs">{job.type}</span>
                  </td>
                  <td className="p-4">
                    {job.is_active ? (
                      <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-medium border border-green-500/20">Active</span>
                    ) : (
                      <span className="bg-destructive/10 text-destructive px-2 py-1 rounded text-xs font-medium border border-destructive/20">Fermée</span>
                    )}
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-muted-foreground hover:text-destructive transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-8 text-center text-muted-foreground">
                  Aucune offre d'emploi trouvée.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
