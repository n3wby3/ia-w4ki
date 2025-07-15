
import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  TrendingUp, 
  AlertTriangle, 
  RefreshCw,
  Database,
  Activity,
  Zap
} from "lucide-react";
import { IAndinaStats } from "./iandina/IAndinaStats";
import { OpportunityCard } from "./iandina/OpportunityCard";
import { AIProcessor } from "./iandina/AIProcessor";
import { DataSources } from "./iandina/DataSources";
import { DataScrapingService } from "../../services/DataScrapingService";

type ActiveTab = 'dashboard' | 'analysis' | 'sources' | 'processor';

export const IAndinaModule = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('dashboard');
  const [isUpdating, setIsUpdating] = useState(false);
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date());
  const [realTimeData, setRealTimeData] = useState({
    newsCount: 0,
    opportunitiesDetected: 0,
    sentimentScore: 0,
    alerts: 0
  });

  useEffect(() => {
    // Simular actualización en tiempo real
    const interval = setInterval(async () => {
      const news = await DataScrapingService.scrapeLocalNews();
      const trade = await DataScrapingService.scrapeTradeData();
      const analysis = await DataScrapingService.detectOpportunities(news, trade);
      
      setRealTimeData({
        newsCount: news.length,
        opportunitiesDetected: analysis.opportunities.length,
        sentimentScore: Math.round(news.reduce((acc, n) => acc + n.relevanceScore, 0) / news.length * 100),
        alerts: analysis.alerts.length
      });
      setLastUpdate(new Date());
    }, 30000); // Actualizar cada 30 segundos

    return () => clearInterval(interval);
  }, []);

  const handleManualUpdate = async () => {
    setIsUpdating(true);
    try {
      // Simular proceso de actualización manual
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      const news = await DataScrapingService.scrapeLocalNews();
      const trade = await DataScrapingService.scrapeTradeData();
      const analysis = await DataScrapingService.detectOpportunities(news, trade);
      
      setRealTimeData({
        newsCount: news.length + Math.floor(Math.random() * 5),
        opportunitiesDetected: analysis.opportunities.length + Math.floor(Math.random() * 3),
        sentimentScore: Math.round(Math.random() * 30 + 70), // 70-100
        alerts: analysis.alerts.length + Math.floor(Math.random() * 2)
      });
      setLastUpdate(new Date());
    } finally {
      setIsUpdating(false);
    }
  };

  const mockOpportunities = [
    {
      id: 1,
      title: "Exportación Quinoa Premium",
      confidence: 0.92,
      sector: "Agricultura",
      investment: 85000,
      roi: "220%",
      region: "Tacna",
      aiSource: "Análisis de 15 fuentes + tendencias comerciales",
      riskLevel: "Medio"
    },
    {
      id: 2,
      title: "Hub Logístico Inteligente",
      confidence: 0.87,
      sector: "Logística",
      investment: 150000,
      roi: "185%",
      region: "Arica",
      aiSource: "Scraping gubernamental + análisis de flujos",
      riskLevel: "Alto"
    },
    {
      id: 3,
      title: "Plataforma Agtech",
      confidence: 0.89,
      sector: "Tecnología",
      investment: 65000,
      roi: "280%",
      region: "Binacional",
      aiSource: "Procesamiento NLP + detección de patrones",
      riskLevel: "Medio"
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return (
          <div className="space-y-6">
            <IAndinaStats />
            
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Estado del Sistema
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Fuentes de datos activas</span>
                      <Badge variant="default">24/7</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Procesamiento IA</span>
                      <Badge variant="default">Activo</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Última actualización</span>
                      <span className="text-xs text-gray-500">
                        {lastUpdate.toLocaleTimeString()}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Noticias procesadas hoy</span>
                      <span className="font-medium">{realTimeData.newsCount}</span>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4"
                    onClick={handleManualUpdate}
                    disabled={isUpdating}
                  >
                    {isUpdating ? (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                        Actualizando...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Actualizar Datos
                      </>
                    )}
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Métricas en Tiempo Real
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">
                        {realTimeData.opportunitiesDetected}
                      </div>
                      <div className="text-xs text-gray-500">Oportunidades</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">
                        {realTimeData.sentimentScore}%
                      </div>
                      <div className="text-xs text-gray-500">Sentiment Positivo</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">
                        {realTimeData.newsCount}
                      </div>
                      <div className="text-xs text-gray-500">Fuentes Activas</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">
                        {realTimeData.alerts}
                      </div>
                      <div className="text-xs text-gray-500">Alertas</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Oportunidades Detectadas por IA</CardTitle>
                <CardDescription>
                  Análisis en tiempo real de fuentes múltiples con validación cruzada
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mockOpportunities.map((opportunity) => (
                    <OpportunityCard key={opportunity.id} opportunity={opportunity} />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        );
      case 'analysis':
        return <AIProcessor />;
      case 'sources':
        return <DataSources />;
      case 'processor':
        return <AIProcessor />;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            IAndina - Motor de IA
          </h2>
          <p className="text-gray-600">
            Sistema de inteligencia artificial para análisis regional Arica-Tacna
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Badge variant="default" className="bg-green-100 text-green-800">
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
            Sistema Activo
          </Badge>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2">
        <Button 
          variant={activeTab === 'dashboard' ? 'default' : 'outline'}
          onClick={() => setActiveTab('dashboard')}
        >
          <TrendingUp className="w-4 h-4 mr-2" />
          Dashboard
        </Button>
        <Button 
          variant={activeTab === 'analysis' ? 'default' : 'outline'}
          onClick={() => setActiveTab('analysis')}
        >
          <Brain className="w-4 h-4 mr-2" />
          Análisis IA
        </Button>
        <Button 
          variant={activeTab === 'sources' ? 'default' : 'outline'}
          onClick={() => setActiveTab('sources')}
        >
          <Database className="w-4 h-4 mr-2" />
          Fuentes de Datos
        </Button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};
