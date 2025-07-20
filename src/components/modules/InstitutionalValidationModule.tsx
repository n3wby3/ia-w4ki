import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { School, Building2, Briefcase, CheckCircle, Clock, FileCheck, Users, TrendingUp } from "lucide-react";

interface Institution {
  id: string;
  name: string;
  type: 'university' | 'government' | 'incubator';
  country: 'Peru' | 'Chile' | 'Bolivia';
  status: 'active' | 'pending' | 'inactive';
  validatedProjects: number;
  totalProjects: number;
  lastValidation: string;
  contactPerson: string;
  email: string;
}

interface ValidationRequest {
  id: string;
  projectName: string;
  entrepreneur: string;
  institutionId: string;
  institutionName: string;
  submissionDate: string;
  status: 'pending' | 'approved' | 'rejected' | 'reviewing';
  validationType: 'academic' | 'technical' | 'commercial' | 'regulatory';
  priority: 'low' | 'medium' | 'high';
}

interface ValidationCriteria {
  id: string;
  name: string;
  description: string;
  weight: number;
  category: 'technical' | 'financial' | 'market' | 'team';
}

export const InstitutionalValidationModule = () => {
  const [selectedTab, setSelectedTab] = useState("institutions");

  const mockInstitutions: Institution[] = [
    {
      id: "1",
      name: "Universidad de Tarapacá",
      type: "university",
      country: "Chile",
      status: "active",
      validatedProjects: 12,
      totalProjects: 15,
      lastValidation: "2024-01-14",
      contactPerson: "Dr. Carmen Rodríguez",
      email: "validacion@uta.cl"
    },
    {
      id: "2",
      name: "Gobierno Regional Arica y Parinacota",
      type: "government",
      country: "Chile",
      status: "active",
      validatedProjects: 8,
      totalProjects: 10,
      lastValidation: "2024-01-13",
      contactPerson: "Ing. Roberto Silva",
      email: "innovacion@gore.cl"
    },
    {
      id: "3",
      name: "Incubadora UTEC Lima",
      type: "incubator",
      country: "Peru",
      status: "active",
      validatedProjects: 15,
      totalProjects: 18,
      lastValidation: "2024-01-15",
      contactPerson: "María Elena Vargas",
      email: "incubadora@utec.edu.pe"
    },
    {
      id: "4",
      name: "Universidad Mayor de San Andrés",
      type: "university",
      country: "Bolivia",
      status: "pending",
      validatedProjects: 5,
      totalProjects: 8,
      lastValidation: "2024-01-10",
      contactPerson: "Dr. Carlos Mamani",
      email: "investigacion@umsa.bo"
    },
    {
      id: "5",
      name: "CORFO Tarapacá",
      type: "government",
      country: "Chile",
      status: "active",
      validatedProjects: 22,
      totalProjects: 25,
      lastValidation: "2024-01-12",
      contactPerson: "Ana Morales",
      email: "emprendimiento@corfo.cl"
    }
  ];

  const mockValidationRequests: ValidationRequest[] = [
    {
      id: "1",
      projectName: "Plataforma Comercio Fronterizo",
      entrepreneur: "María González",
      institutionId: "1",
      institutionName: "Universidad de Tarapacá",
      submissionDate: "2024-01-14",
      status: "reviewing",
      validationType: "technical",
      priority: "high"
    },
    {
      id: "2",
      projectName: "Exportadora Quinoa Andina",
      entrepreneur: "Carlos Mendoza",
      institutionId: "3",
      institutionName: "Incubadora UTEC Lima",
      submissionDate: "2024-01-13",
      status: "approved",
      validationType: "commercial",
      priority: "medium"
    },
    {
      id: "3",
      projectName: "Centro Logístico Tacna",
      entrepreneur: "Ana Silva",
      institutionId: "2",
      institutionName: "Gobierno Regional Arica y Parinacota",
      submissionDate: "2024-01-12",
      status: "pending",
      validationType: "regulatory",
      priority: "high"
    }
  ];

  const mockValidationCriteria: ValidationCriteria[] = [
    {
      id: "1",
      name: "Viabilidad Técnica",
      description: "Evaluación de la factibilidad técnica del proyecto",
      weight: 25,
      category: "technical"
    },
    {
      id: "2",
      name: "Sostenibilidad Financiera",
      description: "Análisis del modelo de negocio y proyecciones financieras",
      weight: 30,
      category: "financial"
    },
    {
      id: "3",
      name: "Potencial de Mercado",
      description: "Evaluación del mercado objetivo y oportunidades comerciales",
      weight: 25,
      category: "market"
    },
    {
      id: "4",
      name: "Capacidad del Equipo",
      description: "Evaluación de las competencias del equipo emprendedor",
      weight: 20,
      category: "team"
    }
  ];

  const totalValidatedProjects = mockInstitutions.reduce((acc, inst) => acc + inst.validatedProjects, 0);
  const totalProjects = mockInstitutions.reduce((acc, inst) => acc + inst.totalProjects, 0);
  const validationRate = ((totalValidatedProjects / totalProjects) * 100).toFixed(1);
  const activeInstitutions = mockInstitutions.filter(inst => inst.status === 'active').length;

  const getInstitutionIcon = (type: string) => {
    switch (type) {
      case 'university': return <School className="w-5 h-5 text-blue-600" />;
      case 'government': return <Building2 className="w-5 h-5 text-green-600" />;
      case 'incubator': return <Briefcase className="w-5 h-5 text-purple-600" />;
      default: return <Building2 className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'approved': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      case 'reviewing': return 'bg-blue-100 text-blue-800';
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

  const getValidationTypeColor = (type: string) => {
    switch (type) {
      case 'academic': return 'bg-blue-100 text-blue-800';
      case 'technical': return 'bg-purple-100 text-purple-800';
      case 'commercial': return 'bg-green-100 text-green-800';
      case 'regulatory': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCountryFlag = (country: string) => {
    switch (country) {
      case 'Peru': return '🇵🇪';
      case 'Bolivia': return '🇧🇴';
      case 'Chile': return '🇨🇱';
      default: return '🌐';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Validación Institucional</h2>
          <p className="text-gray-600">Interfaz para universidades, gobiernos regionales e incubadoras</p>
        </div>
        <Button>
          <FileCheck className="w-4 h-4 mr-2" />
          Nueva Validación
        </Button>
      </div>

      {/* Validation Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Instituciones Activas</CardDescription>
            <CardTitle className="text-3xl text-blue-600">{activeInstitutions}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-blue-600">
              <Building2 className="w-4 h-4 mr-1" />
              de {mockInstitutions.length} registradas
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Proyectos Validados</CardDescription>
            <CardTitle className="text-3xl text-green-600">{totalValidatedProjects}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <CheckCircle className="w-4 h-4 mr-1" />
              Tasa: {validationRate}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Validaciones Pendientes</CardDescription>
            <CardTitle className="text-3xl text-orange-600">
              {mockValidationRequests.filter(r => r.status === 'pending' || r.status === 'reviewing').length}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-orange-600">
              <Clock className="w-4 h-4 mr-1" />
              En cola de revisión
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Tiempo Promedio</CardDescription>
            <CardTitle className="text-3xl text-purple-600">3.2</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">días por validación</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="institutions">Instituciones</TabsTrigger>
          <TabsTrigger value="requests">Solicitudes</TabsTrigger>
          <TabsTrigger value="criteria">Criterios</TabsTrigger>
          <TabsTrigger value="analytics">Analíticas</TabsTrigger>
        </TabsList>

        <TabsContent value="institutions" className="space-y-4">
          <div className="grid gap-4">
            {mockInstitutions.map((institution) => (
              <Card key={institution.id}>
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center space-x-2">
                        {getInstitutionIcon(institution.type)}
                        <span className="text-2xl">{getCountryFlag(institution.country)}</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-bold text-lg">{institution.name}</h3>
                          <Badge className={getStatusColor(institution.status)}>{institution.status}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">
                          Contacto: {institution.contactPerson} • {institution.email}
                        </p>
                        <p className="text-sm text-gray-500">
                          Última validación: {institution.lastValidation}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-600">
                        {institution.validatedProjects}
                      </div>
                      <div className="text-sm text-gray-600">
                        de {institution.totalProjects} proyectos
                      </div>
                      <Progress 
                        value={(institution.validatedProjects / institution.totalProjects) * 100} 
                        className="w-24 mt-2" 
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="requests" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Solicitudes de Validación</CardTitle>
              <CardDescription>Estado actual de las validaciones en proceso</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockValidationRequests.map((request) => (
                  <div key={request.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-medium">{request.projectName}</h3>
                        <Badge className={getStatusColor(request.status)}>{request.status}</Badge>
                        <Badge className={getValidationTypeColor(request.validationType)}>
                          {request.validationType}
                        </Badge>
                        <Badge className={getPriorityColor(request.priority)}>
                          {request.priority}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">
                        Emprendedor: {request.entrepreneur}
                      </p>
                      <p className="text-sm text-gray-500">
                        Institución: {request.institutionName} • Enviado: {request.submissionDate}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        Ver Detalles
                      </Button>
                      {request.status === 'pending' && (
                        <Button size="sm">
                          Procesar
                        </Button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="criteria" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Criterios de Validación</CardTitle>
              <CardDescription>Marco de evaluación para proyectos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockValidationCriteria.map((criteria) => (
                  <div key={criteria.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <h3 className="font-medium mb-1">{criteria.name}</h3>
                      <p className="text-sm text-gray-600">{criteria.description}</p>
                      <Badge className="mt-2" variant="outline">{criteria.category}</Badge>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">{criteria.weight}%</div>
                      <div className="text-sm text-gray-600">peso</div>
                    </div>
                  </div>
                ))}
                <div className="flex justify-center">
                  <Button variant="outline">
                    Configurar Criterios
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Métricas de Validación</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <span>Tasa de Aprobación</span>
                  <span className="text-lg font-bold text-green-600">{validationRate}%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Tiempo Promedio</span>
                  <span className="text-lg font-bold">3.2 días</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Proyectos por Institución</span>
                  <span className="text-lg font-bold">{(totalProjects / mockInstitutions.length).toFixed(1)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Satisfacción Promedio</span>
                  <span className="text-lg font-bold text-blue-600">4.7/5</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Distribución por Tipo</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Universidades</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Gobiernos Regionales</span>
                    <span>40%</span>
                  </div>
                  <Progress value={40} />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Incubadoras</span>
                    <span>20%</span>
                  </div>
                  <Progress value={20} />
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};