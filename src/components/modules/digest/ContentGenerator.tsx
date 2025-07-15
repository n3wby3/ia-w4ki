
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  FileText,
  Mic,
  Video,
  Brain,
  Play,
  Download,
  Sparkles
} from "lucide-react";

interface ContentType {
  id: string;
  name: string;
  description: string;
  icon: any;
  estimatedTime: string;
}

export const ContentGenerator = () => {
  const [topic, setTopic] = useState("");
  const [selectedType, setSelectedType] = useState<string>("newsletter");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<any>(null);

  const contentTypes: ContentType[] = [
    {
      id: "newsletter",
      name: "Boletín Informativo",
      description: "Newsletter semanal con análisis regional",
      icon: FileText,
      estimatedTime: "5 min"
    },
    {
      id: "podcast",
      name: "Script de Podcast",
      description: "Guión completo para episodio de podcast",
      icon: Mic,
      estimatedTime: "10 min"
    },
    {
      id: "video",
      name: "Storyboard de Video",
      description: "Guión visual para contenido audiovisual",
      icon: Video,
      estimatedTime: "15 min"
    }
  ];

  const handleGenerateContent = async () => {
    if (!topic.trim()) return;
    
    setIsGenerating(true);
    
    // Simular procesamiento con IA
    await new Promise(resolve => setTimeout(resolve, 4000));
    
    let mockContent;
    
    switch (selectedType) {
      case "newsletter":
        mockContent = {
          type: "newsletter",
          title: `Digest Semanal MRA: ${topic}`,
          content: {
            headline: `Últimas Tendencias en ${topic} - Región Arica-Tacna`,
            summary: `Esta semana analizamos las principales oportunidades en ${topic} detectadas por nuestro sistema de IA en la Macro Región Andina.`,
            sections: [
              {
                title: "🔍 Análisis de Mercado",
                content: `Nuestros algoritmos han identificado un crecimiento del 15% en el sector ${topic} durante las últimas 4 semanas en la región fronteriza.`
              },
              {
                title: "💡 Oportunidades Detectadas",
                content: `Se han registrado 8 nuevas oportunidades comerciales relacionadas con ${topic}, con un potencial de inversión combinado de $250,000 USD.`
              },
              {
                title: "📊 Métricas Regionales",
                content: `El índice de actividad comercial en ${topic} muestra tendencia positiva con proyección de crecimiento sostenido para Q2 2024.`
              }
            ],
            cta: "Descubre más oportunidades en tu dashboard personalizado"
          }
        };
        break;
        
      case "podcast":
        mockContent = {
          type: "podcast",
          title: `Podcast MRA: Explorando ${topic}`,
          content: {
            intro: `[MÚSICA INTRO] Bienvenidos a otro episodio de MRA Podcast, donde exploramos las oportunidades de la Macro Región Andina. Hoy hablaremos sobre ${topic}.`,
            segments: [
              {
                title: "Introducción al Tema",
                duration: "2 min",
                script: `Hoy vamos a profundizar en ${topic} y cómo esta tendencia está impactando el comercio fronterizo entre Arica y Tacna.`
              },
              {
                title: "Análisis IA",
                duration: "8 min",
                script: `Nuestro sistema de inteligencia artificial ha procesado más de 500 fuentes de datos esta semana, revelando patrones interesantes en ${topic}.`
              },
              {
                title: "Casos de Éxito",
                duration: "5 min",
                script: `Conversamos con emprendedores locales que están aprovechando las oportunidades en ${topic} para expandir sus negocios.`
              },
              {
                title: "Cierre",
                duration: "1 min",
                script: `Gracias por acompañarnos. Recuerda suscribirte y visitar nuestra plataforma para más oportunidades personalizadas.`
              }
            ]
          }
        };
        break;
        
      case "video":
        mockContent = {
          type: "video",
          title: `Video Infográfico: ${topic} en MRA`,
          content: {
            duration: "3-5 minutos",
            style: "Infográfico animado",
            scenes: [
              {
                scene: 1,
                duration: "30s",
                visual: "Mapa animado Arica-Tacna",
                voiceover: `La Macro Región Andina está experimentando un boom en ${topic}`,
                elements: ["Gráficos de crecimiento", "Iconos animados", "Estadísticas clave"]
              },
              {
                scene: 2,
                duration: "90s",
                visual: "Infografías de datos",
                voiceover: `Nuestro análisis IA revela oportunidades únicas en ${topic}`,
                elements: ["Charts animados", "Cifras destacadas", "Comparativas regionales"]
              },
              {
                scene: 3,
                duration: "90s",
                visual: "Casos de éxito",
                voiceover: `Conoce empresarios que ya están capitalizando estas oportunidades`,
                elements: ["Testimonios visuales", "Antes/después", "Resultados"]
              },
              {
                scene: 4,
                duration: "30s",
                visual: "Call to action",
                voiceover: `Únete a WAKI y descubre tu próxima gran oportunidad`,
                elements: ["Logo WAKI", "Información de contacto", "QR Code"]
              }
            ]
          }
        };
        break;
    }
    
    setGeneratedContent(mockContent);
    setIsGenerating(false);
  };

  const getContentTypeIcon = (typeId: string) => {
    const type = contentTypes.find(t => t.id === typeId);
    return type ? type.icon : FileText;
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Sparkles className="w-5 h-5 mr-2" />
            Generador de Contenido IA
          </CardTitle>
          <CardDescription>
            Crea contenido profesional automáticamente con inteligencia artificial
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="topic">Tema o palabra clave</Label>
            <Input
              id="topic"
              placeholder="Ej: agricultura sustentable, comercio digital, turismo gastronómico..."
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div>
            <Label>Tipo de Contenido</Label>
            <div className="grid md:grid-cols-3 gap-3 mt-2">
              {contentTypes.map((type) => {
                const Icon = type.icon;
                return (
                  <div
                    key={type.id}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedType === type.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                    }`}
                    onClick={() => setSelectedType(type.id)}
                  >
                    <div className="flex items-center mb-2">
                      <Icon className="w-5 h-5 mr-2 text-blue-600" />
                      <h4 className="font-medium">{type.name}</h4>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{type.description}</p>
                    <Badge variant="outline" className="text-xs">
                      {type.estimatedTime}
                    </Badge>
                  </div>
                );
              })}
            </div>
          </div>

          <Button 
            onClick={handleGenerateContent} 
            disabled={!topic.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Brain className="w-4 h-4 mr-2 animate-spin" />
                Generando Contenido...
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 mr-2" />
                Generar Contenido
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedContent && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                {(() => {
                  const Icon = getContentTypeIcon(generatedContent.type);
                  return <Icon className="w-5 h-5 mr-2" />;
                })()}
                {generatedContent.title}
              </div>
              <div className="flex space-x-2">
                <Button variant="outline" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Preview
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            {generatedContent.type === "newsletter" && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{generatedContent.content.headline}</h3>
                  <p className="text-gray-600 mb-4">{generatedContent.content.summary}</p>
                </div>
                
                {generatedContent.content.sections.map((section: any, index: number) => (
                  <div key={index} className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-medium mb-1">{section.title}</h4>
                    <p className="text-gray-700 text-sm">{section.content}</p>
                  </div>
                ))}
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium text-blue-800">{generatedContent.content.cta}</p>
                </div>
              </div>
            )}

            {generatedContent.type === "podcast" && (
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-mono text-sm">{generatedContent.content.intro}</p>
                </div>
                
                {generatedContent.content.segments.map((segment: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{segment.title}</h4>
                      <Badge variant="outline">{segment.duration}</Badge>
                    </div>
                    <p className="text-gray-700 text-sm font-mono">{segment.script}</p>
                  </div>
                ))}
              </div>
            )}

            {generatedContent.type === "video" && (
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Duración:</span>
                    <div className="font-medium">{generatedContent.content.duration}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Estilo:</span>
                    <div className="font-medium">{generatedContent.content.style}</div>
                  </div>
                </div>
                
                {generatedContent.content.scenes.map((scene: any, index: number) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">Escena {scene.scene}</h4>
                      <Badge variant="outline">{scene.duration}</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <span className="text-sm text-gray-500">Visual:</span>
                        <div className="font-medium">{scene.visual}</div>
                      </div>
                      <div>
                        <span className="text-sm text-gray-500">Voiceover:</span>
                        <div className="text-sm">{scene.voiceover}</div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <span className="text-sm text-gray-500">Elementos:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {scene.elements.map((element: string, i: number) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {element}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};
