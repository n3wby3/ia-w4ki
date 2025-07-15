
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RefreshCw, CheckCircle, AlertTriangle, Clock } from "lucide-react";

interface DataSource {
  name: string;
  status: 'active' | 'warning' | 'error';
  lastUpdate: string;
  recordsToday: number;
}

interface DataSourcesProps {
  onRefresh: () => void;
  isRefreshing: boolean;
}

export const DataSources = ({ onRefresh, isRefreshing }: DataSourcesProps) => {
  const commercialSources: DataSource[] = [
    { name: "SUNAT Perú", status: 'active', lastUpdate: "hace 15 min", recordsToday: 342 },
    { name: "Aduanas Chile", status: 'active', lastUpdate: "hace 8 min", recordsToday: 198 },
    { name: "Banco Central Chile", status: 'warning', lastUpdate: "hace 2 horas", recordsToday: 45 },
    { name: "Cámara de Comercio Tacna", status: 'active', lastUpdate: "hace 30 min", recordsToday: 67 }
  ];

  const mediaSources: DataSource[] = [
    { name: "La Estrella de Arica", status: 'active', lastUpdate: "hace 5 min", recordsToday: 23 },
    { name: "Correo Tacna", status: 'active', lastUpdate: "hace 12 min", recordsToday: 18 },
    { name: "El Pueblo Tacna", status: 'warning', lastUpdate: "hace 4 horas", recordsToday: 7 },
    { name: "Diario UTA", status: 'active', lastUpdate: "hace 25 min", recordsToday: 12 }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'active':
        return <CheckCircle className="w-4 h-4 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="w-4 h-4 text-yellow-600" />;
      case 'error':
        return <AlertTriangle className="w-4 h-4 text-red-600" />;
      default:
        return <Clock className="w-4 h-4 text-gray-600" />;
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Activo';
      case 'warning': return 'Intermitente';
      case 'error': return 'Error';
      default: return 'Desconocido';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'text-green-600';
      case 'warning': return 'text-yellow-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  const SourceList = ({ title, sources }: { title: string; sources: DataSource[] }) => (
    <div className="space-y-3">
      <h4 className="font-medium flex items-center justify-between">
        {title}
        <Badge variant="outline" className="text-xs">
          {sources.filter(s => s.status === 'active').length}/{sources.length}
        </Badge>
      </h4>
      <div className="space-y-2">
        {sources.map((source, index) => (
          <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
            <div className="flex items-center space-x-2">
              {getStatusIcon(source.status)}
              <span className="text-sm font-medium">{source.name}</span>
            </div>
            <div className="text-right">
              <div className={`text-xs ${getStatusColor(source.status)}`}>
                {getStatusText(source.status)}
              </div>
              <div className="text-xs text-gray-500">
                {source.recordsToday} registros hoy
              </div>
              <div className="text-xs text-gray-400">
                {source.lastUpdate}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Fuentes de Datos</CardTitle>
            <CardDescription>
              Monitoreo automático de múltiples fuentes
            </CardDescription>
          </div>
          <Button 
            variant="outline" 
            size="sm"
            onClick={onRefresh}
            disabled={isRefreshing}
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isRefreshing ? 'animate-spin' : ''}`} />
            Actualizar
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid md:grid-cols-2 gap-6">
          <SourceList title="Datos Comerciales" sources={commercialSources} />
          <SourceList title="Medios Locales" sources={mediaSources} />
        </div>
      </CardContent>
    </Card>
  );
};
