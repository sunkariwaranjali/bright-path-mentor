import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  TrendingUp, 
  Target, 
  Sparkles, 
  Brain,
  Heart,
  Clock,
  BookOpen
} from "lucide-react";

const WellnessInsights = () => {
  const aiInsights = [
    {
      type: "pattern",
      icon: TrendingUp,
      title: "Mood Pattern Detected",
      description: "Your mood tends to be higher on days when you exercise. Consider maintaining a regular workout routine.",
      action: "Set Exercise Reminder",
      priority: "high"
    },
    {
      type: "suggestion",
      icon: Brain,
      title: "Stress Management",
      description: "Based on your recent check-ins, try the 4-7-8 breathing technique when feeling overwhelmed.",
      action: "Try Breathing Exercise",
      priority: "medium"
    },
    {
      type: "goal",
      icon: Target,
      title: "Weekly Goal",
      description: "You're 3 days away from your goal of checking in daily for a full week. Keep it up!",
      action: "View Progress",
      priority: "low"
    }
  ];

  const recommendations = [
    {
      category: "Mindfulness",
      title: "5-Minute Morning Meditation",
      description: "Start your day with clarity and focus",
      duration: "5 min",
      icon: Brain
    },
    {
      category: "Physical",
      title: "Quick Desk Stretches",
      description: "Reduce tension from studying",
      duration: "3 min",
      icon: Heart
    },
    {
      category: "Academic",
      title: "Pomodoro Study Session",
      description: "Boost productivity while managing stress",
      duration: "25 min",
      icon: Clock
    },
    {
      category: "Resources",
      title: "Sleep Hygiene Guide",
      description: "Improve your sleep quality tonight",
      duration: "2 min read",
      icon: BookOpen
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high": return "bg-destructive/10 text-destructive border-destructive/20";
      case "medium": return "bg-accent/10 text-accent border-accent/20";
      case "low": return "bg-wellness-soft text-wellness border-wellness/20";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Insights */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-5 w-5 text-accent" />
            AI-Powered Insights
          </CardTitle>
          <CardDescription>
            Personalized observations and suggestions based on your wellness data
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {aiInsights.map((insight, index) => (
            <div key={index} className="p-4 rounded-lg border bg-card/50 hover:bg-card transition-colors">
              <div className="flex items-start justify-between">
                <div className="flex gap-3">
                  <div className="p-2 rounded-lg bg-primary-soft">
                    <insight.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold">{insight.title}</h4>
                      <Badge className={`text-xs ${getPriorityColor(insight.priority)}`}>
                        {insight.priority}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{insight.description}</p>
                  </div>
                </div>
                <Button variant="calm" size="sm">
                  {insight.action}
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Personalized Recommendations */}
      <Card className="shadow-soft">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-wellness" />
            Recommended for You
          </CardTitle>
          <CardDescription>
            Curated wellness activities based on your current state
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recommendations.map((rec, index) => (
              <div key={index} className="p-4 rounded-lg border bg-gradient-calm hover:shadow-soft transition-all duration-300 cursor-pointer group">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex gap-3">
                    <div className="p-2 rounded-lg bg-white/60 group-hover:bg-white/80 transition-colors">
                      <rec.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <Badge variant="outline" className="text-xs mb-1">
                        {rec.category}
                      </Badge>
                      <h4 className="font-semibold text-sm">{rec.title}</h4>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {rec.duration}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{rec.description}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WellnessInsights;