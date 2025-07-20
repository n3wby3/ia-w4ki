import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Target, TrendingUp, Clock, CheckCircle, AlertTriangle, Users, Calendar, DollarSign } from "lucide-react";

interface Project {
  id: string;
  name: string;
  entrepreneur: string;
  sector: string;
  status: 'planning' | 'development' | 'implementation' | 'completed' | 'cancelled';
  progress: number;
  startDate: string;
  expectedCompletion: string;
  budget: number;
  spent: number;
  team: number;
  nextMilestone: string;
  riskLevel: 'low' | 'medium' | 'high';
}

interface Milestone {
  id: string;
  projectId: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'in-progress' | 'completed' | 'overdue';
  priority: 'low' | 'medium' | 'high';
}

export const ProjectTrackingModule = () => {
  const [selectedTab, setSelectedTab] = useState("projects");

  const mockProjects: Project[] = [
    {
      id: "1",
      name: "Plataforma Comercio Fronterizo",
      entrepreneur: "María González",
      sector: "Tecnología",
      status: "development",
      progress: 65,
      startDate: "2024-01-01",
      expectedCompletion: "2024-06-01",
      budget: 25000,
      spent: 16250,
      team: 4,
      nextMilestone: "MVP Testing",
      riskLevel: "low"
    },
    {
      id: "2",
      name: "Exportadora Quinoa Andina",
      entrepreneur: "Carlos Mendoza",
      sector: "Agropecuario",
      status: "implementation",
      progress: 85,
      startDate: "2023-11-01",
      expectedCompletion: "2024-02-15",
      budget: 40000,
      spent: 34000,
      team: 6,
      nextMilestone: "Certificación Orgánica",
      riskLevel: "medium"
    },
    {
      id: "3",
      name: "Centro Logístico Tacna",
      entrepreneur: "Ana Silva",
      sector: "Logística",
      status: "planning",
      progress: 25,
      startDate: "2024-01-15",
      expectedCompletion: "2024-08-01",
      budget: 75000,
      spent: 12000,
      team: 8,
      nextMilestone: "Estudio Factibilidad",
      riskLevel: "high"
    },
    {
      id: "4",
      name: "Textiles Artesanales Bolivia",
      entrepreneur: "José Morales",
      sector: "Textil",
      status: "completed",
      progress: 100,
      startDate: "2023-08-01",
      expectedCompletion: "2023-12-31",
      budget: 18000,
      spent: 17500,
      team: 3,
      nextMilestone: "Proyecto Completado",
      riskLevel: "low"
    },
    {
      id: "5",
      name: "Turismo Gastronómico",
      entrepreneur: "Sofía Herrera",
      sector: "Turismo",
      status: "development",
      progress: 40,
      startDate: "2023-12-01",
      expectedCompletion: "2024-04-30",
      budget: 22000,
      spent: 8800,
      team: 5,
      nextMilestone: "Lanzamiento Piloto",
      riskLevel: "medium"
    },
    {
      id: "6",
      name: "Energía Solar Comunitaria",
      entrepreneur: "Roberto Castro",
      sector: "Energía",
      status: "cancelled",
      progress: 30,
      startDate: "2023-10-01",
      expectedCompletion: "2024-03-01",
      budget: 50000,
      spent: 15000,
      team: 4,
      nextMilestone: "Proyecto Cancelado",
      riskLevel: "high"
    },
    {
      id: "7",
      name: "App Conectividad Rural",
      entrepreneur: "Lucía Vargas",
      sector: "Tecnología",
      status: "development",
      progress: 55,
      startDate: "2023-11-15",
      expectedCompletion: "2024-03-15",
      budget: 30000,
      spent: 16500,
      team: 7,
      nextMilestone: "Beta Testing",
      riskLevel: "low"
    },
    {
      id: "8",
      name: "Procesadora Frutas Nativas",
      entrepreneur: "Miguel Torres",
      sector: "Alimentario",
      status: "planning",
      progress: 15,
      startDate: "2024-01-01",
      expectedCompletion: "2024-07-01",
      budget: 35000,
      spent: 5250,
      team: 5,
      nextMilestone: "Análisis Mercado",
      riskLevel: "medium"
    }
  ];

  const mockMilestones: Milestone[] = [
    {
      id: "1",
      projectId: "1",
      title: "MVP Testing",
      description: "Pruebas del producto mínimo viable",
      dueDate: "2024-02-01",
      status: "in-progress",
      priority: "high"
    },
    {
      id: "2",
      projectId: "2",
      title: "Certificación Orgánica",
      description: "Obtener certificación orgánica internacional",
      dueDate: "2024-01-30",
      status: "pending",
      priority: "high"
    },
    {
      id: "3",
      projectId: "3",
      title: "Estudio Factibilidad",
      description: "Análisis técnico y económico detallado",
      dueDate: "2024-02-15",
      status: "overdue",
      priority: "high"
    }
  ];

  const committedProjects = 8; // Los 8 proyectos comprometidos
  const completedProjects = mockProjects.filter(p => p.status === 'completed').length;
  const activeProjects = mockProjects.filter(p => ['development', 'implementation', 'planning'].includes(p.status)).length;
  const totalBudget = mockProjects.reduce((acc, p) => acc + p.budget, 0);
  const totalSpent = mockProjects.reduce((acc, p) => acc + p.spent, 0);

  const successRate = (completedProjects / committedProjects * 100).toFixed(1);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-blue-100 text-blue-800';
      case 'development': return 'bg-yellow-100 text-yellow-800';
      case 'implementation': return 'bg-purple-100 text-purple-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'overdue': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low': return 'bg-green-100 text-green-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'low': return 'bg-gray-100 text-gray-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'high': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Seguimiento de Proyectos</h2>
          <p className="text-gray-600">Tracking de los 8 proyectos comprometidos</p>
        </div>
        <Button>
          <Target className="w-4 h-4 mr-2" />
          Nuevo Hito
        </Button>
      </div>

      {/* Project Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Proyectos Comprometidos</CardDescription>
            <CardTitle className="text-3xl text-blue-600">{committedProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-blue-600">
              <Target className="w-4 h-4 mr-1" />
              Meta establecida
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Proyectos Completados</CardDescription>
            <CardTitle className="text-3xl text-green-600">{completedProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              Tasa éxito: {successRate}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Proyectos Activos</CardDescription>
            <CardTitle className="text-3xl text-orange-600">{activeProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-orange-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              En desarrollo
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Presupuesto Ejecutado</CardDescription>
            <CardTitle className="text-3xl text-purple-600">{((totalSpent / totalBudget) * 100).toFixed(0)}%</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">
              ${totalSpent.toLocaleString()} de ${totalBudget.toLocaleString()}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alert for commitment */}
      <Alert>
        <Target className="h-4 w-4" />
        <AlertDescription>
          Compromiso institucional: Seguimiento activo de 8 proyectos prioritarios para el desarrollo de la Macro Región Andina.
          Actualmente tenemos {completedProjects} proyectos completados y {activeProjects} en desarrollo activo.
        </AlertDescription>
      </Alert>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="projects">Proyectos</TabsTrigger>
          <TabsTrigger value="milestones">Hitos</TabsTrigger>
          <TabsTrigger value="metrics">Métricas</TabsTrigger>
          <TabsTrigger value="alerts">Alertas</TabsTrigger>
        </TabsList>

        <TabsContent value="projects" className="space-y-4">
          <div className="grid gap-4">
            {mockProjects.map((project) => (
              <Card key={project.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-lg">{project.name}</h3>
                        <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                        <Badge className={getRiskColor(project.riskLevel)}>Riesgo {project.riskLevel}</Badge>
                      </div>
                      <p className="text-gray-600 mb-2">
                        Emprendedor: {project.entrepreneur} • Sector: {project.sector}
                      </p>
                      <p className="text-sm text-gray-500">
                        Próximo hito: {project.nextMilestone}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{project.progress}%</div>
                      <div className="text-sm text-gray-600">completado</div>
                    </div>
                  </div>

                  <div className="mb-4">
                    <Progress value={project.progress} className="h-2" />
                  </div>

                  <div className="grid md:grid-cols-4 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-2 text-gray-400" />
                      <div>
                        <div className="text-gray-600">Inicio</div>
                        <div className="font-medium">{project.startDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      <div>
                        <div className="text-gray-600">Entrega</div>
                        <div className="font-medium">{project.expectedCompletion}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="w-4 h-4 mr-2 text-gray-400" />
                      <div>
                        <div className="text-gray-600">Presupuesto</div>
                        <div className="font-medium">${project.spent.toLocaleString()} / ${project.budget.toLocaleString()}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      <div>
                        <div className="text-gray-600">Equipo</div>
                        <div className="font-medium">{project.team} personas</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="milestones" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Próximos Hitos</CardTitle>
              <CardDescription>Seguimiento de entregables críticos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMilestones.map((milestone) => {
                  const project = mockProjects.find(p => p.id === milestone.projectId);
                  return (
                    <div key={milestone.id} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-medium">{milestone.title}</h3>
                          <Badge className={getStatusColor(milestone.status)}>{milestone.status}</Badge>
                          <Badge className={getPriorityColor(milestone.priority)}>{milestone.priority}</Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">{milestone.description}</p>
                        <p className="text-sm text-gray-500">
                          Proyecto: {project?.name} • Vencimiento: {milestone.dueDate}
                        </p>
                      </div>
                      {milestone.status === 'overdue' && (
                        <AlertTriangle className="w-5 h-5 text-red-500" />
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metrics" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Métricas de Éxito</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Tasa de Finalización</span>
                  <span className="text-lg font-bold text-green-600">{successRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tiempo Promedio</span>
                  <span className="text-lg font-bold">6.2 meses</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Presupuesto Promedio</span>
                  <span className="text-lg font-bold">${(totalBudget / committedProjects / 1000).toFixed(0)}k</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Variación Presupuestal</span>
                  <span className="text-lg font-bold text-green-600">-2.1%</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución por Sector</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Tecnología</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Agropecuario</span>
                    <span>25%</span>
                  </div>
                  <Progress value={25} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Logística</span>
                    <span>12.5%</span>
                  </div>
                  <Progress value={12.5} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Otros</span>
                    <span>37.5%</span>
                  </div>
                  <Progress value={37.5} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="alerts" className="space-y-4">
          <div className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Proyecto en riesgo:</strong> Centro Logístico Tacna tiene un retraso del 15% en el cronograma.
                Siguiente acción: Reunión de revisión programada para mañana.
              </AlertDescription>
            </Alert>

            <Alert>
              <Clock className="h-4 w-4" />
              <AlertDescription>
                <strong>Hito próximo:</strong> MVP Testing de Plataforma Comercio Fronterizo vence en 3 días.
                Estado actual: En progreso (85% completado).
              </AlertDescription>
            </Alert>

            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Éxito:</strong> Textiles Artesanales Bolivia completó todos sus objetivos dentro del presupuesto
                y cronograma establecido. Impacto positivo en 150 familias artesanas.
              </AlertDescription>
            </Alert>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};