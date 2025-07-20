import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { DollarSign, TrendingUp, Users, Eye, Calendar, Target } from "lucide-react";

interface Sponsor {
  id: string;
  name: string;
  type: 'TPA' | 'Cooperativa' | 'Gremio' | 'Corporacion';
  plan: 'Basic' | 'Premium' | 'Enterprise';
  monthlyBudget: number;
  spent: number;
  campaigns: number;
  status: 'active' | 'paused';
}

interface Campaign {
  id: string;
  sponsorId: string;
  title: string;
  budget: number;
  spent: number;
  impressions: number;
  clicks: number;
  status: 'active' | 'completed' | 'paused';
  startDate: string;
  endDate: string;
}

export const SponsorshipModule = () => {
  const [selectedTab, setSelectedTab] = useState("sponsors");

  const mockSponsors: Sponsor[] = [
    {
      id: "1",
      name: "TPA Arica",
      type: "TPA",
      plan: "Premium",
      monthlyBudget: 5000,
      spent: 3200,
      campaigns: 3,
      status: "active"
    },
    {
      id: "2",
      name: "Cooperativa Frontera Norte",
      type: "Cooperativa",
      plan: "Enterprise",
      monthlyBudget: 8000,
      spent: 6100,
      campaigns: 5,
      status: "active"
    },
    {
      id: "3",
      name: "Gremio Exportadores Chile",
      type: "Gremio",
      plan: "Basic",
      monthlyBudget: 2000,
      spent: 1800,
      campaigns: 2,
      status: "paused"
    }
  ];

  const mockCampaigns: Campaign[] = [
    {
      id: "1",
      sponsorId: "1",
      title: "Promoción Zona Franca Arica",
      budget: 2000,
      spent: 1200,
      impressions: 15680,
      clicks: 234,
      status: "active",
      startDate: "2024-01-01",
      endDate: "2024-01-31"
    },
    {
      id: "2",
      sponsorId: "2",
      title: "Oportunidades Exportación Peru",
      budget: 3000,
      spent: 2800,
      impressions: 25430,
      clicks: 456,
      status: "active",
      startDate: "2024-01-15",
      endDate: "2024-02-15"
    }
  ];

  const totalRevenue = mockSponsors.reduce((acc, sponsor) => acc + sponsor.spent, 0);
  const totalBudget = mockSponsors.reduce((acc, sponsor) => acc + sponsor.monthlyBudget, 0);

  const getPlanColor = (plan: string) => {
    switch (plan) {
      case 'Basic': return 'bg-gray-100 text-gray-800';
      case 'Premium': return 'bg-blue-100 text-blue-800';
      case 'Enterprise': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'paused': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Patrocinios y Monetización</h2>
          <p className="text-gray-600">Gestiona marcas patrocinadoras y campañas publicitarias</p>
        </div>
        <Button>
          <DollarSign className="w-4 h-4 mr-2" />
          Nueva Campaña
        </Button>
      </div>

      {/* Revenue Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Ingresos del Mes</CardDescription>
            <CardTitle className="text-3xl text-green-600">${totalRevenue.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="w-4 h-4 mr-1" />
              +18% vs mes anterior
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Presupuesto Total</CardDescription>
            <CardTitle className="text-3xl text-blue-600">${totalBudget.toLocaleString()}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">
              {((totalRevenue / totalBudget) * 100).toFixed(1)}% ejecutado
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Patrocinadores Activos</CardDescription>
            <CardTitle className="text-3xl text-purple-600">{mockSponsors.filter(s => s.status === 'active').length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-purple-600">
              <Users className="w-4 h-4 mr-1" />
              {mockSponsors.length} total
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Campañas Activas</CardDescription>
            <CardTitle className="text-3xl text-orange-600">{mockCampaigns.filter(c => c.status === 'active').length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-orange-600">
              <Target className="w-4 h-4 mr-1" />
              {mockCampaigns.length} total
            </div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="sponsors">Patrocinadores</TabsTrigger>
          <TabsTrigger value="campaigns">Campañas</TabsTrigger>
          <TabsTrigger value="billing">Facturación</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
        </TabsList>

        <TabsContent value="sponsors" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Patrocinadores Registrados</CardTitle>
              <CardDescription>TPAs, Cooperativas y Gremios activos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockSponsors.map((sponsor) => (
                  <div key={sponsor.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{sponsor.name}</h3>
                        <Badge className={getPlanColor(sponsor.plan)}>{sponsor.plan}</Badge>
                        <Badge className={getStatusColor(sponsor.status)}>{sponsor.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">Tipo: {sponsor.type}</p>
                      <p className="text-sm text-gray-600">{sponsor.campaigns} campañas activas</p>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-lg font-bold">${sponsor.spent.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">de ${sponsor.monthlyBudget.toLocaleString()}</div>
                      <Progress value={(sponsor.spent / sponsor.monthlyBudget) * 100} className="w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Campañas Publicitarias</CardTitle>
              <CardDescription>Anuncios en contenidos de WAKI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockCampaigns.map((campaign) => (
                  <div key={campaign.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="space-y-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium">{campaign.title}</h3>
                        <Badge className={getStatusColor(campaign.status)}>{campaign.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {campaign.startDate} - {campaign.endDate}
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {campaign.impressions.toLocaleString()} impresiones
                        </div>
                        <div>
                          {campaign.clicks} clicks
                        </div>
                      </div>
                    </div>
                    <div className="text-right space-y-1">
                      <div className="text-lg font-bold">${campaign.spent.toLocaleString()}</div>
                      <div className="text-sm text-gray-600">de ${campaign.budget.toLocaleString()}</div>
                      <Progress value={(campaign.spent / campaign.budget) * 100} className="w-24" />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Facturación</CardTitle>
              <CardDescription>Gestión de pagos y facturación automática</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Facturación Pendiente</h3>
                    <div className="text-2xl font-bold text-orange-600">$4,200</div>
                    <p className="text-sm text-gray-600">3 facturas por generar</p>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h3 className="font-medium mb-2">Pagos Recibidos</h3>
                    <div className="text-2xl font-bold text-green-600">$11,100</div>
                    <p className="text-sm text-gray-600">Este mes</p>
                  </div>
                </div>
                <Button className="w-full">
                  <Calendar className="w-4 h-4 mr-2" />
                  Generar Facturas Mensuales
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="analytics" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Analytics de Campañas</CardTitle>
              <CardDescription>Métricas de rendimiento y ROI</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-blue-600">2.8%</div>
                  <p className="text-sm text-gray-600">CTR Promedio</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-green-600">$0.24</div>
                  <p className="text-sm text-gray-600">CPC Promedio</p>
                </div>
                <div className="p-4 border rounded-lg text-center">
                  <div className="text-2xl font-bold text-purple-600">180%</div>
                  <p className="text-sm text-gray-600">ROI Promedio</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};