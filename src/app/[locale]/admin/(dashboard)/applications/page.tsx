import { createClient } from '@/utils/supabase/server';
import { Eye, Download } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default async function AdminApplicationsPage() {
  const supabase = createClient();
  const { data: applications } = await supabase
    .from('applications')
    .select('*, jobs(title)')
    .order('created_at', { ascending: false });

  return (
    <div className="max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-light text-foreground">Candidatures & CVs</h1>
      </div>

      <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="p-4 text-sm font-medium text-muted-foreground">Date</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Candidat</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Offre / Spontanée</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Contact</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Statut</th>
              <th className="p-4 text-sm font-medium text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applications && applications.length > 0 ? (
              applications.map((app) => (
                <tr key={app.id} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <td className="p-4 text-sm text-muted-foreground">
                    {new Date(app.created_at).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="p-4 font-medium text-foreground">
                    {app.first_name} {app.last_name}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {app.jobs?.title || <span className="italic">Candidature Spontanée</span>}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    <div>{app.email}</div>
                    <div>{app.phone}</div>
                  </td>
                  <td className="p-4">
                    <span className="bg-secondary px-2 py-1 rounded text-xs font-medium border border-border/50 capitalize">
                      {app.status.replace('_', ' ')}
                    </span>
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors" title="Voir les détails">
                      <Eye className="w-4 h-4" />
                    </button>
                    {app.cv_url && (
                      <a href={app.cv_url} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-primary transition-colors" title="Télécharger le CV">
                        <Download className="w-4 h-4" />
                      </a>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-8 text-center text-muted-foreground">
                  Aucune candidature reçue pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
