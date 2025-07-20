import { FC } from "react";
import Module from ".";

const UserManagementModuleV2: FC = () => {
  return (
    <Module
      title="Sistema de Gestión de Usuarios y Perfiles"
      description="Registro y autenticación de emprendedores, estudiantes, instituciones. Perfiles diferenciados según tipo de usuario. Sistema de roles y permisos."
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Usuarios Registrados</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Agregar Usuario
          </button>
        </div>
        <table className="w-full text-left">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2">Nombre</th>
              <th className="p-2">Email</th>
              <th className="p-2">Rol</th>
              <th className="p-2">Estado</th>
              <th className="p-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="p-2">Juan Pérez</td>
              <td className="p-2">juan.perez@example.com</td>
              <td className="p-2">Emprendedor</td>
              <td className="p-2">
                <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">
                  Activo
                </span>
              </td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Editar
                </button>
                <button className="text-red-500 hover:underline ml-2">
                  Eliminar
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">María García</td>
              <td className="p-2">maria.garcia@example.com</td>
              <td className="p-2">Estudiante</td>
              <td className="p-2">
                <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full">
                  Pendiente
                </span>
              </td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Editar
                </button>
                <button className="text-red-500 hover:underline ml-2">
                  Eliminar
                </button>
              </td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Carlos López</td>
              <td className="p-2">carlos.lopez@example.com</td>
              <td className="p-2">Institución</td>
              <td className="p-2">
                <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full">
                  Inactivo
                </span>
              </td>
              <td className="p-2">
                <button className="text-blue-500 hover:underline">
                  Editar
                </button>
                <button className="text-red-500 hover:underline ml-2">
                  Eliminar
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Module>
  );
};

export default UserManagementModuleV2;