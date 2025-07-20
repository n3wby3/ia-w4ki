import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Crown, Users, TrendingUp, Lock, CheckCircle, XCircle, Star } from "lucide-react";

interface PlanFeature {
  name: string;
  free: boolean | number;
  premium: boolean | number;
  enterprise: boolean | number;
}

interface Subscription {
  id: string;
  userId: string;
  userEmail: string;
  plan: 'free' | 'premium' | 'enterprise';
  status: 'active' | 'expired' | 'cancelled';
  startDate: string;
  endDate?: string;
  revenue: number;
}

export const FreemiumModule = () => {
  const [selectedTab, setSelectedTab] = useState("overview");

  const planFeatures: PlanFeature[] = [
    { name: "Análisis IA por mes", free: 5, premium: 50, enterprise: 500 },
    { name: "Proyectos simultáneos", free: 1, premium: 10, enterprise: 100 },
    { name: "Exportación de reportes", free: false, premium: true, enterprise: true },
    { name: "Soporte prioritario", free: false, premium: true, enterprise: true },
    { name: "Datos en tiempo real", free: false, premium: true, enterprise: true },
    { name: "API Access", free: false, premium: false, enterprise: true },
    { name: "Integración personalizada", free: false, premium: false, enterprise: true }
  ];

  const mockSubscriptions: Subscription[] = [
    {
      id: "1",
      userId: "user1",
      userEmail: "maria@emprendedor.com",
      plan: "premium",
      status: "active",
      startDate: "2024-01-01",
      endDate: "2024-02-01",
      revenue: 29
    },
    {
      id: "2",
      userId: "user2",
      userEmail: "carlos@estudiante.edu",
      plan: "free",
      status: "active",
      startDate: "2024-01-10",
      revenue: 0
    },
    {
      id: "3",
      userId: "user3",
      userEmail: "contacto@uta.cl",
      plan: "enterprise",
      status: "active",
      startDate: "2023-12-01",
      endDate: "2024-12-01",
      revenue: 199
    }
  ];

  const freeUsers = mockSubscriptions.filter(s => s.plan === 'free').length;
  const premiumUsers = mockSubscriptions.filter(s => s.plan === 'premium').length;
  const enterpriseUsers = mockSubscriptions.filter(s => s.plan === 'enterprise').length;
  const totalUsers = mockSubscriptions.length;
  const monthlyRevenue = mockSubscriptions.reduce((acc, sub) => acc + sub.revenue, 0);

  const conversionRate = ((premiumUsers + enterpriseUsers) / totalUsers * 100).toFixed(1);

  const renderFeatureValue = (value: boolean | number) => {
    if (typeof value === 'boolean') {
      return value ? <CheckCircle className="w-4 h-4 text-green-600" /> : <XCircle className="w-4 h-4 text-red-600" />;
    }
    return value.toString();
  };

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'free': return 'bg-gray-100 text-gray-800';
      case 'premium': return 'bg-blue-100 text-blue-800';
      case 'enterprise': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Sistema Freemium</h2>
          <p className="text-gray-600">Gestión de planes y suscripciones</p>
        </div>
        <Button>
          <Crown className="w-4 h-4 mr-2" />
          Configurar Planes
        </Button>
      </div>

      {/* Revenue Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Ingresos Mensuales</CardDescription>
            <CardTitle className="text-3xl text-green-600">${monthlyRevenue}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +24% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Usuarios Premium</CardDescription>
            <CardTitle className="text-3xl text-blue-600">{premiumUsers + enterpriseUsers}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">
              Conversión: {conversionRate}%
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Usuarios Gratuitos</CardDescription>
            <CardTitle className="text-3xl text-gray-600">{freeUsers}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              {((freeUsers / totalUsers) * 100).toFixed(1)}% del total
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>ARPU (Promedio)</CardDescription>
            <CardTitle className="text-3xl text-purple-600">${(monthlyRevenue / totalUsers).toFixed(0)}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">Por usuario/mes</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Resumen</TabsTrigger>
          <TabsTrigger value="plans">Planes</TabsTrigger>
          <TabsTrigger value="subscriptions">Suscripciones</TabsTrigger>
          <TabsTrigger value="limitations">Limitaciones</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-4">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
                  Plan Gratuito
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{freeUsers}</div>
                <p className="text-sm text-gray-600">usuarios activos</p>
                <Progress value={(freeUsers / totalUsers) * 100} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                  Plan Premium
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{premiumUsers}</div>
                <p className="text-sm text-gray-600">usuarios activos</p>
                <Progress value={(premiumUsers / totalUsers) * 100} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                  Plan Enterprise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{enterpriseUsers}</div>
                <p className="text-sm text-gray-600">usuarios activos</p>
                <Progress value={(enterpriseUsers / totalUsers) * 100} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="plans" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Comparación de Planes</CardTitle>
              <CardDescription>Características y limitaciones por plan</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left p-2">Característica</th>
                      <th className="text-center p-2">Gratuito</th>
                      <th className="text-center p-2">Premium ($29/mes)</th>
                      <th className="text-center p-2">Enterprise ($199/mes)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {planFeatures.map((feature, index) => (
                      <tr key={index} className="border-b">
                        <td className="p-2 font-medium">{feature.name}</td>
                        <td className="text-center p-2">{renderFeatureValue(feature.free)}</td>
                        <td className="text-center p-2">{renderFeatureValue(feature.premium)}</td>
                        <td className="text-center p-2">{renderFeatureValue(feature.enterprise)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="subscriptions" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Suscripciones Activas</CardTitle>
              <CardDescription>Gestión de usuarios premium</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSubscriptions.map((subscription) => (
                  <div key={subscription.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{subscription.userEmail}</h3>
                        <Badge className={getPlanColor(subscription.plan)}>
                          {subscription.plan}
                        </Badge>
                        {subscription.plan !== 'free' && (
                          <Star className="w-4 h-4 text-yellow-500" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">
                        Desde: {subscription.startDate}
                        {subscription.endDate && ` hasta: ${subscription.endDate}`}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold">${subscription.revenue}/mes</div>
                      <div className="text-sm text-gray-600">{subscription.status}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="limitations" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Configuración de Limitaciones</CardTitle>
              <CardDescription>Define qué pueden hacer los usuarios gratuitos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Límite de análisis IA diarios</h3>
                    <p className="text-sm text-gray-600">Usuarios gratuitos: 5 análisis por día</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Acceso a datos históricos</h3>
                    <p className="text-sm text-gray-600">Solo últimos 30 días para usuarios gratuitos</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Exportación de reportes</h3>
                    <p className="text-sm text-gray-600">Requiere suscripción premium</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Watermark en contenido</h3>
                    <p className="text-sm text-gray-600">Marca de agua en reportes gratuitos</p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Anuncios en interfaz</h3>
                    <p className="text-sm text-gray-600">Mostrar publicidad a usuarios gratuitos</p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};