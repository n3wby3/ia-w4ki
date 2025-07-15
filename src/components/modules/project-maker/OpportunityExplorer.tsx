
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  Search,
  Filter,
  Star,
  TrendingUp,
  MapPin,
  DollarSign
} from "lucide-react";

interface Opportunity {
  id: number;
  title: string;
  description: string;
  sector: string;
  investment: string;
  roi: string;
  timeline: string;
  difficulty: string;
  matching: number;
  location: string;
  aiConfidence: number;
}

export const OpportunityExplorer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");

  const opportunities: Opportunity[] = [
    {
      id: 1,
      title: "Exportación de Palta Hass Premium",
      description: "Oportunidad en mercado asiático para productores de Tacna con certificación orgánica",
      sector: "Agricultura",
      investment: "50,000 USD",
      roi: "180%",
      timeline: "6 meses",
      difficulty: "Medio",
      matching: 92,
      location: "Tacna, Perú",
      aiConfidence: 87
    },
    {
      id: 2,
      title: "Plataforma E-commerce Fronteriza",
      description: "Marketplace digital especializado en comercio transfronterizo Arica-Tacna",
      sector: "Tecnología",
      investment: "25,000 USD",
      roi: "250%",
      timeline: "3 meses",
      difficulty: "Alto",
      matching: 78,
      location: "Arica-Tacna",
      aiConfidence: 94
    },
    {
      id: 3,
      title: "Turismo Gastronómico Binacional",
      description: "Ruta culinaria que conecte las tradiciones gastronómicas de ambas ciudades",
      sector: "Turismo",
      investment: "15,000 USD",
      roi: "145%",
      timeline: "4 meses",
      difficulty: "Bajo",
      matching: 85,
      location: "Frontera Arica-Tacna",
      aiConfidence: 91
    },
    {
      id: 4,
      title: "Centro de Logística Inteligente",
      description: "Hub de distribución con IA para optimizar flujos comerciales fronterizos",
      sector: "Logística",
      investment: "75,000 USD",
      roi: "220%",
      timeline: "8 meses",
      difficulty: "Alto",
      matching: 88,
      location: "Zona Franca Arica",
      aiConfidence: 89
    }
  ];

  const sectors = ["all", "Agricultura", "Tecnología", "Turismo", "Logística"];

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSector = selectedSector === "all" || opp.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Bajo': return 'default';
      case 'Medio': return 'secondary';
      case 'Alto': return 'destructive';
      default: return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Explorar Oportunidades</CardTitle>
        <CardDescription>
          Oportunidades detectadas automáticamente por IA en la región Arica-Tacna
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1">
            <Label htmlFor="search">Buscar oportunidades</Label>
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="search"
                placeholder="Ej: agricultura, tecnología, exportación..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex gap-2">
            {sectors.map((sector) => (
              <Button
                key={sector}
                variant={selectedSector === sector ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedSector(sector)}
              >
                {sector === "all" ? "Todos" : sector}
              </Button>
            ))}
          </div>
          
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Más Filtros
          </Button>
        </div>

        <div className="space-y-4">
          {filteredOpportunities.map((opportunity) => (
            <div key={opportunity.id} className="border rounded-lg p-4 hover:bg-gray-50 transition-colors">
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-semibold text-lg">{opportunity.title}</h3>
                    <Badge variant="outline">{opportunity.sector}</Badge>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{opportunity.matching}% match</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-3">{opportunity.description}</p>
                  
                  <div className="flex items-center space-x-4 text-xs text-gray-500 mb-3">
                    <div className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {opportunity.location}
                    </div>
                    <div className="flex items-center">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      IA Confianza: {opportunity.aiConfidence}%
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Inversión:</span>
                      <div className="font-medium flex items-center">
                        <DollarSign className="w-3 h-3 mr-1" />
                        {opportunity.investment}
                      </div>
                    </div>
                    <div>
                      <span className="text-gray-500">ROI Estimado:</span>
                      <div className="font-medium text-green-600">{opportunity.roi}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Timeline:</span>
                      <div className="font-medium">{opportunity.timeline}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Dificultad:</span>
                      <Badge variant={getDifficultyColor(opportunity.difficulty)} className="text-xs">
                        {opportunity.difficulty}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm">
                    Ver Detalles
                  </Button>
                  <Button size="sm">
                    Aplicar
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
