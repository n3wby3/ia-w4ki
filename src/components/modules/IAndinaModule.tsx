
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { IAndinaStats } from "./iandina/IAndinaStats";
import { OpportunityCard, Opportunity } from "./iandina/OpportunityCard";
import { AIProcessor } from "./iandina/AIProcessor";
import { DataSources } from "./iandina/DataSources";
import { useToast } from "@/hooks/use-toast";

export const IAndinaModule = () => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { toast } = useToast();

  // Stats data
  const stats = {
    activeSources: 12,
    aiAnalyses: 1247,
    accuracy: 87,
    coverage: 100
  };

  // Enhanced mock opportunities with AI analysis data
  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: "Incremento en exportación de quinua orgánica",
      description: "Análisis de IA detecta creciente demanda en mercados europeos para quinua certificada de la región andina",
      category: "Agricultura",
      confidence: 92,
      region: "Tacna",
      date: "2024-01-15",
      impact: "Alto",
      sentiment: "positive",
      keywords: ["quinua", "orgánico", "exportación", "europa", "certificación"],
      source: "SUNAT Analytics"
    },
    {
      id: 2,
      title: "Nueva normativa aduanera facilita comercio textil",
      description: "Cambios regulatorios identificados por IA reducen barreras para intercambio comercial transfronterizo",
      category: "Regulación",
      confidence: 85,
      region: "Arica",
      date: "2024-01-14",
      impact: "Medio",
      sentiment: "positive",
      keywords: ["aduanas", "textil", "regulación", "comercio", "frontera"],
      source: "Diario Oficial"
    },
    {
      id: 3,
      title: "Creciente demanda de tecnología limpia",
      description: "Procesamiento de noticias revela interés regional en soluciones energéticas sostenibles",
      category: "Tecnología",
      confidence: 78,
      region: "Binacional",
      date: "2024-01-13",
      impact: "Alto",
      sentiment: "positive",
      keywords: ["tecnología", "energía", "sostenible", "innovación", "limpia"],
      source: "La Estrella de Arica"
    }
  ];

  const handleAnalyze = async () => {
    setIsAnalyzing(true);
    
    // Simulate AI analysis process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setIsAnalyzing(false);
    toast({
      title: "Análisis completado",
      description: "Se han procesado 156 nuevas fuentes de datos.",
    });
  };

  const handleRefreshSources = async () => {
    setIsRefreshing(true);
    
    // Simulate data refresh
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsRefreshing(false);
    toast({
      title: "Fuentes actualizadas",
      description: "Todas las fuentes de datos han sido sincronizadas.",
    });
  };

  const handleViewOpportunity = (id: number) => {
    const opportunity = opportunities.find(o => o.id === id);
    toast({
      title: "Oportunidad seleccionada",
      description: `Visualizando: ${opportunity?.title}`,
    });
  };

  const handleDownloadOpportunity = (id: number) => {
    const opportunity = opportunities.find(o => o.id === id);
    toast({
      title: "Descarga iniciada",
      description: `Generando reporte para: ${opportunity?.title}`,
    });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
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

      {/* Stats Cards */}
      <IAndinaStats stats={stats} />

      {/* AI Processor */}
      <AIProcessor />

      {/* Recent Analysis */}
      <Card>
        <CardHeader>
          <CardTitle>Oportunidades Detectadas por IA</CardTitle>
          <CardDescription>
            Análisis automático de fuentes de datos regionales
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {opportunities.map((opportunity) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                onView={handleViewOpportunity}
                onDownload={handleDownloadOpportunity}
              />
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Data Sources */}
      <DataSources 
        onRefresh={handleRefreshSources}
        isRefreshing={isRefreshing}
      />
    </div>
  );
};
