import Link from 'next/link';
import { getSession } from '@/lib/auth';
import { ArrowRight, FileText, Layout, ShieldCheck, Zap, MousePointerClick } from 'lucide-react';

export default async function Home() {
  const session = await getSession();

  return (
    <div className="min-h-screen bg-white selection:bg-indigo-100 selection:text-indigo-900 flex flex-col font-sans">
      {/* Navbar */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-1.5 rounded-lg">
               <FileText className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              FacturX
            </span>
          </div>
          <div className="flex items-center gap-4">
            {session ? (
              <Link 
                href="/dashboard" 
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
              >
                Accéder au Dashboard
              </Link>
            ) : (
              <>
                <Link 
                  href="/login" 
                  className="hidden sm:block text-sm font-medium text-gray-800 hover:text-blue-600 transition-colors"
                >
                  Se connecter
                </Link>
                <Link 
                  href="/register" 
                  className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
                >
                  Commencer
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          {/* Background Blobs */}
          <div className="absolute inset-0 -z-10 pointer-events-none">
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-gradient-to-b from-blue-50 to-white rounded-full blur-3xl opacity-60" />
             <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-50 rounded-full blur-3xl opacity-60" />
          </div>
          
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium mb-8 animate-fade-in-up">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Nouveau : Générateur PDF ultra-fidèle
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 animate-fade-in-up animation-delay-200">
              Créez des factures <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                simplement & librement
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 mb-10 max-w-2xl mx-auto animate-fade-in-up animation-delay-400 leading-relaxed">
              Un éditeur visuel puissant pour des documents professionnels. Glissez, déposez, personnalisez et exportez en PDF parfait. Sans contraintes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-600">
              <Link 
                href={session ? "/dashboard" : "/register"}
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-white bg-blue-600 rounded-full hover:bg-blue-700 transition-all shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                {session ? "Accéder au Dashboard" : "Créer ma première facture"} <ArrowRight size={20} />
              </Link>
              <Link 
                href="#features" 
                className="w-full sm:w-auto px-8 py-4 text-lg font-semibold text-gray-800 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all hover:-translate-y-1 flex items-center justify-center"
              >
                Découvrir les fonctionnalités
              </Link>
            </div>
          </div>
        </section>

        {/* Preview Interface Mockup (Pure CSS) */}
        <section className="pb-20 animate-fade-in-up animation-delay-600">
           <div className="container mx-auto px-4">
             <div className="relative rounded-2xl bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10 max-w-5xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-800 to-gray-900 rounded-xl -z-10"></div>
                <div className="rounded-xl overflow-hidden bg-white border border-gray-200">
                   {/* Fake UI Header */}
                   <div className="h-12 bg-gray-50 border-b flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-400"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                        <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="ml-4 flex-1 bg-white h-8 rounded-md border text-xs flex items-center px-3 text-gray-600 font-mono">
                         facturx.app/builder/new-invoice
                      </div>
                   </div>
                   {/* Fake UI Content */}
                   <div className="grid grid-cols-12 h-[400px] md:h-[600px] bg-gray-100">
                      <div className="col-span-2 bg-white border-r p-4 hidden md:flex flex-col gap-4">
                         <div className="h-20 bg-blue-50 rounded border border-blue-100 flex flex-col items-center justify-center text-blue-600 gap-2">
                            <MousePointerClick size={20} />
                            <span className="text-xs font-medium">Glisser</span>
                         </div>
                         <div className="h-12 bg-gray-50 rounded border border-dashed border-gray-200"></div>
                         <div className="h-12 bg-gray-50 rounded border border-dashed border-gray-200"></div>
                         <div className="h-12 bg-gray-50 rounded border border-dashed border-gray-200"></div>
                      </div>
                      <div className="col-span-12 md:col-span-10 p-4 md:p-8 flex justify-center items-center overflow-hidden">
                         <div className="w-[90%] max-w-[600px] aspect-[1/1.414] bg-white shadow-lg rounded flex flex-col p-8 relative">
                            <div className="absolute top-10 left-10 w-32 h-8 bg-gray-200 rounded animate-pulse"></div>
                            <div className="absolute top-10 right-10 w-16 h-16 bg-blue-100 rounded-full opacity-50"></div>
                            <div className="absolute top-32 left-10 w-full h-px bg-gray-100"></div>
                            <div className="absolute top-40 left-10 space-y-3 w-full pr-20">
                               <div className="w-3/4 h-4 bg-gray-100 rounded"></div>
                               <div className="w-1/2 h-4 bg-gray-100 rounded"></div>
                               <div className="w-2/3 h-4 bg-gray-100 rounded"></div>
                            </div>
                            <div className="mt-auto self-end w-40 h-12 bg-gray-50 rounded border border-gray-100 flex items-center justify-center text-gray-500 font-bold text-xl">
                              TOTAL
                            </div>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Tout ce dont vous avez besoin</h2>
              <p className="text-gray-800">
                Une suite d'outils complète pour gérer vos documents commerciaux avec une précision professionnelle.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  icon: Layout,
                  title: "Éditeur Drag & Drop",
                  desc: "Une interface intuitive pour construire vos modèles. Placez chaque élément exactement où vous le souhaitez."
                },
                {
                  icon: ShieldCheck,
                  title: "Sécurité Maximale",
                  desc: "Vos données sont protégées. Authentification chiffrée et stockage sécurisé de vos modèles et informations."
                },
                {
                  icon: Zap,
                  title: "Génération Instantanée",
                  desc: "Transformez vos modèles en PDF haute définition en une seconde. Le résultat est identique à l'écran."
                }
              ].map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="text-blue-600" size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Steps Section */}
        <section className="py-20 bg-white">
           <div className="container mx-auto px-4 max-w-5xl">
              <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Comment ça marche ?</h2>
              <div className="space-y-12">
                 {[
                   { step: "01", title: "Créez un compte", desc: "Inscrivez-vous gratuitement en quelques secondes." },
                   { step: "02", title: "Dessinez votre modèle", desc: "Utilisez l'éditeur pour créer la structure parfaite de votre facture." },
                   { step: "03", title: "Générez vos PDF", desc: "Remplissez les données et téléchargez votre document prêt à l'envoi." }
                 ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-6 md:items-center">
                       <div className="flex-shrink-0 w-16 h-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold shadow-lg shadow-blue-200">
                          {item.step}
                       </div>
                       <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <p className="text-gray-800">{item.desc}</p>
                       </div>
                       {idx !== 2 && <div className="hidden md:block w-px h-16 bg-gray-200 mx-8 self-stretch"></div>}
                    </div>
                 ))}
              </div>
           </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
             <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
             <div className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-white blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Prêt à professionnaliser vos factures ?</h2>
            <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
              Rejoignez les utilisateurs qui gagnent du temps avec FacturX. Aucune carte bancaire requise pour commencer.
            </p>
            <Link 
              href="/register" 
              className="inline-flex items-center px-8 py-4 text-lg font-bold text-blue-600 bg-white rounded-full hover:bg-gray-50 transition-all hover:-translate-y-1 shadow-xl"
            >
              Commencer gratuitement
            </Link>
          </div>
        </section>
      </main>

      <footer className="bg-gray-50 py-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-700 text-sm">
          <div className="flex items-center justify-center gap-2 mb-4">
             <FileText className="h-6 w-6 text-gray-600" />
             <span className="font-bold text-gray-700 text-lg">FacturX</span>
          </div>
          <p>&copy; {new Date().getFullYear()} FacturX. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  );
}
