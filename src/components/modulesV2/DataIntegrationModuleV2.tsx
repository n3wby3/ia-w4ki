import { FC } from "react";
import Module from ".";

const DataIntegrationModuleV2: FC = () => {
  return (
    <Module
      title="Integración Binacional de Datos"
      description="Conectores automáticos a fuentes peruanas (SUNAT, SEACE). Integración con datos bolivianos. Sincronización con bases chilenas (ChileCompra, Aduana)."
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Fuentes de Datos Binacionales
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="font-bold">SUNAT (Perú)</p>
              <p className="text-sm text-gray-500">
                Última sincronización: Hace 2 horas
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">
                Conectado
              </span>
              <button className="text-blue-500 hover:underline">
                Sincronizar
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="font-bold">SEACE (Perú)</p>
              <p className="text-sm text-gray-500">
                Última sincronización: Hace 1 día
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">
                Conectado
              </span>
              <button className="text-blue-500 hover:underline">
                Sincronizar
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="font-bold">Aduanas (Bolivia)</p>
              <p className="text-sm text-gray-500">No conectado</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full">
                Desconectado
              </span>
              <button className="text-blue-500 hover:underline">
                Conectar
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="font-bold">ChileCompra (Chile)</p>
              <p className="text-sm text-gray-500">
                Última sincronización: Hace 5 horas
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">
                Conectado
              </span>
              <button className="text-blue-500 hover:underline">
                Sincronizar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Module>
  );
};

export default DataIntegrationModuleV2;