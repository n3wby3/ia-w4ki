
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Brain,
  Lightbulb,
  FileText,
  LogOut,
  TrendingUp,
  Users,
  Bell,
  Settings,
  BarChart3,
  Building,
  Handshake,
  DollarSign,
  Gem,
  Database,
  ListChecks,
  AreaChart
} from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { IAndinaModule } from "./modules/IAndinaModule";
import { ProjectMakerModule } from "./modules/ProjectMakerModule";
import { DigestModule } from "./modules/DigestModule";
import UserManagementModuleV2 from "./modulesV2/UserManagementModuleV2";
import SponsorshipModuleV2 from "./modulesV2/SponsorshipModuleV2";
import FreemiumModuleV2 from "./modulesV2/FreemiumModuleV2";
import DataIntegrationModuleV2 from "./modulesV2/DataIntegrationModuleV2";
import ProjectTrackingModuleV2 from "./modulesV2/ProjectTrackingModuleV2";
import InstitutionalValidationModuleV2 from "./modulesV2/InstitutionalValidationModuleV2";
import CollaborationModuleV2 from "./modulesV2/CollaborationModuleV2";
import AdvancedReportsModuleV2 from "./modulesV2/AdvancedReportsModuleV2";

type ActiveModule =
  | 'dashboard'
  | 'iandina'
  | 'project-maker'
  | 'digest'
  | 'user-management'
  | 'sponsorship'
  | 'freemium'
  | 'data-integration'
  | 'project-tracking'
  | 'institutional-validation'
  | 'collaboration'
  | 'advanced-reports';

export const Dashboard = () => {
  const { user, logout } = useAuth();
  const [activeModule, setActiveModule] = useState<ActiveModule>('dashboard');

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'emprendedor': return 'bg-green-100 text-green-800';
      case 'institucion': return 'bg-blue-100 text-blue-800';
      case 'estudiante': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const renderModule = () => {
    switch (activeModule) {
      case 'iandina': return <IAndinaModule />;
      case 'project-maker': return <ProjectMakerModule />;
      case 'digest': return <DigestModule />;
      case 'user-management': return <UserManagementModuleV2 />;
      case 'sponsorship': return <SponsorshipModuleV2 />;
      case 'freemium': return <FreemiumModuleV2 />;
      case 'data-integration': return <DataIntegrationModuleV2 />;
      case 'project-tracking': return <ProjectTrackingModuleV2 />;
      case 'institutional-validation': return <InstitutionalValidationModuleV2 />;
      case 'collaboration': return <CollaborationModuleV2 />;
      case 'advanced-reports': return <AdvancedReportsModuleV2 />;
      default: return <DashboardHome />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg"></div>
                <h1 className="text-xl font-bold">WAKI Dashboard</h1>
              </div>
              <Badge className={getRoleColor(user?.role || '')}>
                {user?.role}
              </Badge>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">¡Hola, {user?.name}!</span>
              <Button variant="ghost" size="sm">
                <Bell className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" onClick={logout}>
                <LogOut className="w-4 h-4 mr-2" />
                Salir
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r min-h-screen">
          <nav className="p-4 space-y-1">
            <Button
              variant={activeModule === 'dashboard' ? 'default' : 'ghost'}
              className="w-full justify-start"
              onClick={() => setActiveModule('dashboard')}
            >
              <BarChart3 className="w-4 h-4 mr-2" />
              Dashboard
            </Button>
            
            <div className="pt-2">
              <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Análisis y Proyectos</h3>
              <div className="mt-1 space-y-1">
                <Button variant={activeModule === 'iandina' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('iandina')}>
                  <Brain className="w-4 h-4 mr-2" /> IAndina
                </Button>
                <Button variant={activeModule === 'project-maker' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('project-maker')}>
                  <Lightbulb className="w-4 h-4 mr-2" /> Project Maker
                </Button>
                <Button variant={activeModule === 'digest' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('digest')}>
                  <FileText className="w-4 h-4 mr-2" /> MRA Digest
                </Button>
                <Button variant={activeModule === 'project-tracking' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('project-tracking')}>
                  <ListChecks className="w-4 h-4 mr-2" /> Seguimiento
                </Button>
                <Button variant={activeModule === 'advanced-reports' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('advanced-reports')}>
                  <AreaChart className="w-4 h-4 mr-2" /> Reportería
                </Button>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Gestión y Comunidad</h3>
              <div className="mt-1 space-y-1">
                <Button variant={activeModule === 'user-management' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('user-management')}>
                  <Users className="w-4 h-4 mr-2" /> Usuarios
                </Button>
                <Button variant={activeModule === 'institutional-validation' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('institutional-validation')}>
                  <Building className="w-4 h-4 mr-2" /> Validación
                </Button>
                <Button variant={activeModule === 'collaboration' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('collaboration')}>
                  <Handshake className="w-4 h-4 mr-2" /> Colaboración
                </Button>
              </div>
            </div>

            <div className="pt-2">
              <h3 className="px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Plataforma y Negocio</h3>
              <div className="mt-1 space-y-1">
                <Button variant={activeModule === 'sponsorship' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('sponsorship')}>
                  <DollarSign className="w-4 h-4 mr-2" /> Patrocinios
                </Button>
                <Button variant={activeModule === 'freemium' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('freemium')}>
                  <Gem className="w-4 h-4 mr-2" /> Freemium
                </Button>
                <Button variant={activeModule === 'data-integration' ? 'secondary' : 'ghost'} className="w-full justify-start" onClick={() => setActiveModule('data-integration')}>
                  <Database className="w-4 h-4 mr-2" /> Integración
                </Button>
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {renderModule()}
        </main>
      </div>
    </div>
  );
};

const DashboardHome = () => {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Resumen Ejecutivo
        </h2>
        <p className="text-gray-600">
          Monitoreo en tiempo real de la Macro Región Andina
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Oportunidades Detectadas</CardDescription>
            <CardTitle className="text-3xl text-green-600">24</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +12% esta semana
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Análisis IA Completados</CardDescription>
            <CardTitle className="text-3xl text-blue-600">156</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-blue-600">
              <Brain className="w-4 h-4 mr-1" />
              Hoy: 8 nuevos
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Proyectos Generados</CardDescription>
            <CardTitle className="text-3xl text-purple-600">12</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-purple-600">
              <Lightbulb className="w-4 h-4 mr-1" />
              3 en desarrollo
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Contenido Publicado</CardDescription>
            <CardTitle className="text-3xl text-orange-600">45</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-orange-600">
              <FileText className="w-4 h-4 mr-1" />
              Esta semana: 7
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Actividad Reciente</CardTitle>
            <CardDescription>
              Últimas acciones del sistema IA
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Nueva oportunidad detectada</p>
                <p className="text-xs text-gray-500">Sector textil Arica-Tacna - hace 2 horas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Análisis de mercado completado</p>
                <p className="text-xs text-gray-500">Comercio fronterizo Q4 2024 - hace 4 horas</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <p className="text-sm font-medium">Digest semanal generado</p>
                <p className="text-xs text-gray-500">Boletín #42 publicado - hace 1 día</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tendencias Regionales</CardTitle>
            <CardDescription>
              Análisis de datos más recientes
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Exportaciones Chile-Perú</span>
                <span className="text-green-600">+8.5%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Actividad Emprendedora</span>
                <span className="text-blue-600">+12.3%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-2 rounded-full" style={{ width: '72%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Innovación Regional</span>
                <span className="text-purple-600">+5.7%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-purple-500 h-2 rounded-full" style={{ width: '67%' }}></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
