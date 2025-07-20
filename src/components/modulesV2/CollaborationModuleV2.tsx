import { FC } from "react";
import Module from ".";

const CollaborationModuleV2: FC = () => {
  return (
    <Module
      title="Colaboración y Redes"
      description="Sistema de matching entre emprendedores. Funcionalidades de networking. Integración con redes sociales profesionales."
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
          <h3 className="text-lg font-semibold mb-2 md:mb-0">
            Oportunidades de Colaboración
          </h3>
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Buscar por habilidad o interés..."
              className="p-2 border rounded-lg"
            />
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Buscar
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <img
              src="/placeholder.svg"
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h4 className="font-bold">Ana Torres</h4>
            <p className="text-sm text-gray-500">Diseñadora UX/UI</p>
            <p className="text-sm mt-2">
              Busca desarrollador front-end para proyecto de e-commerce.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Conectar
            </button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <img
              src="/placeholder.svg"
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h4 className="font-bold">Luis Rojas</h4>
            <p className="text-sm text-gray-500">Ingeniero de Software</p>
            <p className="text-sm mt-2">
              Interesado en socios para startup de agrotecnología.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Conectar
            </button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow text-center">
            <img
              src="/placeholder.svg"
              alt="Foto de perfil"
              className="w-24 h-24 rounded-full mx-auto mb-2"
            />
            <h4 className="font-bold">Sofía Castro</h4>
            <p className="text-sm text-gray-500">Experta en Marketing</p>
            <p className="text-sm mt-2">
              Ofrece asesoría en marketing digital a cambio de participación.
            </p>
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Conectar
            </button>
          </div>
        </div>
      </div>
    </Module>
  );
};

export default CollaborationModuleV2;