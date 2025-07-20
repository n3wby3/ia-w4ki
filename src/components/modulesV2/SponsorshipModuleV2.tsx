import { FC } from "react";
import Module from ".";

const SponsorshipModuleV2: FC = () => {
  return (
    <Module
      title="Patrocinios y Monetización"
      description="Panel para marcas patrocinadoras (TPA, cooperativas, gremios). Sistema de facturación y pagos. Gestión de campañas publicitarias en contenidos."
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Campañas de Patrocinio</h3>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
            Crear Campaña
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-bold">TPA</h4>
            <p className="text-sm text-gray-600">Activa</p>
            <div className="mt-2">
              <p>
                <strong>Presupuesto:</strong> $5,000
              </p>
              <p>
                <strong>Alcance:</strong> 100,000 impresiones
              </p>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Ver Detalles
            </button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-bold">Cooperativa El Sol</h4>
            <p className="text-sm text-gray-600">Finalizada</p>
            <div className="mt-2">
              <p>
                <strong>Presupuesto:</strong> $2,500
              </p>
              <p>
                <strong>Alcance:</strong> 50,000 impresiones
              </p>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Ver Detalles
            </button>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <h4 className="font-bold">Gremio de Comerciantes</h4>
            <p className="text-sm text-gray-600">En Borrador</p>
            <div className="mt-2">
              <p>
                <strong>Presupuesto:</strong> $1,000
              </p>
              <p>
                <strong>Alcance:</strong> N/A
              </p>
            </div>
            <button className="mt-4 w-full px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Ver Detalles
            </button>
          </div>
        </div>
      </div>
    </Module>
  );
};

export default SponsorshipModuleV2;