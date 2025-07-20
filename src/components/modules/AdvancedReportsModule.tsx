import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { BarChart3, Download, Calendar as CalendarIcon, TrendingUp, Eye, Filter, FileText, Settings, UserPlus } from "lucide-react";

interface Dashboard {
  id: string;
  name: string;
  userType: 'emprendedor' | 'institucion' | 'estudiante' | 'admin';
  description: string;
  widgets: string[];
  lastAccessed: string;
  viewCount: number;
  isDefault: boolean;
}

interface Report {
  id: string;
  title: string;
  type: 'pdf' | 'excel' | 'csv' | 'powerpoint';
  category: 'opportunity' | 'market' | 'performance' | 'user' | 'financial';
  generatedDate: string;
  author: string;
  downloadCount: number;
  status: 'generated' | 'generating' | 'scheduled';
  size: string;
  description: string;
}

interface PredictiveAnalysis {
  id: string;
  title: string;
  prediction: string;
  confidence: number;
  timeframe: string;
  factors: string[];
  impact: 'high' | 'medium' | 'low';
  recommendation: string;
}

export const AdvancedReportsModule = () => {
  const [selectedTab, setSelectedTab] = useState("dashboards");
  const [selectedUserType, setSelectedUserType] = useState("all");
  const [selectedReportType, setSelectedReportType] = useState("all");

  const mockDashboards: Dashboard[] = [
    {
      id: "1",
      name: "Dashboard Emprendedor",
      userType: "emprendedor",
      description: "Métricas personalizadas para emprendedores activos",
      widgets: ["Oportunidades", "Proyectos", "Conexiones", "Rendimiento"],
      lastAccessed: "2024-01-15",
      viewCount: 156,
      isDefault: true
    },
    {
      id: "2",
      name: "Panel Institucional",
      userType: "institucion",
      description: "Análisis para universidades y gobiernos regionales",
      widgets: ["Validaciones", "Estudiantes", "Proyectos Supervisados", "KPIs"],
      lastAccessed: "2024-01-14",
      viewCount: 89,
      isDefault: true
    },
    {
      id: "3",
      name: "Dashboard Estudiante",
      userType: "estudiante",
      description: "Herramientas educativas y seguimiento de progreso",
      widgets: ["Aprendizaje", "Proyectos", "Mentores", "Recursos"],
      lastAccessed: "2024-01-13",
      viewCount: 234,
      isDefault: true
    },
    {
      id: "4",
      name: "Panel Administrativo",
      userType: "admin",
      description: "Métricas globales y gestión de la plataforma",
      widgets: ["Usuarios", "Ingresos", "Sistema", "Analytics"],
      lastAccessed: "2024-01-15",
      viewCount: 45,
      isDefault: false
    }
  ];

  const mockReports: Report[] = [
    {
      id: "1",
      title: "Análisis Oportunidades Q1 2024",
      type: "pdf",
      category: "opportunity",
      generatedDate: "2024-01-15",
      author: "Sistema WAKI",
      downloadCount: 23,
      status: "generated",
      size: "2.4 MB",
      description: "Reporte completo de oportunidades detectadas en el primer trimestre"
    },
    {
      id: "2",
      title: "Estudio Mercado Fronterizo",
      type: "excel",
      category: "market",
      generatedDate: "2024-01-14",
      author: "Equipo Análisis",
      downloadCount: 45,
      status: "generated",
      size: "1.8 MB",
      description: "Análisis detallado del comercio fronterizo Perú-Chile-Bolivia"
    },
    {
      id: "3",
      title: "KPIs Plataforma Enero",
      type: "powerpoint",
      category: "performance",
      generatedDate: "2024-01-13",
      author: "Sistema WAKI",
      downloadCount: 12,
      status: "generated",
      size: "3.2 MB",
      description: "Presentación ejecutiva de métricas clave de la plataforma"
    },
    {
      id: "4",
      title: "Reporte Usuarios Activos",
      type: "csv",
      category: "user",
      generatedDate: "2024-01-12",
      author: "Sistema WAKI",
      downloadCount: 8,
      status: "generating",
      size: "0.5 MB",
      description: "Base de datos de usuarios activos y métricas de engagement"
    }
  ];

  const mockPredictions: PredictiveAnalysis[] = [
    {
      id: "1",
      title: "Crecimiento Sector Textil",
      prediction: "Incremento del 15% en oportunidades textiles en los próximos 3 meses",
      confidence: 87,
      timeframe: "3 meses",
      factors: ["Demanda internacional", "Nuevas regulaciones", "Inversión regional"],
      impact: "high",
      recommendation: "Enfocar recursos en capacitación textil y conexiones internacionales"
    },
    {
      id: "2",
      title: "Adopción Tecnológica",
      prediction: "40% de emprendedores adoptarán herramientas IA en 6 meses",
      confidence: 72,
      timeframe: "6 meses",
      factors: ["Tendencias globales", "Capacitación disponible", "Costos decrecientes"],
      impact: "medium",
      recommendation: "Desarrollar más módulos de capacitación en IA y automatización"
    },
    {
      id: "3",
      title: "Comercio Fronterizo",
      prediction: "Aumento del 25% en proyectos de comercio fronterizo",
      confidence: 93,
      timeframe: "4 meses",
      factors: ["Acuerdos bilaterales", "Infraestructura mejorada", "Demanda local"],
      impact: "high",
      recommendation: "Priorizar desarrollos logísticos y capacitación en regulaciones"
    }
  ];

  const getUserTypeColor = (userType: string) => {
    switch (userType) {
      case 'emprendedor': return 'bg-green-100 text-green-800';
      case 'institucion': return 'bg-blue-100 text-blue-800';
      case 'estudiante': return 'bg-purple-100 text-purple-800';
      case 'admin': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getReportTypeColor = (type: string) => {
    switch (type) {
      case 'pdf': return 'bg-red-100 text-red-800';
      case 'excel': return 'bg-green-100 text-green-800';
      case 'csv': return 'bg-blue-100 text-blue-800';
      case 'powerpoint': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'opportunity': return 'bg-blue-100 text-blue-800';
      case 'market': return 'bg-green-100 text-green-800';
      case 'performance': return 'bg-purple-100 text-purple-800';
      case 'user': return 'bg-orange-100 text-orange-800';
      case 'financial': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'generated': return 'bg-green-100 text-green-800';
      case 'generating': return 'bg-yellow-100 text-yellow-800';
      case 'scheduled': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredDashboards = selectedUserType === "all" 
    ? mockDashboards 
    : mockDashboards.filter(d => d.userType === selectedUserType);

  const filteredReports = selectedReportType === "all" 
    ? mockReports 
    : mockReports.filter(r => r.type === selectedReportType);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reportería Avanzada</h2>
          <p className="text-gray-600">Dashboards personalizados y análisis predictivo</p>
        </div>
        <Button>
          <FileText className="w-4 h-4 mr-2" />
          Generar Reporte
        </Button>
      </div>

      {/* Analytics Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Dashboards Activos</CardDescription>
            <CardTitle className="text-3xl text-blue-600">{mockDashboards.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-blue-600">
              <BarChart3 className="w-4 h-4 mr-1" />
              Por tipo de usuario
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Reportes Generados</CardDescription>
            <CardTitle className="text-3xl text-green-600">{mockReports.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <Download className="w-4 h-4 mr-1" />
              Este mes
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Predicciones IA</CardDescription>
            <CardTitle className="text-3xl text-purple-600">{mockPredictions.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-purple-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              Análisis activos
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Vistas Totales</CardDescription>
            <CardTitle className="text-3xl text-orange-600">
              {mockDashboards.reduce((acc, d) => acc + d.viewCount, 0)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-orange-600">
              <Eye className="w-4 h-4 mr-1" />
              Últimos 30 días
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="dashboards">Dashboards</TabsTrigger>
          <TabsTrigger value="reports">Reportes</TabsTrigger>
          <TabsTrigger value="predictions">Análisis Predictivo</TabsTrigger>
          <TabsTrigger value="export">Exportación</TabsTrigger>
        </TabsList>

        <TabsContent value="dashboards" className="space-y-4">
          {/* Dashboard Filters */}
          <div className="flex items-center space-x-4">
            <Select value={selectedUserType} onValueChange={setSelectedUserType}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Tipo de usuario" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="emprendedor">Emprendedores</SelectItem>
                <SelectItem value="institucion">Instituciones</SelectItem>
                <SelectItem value="estudiante">Estudiantes</SelectItem>
                <SelectItem value="admin">Administradores</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Personalizar
            </Button>
          </div>

          {/* Dashboards Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredDashboards.map((dashboard) => (
              <Card key={dashboard.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold text-lg">{dashboard.name}</h3>
                        <Badge className={getUserTypeColor(dashboard.userType)}>
                          {dashboard.userType}
                        </Badge>
                        {dashboard.isDefault && (
                          <Badge variant="outline">Por defecto</Badge>
                        )}
                      </div>
                      <p className="text-gray-600 mb-3">{dashboard.description}</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <span className="text-sm font-medium text-gray-500">WIDGETS INCLUIDOS:</span>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {dashboard.widgets.map((widget, index) => (
                          <Badge key={index} variant="outline" className="text-xs">{widget}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>Último acceso: {dashboard.lastAccessed}</span>
                      <span>{dashboard.viewCount} vistas</span>
                    </div>
                  </div>

                  <div className="flex space-x-2 mt-4">
                    <Button>
                      <Eye className="w-4 h-4 mr-2" />
                      Ver Dashboard
                    </Button>
                    <Button variant="outline">
                      <Settings className="w-4 h-4 mr-2" />
                      Editar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="reports" className="space-y-4">
          {/* Report Filters */}
          <div className="flex items-center space-x-4">
            <Select value={selectedReportType} onValueChange={setSelectedReportType}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Tipo de archivo" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los tipos</SelectItem>
                <SelectItem value="pdf">PDF</SelectItem>
                <SelectItem value="excel">Excel</SelectItem>
                <SelectItem value="csv">CSV</SelectItem>
                <SelectItem value="powerpoint">PowerPoint</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="w-4 h-4 mr-2" />
              Más Filtros
            </Button>
          </div>

          {/* Reports List */}
          <Card>
            <CardContent>
              <div className="space-y-4">
                {filteredReports.map((report) => (
                  <div key={report.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-medium">{report.title}</h3>
                        <Badge className={getReportTypeColor(report.type)}>
                          {report.type.toUpperCase()}
                        </Badge>
                        <Badge className={getCategoryColor(report.category)}>
                          {report.category}
                        </Badge>
                        <Badge className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{report.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>Por: {report.author}</span>
                        <span>Generado: {report.generatedDate}</span>
                        <span>Tamaño: {report.size}</span>
                        <span>{report.downloadCount} descargas</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Eye className="w-4 h-4" />
                      </Button>
                      <Button size="sm" disabled={report.status === 'generating'}>
                        <Download className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="predictions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Análisis Predictivo con IA</CardTitle>
              <CardDescription>Proyecciones basadas en tendencias y datos históricos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {mockPredictions.map((prediction) => (
                  <div key={prediction.id} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-bold">{prediction.title}</h3>
                          <Badge className={getImpactColor(prediction.impact)}>
                            Impacto {prediction.impact}
                          </Badge>
                        </div>
                        <p className="text-gray-700 mb-3">{prediction.prediction}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{prediction.confidence}%</div>
                        <div className="text-sm text-gray-600">confianza</div>
                        <Progress value={prediction.confidence} className="w-20 mt-1" />
                      </div>
                    </div>

                    <div className="space-y-2 text-sm">
                      <div>
                        <span className="font-medium">Plazo:</span>
                        <span className="ml-2">{prediction.timeframe}</span>
                      </div>
                      <div>
                        <span className="font-medium">Factores clave:</span>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {prediction.factors.map((factor, index) => (
                            <Badge key={index} variant="outline" className="text-xs">{factor}</Badge>
                          ))}
                        </div>
                      </div>
                      <div className="p-3 bg-blue-50 rounded-lg mt-3">
                        <span className="font-medium text-blue-800">Recomendación:</span>
                        <p className="text-blue-700 mt-1">{prediction.recommendation}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="export" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Exportación Masiva</CardTitle>
                <CardDescription>Genera múltiples reportes automáticamente</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Periodo</label>
                  <div className="flex space-x-2">
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          Desde
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" initialFocus />
                      </PopoverContent>
                    </Popover>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          Hasta
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar mode="single" initialFocus />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Formato</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar formato" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pdf">PDF</SelectItem>
                      <SelectItem value="excel">Excel</SelectItem>
                      <SelectItem value="csv">CSV</SelectItem>
                      <SelectItem value="all">Todos los formatos</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button className="w-full">
                  <Download className="w-4 h-4 mr-2" />
                  Generar Reportes
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Programación Automática</CardTitle>
                <CardDescription>Configura reportes recurrentes</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Frecuencia</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Seleccionar frecuencia" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="daily">Diario</SelectItem>
                      <SelectItem value="weekly">Semanal</SelectItem>
                      <SelectItem value="monthly">Mensual</SelectItem>
                      <SelectItem value="quarterly">Trimestral</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Destinatarios</label>
                  <div className="space-y-2">
                    <Badge variant="outline">admin@waki.com</Badge>
                    <Badge variant="outline">reports@uta.cl</Badge>
                    <Button variant="outline" size="sm" className="w-full">
                      <UserPlus className="w-4 h-4 mr-2" />
                      Agregar destinatario
                    </Button>
                  </div>
                </div>

                <Button className="w-full">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Programar Reporte
                </Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};