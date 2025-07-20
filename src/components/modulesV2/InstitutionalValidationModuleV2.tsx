import { FC } from "react";
import Module from ".";

const InstitutionalValidationModuleV2: FC = () => {
  return (
    <Module
      title="Sistema de Validación Institucional"
      description="Interfaz para universidades (UTA). Panel para gobiernos regionales. Conectores con incubadoras."
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Solicitudes de Validación Institucional
        </h3>
        <div className="space-y-3">
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="font-bold">Universidad de Tarapacá (UTA)</p>
              <p className="text-sm text-gray-500">
                Proyecto: "Robótica Educativa"
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-yellow-200 text-yellow-800 rounded-full">
                Pendiente
              </span>
              <button className="text-blue-500 hover:underline">
                Revisar
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="font-bold">Gobierno Regional de Arica y Parinacota</p>
              <p className="text-sm text-gray-500">
                Proyecto: "Turismo Sostenible"
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">
                Aprobado
              </span>
              <button className="text-gray-500 cursor-not-allowed">
                Revisar
              </button>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow flex items-center justify-between">
            <div>
              <p className="font-bold">Incubadora de Negocios "Innova+"</p>
              <p className="text-sm text-gray-500">
                Proyecto: "Marketplace de Artesanías"
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full">
                Rechazado
              </span>
              <button className="text-gray-500 cursor-not-allowed">
                Revisar
              </button>
            </div>
          </div>
        </div>
      </div>
    </Module>
  );
};

export default InstitutionalValidationModuleV2;