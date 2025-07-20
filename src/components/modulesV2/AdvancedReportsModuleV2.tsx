import { FC } from "react";
import Module from ".";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

const AdvancedReportsModuleV2: FC = () => {
  const chartData = [
    { month: "Enero", desktop: 186 },
    { month: "Febrero", desktop: 305 },
    { month: "Marzo", desktop: 237 },
    { month: "Abril", desktop: 73 },
    { month: "Mayo", desktop: 209 },
    { month: "Junio", desktop: 214 },
  ];

  return (
    <Module
      title="Sistema de Reportería Avanzada"
      description="Dashboards personalizados por tipo de usuario. Exportación de reportes. Análisis predictivo."
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Reporte de Oportunidades</CardTitle>
              <CardDescription>
                Enero - Junio 2024
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ChartContainer
                config={{
                  desktop: {
                    label: "Oportunidades",
                    color: "hsl(var(--primary))",
                  },
                }}
                className="min-h-[200px] w-full"
              >
                <BarChart data={chartData}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>
          <div className="grid gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Métricas Clave</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-center">
                  <div>Nuevos usuarios este mes</div>
                  <div className="font-bold ml-auto">1,204</div>
                </div>
                <div className="flex items-center">
                  <div>Proyectos iniciados</div>
                  <div className="font-bold ml-auto">320</div>
                </div>
                <div className="flex items-center">
                  <div>Tasa de conversión</div>
                  <div className="font-bold ml-auto">12.5%</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Exportar Reportes</CardTitle>
              </CardHeader>
              <CardContent>
                <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                  Exportar a PDF
                </button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Module>
  );
};

export default AdvancedReportsModuleV2;