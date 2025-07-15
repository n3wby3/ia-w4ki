
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  Database, 
  Globe, 
  RefreshCw,
  Eye,
  Download
} from "lucide-react";

export const IAndinaModule = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const mockData = [
    {
      id: 1,
      title: "Incremento en exportación de quinua",
      description: "Análisis detecta oportunidad en el mercado de superalimentos",
      category: "Agricultura",
      confidence: 92,
      region: "Tacna",
      date: "2024-01-15",
      impact: "Alto"
    },
    {
      id: 2,
      title: "Nueva normativa aduanera",
      description: "Cambios regulatorios que facilitan el comercio textil",
      category: "Regulación",
      confidence: 85,
      region: "Arica",
      date: "2024-01-14",
      impact: "Medio"
    },
    {
      id: 3,
      title: "Demanda de tecnología limpia",
      description: "Creciente interés en soluciones energéticas sostenibles",
      category: "Tecnología",
      confidence: 78,
      region: "Binacional",
      date: "2024-01-13",
      impact: "Alto"
    }
  ];

  const handleAnalyze = () => {
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 3000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            IAndina - Motor de Inteligencia Artificial
          </h2>
          <p className="text-gray-600">
            Análisis automático de datos comerciales y tendencias regionales
          </p>
        </div>
        <Button onClick={handleAnalyze} disabled={isAnalyzing}>
          <RefreshCw className={`w-4 h-4 mr-2 ${isAnalyzing ? 'animate-spin' : ''}`} />
          {isAnalyzing ? 'Analizando...' : 'Ejecutar Análisis'}
        </Button>
      </div>

      {/* Status Cards */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Database className="w-4 h-4 mr-1" />
              Fuentes Activas
            </CardDescription>
            <CardTitle className="text-2xl">12</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-600">
              ✓ Todas las fuentes operativas
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Brain className="w-4 h-4 mr-1" />
              Análisis IA
            </CardDescription>
            <CardTitle className="text-2xl">1,247</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-blue-600">
              +15 en las últimas 24h
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              Precisión
            </CardDescription>
            <CardTitle className="text-2xl">87%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-600">
              +2% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Globe className="w-4 h-4 mr-1" />
              Cobertura
            </CardDescription>
            <CardTitle className="text-2xl">100%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-blue-600">
              Arica-Tacna completo
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Análisis Recientes</CardTitle>
          <CardDescription>
            Oportunidades detectadas por el motor de IA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockData.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <Badge variant="outline">{item.category}</Badge>
                      <Badge 
                        variant={item.impact === 'Alto' ? 'default' : 'secondary'}
                        className={item.impact === 'Alto' ? 'bg-red-100 text-red-800' : ''}
                      >
                        {item.impact}
                      </Badge>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{item.description}</p>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span>📍 {item.region}</span>
                      <span>📅 {item.date}</span>
                      <span>🎯 Confianza: {item.confidence}%</span>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="w-4 h-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Sources */}
      <Card>
        <CardHeader>
          <CardTitle>Fuentes de Datos</CardTitle>
          <CardDescription>
            Monitoreo automático de múltiples fuentes
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <h4 className="font-medium">Datos Comerciales</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>SUNAT Perú</span>
                  <span className="text-green-600">✓ Activo</span>
                </div>
                <div className="flex justify-between">
                  <span>Aduanas Chile</span>
                  <span className="text-green-600">✓ Activo</span>
                </div>
                <div className="flex justify-between">
                  <span>Banco Central Chile</span>
                  <span className="text-green-600">✓ Activo</span>
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <h4 className="font-medium">Medios Locales</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>La Estrella de Arica</span>
                  <span className="text-green-600">✓ Activo</span>
                </div>
                <div className="flex justify-between">
                  <span>Correo Tacna</span>
                  <span className="text-green-600">✓ Activo</span>
                </div>
                <div className="flex justify-between">
                  <span>El Pueblo Tacna</span>
                  <span className="text-yellow-600">⚠ Intermitente</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
