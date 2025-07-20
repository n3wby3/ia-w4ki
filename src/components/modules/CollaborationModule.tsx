import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Users, Heart, MessageCircle, UserPlus, Search, Linkedin, Twitter, Globe, Star } from "lucide-react";

interface Entrepreneur {
  id: string;
  name: string;
  email: string;
  sector: string;
  country: 'Peru' | 'Chile' | 'Bolivia';
  experience: string;
  skills: string[];
  lookingFor: string[];
  projects: number;
  connections: number;
  rating: number;
  isOnline: boolean;
  lastSeen: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
}

interface MatchSuggestion {
  id: string;
  entrepreneur1Id: string;
  entrepreneur2Id: string;
  matchScore: number;
  commonInterests: string[];
  complementarySkills: string[];
  suggestedCollaboration: string;
  status: 'suggested' | 'accepted' | 'declined' | 'pending';
}

interface NetworkingEvent {
  id: string;
  title: string;
  type: 'virtual' | 'presencial' | 'hybrid';
  date: string;
  time: string;
  participants: number;
  maxParticipants: number;
  location: string;
  description: string;
  tags: string[];
  status: 'upcoming' | 'ongoing' | 'completed';
}

export const CollaborationModule = () => {
  const [selectedTab, setSelectedTab] = useState("networking");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSector, setSelectedSector] = useState("all");

  const mockEntrepreneurs: Entrepreneur[] = [
    {
      id: "1",
      name: "María González",
      email: "maria@emprendedor.com",
      sector: "Tecnología",
      country: "Chile",
      experience: "5+ años",
      skills: ["Desarrollo Web", "Marketing Digital", "Gestión de Proyectos"],
      lookingFor: ["Socio Técnico", "Inversión", "Mentor"],
      projects: 3,
      connections: 45,
      rating: 4.8,
      isOnline: true,
      lastSeen: "Ahora",
      bio: "Fundadora de startup de comercio electrónico enfocada en productos artesanales andinos.",
      socialLinks: {
        linkedin: "linkedin.com/in/maria-gonzalez",
        website: "mariagonzalez.com"
      }
    },
    {
      id: "2",
      name: "Carlos Mendoza",
      email: "carlos@agro.pe",
      sector: "Agropecuario",
      country: "Peru",
      experience: "8+ años",
      skills: ["Agricultura Sostenible", "Exportación", "Certificaciones"],
      lookingFor: ["Distribuidor", "Financiamiento", "Tecnología"],
      projects: 2,
      connections: 38,
      rating: 4.6,
      isOnline: false,
      lastSeen: "hace 2 horas",
      bio: "Especialista en cultivos andinos con enfoque en exportación de superalimentos.",
      socialLinks: {
        linkedin: "linkedin.com/in/carlos-mendoza"
      }
    },
    {
      id: "3",
      name: "Ana Silva",
      email: "ana@logistica.bo",
      sector: "Logística",
      country: "Bolivia",
      experience: "6+ años",
      skills: ["Supply Chain", "Comercio Internacional", "Negociación"],
      lookingFor: ["Socios Comerciales", "Nuevos Mercados", "Alianzas"],
      projects: 4,
      connections: 52,
      rating: 4.9,
      isOnline: true,
      lastSeen: "Ahora",
      bio: "Experta en logística fronteriza y comercio entre países andinos.",
      socialLinks: {
        linkedin: "linkedin.com/in/ana-silva",
        twitter: "twitter.com/anasilva",
        website: "anasilva.com"
      }
    },
    {
      id: "4",
      name: "Roberto Castro",
      email: "roberto@energia.cl",
      sector: "Energía",
      country: "Chile",
      experience: "10+ años",
      skills: ["Energías Renovables", "Gestión de Proyectos", "Sostenibilidad"],
      lookingFor: ["Inversores", "Gobierno", "Comunidades"],
      projects: 1,
      connections: 67,
      rating: 4.7,
      isOnline: false,
      lastSeen: "hace 1 día",
      bio: "Ingeniero especializado en proyectos de energía solar para comunidades rurales.",
      socialLinks: {
        linkedin: "linkedin.com/in/roberto-castro"
      }
    }
  ];

  const mockMatches: MatchSuggestion[] = [
    {
      id: "1",
      entrepreneur1Id: "1",
      entrepreneur2Id: "2",
      matchScore: 85,
      commonInterests: ["Exportación", "Productos Andinos"],
      complementarySkills: ["Tecnología + Agricultura", "Marketing + Productos"],
      suggestedCollaboration: "Plataforma de comercialización de productos agrícolas",
      status: "suggested"
    },
    {
      id: "2",
      entrepreneur1Id: "3",
      entrepreneur2Id: "4",
      matchScore: 78,
      commonInterests: ["Sostenibilidad", "Proyectos Comunitarios"],
      complementarySkills: ["Logística + Energía", "Supply Chain + Renovables"],
      suggestedCollaboration: "Distribución de equipos de energía solar",
      status: "pending"
    }
  ];

  const mockEvents: NetworkingEvent[] = [
    {
      id: "1",
      title: "Demo Day Macro Región Andina",
      type: "hybrid",
      date: "2024-02-15",
      time: "16:00",
      participants: 45,
      maxParticipants: 100,
      location: "Arica, Chile / Virtual",
      description: "Presentación de proyectos innovadores de la región andina",
      tags: ["Innovación", "Emprendimiento", "Inversión"],
      status: "upcoming"
    },
    {
      id: "2",
      title: "Networking Virtual Exportadores",
      type: "virtual",
      date: "2024-02-10",
      time: "19:00",
      participants: 67,
      maxParticipants: 80,
      location: "Zoom",
      description: "Encuentro de emprendedores enfocados en exportación",
      tags: ["Exportación", "Comercio", "B2B"],
      status: "upcoming"
    },
    {
      id: "3",
      title: "Workshop Comercio Fronterizo",
      type: "presencial",
      date: "2024-02-20",
      time: "09:00",
      participants: 25,
      maxParticipants: 30,
      location: "Tacna, Perú",
      description: "Taller práctico sobre regulaciones y oportunidades fronterizas",
      tags: ["Comercio", "Regulaciones", "Frontera"],
      status: "upcoming"
    }
  ];

  const getCountryFlag = (country: string) => {
    switch (country) {
      case 'Peru': return '🇵🇪';
      case 'Bolivia': return '🇧🇴';
      case 'Chile': return '🇨🇱';
      default: return '🌐';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'suggested': return 'bg-blue-100 text-blue-800';
      case 'accepted': return 'bg-green-100 text-green-800';
      case 'declined': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      case 'ongoing': return 'bg-green-100 text-green-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventTypeColor = (type: string) => {
    switch (type) {
      case 'virtual': return 'bg-blue-100 text-blue-800';
      case 'presencial': return 'bg-green-100 text-green-800';
      case 'hybrid': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredEntrepreneurs = mockEntrepreneurs.filter(entrepreneur => {
    const matchesSearch = entrepreneur.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entrepreneur.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         entrepreneur.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesSector = selectedSector === "all" || entrepreneur.sector === selectedSector;
    return matchesSearch && matchesSector;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Colaboración y Redes</h2>
          <p className="text-gray-600">Sistema de matching y networking entre emprendedores</p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Conectar
        </Button>
      </div>

      {/* Network Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Emprendedores Activos</CardDescription>
            <CardTitle className="text-3xl text-blue-600">{mockEntrepreneurs.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-blue-600">
              <Users className="w-4 h-4 mr-1" />
              En 3 países
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Matches Sugeridos</CardDescription>
            <CardTitle className="text-3xl text-green-600">{mockMatches.length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-green-600">
              <Heart className="w-4 h-4 mr-1" />
              Esta semana
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Eventos Programados</CardDescription>
            <CardTitle className="text-3xl text-purple-600">{mockEvents.filter(e => e.status === 'upcoming').length}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-purple-600">
              <MessageCircle className="w-4 h-4 mr-1" />
              Próximos 30 días
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Conexiones Totales</CardDescription>
            <CardTitle className="text-3xl text-orange-600">
              {mockEntrepreneurs.reduce((acc, e) => acc + e.connections, 0)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">Red regional</div>
          </CardContent>
        </Card>
      </div>

      <Tabs value={selectedTab} onValueChange={setSelectedTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="networking">Red de Contactos</TabsTrigger>
          <TabsTrigger value="matches">Matches IA</TabsTrigger>
          <TabsTrigger value="events">Eventos</TabsTrigger>
          <TabsTrigger value="messages">Mensajes</TabsTrigger>
        </TabsList>

        <TabsContent value="networking" className="space-y-4">
          {/* Search and Filters */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar emprendedores..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <Select value={selectedSector} onValueChange={setSelectedSector}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filtrar por sector" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los sectores</SelectItem>
                <SelectItem value="Tecnología">Tecnología</SelectItem>
                <SelectItem value="Agropecuario">Agropecuario</SelectItem>
                <SelectItem value="Logística">Logística</SelectItem>
                <SelectItem value="Energía">Energía</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Entrepreneurs Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {filteredEntrepreneurs.map((entrepreneur) => (
              <Card key={entrepreneur.id}>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src="" />
                        <AvatarFallback>{entrepreneur.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {entrepreneur.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-bold">{entrepreneur.name}</h3>
                        <span className="text-lg">{getCountryFlag(entrepreneur.country)}</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm">{entrepreneur.rating}</span>
                        </div>
                      </div>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>{entrepreneur.sector} • {entrepreneur.experience}</p>
                        <p>{entrepreneur.bio}</p>
                        <p>Última vez: {entrepreneur.lastSeen}</p>
                      </div>
                      
                      <div className="mt-3 space-y-2">
                        <div>
                          <span className="text-xs font-medium text-gray-500">HABILIDADES:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {entrepreneur.skills.slice(0, 3).map((skill, index) => (
                              <Badge key={index} variant="outline" className="text-xs">{skill}</Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <span className="text-xs font-medium text-gray-500">BUSCA:</span>
                          <div className="flex flex-wrap gap-1 mt-1">
                            {entrepreneur.lookingFor.slice(0, 2).map((looking, index) => (
                              <Badge key={index} variant="outline" className="text-xs bg-blue-50">{looking}</Badge>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4">
                        <div className="flex space-x-1">
                          {entrepreneur.socialLinks?.linkedin && (
                            <Button variant="ghost" size="sm" className="p-1">
                              <Linkedin className="w-4 h-4" />
                            </Button>
                          )}
                          {entrepreneur.socialLinks?.twitter && (
                            <Button variant="ghost" size="sm" className="p-1">
                              <Twitter className="w-4 h-4" />
                            </Button>
                          )}
                          {entrepreneur.socialLinks?.website && (
                            <Button variant="ghost" size="sm" className="p-1">
                              <Globe className="w-4 h-4" />
                            </Button>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Mensaje
                          </Button>
                          <Button size="sm">
                            <UserPlus className="w-4 h-4 mr-1" />
                            Conectar
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="matches" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Matches Sugeridos por IA</CardTitle>
              <CardDescription>Conexiones potenciales basadas en compatibilidad</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockMatches.map((match) => {
                  const entrepreneur1 = mockEntrepreneurs.find(e => e.id === match.entrepreneur1Id);
                  const entrepreneur2 = mockEntrepreneurs.find(e => e.id === match.entrepreneur2Id);
                  
                  return (
                    <div key={match.id} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarFallback>{entrepreneur1?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{entrepreneur1?.name}</span>
                          </div>
                          <Heart className="w-5 h-5 text-pink-500" />
                          <div className="flex items-center space-x-2">
                            <Avatar>
                              <AvatarFallback>{entrepreneur2?.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <span className="font-medium">{entrepreneur2?.name}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="text-right">
                            <div className="text-2xl font-bold text-green-600">{match.matchScore}%</div>
                            <div className="text-sm text-gray-600">compatibilidad</div>
                          </div>
                          <Badge className={getStatusColor(match.status)}>{match.status}</Badge>
                        </div>
                      </div>
                      
                      <div className="space-y-2 text-sm">
                        <div>
                          <span className="font-medium">Intereses comunes:</span>
                          <span className="ml-2">{match.commonInterests.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-medium">Habilidades complementarias:</span>
                          <span className="ml-2">{match.complementarySkills.join(', ')}</span>
                        </div>
                        <div>
                          <span className="font-medium">Colaboración sugerida:</span>
                          <span className="ml-2">{match.suggestedCollaboration}</span>
                        </div>
                      </div>
                      
                      {match.status === 'suggested' && (
                        <div className="flex space-x-2 mt-4">
                          <Button size="sm">
                            Conectar
                          </Button>
                          <Button variant="outline" size="sm">
                            Más tarde
                          </Button>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="events" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Eventos de Networking</CardTitle>
              <CardDescription>Encuentros virtuales y presenciales</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {mockEvents.map((event) => (
                  <div key={event.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="font-medium">{event.title}</h3>
                        <Badge className={getEventTypeColor(event.type)}>{event.type}</Badge>
                        <Badge className={getStatusColor(event.status)}>{event.status}</Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{event.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span>{event.date} • {event.time}</span>
                        <span>{event.location}</span>
                        <span>{event.participants}/{event.maxParticipants} participantes</span>
                      </div>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {event.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">{tag}</Badge>
                        ))}
                      </div>
                    </div>
                    <div className="ml-4">
                      <Button>
                        Registrarse
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Centro de Mensajes</CardTitle>
              <CardDescription>Comunicación directa con tu red</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <Avatar>
                    <AvatarFallback>AM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Ana Silva</h3>
                      <span className="text-xs text-gray-500">hace 5 min</span>
                    </div>
                    <p className="text-sm text-gray-600">¿Te interesa colaborar en el proyecto de logística?</p>
                  </div>
                  <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <Avatar>
                    <AvatarFallback>CM</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Carlos Mendoza</h3>
                      <span className="text-xs text-gray-500">hace 2 horas</span>
                    </div>
                    <p className="text-sm text-gray-600">Gracias por conectar, hablemos sobre exportación.</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 p-3 border rounded-lg hover:bg-gray-50">
                  <Avatar>
                    <AvatarFallback>RC</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Roberto Castro</h3>
                      <span className="text-xs text-gray-500">ayer</span>
                    </div>
                    <p className="text-sm text-gray-600">Me interesa tu propuesta de energía solar comunitaria.</p>
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