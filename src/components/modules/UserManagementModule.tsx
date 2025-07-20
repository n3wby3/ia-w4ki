import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Users, UserPlus, Shield, Edit, Trash2, Search } from "lucide-react";

interface User {
  id: string;
  name: string;
  email: string;
  role: 'emprendedor' | 'estudiante' | 'institucion';
  status: 'active' | 'inactive' | 'pending';
  lastLogin: string;
  projects: number;
  verified: boolean;
}

export const UserManagementModule = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("all");

  const mockUsers: User[] = [
    {
      id: "1",
      name: "María González",
      email: "maria@emprendedor.com",
      role: "emprendedor",
      status: "active",
      lastLogin: "2024-01-15",
      projects: 3,
      verified: true
    },
    {
      id: "2",
      name: "Universidad de Tarapacá",
      email: "contacto@uta.cl",
      role: "institucion",
      status: "active",
      lastLogin: "2024-01-14",
      projects: 12,
      verified: true
    },
    {
      id: "3",
      name: "Carlos Mendoza",
      email: "carlos@estudiante.edu",
      role: "estudiante",
      status: "pending",
      lastLogin: "2024-01-10",
      projects: 1,
      verified: false
    },
    {
      id: "4",
      name: "Ana Silva",
      email: "ana@emprendedora.pe",
      role: "emprendedor",
      status: "active",
      lastLogin: "2024-01-13",
      projects: 5,
      verified: true
    }
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'emprendedor': return 'bg-green-100 text-green-800';
      case 'institucion': return 'bg-blue-100 text-blue-800';
      case 'estudiante': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-800';
      case 'inactive': return 'bg-red-100 text-red-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredUsers = mockUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRole = selectedRole === "all" || user.role === selectedRole;
    return matchesSearch && matchesRole;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h2>
          <p className="text-gray-600">Administra emprendedores, estudiantes e instituciones</p>
        </div>
        <Button>
          <UserPlus className="w-4 h-4 mr-2" />
          Nuevo Usuario
        </Button>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Total Usuarios</CardDescription>
            <CardTitle className="text-3xl text-blue-600">1,247</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center text-sm text-blue-600">
              <Users className="w-4 h-4 mr-1" />
              +32 este mes
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Emprendedores</CardDescription>
            <CardTitle className="text-3xl text-green-600">856</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">68.7% del total</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Instituciones</CardDescription>
            <CardTitle className="text-3xl text-purple-600">45</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">3.6% del total</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardDescription>Estudiantes</CardDescription>
            <CardTitle className="text-3xl text-orange-600">346</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-sm text-gray-600">27.7% del total</div>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="users" className="space-y-4">
        <TabsList>
          <TabsTrigger value="users">Usuarios</TabsTrigger>
          <TabsTrigger value="roles">Roles y Permisos</TabsTrigger>
          <TabsTrigger value="activity">Actividad</TabsTrigger>
        </TabsList>

        <TabsContent value="users" className="space-y-4">
          {/* Filters */}
          <div className="flex space-x-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar usuarios..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8"
                />
              </div>
            </div>
            <Select value={selectedRole} onValueChange={setSelectedRole}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Filtrar por rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los roles</SelectItem>
                <SelectItem value="emprendedor">Emprendedores</SelectItem>
                <SelectItem value="estudiante">Estudiantes</SelectItem>
                <SelectItem value="institucion">Instituciones</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Users Table */}
          <Card>
            <CardContent>
              <div className="space-y-4">
                {filteredUsers.map((user) => (
                  <div key={user.id} className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <Avatar>
                        <AvatarImage src="" />
                        <AvatarFallback>{user.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center space-x-2">
                          <h3 className="font-medium">{user.name}</h3>
                          {user.verified && <Shield className="w-4 h-4 text-green-600" />}
                        </div>
                        <p className="text-sm text-gray-600">{user.email}</p>
                        <div className="flex items-center space-x-2 mt-1">
                          <Badge className={getRoleColor(user.role)}>{user.role}</Badge>
                          <Badge className={getStatusColor(user.status)}>{user.status}</Badge>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="text-right text-sm">
                        <div>{user.projects} proyectos</div>
                        <div className="text-gray-500">Último: {user.lastLogin}</div>
                      </div>
                      <Button variant="ghost" size="sm">
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="roles" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Sistema de Roles y Permisos</CardTitle>
              <CardDescription>Configura los permisos por tipo de usuario</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Emprendedor</h3>
                    <p className="text-sm text-gray-600">Acceso completo a herramientas de negocio</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Estudiante</h3>
                    <p className="text-sm text-gray-600">Acceso limitado con fines educativos</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h3 className="font-medium">Institución</h3>
                    <p className="text-sm text-gray-600">Acceso administrativo y de supervisión</p>
                  </div>
                  <Button variant="outline">Configurar</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="activity" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Actividad Reciente</CardTitle>
              <CardDescription>Registro de acciones de usuarios</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">María González creó un nuevo proyecto</p>
                    <p className="text-xs text-gray-500">hace 30 minutos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Universidad de Tarapacá verificó 5 estudiantes</p>
                    <p className="text-xs text-gray-500">hace 2 horas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-medium">Carlos Mendoza completó su perfil</p>
                    <p className="text-xs text-gray-500">hace 4 horas</p>
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