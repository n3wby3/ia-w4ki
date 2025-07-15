
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Database, 
  Brain, 
  TrendingUp, 
  Globe 
} from "lucide-react";

interface StatsData {
  activeSources: number;
  aiAnalyses: number;
  accuracy: number;
  coverage: number;
}

interface IAndinaStatsProps {
  stats: StatsData;
}

export const IAndinaStats = ({ stats }: IAndinaStatsProps) => {
  return (
    <div className="grid md:grid-cols-4 gap-4">
      <Card>
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center">
            <Database className="w-4 h-4 mr-1" />
            Fuentes Activas
          </CardDescription>
          <CardTitle className="text-2xl">{stats.activeSources}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-green-600">
            ✓ Todas las fuentes operativas
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center">
            <Brain className="w-4 h-4 mr-1" />
            Análisis IA
          </CardDescription>
          <CardTitle className="text-2xl">{stats.aiAnalyses.toLocaleString()}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-blue-600">
            +15 en las últimas 24h
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center">
            <TrendingUp className="w-4 h-4 mr-1" />
            Precisión
          </CardDescription>
          <CardTitle className="text-2xl">{stats.accuracy}%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-green-600">
            +2% vs mes anterior
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="pb-2">
          <CardDescription className="flex items-center">
            <Globe className="w-4 h-4 mr-1" />
            Cobertura
          </CardDescription>
          <CardTitle className="text-2xl">{stats.coverage}%</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-xs text-blue-600">
            Arica-Tacna completo
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
