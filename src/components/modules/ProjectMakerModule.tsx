
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  Users, 
  Target, 
  FileText, 
  Plus,
  TrendingUp,
  Brain,
  Rocket
} from "lucide-react";
import { OpportunityExplorer } from "./project-maker/OpportunityExplorer";
import { ProjectGenerator } from "./project-maker/ProjectGenerator";

type ActiveTab = 'explorer' | 'generator' | 'projects';

export const ProjectMakerModule = () => {
  const [activeTab, setActiveTab] = useState<ActiveTab>('explorer');

  const mockProjects = [
    {
      id: 1,
      title: "AgroTech Tacna",
      status: "En desarrollo",
      progress: 65,
      owner: "María González",
      deadline: "2024-03-15",
      investment: "45,000 USD",
      sector: "Agricultura"
    },
    {
      id: 2,
      title: "BorderPay",
      status: "Validación",
      progress: 30,
      owner: "Carlos Mendoza",
      deadline: "2024-02-28",
      investment: "25,000 USD",
      sector: "Fintech"
    },
    {
      id: 3,
      title: "Ruta Gastronómica MRA",
      status: "Propuesta",
      progress: 15,
      owner: "Ana Flores",
      deadline: "2024-04-10",
      investment: "15,000 USD",
      sector: "Turismo"
    }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'explorer':
        return <OpportunityExplorer />;
      case 'generator':
        return <ProjectGenerator />;
      case 'projects':
        return (
          <Card>
            <CardHeader>
              <CardTitle>Mis Proyectos</CardTitle>
              <CardDescription>
                Proyectos en desarrollo y validación
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockProjects.map((project) => (
                  <div key={project.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                    <div className="flex items-center justify-between mb-3">
                      <div>
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold">{project.title}</h3>
                          <Badge variant="outline">{project.sector}</Badge>
                        </div>
                        <p className="text-sm text-gray-600">Por {project.owner}</p>
                      </div>
                      <div className="text-right">
                        <Badge variant={
                          project.status === 'En desarrollo' ? 'default' : 
                          project.status === 'Validación' ? 'secondary' : 'outline'
                        }>
                          {project.status}
                        </Badge>
                        <div className="text-sm text-gray-600 mt-1">{project.investment}</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progreso</span>
                        <span>{project.progress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all" 
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Fecha límite: {project.deadline}</span>
                        <Button variant="ghost" size="sm">
                          Ver Proyecto
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            MRA Project Maker
          </h2>
          <p className="text-gray-600">
            Generador inteligente de oportunidades y proyectos comerciales
          </p>
        </div>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Nuevo Proyecto
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Target className="w-4 h-4 mr-1" />
              Oportunidades IA
            </CardDescription>
            <CardTitle className="text-2xl">47</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-600">
              +12 detectadas esta semana
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              Matches Activos
            </CardDescription>
            <CardTitle className="text-2xl">23</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-blue-600">
              87% de precisión IA
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              Propuestas Generadas
            </CardDescription>
            <CardTitle className="text-2xl">156</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-purple-600">
              +8 esta semana
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <TrendingUp className="w-4 h-4 mr-1" />
              ROI Promedio
            </CardDescription>
            <CardTitle className="text-2xl">185%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-600">
              Proyecciones IA validadas
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Navigation Tabs */}
      <div className="flex space-x-2">
        <Button 
          variant={activeTab === 'explorer' ? 'default' : 'outline'}
          onClick={() => setActiveTab('explorer')}
        >
          <Target className="w-4 h-4 mr-2" />
          Explorar Oportunidades
        </Button>
        <Button 
          variant={activeTab === 'generator' ? 'default' : 'outline'}
          onClick={() => setActiveTab('generator')}
        >
          <Brain className="w-4 h-4 mr-2" />
          Generador IA
        </Button>
        <Button 
          variant={activeTab === 'projects' ? 'default' : 'outline'}
          onClick={() => setActiveTab('projects')}
        >
          <Rocket className="w-4 h-4 mr-2" />
          Mis Proyectos
        </Button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};
