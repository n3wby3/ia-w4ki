import { FC } from "react";
import Module from ".";

const ProjectTrackingModuleV2: FC = () => {
  return (
    <Module
      title="Seguimiento de Proyectos"
      description="Tracking de los 8 proyectos comprometidos. Sistema de notificaciones y alertas. Métricas de éxito y conversión."
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <h3 className="text-lg font-semibold mb-4">
          Seguimiento de Proyectos Comprometidos
        </h3>
        <div className="space-y-4">
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h4 className="font-bold">Proyecto "Alpaca Export"</h4>
              <span className="px-2 py-1 bg-blue-200 text-blue-800 rounded-full">
                En Progreso
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Expansión de mercado para textiles de alpaca.
            </p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progreso</span>
                <span>65%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-blue-600 h-2.5 rounded-full"
                  style={{ width: "65%" }}
                ></div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <span>
                <strong>Hitos:</strong> 3/5
              </span>
              <span>
                <strong>Presupuesto:</strong> $15,000 / $25,000
              </span>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h4 className="font-bold">Proyecto "Quinua Tech"</h4>
              <span className="px-2 py-1 bg-green-200 text-green-800 rounded-full">
                Completado
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              Plataforma de trazabilidad para la quinua.
            </p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progreso</span>
                <span>100%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-green-600 h-2.5 rounded-full"
                  style={{ width: "100%" }}
                ></div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <span>
                <strong>Hitos:</strong> 8/8
              </span>
              <span>
                <strong>Presupuesto:</strong> $48,500 / $50,000
              </span>
            </div>
          </div>
          <div className="p-4 bg-white rounded-lg shadow">
            <div className="flex justify-between items-center">
              <h4 className="font-bold">Proyecto "Turismo Andino"</h4>
              <span className="px-2 py-1 bg-red-200 text-red-800 rounded-full">
                Atrasado
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-1">
              App móvil para rutas turísticas en la región.
            </p>
            <div className="mt-4">
              <div className="flex justify-between text-sm text-gray-600">
                <span>Progreso</span>
                <span>20%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                <div
                  className="bg-red-600 h-2.5 rounded-full"
                  style={{ width: "20%" }}
                ></div>
              </div>
            </div>
            <div className="mt-4 flex justify-between text-sm">
              <span>
                <strong>Hitos:</strong> 1/6
              </span>
              <span>
                <strong>Presupuesto:</strong> $5,000 / $30,000
              </span>
            </div>
          </div>
        </div>
      </div>
    </Module>
  );
};

export default ProjectTrackingModuleV2;