
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, TrendingUp, FileText, MapPin, Users, Lightbulb } from "lucide-react";
import { AuthModal } from "@/components/auth/AuthModal";
import { useAuth } from "@/hooks/useAuth";
import { Dashboard } from "@/components/Dashboard";

const Index = () => {
  const [showAuth, setShowAuth] = useState(false);
  const { user, isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
            <h1 className="text-2xl font-bold text-gray-900">WAKI</h1>
          </div>
          <Button onClick={() => setShowAuth(true)}>
            Iniciar Sesión
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Plataforma de Inteligencia Artificial para la 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
              {" "}Macro Región Andina
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Detectamos oportunidades de negocio transfronterizas entre Chile y Perú 
            usando IA avanzada para impulsar el desarrollo económico regional.
          </p>
          <div className="flex items-center justify-center space-x-2 text-gray-500 mb-8">
            <MapPin className="w-5 h-5" />
            <span>Enfoque: Arica - Tacna</span>
          </div>
          <Button 
            size="lg" 
            className="text-lg px-8 py-3"
            onClick={() => setShowAuth(true)}
          >
            Comenzar Ahora
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Módulos de Inteligencia Artificial
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Brain className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>IAndina</CardTitle>
              <CardDescription>
                Motor principal de IA que analiza datos comerciales y tendencias regionales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Scraping de datos comerciales Chile-Perú</li>
                <li>• Análisis de noticias locales con IA</li>
                <li>• Dashboard de métricas regionales</li>
                <li>• Estrategias de innovación (ERIs)</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>MRA Project Maker</CardTitle>
              <CardDescription>
                Generador inteligente de oportunidades y propuestas comerciales
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Detección automática de oportunidades</li>
                <li>• Templates de propuestas comerciales</li>
                <li>• Matching emprendedores-oportunidades</li>
                <li>• Validación de ideas de negocio</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>MRA Digest</CardTitle>
              <CardDescription>
                Creador de contenido automatizado para medios y comunicación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Boletines informativos automáticos</li>
                <li>• Scripts para podcasts</li>
                <li>• Storyboards para videos</li>
                <li>• Sistema de patrocinios</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
              <div className="text-gray-600">Países Conectados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Monitoreo IA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">3</div>
              <div className="text-gray-600">Módulos de IA</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">∞</div>
              <div className="text-gray-600">Oportunidades</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¿Listo para descubrir oportunidades?
          </h2>
          <p className="text-gray-600 mb-8">
            Únete a la revolución de la inteligencia artificial para el desarrollo 
            económico transfronterizo.
          </p>
          <Button 
            size="lg"
            onClick={() => setShowAuth(true)}
          >
            Crear Cuenta Gratis
          </Button>
        </div>
      </section>

      <AuthModal open={showAuth} onOpenChange={setShowAuth} />
    </div>
  );
};

export default Index;
