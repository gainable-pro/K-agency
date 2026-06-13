import { createClient } from '@/utils/supabase/server';
import { Eye, CheckCircle2 } from 'lucide-react';

export default async function AdminContactsPage() {
  const supabase = createClient();
  const { data: contacts } = await supabase
    .from('contacts')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="max-w-6xl">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-light text-foreground">Leads Entreprises (B2B)</h1>
      </div>

      <div className="bg-card border border-border/50 rounded-xl overflow-hidden shadow-sm">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-border/50 bg-muted/30">
              <th className="p-4 text-sm font-medium text-muted-foreground">Date</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Entreprise</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Contact</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Secteur</th>
              <th className="p-4 text-sm font-medium text-muted-foreground">Statut</th>
              <th className="p-4 text-sm font-medium text-muted-foreground text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts && contacts.length > 0 ? (
              contacts.map((contact) => (
                <tr key={contact.id} className="border-b border-border/50 hover:bg-muted/10 transition-colors">
                  <td className="p-4 text-sm text-muted-foreground">
                    {new Date(contact.created_at).toLocaleDateString('fr-FR')}
                  </td>
                  <td className="p-4 font-medium text-foreground">
                    {contact.company_name}
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    <div>{contact.contact_name} <span className="italic text-xs">({contact.role})</span></div>
                    <div>{contact.email}</div>
                  </td>
                  <td className="p-4 text-sm text-muted-foreground">
                    {contact.sector || '-'}
                  </td>
                  <td className="p-4">
                    {contact.status === 'nouveau' ? (
                      <span className="bg-orange-500/10 text-orange-500 px-2 py-1 rounded text-xs font-medium border border-orange-500/20">Nouveau</span>
                    ) : (
                      <span className="bg-green-500/10 text-green-500 px-2 py-1 rounded text-xs font-medium border border-green-500/20">Traité</span>
                    )}
                  </td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors" title="Voir le message">
                      <Eye className="w-4 h-4" />
                    </button>
                    {contact.status === 'nouveau' && (
                      <button className="p-2 text-muted-foreground hover:text-green-500 transition-colors" title="Marquer comme traité">
                        <CheckCircle2 className="w-4 h-4" />
                      </button>
                    )}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="p-8 text-center text-muted-foreground">
                  Aucun lead reçu pour le moment.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
