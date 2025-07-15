
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Lightbulb, 
  Users, 
  Target, 
  FileText, 
  Plus,
  Search,
  Filter,
  Star,
  TrendingUp
} from "lucide-react";

export const ProjectMakerModule = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const mockOpportunities = [
    {
      id: 1,
      title: "Exportación de Palta Hass",
      description: "Oportunidad en mercado asiático para productores de Tacna",
      sector: "Agricultura",
      investment: "50,000 USD",
      roi: "180%",
      timeline: "6 meses",
      difficulty: "Medio",
      matching: 92
    },
    {
      id: 2,
      title: "Plataforma E-commerce Fronteriza",
      description: "Marketplace digital para comercio Arica-Tacna",
      sector: "Tecnología",
      investment: "25,000 USD",
      roi: "250%",
      timeline: "3 meses",
      difficulty: "Alto",
      matching: 78
    },
    {
      id: 3,
      title: "Turismo Gastronómico Binacional",
      description: "Ruta culinaria que conecte ambas ciudades",
      sector: "Turismo",
      investment: "15,000 USD",
      roi: "145%",
      timeline: "4 meses",
      difficulty: "Bajo",
      matching: 85
    }
  ];

  const mockProjects = [
    {
      id: 1,
      title: "AgroTech Tacna",
      status: "En desarrollo",
      progress: 65,
      owner: "María González",
      deadline: "2024-03-15"
    },
    {
      id: 2,
      title: "BorderPay",
      status: "Validación",
      progress: 30,
      owner: "Carlos Mendoza",
      deadline: "2024-02-28"
    }
  ];

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
          Crear Proyecto
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <Target className="w-4 h-4 mr-1" />
              Oportunidades
            </CardDescription>
            <CardTitle className="text-2xl">47</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-green-600">
              +12 esta semana
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
              87% de precisión
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription className="flex items-center">
              <FileText className="w-4 h-4 mr-1" />
              Propuestas
            </CardDescription>
            <CardTitle className="text-2xl">156</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-xs text-purple-600">
              +8 en desarrollo
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
              +15% vs trimestre anterior
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Explorar Oportunidades</CardTitle>
          <CardDescription>
            Encuentra oportunidades de negocio personalizadas
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <div className="flex-1">
              <Label htmlFor="search">Buscar oportunidades</Label>
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="search"
                  placeholder="Ej: agricultura, tecnología, exportación..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Filtros
            </Button>
          </div>

          <div className="space-y-4">
            {mockOpportunities.map((opportunity) => (
              <div key={opportunity.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="font-semibold">{opportunity.title}</h3>
                      <Badge variant="outline">{opportunity.sector}</Badge>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium">{opportunity.matching}%</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-3">{opportunity.description}</p>
                    <div className="grid grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Inversión:</span>
                        <div className="font-medium">{opportunity.investment}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">ROI Estimado:</span>
                        <div className="font-medium text-green-600">{opportunity.roi}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Timeline:</span>
                        <div className="font-medium">{opportunity.timeline}</div>
                      </div>
                      <div>
                        <span className="text-gray-500">Dificultad:</span>
                        <Badge variant={
                          opportunity.difficulty === 'Bajo' ? 'default' : 
                          opportunity.difficulty === 'Medio' ? 'secondary' : 'destructive'
                        }>
                          {opportunity.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      Ver Detalles
                    </Button>
                    <Button size="sm">
                      Aplicar
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* My Projects */}
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
              <div key={project.id} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <div>
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-600">Por {project.owner}</p>
                  </div>
                  <Badge variant={project.status === 'En desarrollo' ? 'default' : 'secondary'}>
                    {project.status}
                  </Badge>
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
    </div>
  );
};
