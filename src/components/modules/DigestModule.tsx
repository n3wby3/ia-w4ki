
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  FileText, 
  Mic, 
  Video, 
  DollarSign, 
  Play,
  Download,
  Eye,
  Calendar,
  Users,
  TrendingUp
} from "lucide-react";

export const DigestModule = () => {
  const [selectedContent, setSelectedContent] = useState<string>('all');

  const mockContent = [
    {
      id: 1,
      title: "Digest Semanal #42",
      type: "Boletín",
      status: "Publicado",
      date: "2024-01-15",
      views: 1247,
      engagement: "8.5%",
      topics: ["Comercio", "Tecnología", "Agricultura"]
    },
    {
      id: 2,
      title: "Podcast: Oportunidades Fronterizas",
      type: "Audio",
      status: "En edición",
      date: "2024-01-14",
      duration: "25 min",
      script: "Generado por IA",
      topics: ["Emprendimiento", "Innovación"]
    },
    {
      id: 3,
      title: "Video: Tendencias Q1 2024",
      type: "Video",
      status: "Storyboard",
      date: "2024-01-13",
      duration: "5 min",
      format: "Infográfico animado",
      topics: ["Análisis", "Tendencias"]
    }
  ];

  const mockSponsors = [
    {
      id: 1,
      name: "TechStart Arica",
      type: "Startup",
      investment: "2,500 USD",
      content: "3 menciones"
    },
    {
      id: 2,
      name: "Cámara de Comercio Tacna",
      type: "Institución",
      investment: "5,000 USD",
      content: "Banner + artículo"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            MRA Digest
          </h2>
          <p className="text-gray-600">
            Generador automático de contenido y sistema de monetización
          </p>
        </div>
        <Button>
          <FileText className="w-4 h-4 mr-2" />
          Crear Contenido
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              Contenido Total
            </CardDescription>
            <CardTitle className="text-2xl">142</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-blue-600">
              +7 esta semana
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Audiencia
            </CardDescription>
            <CardTitle className="text-2xl">8.4K</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-600">
              +12% crecimiento mensual
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              Engagement
            </CardDescription>
            <CardTitle className="text-2xl">9.2%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-600">
              +1.5% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <DollarSign className="w-4 h-4 mr-1" />
              Ingresos
            </CardDescription>
            <CardTitle className="text-2xl">$7.5K</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-600">
              +25% este trimestre
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Types */}
      <div className="flex space-x-2 mb-6">
        <Button 
          variant={selectedContent === 'all' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedContent('all')}
        >
          Todo
        </Button>
        <Button 
          variant={selectedContent === 'newsletter' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedContent('newsletter')}
        >
          <FileText className="w-4 h-4 mr-1" />
          Boletines
        </Button>
        <Button 
          variant={selectedContent === 'podcast' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedContent('podcast')}
        >
          <Mic className="w-4 h-4 mr-1" />
          Podcasts
        </Button>
        <Button 
          variant={selectedContent === 'video' ? 'default' : 'outline'}
          size="sm"
          onClick={() => setSelectedContent('video')}
        >
          <Video className="w-4 h-4 mr-1" />
          Videos
        </Button>
      </div>

      {/* Content List */}
      <Card>
        <CardHeader>
          <CardTitle>Contenido Reciente</CardTitle>
          <CardDescription>
            Contenido generado automáticamente por IA
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockContent.map((item) => (
              <div key={item.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{item.title}</h3>
                      <Badge variant="outline">{item.type}</Badge>
                      <Badge variant={
                        item.status === 'Publicado' ? 'default' : 
                        item.status === 'En edición' ? 'secondary' : 'outline'
                      }>
                        {item.status}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-1 mb-3">
                      {item.topics.map((topic, index) => (
                        <span 
                          key={index}
                          className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                        >
                          {topic}
                        </span>
                      ))}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600">
                      <div>
                        <span className="flex items-center">
                          <Calendar className="w-3 h-3 mr-1" />
                          {item.date}
                        </span>
                      </div>
                      {'views' in item && (
                        <div>
                          <span className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            {item.views} vistas
                          </span>
                        </div>
                      )}
                      {'duration' in item && (
                        <div>
                          <span className="flex items-center">
                            <Play className="w-3 h-3 mr-1" />
                            {item.duration}
                          </span>
                        </div>
                      )}
                      {'engagement' in item && (
                        <div>
                          <span className="flex items-center">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {item.engagement} engagement
                          </span>
                        </div>
                      )}
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

      {/* Monetization */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Patrocinadores Activos</CardTitle>
            <CardDescription>
              Empresas e instituciones que apoyan el contenido
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockSponsors.map((sponsor) => (
                <div key={sponsor.id} className="flex items-center justify-between p-3 border rounded-lg">
                  <div>
                    <h4 className="font-medium">{sponsor.name}</h4>
                    <p className="text-sm text-gray-600">{sponsor.type}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-medium text-green-600">{sponsor.investment}</div>
                    <div className="text-sm text-gray-500">{sponsor.content}</div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full mt-4">
              <DollarSign className="w-4 h-4 mr-2" />
              Gestionar Patrocinios
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Rendimiento del Contenido</CardTitle>
            <CardDescription>
              Métricas de engagement y alcance
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Boletines</span>
                  <span className="text-blue-600">2,340 lectores</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Podcasts</span>
                  <span className="text-green-600">1,890 oyentes</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: '63%' }}></div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>Videos</span>
                  <span className="text-purple-600">4,120 visualizaciones</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
