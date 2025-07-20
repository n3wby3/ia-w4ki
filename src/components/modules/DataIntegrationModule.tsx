import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { Database, Wifi, RefreshCw, AlertCircle, CheckCircle, Globe, Server } from "lucide-react";

interface DataSource {
  id: string;
  name: string;
  country: 'Peru' | 'Bolivia' | 'Chile';
  type: 'Government' | 'Commercial' | 'Academic';
  status: 'connected' | 'disconnected' | 'error' | 'syncing';
  lastSync: string;
  recordCount: number;
  apiHealth: number;
}

interface SyncJob {
  id: string;
  sourceId: string;
  sourceName: string;
  status: 'running' | 'completed' | 'failed' | 'scheduled';
  startTime: string;
  duration?: string;
  recordsProcessed: number;
  errorCount: number;
}

export const DataIntegrationModule = () => {
  const [selectedTab, setSelectedTab] = useState("sources");

  const mockDataSources: DataSource[] = [
    {
      id: "1",
      name: "SUNAT - Sistema Tributario",
      country: "Peru",
      type: "Government",
      status: "connected",
      lastSync: "2024-01-15 14:30",
      recordCount: 45680,
      apiHealth: 98
    },
    {
      id: "2",
      name: "SEACE - Contrataciones",
      country: "Peru",
      type: "Government",
      status: "connected",
      lastSync: "2024-01-15 14:25",
      recordCount: 12340,
      apiHealth: 95
    },
    {
      id: "3",
      name: "Fundempresa Bolivia",
      country: "Bolivia",
      type: "Government",
      status: "syncing",
      lastSync: "2024-01-15 13:45",
      recordCount: 23450,
      apiHealth: 87
    },
    {
      id: "4",
      name: "ChileCompra",
      country: "Chile",
      type: "Government",
      status: "connected",
      lastSync: "2024-01-15 14:35",
      recordCount: 34560,
      apiHealth: 92
    },
    {
      id: "5",
      name: "Aduana Chile",
      country: "Chile",
      type: "Government",
      status: "error",
      lastSync: "2024-01-15 10:15",
      recordCount: 78900,
      apiHealth: 45
    },
    {
      id: "6",
      name: "INE Bolivia",
      country: "Bolivia",
      type: "Government",
      status: "disconnected",
      lastSync: "2024-01-14 16:20",
      recordCount: 56780,
      apiHealth: 0
    }
  ];

  const mockSyncJobs: SyncJob[] = [
    {
      id: "1",
      sourceId: "3",
      sourceName: "Fundempresa Bolivia",
      status: "running",
      startTime: "2024-01-15 14:40",
      recordsProcessed: 15230,
      errorCount: 3
    },
    {
      id: "2",
      sourceId: "1",
      sourceName: "SUNAT",
      status: "completed",
      startTime: "2024-01-15 14:30",
      duration: "8m 45s",
      recordsProcessed: 2340,
      errorCount: 0
    },
    {
      id: "3",
      sourceId: "5",
      sourceName: "Aduana Chile",
      status: "failed",
      startTime: "2024-01-15 14:20",
      duration: "2m 15s",
      recordsProcessed: 0,
      errorCount: 1
    }
  ];

  const connectedSources = mockDataSources.filter(s => s.status === 'connected').length;
  const totalRecords = mockDataSources.reduce((acc, source) => acc + source.recordCount, 0);
  const avgHealth = mockDataSources.reduce((acc, source) => acc + source.apiHealth, 0) / mockDataSources.length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'connected': return 'bg-green-100 text-green-800';
      case 'disconnected': return 'bg-red-100 text-red-800';
      case 'error': return 'bg-red-100 text-red-800';
      case 'syncing': return 'bg-yellow-100 text-yellow-800';
      case 'running': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'failed': return 'bg-red-100 text-red-800';
      case 'scheduled': return 'bg-gray-100 text-gray-800';
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

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'connected': return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'syncing': return <RefreshCw className="w-4 h-4 text-yellow-600 animate-spin" />;
      case 'error':
      case 'disconnected': return <AlertCircle className="w-4 h-4 text-red-600" />;
      default: return <Database className="w-4 h-4 text-gray-600" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Integración Binacional</h2>
          <p className="text-gray-600">Conectores automáticos a fuentes de datos oficiales</p>
        </div>
        <Button>
          <RefreshCw className="w-4 h-4 mr-2" />
          Sincronizar Todo
        </Button>
      </div>

      {/* Integration Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Fuentes Conectadas</CardDescription>
            <CardTitle className="text-3xl text-green-600">{connectedSources}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <Database className="w-4 h-4 mr-1" />
              de {mockDataSources.length} fuentes
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Registros Totales</CardDescription>
            <CardTitle className="text-3xl text-blue-600">{totalRecords.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-blue-600">
              <Server className="w-4 h-4 mr-1" />
              Última sync: hoy
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Salud Promedio API</CardDescription>
            <CardTitle className="text-3xl text-purple-600">{avgHealth.toFixed(0)}%</CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={avgHealth} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Países Conectados</CardDescription>
            <CardTitle className="text-3xl text-orange-600">3</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-orange-600">
              <Globe className="w-4 h-4 mr-1" />
              Perú, Chile, Bolivia
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="sources">Fuentes de Datos</TabsTrigger>
          <TabsTrigger value="sync">Sincronización</TabsTrigger>
          <TabsTrigger value="mapping">Mapeo de Datos</TabsTrigger>
          <TabsTrigger value="monitoring">Monitoreo</TabsTrigger>
        </TabsList>

        <TabsContent value="sources" className="space-y-4">
          <div className="grid gap-4">
            {['Peru', 'Chile', 'Bolivia'].map((country) => (
              <Card key={country}>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <span className="mr-2">{getCountryFlag(country)}</span>
                    Fuentes de {country}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockDataSources.filter(source => source.country === country).map((source) => (
                      <div key={source.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getStatusIcon(source.status)}
                          <div>
                            <h3 className="font-medium">{source.name}</h3>
                            <p className="text-sm text-gray-600">
                              {source.recordCount.toLocaleString()} registros • {source.type}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="text-right text-sm">
                            <Badge className={getStatusColor(source.status)}>{source.status}</Badge>
                            <div className="text-gray-500 mt-1">Salud: {source.apiHealth}%</div>
                          </div>
                          <Switch checked={source.status === 'connected'} />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="sync" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Trabajos de Sincronización</CardTitle>
              <CardDescription>Estado actual de las sincronizaciones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSyncJobs.map((job) => (
                  <div key={job.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(job.status)}
                      <div>
                        <h3 className="font-medium">{job.sourceName}</h3>
                        <p className="text-sm text-gray-600">
                          Iniciado: {job.startTime}
                          {job.duration && ` • Duración: ${job.duration}`}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <Badge className={getStatusColor(job.status)}>{job.status}</Badge>
                      <div className="text-sm text-gray-600 mt-1">
                        {job.recordsProcessed.toLocaleString()} registros
                        {job.errorCount > 0 && (
                          <span className="text-red-600"> • {job.errorCount} errores</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="mapping" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Mapeo de Campos</CardTitle>
              <CardDescription>Configuración de mapeo entre fuentes de datos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Empresas / Entidades</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-600">SUNAT (Perú)</div>
                      <div>ruc → company_id</div>
                      <div>razon_social → company_name</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">Fundempresa (Bolivia)</div>
                      <div>nit → company_id</div>
                      <div>denominacion → company_name</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">SII (Chile)</div>
                      <div>rut → company_id</div>
                      <div>razon_social → company_name</div>
                    </div>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <h3 className="font-medium mb-2">Licitaciones / Contratos</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-600">SEACE (Perú)</div>
                      <div>codigoConvocatoria → tender_id</div>
                      <div>montoEstimado → amount</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">SICOES (Bolivia)</div>
                      <div>codigoContratacion → tender_id</div>
                      <div>presupuestoReferencial → amount</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-600">ChileCompra</div>
                      <div>codigoLicitacion → tender_id</div>
                      <div>montoEstimado → amount</div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="monitoring" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Monitoreo de APIs</CardTitle>
              <CardDescription>Estado de salud y rendimiento de las conexiones</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-medium mb-4">Tiempo de Respuesta (ms)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">SUNAT</span>
                      <span className="text-sm font-mono">245ms</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">ChileCompra</span>
                      <span className="text-sm font-mono">189ms</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Fundempresa</span>
                      <span className="text-sm font-mono">567ms</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-4">Errores (última hora)</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Rate Limit</span>
                      <span className="text-sm text-red-600">3</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Timeout</span>
                      <span className="text-sm text-red-600">1</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Server Error</span>
                      <span className="text-sm text-red-600">0</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};