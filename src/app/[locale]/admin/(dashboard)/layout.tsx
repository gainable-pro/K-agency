import { createClient } from '@/utils/supabase/server';
import { redirect } from 'next/navigation';
import { LayoutDashboard, Briefcase, FileText, Users, LogOut } from 'lucide-react';
import { Link } from '@/i18n/routing';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) {
    redirect('/fr/admin/login');
  }

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 bg-card border-r border-border/50 flex flex-col">
        <div className="p-6 border-b border-border/50">
          <h2 className="text-xl font-light text-foreground">K-Agency Admin</h2>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link href="/admin" className="flex items-center gap-3 px-4 py-3 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
            <LayoutDashboard className="w-5 h-5" />
            <span className="font-medium text-sm">Tableau de bord</span>
          </Link>
          <Link href="/admin/jobs" className="flex items-center gap-3 px-4 py-3 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
            <Briefcase className="w-5 h-5" />
            <span className="font-medium text-sm">Offres d'emploi</span>
          </Link>
          <Link href="/admin/applications" className="flex items-center gap-3 px-4 py-3 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
            <FileText className="w-5 h-5" />
            <span className="font-medium text-sm">Candidatures</span>
          </Link>
          <Link href="/admin/contacts" className="flex items-center gap-3 px-4 py-3 rounded-md text-foreground/80 hover:text-primary hover:bg-primary/5 transition-colors">
            <Users className="w-5 h-5" />
            <span className="font-medium text-sm">Leads B2B</span>
          </Link>
        </nav>
        <div className="p-4 border-t border-border/50">
          <button className="flex w-full items-center gap-3 px-4 py-3 rounded-md text-destructive/80 hover:text-destructive hover:bg-destructive/10 transition-colors">
            <LogOut className="w-5 h-5" />
            <span className="font-medium text-sm">Déconnexion</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-background p-8">
        {children}
      </main>
    </div>
  );
}
