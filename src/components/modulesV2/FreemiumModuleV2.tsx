import { FC } from "react";
import Module from ".";

const FreemiumModuleV2: FC = () => {
  return (
    <Module
      title="Sistema Freemium/Premium"
      description="Limitaciones para usuarios gratuitos. Funcionalidades premium desbloqueables. Sistema de suscripciones."
    >
      <div className="p-4 bg-gray-100 rounded-lg">
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold">Planes de Suscripción</h3>
          <p className="text-gray-600">
            Elige el plan que mejor se adapte a tus necesidades.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 bg-white rounded-lg shadow">
            <h4 className="text-xl font-bold mb-2">Freemium</h4>
            <p className="text-3xl font-bold mb-4">$0/mes</p>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Acceso a 5 oportunidades al mes</li>
              <li>✅ Generación de 1 proyecto</li>
              <li>✅ Soporte por email</li>
              <li>❌ Acceso a reportes avanzados</li>
              <li>❌ Integración de datos binacional</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
              Plan Actual
            </button>
          </div>
          <div className="p-6 bg-white rounded-lg shadow border-2 border-blue-500">
            <h4 className="text-xl font-bold mb-2">Premium</h4>
            <p className="text-3xl font-bold mb-4">$49/mes</p>
            <ul className="space-y-2 text-gray-600">
              <li>✅ Acceso ilimitado a oportunidades</li>
              <li>✅ Generación de proyectos ilimitada</li>
              <li>✅ Soporte prioritario 24/7</li>
              <li>✅ Acceso a reportes avanzados</li>
              <li>✅ Integración de datos binacional</li>
            </ul>
            <button className="mt-6 w-full px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
              Actualizar a Premium
            </button>
          </div>
        </div>
      </div>
    </Module>
  );
};

export default FreemiumModuleV2;