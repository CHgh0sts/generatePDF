import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
import { FileText, LogOut, User, Home, FileEdit, Zap } from 'lucide-react';

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect('/login');

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <nav className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center gap-6">
               <Link href="/dashboard" className="flex items-center gap-2">
                  <div className="bg-blue-600 p-1.5 rounded-lg">
                    <FileText className="h-5 w-5 text-white" />
                  </div>
                  <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
                    FacturX
                  </span>
               </Link>
               
               {/* Navigation rapide */}
               <div className="hidden md:flex items-center gap-2">
                 <Link 
                   href="/dashboard" 
                   className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                 >
                   <Home size={18} />
                   <span>Accueil</span>
                 </Link>
                 <Link 
                   href="/dashboard/generateroute" 
                   className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                 >
                   <Zap size={18} />
                   <span>Routes API</span>
                 </Link>
               </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-800 font-medium">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 mr-2">
                   <User size={16} />
                </div>
                {session.user.name}
              </div>
               <form action="/api/auth/logout" method="POST">
                <button 
                  type="submit" 
                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-full transition-colors"
                  title="Se déconnecter"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
      <main className="flex-1 max-w-7xl w-full mx-auto py-8 sm:px-6 lg:px-8">
        {children}
      </main>
    </div>
  );
}
