
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Brain,
  FileText,
  Users,
  Target,
  Rocket,
  Download
} from "lucide-react";

interface ProjectTemplate {
  id: string;
  name: string;
  description: string;
  sectors: string[];
  difficulty: string;
  estimatedTime: string;
}

export const ProjectGenerator = () => {
  const [projectIdea, setProjectIdea] = useState("");
  const [selectedTemplate, setSelectedTemplate] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedProject, setGeneratedProject] = useState<any>(null);

  const templates: ProjectTemplate[] = [
    {
      id: "export-business",
      name: "Negocio de Exportación",
      description: "Template para proyectos de exportación entre Chile y Perú",
      sectors: ["Agricultura", "Manufactura", "Alimentos"],
      difficulty: "Medio",
      estimatedTime: "4-6 meses"
    },
    {
      id: "tech-startup",
      name: "Startup Tecnológica",
      description: "Plataforma digital para el mercado fronterizo",
      sectors: ["Tecnología", "E-commerce", "Fintech"],
      difficulty: "Alto",
      estimatedTime: "6-12 meses"
    },
    {
      id: "tourism-service",
      name: "Servicio Turístico",
      description: "Experiencias turísticas binacionales",
      sectors: ["Turismo", "Cultura", "Gastronomía"],
      difficulty: "Bajo",
      estimatedTime: "2-4 meses"
    },
    {
      id: "logistics-hub",
      name: "Centro Logístico",
      description: "Optimización de cadenas de suministro fronterizas",
      sectors: ["Logística", "Transporte", "Comercio"],
      difficulty: "Alto",
      estimatedTime: "8-12 meses"
    }
  ];

  const handleGenerateProject = async () => {
    if (!projectIdea.trim()) return;
    
    setIsGenerating(true);
    
    // Simular procesamiento con IA
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    const mockProject = {
      title: `Proyecto: ${projectIdea}`,
      executive_summary: `Propuesta innovadora para ${projectIdea} en la Macro Región Andina, aprovechando las ventajas competitivas del comercio fronterizo entre Arica y Tacna.`,
      market_analysis: {
        target_market: "Emprendedores y empresas de la región Arica-Tacna",
        market_size: "Mercado potencial estimado en $2.5M USD",
        competition: "Competencia limitada en el segmento específico",
        opportunity: "Alta demanda no satisfecha identificada por IA"
      },
      business_model: {
        revenue_streams: ["Venta directa", "Suscripciones", "Comisiones"],
        cost_structure: "Estructura de costos optimizada para el mercado regional",
        value_proposition: "Solución única que aprovecha ventajas fronterizas"
      },
      implementation_plan: {
        phase1: "Validación y prototipo (Mes 1-2)",
        phase2: "Desarrollo y testing (Mes 3-4)",
        phase3: "Lanzamiento y expansión (Mes 5-6)"
      },
      financial_projections: {
        investment_needed: "$35,000 USD",
        break_even: "Mes 8",
        projected_roi: "195% en 18 meses"
      },
      risks_and_mitigation: [
        "Riesgo regulatorio: Mitigación mediante asesoría legal especializada",
        "Riesgo de mercado: Validación temprana con clientes potenciales",
        "Riesgo operacional: Desarrollo de alianzas estratégicas locales"
      ]
    };
    
    setGeneratedProject(mockProject);
    setIsGenerating(false);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Bajo': return 'default';
      case 'Medio': return 'secondary';
      case 'Alto': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Brain className="w-5 h-5 mr-2" />
            Generador de Proyectos IA
          </CardTitle>
          <CardDescription>
            Convierte ideas en propuestas comerciales estructuradas
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="project-idea">Describe tu idea de negocio</Label>
            <Textarea
              id="project-idea"
              placeholder="Ej: Una plataforma para conectar productores de palta de Tacna con importadores asiáticos..."
              value={projectIdea}
              onChange={(e) => setProjectIdea(e.target.value)}
              className="min-h-[100px]"
            />
          </div>

          <div>
            <Label>Templates Disponibles</Label>
            <div className="grid md:grid-cols-2 gap-3 mt-2">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                    selectedTemplate === template.id ? 'border-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                  }`}
                  onClick={() => setSelectedTemplate(template.id)}
                >
                  <h4 className="font-medium">{template.name}</h4>
                  <p className="text-sm text-gray-600 mb-2">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-1">
                      {template.sectors.slice(0, 2).map((sector) => (
                        <Badge key={sector} variant="outline" className="text-xs">
                          {sector}
                        </Badge>
                      ))}
                    </div>
                    <Badge variant={getDifficultyColor(template.difficulty)} className="text-xs">
                      {template.difficulty}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <Button 
            onClick={handleGenerateProject} 
            disabled={!projectIdea.trim() || isGenerating}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Brain className="w-4 h-4 mr-2 animate-spin" />
                Generando Proyecto...
              </>
            ) : (
              <>
                <Rocket className="w-4 h-4 mr-2" />
                Generar Propuesta Comercial
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {generatedProject && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                {generatedProject.title}
              </div>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Descargar PDF
              </Button>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold mb-2">Resumen Ejecutivo</h3>
              <p className="text-gray-700">{generatedProject.executive_summary}</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Análisis de Mercado</h3>
              <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                <p><strong>Mercado Objetivo:</strong> {generatedProject.market_analysis.target_market}</p>
                <p><strong>Tamaño del Mercado:</strong> {generatedProject.market_analysis.market_size}</p>
                <p><strong>Oportunidad:</strong> {generatedProject.market_analysis.opportunity}</p>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Proyecciones Financieras</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">Inversión Requerida</div>
                  <div className="text-xl font-bold text-blue-600">
                    {generatedProject.financial_projections.investment_needed}
                  </div>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">ROI Proyectado</div>
                  <div className="text-xl font-bold text-green-600">
                    {generatedProject.financial_projections.projected_roi}
                  </div>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <div className="text-sm text-gray-600">Punto de Equilibrio</div>
                  <div className="text-xl font-bold text-purple-600">
                    {generatedProject.financial_projections.break_even}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Plan de Implementación</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-blue-500" />
                  <span className="text-sm">{generatedProject.implementation_plan.phase1}</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-yellow-500" />
                  <span className="text-sm">{generatedProject.implementation_plan.phase2}</span>
                </div>
                <div className="flex items-center">
                  <Target className="w-4 h-4 mr-2 text-green-500" />
                  <span className="text-sm">{generatedProject.implementation_plan.phase3}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
