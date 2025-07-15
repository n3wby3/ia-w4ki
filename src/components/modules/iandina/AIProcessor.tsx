
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  Loader, 
  CheckCircle, 
  AlertCircle,
  Zap 
} from "lucide-react";

interface AIAnalysisResult {
  sentiment: 'positive' | 'neutral' | 'negative';
  keywords: string[];
  opportunity_score: number;
  category: string;
  summary: string;
  actionable_insights: string[];
}

export const AIProcessor = () => {
  const [inputText, setInputText] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState<AIAnalysisResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const processWithAI = async () => {
    if (!inputText.trim()) return;
    
    setIsProcessing(true);
    setError(null);
    setResult(null);

    try {
      // Simulación de procesamiento con IA (en producción usar OpenAI API)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Resultado simulado basado en el texto de entrada
      const mockResult: AIAnalysisResult = {
        sentiment: inputText.toLowerCase().includes('oportunidad') || inputText.toLowerCase().includes('crecimiento') ? 'positive' : 'neutral',
        keywords: extractKeywords(inputText),
        opportunity_score: Math.floor(Math.random() * 40) + 60, // 60-100
        category: detectCategory(inputText),
        summary: `Análisis automatizado detecta ${inputText.toLowerCase().includes('oportunidad') ? 'alta' : 'moderada'} relevancia comercial para la región Arica-Tacna.`,
        actionable_insights: [
          "Evaluar mercado local antes de implementación",
          "Considerar regulaciones transfronterizas",
          "Analizar competencia regional existente"
        ]
      };
      
      setResult(mockResult);
    } catch (err) {
      setError("Error al procesar con IA. Intenta nuevamente.");
      console.error("AI Processing error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  const extractKeywords = (text: string): string[] => {
    const commonWords = ['el', 'la', 'de', 'que', 'y', 'a', 'en', 'un', 'es', 'se', 'no', 'te', 'lo', 'le'];
    const words = text.toLowerCase()
      .split(/\W+/)
      .filter(word => word.length > 3 && !commonWords.includes(word))
      .slice(0, 5);
    return words;
  };

  const detectCategory = (text: string): string => {
    const categories = {
      'tecnología': ['software', 'digital', 'app', 'tecnología', 'innovación'],
      'comercio': ['comercio', 'venta', 'negocio', 'mercado', 'exportación'],
      'agricultura': ['agricultura', 'cultivo', 'quinua', 'productos', 'orgánico'],
      'turismo': ['turismo', 'viajes', 'hotel', 'destino', 'visitantes'],
      'educación': ['educación', 'universidad', 'estudiantes', 'capacitación']
    };

    for (const [category, keywords] of Object.entries(categories)) {
      if (keywords.some(keyword => text.toLowerCase().includes(keyword))) {
        return category;
      }
    }
    return 'general';
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return 'text-green-600';
      case 'negative': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Brain className="w-5 h-5 mr-2" />
          Procesador de IA
        </CardTitle>
        <CardDescription>
          Analiza texto para detectar oportunidades comerciales
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <Textarea
            placeholder="Ingresa texto para analizar (noticias, reportes, etc.)"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            rows={4}
            className="resize-none"
          />
        </div>

        <Button 
          onClick={processWithAI}
          disabled={isProcessing || !inputText.trim()}
          className="w-full"
        >
          {isProcessing ? (
            <>
              <Loader className="w-4 h-4 mr-2 animate-spin" />
              Procesando con IA...
            </>
          ) : (
            <>
              <Zap className="w-4 h-4 mr-2" />
              Analizar con IA
            </>
          )}
        </Button>

        {error && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded">
            <AlertCircle className="w-4 h-4" />
            <span className="text-sm">{error}</span>
          </div>
        )}

        {result && (
          <div className="space-y-4 border-t pt-4">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-green-600" />
              <span className="font-medium">Análisis Completado</span>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium mb-2">Métricas</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Sentimiento:</span>
                    <span className={getSentimentColor(result.sentiment)}>
                      {result.sentiment}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Puntuación:</span>
                    <span className="font-medium">{result.opportunity_score}/100</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Categoría:</span>
                    <Badge variant="outline">{result.category}</Badge>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium mb-2">Palabras Clave</h4>
                <div className="flex flex-wrap gap-1">
                  {result.keywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-2">Resumen</h4>
              <p className="text-sm text-gray-600 bg-gray-50 p-3 rounded">
                {result.summary}
              </p>
            </div>

            <div>
              <h4 className="font-medium mb-2">Recomendaciones</h4>
              <ul className="text-sm space-y-1">
                {result.actionable_insights.map((insight, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-blue-600">•</span>
                    <span>{insight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
