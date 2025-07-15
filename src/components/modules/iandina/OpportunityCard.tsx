
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Download, TrendingUp, AlertTriangle } from "lucide-react";

export interface Opportunity {
  id: number;
  title: string;
  description: string;
  category: string;
  confidence: number;
  region: string;
  date: string;
  impact: 'Alto' | 'Medio' | 'Bajo';
  sentiment: 'positive' | 'neutral' | 'negative';
  keywords: string[];
  source: string;
}

interface OpportunityCardProps {
  opportunity: Opportunity;
  onView: (id: number) => void;
  onDownload: (id: number) => void;
}

export const OpportunityCard = ({ opportunity, onView, onDownload }: OpportunityCardProps) => {
  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Alto': return 'bg-red-100 text-red-800';
      case 'Medio': return 'bg-yellow-100 text-yellow-800';
      case 'Bajo': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getSentimentIcon = (sentiment: string) => {
    switch (sentiment) {
      case 'positive': return <TrendingUp className="w-3 h-3 text-green-600" />;
      case 'negative': return <AlertTriangle className="w-3 h-3 text-red-600" />;
      default: return <div className="w-3 h-3 bg-gray-400 rounded-full" />;
    }
  };

  return (
    <Card className="hover:bg-gray-50 transition-colors">
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              <h3 className="font-semibold">{opportunity.title}</h3>
              <Badge variant="outline">{opportunity.category}</Badge>
              <Badge className={getImpactColor(opportunity.impact)}>
                {opportunity.impact}
              </Badge>
              {getSentimentIcon(opportunity.sentiment)}
            </div>
            
            <p className="text-gray-600 text-sm mb-3">{opportunity.description}</p>
            
            <div className="flex flex-wrap gap-1 mb-3">
              {opportunity.keywords.slice(0, 3).map((keyword, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {keyword}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center space-x-4 text-xs text-gray-500">
              <span>📍 {opportunity.region}</span>
              <span>📅 {opportunity.date}</span>
              <span>🎯 Confianza: {opportunity.confidence}%</span>
              <span>📰 {opportunity.source}</span>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onView(opportunity.id)}
            >
              <Eye className="w-4 h-4" />
            </Button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => onDownload(opportunity.id)}
            >
              <Download className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
