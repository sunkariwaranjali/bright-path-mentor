import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Brain, 
  Activity, 
  TrendingUp, 
  Smile, 
  Meh, 
  Frown,
  Sparkles,
  BookOpen,
  Calendar
} from "lucide-react";
import MoodCheckIn from "./MoodCheckIn";
import WellnessInsights from "./WellnessInsights";

const WellnessDashboard = () => {
  const [showMoodCheckIn, setShowMoodCheckIn] = useState(false);
  const [todaysMood, setTodaysMood] = useState<number | null>(null);

  const wellnessScore = 75;
  const weeklyProgress = 68;

  const quickStats = [
    { icon: Heart, label: "Wellness Score", value: wellnessScore, color: "text-wellness" },
    { icon: Brain, label: "Mental Clarity", value: 82, color: "text-primary" },
    { icon: Activity, label: "Weekly Progress", value: weeklyProgress, color: "text-accent" },
    { icon: TrendingUp, label: "Improvement", value: 15, color: "text-wellness", suffix: "%" },
  ];

  const recentMoods = [
    { day: "Mon", mood: 4, icon: Smile },
    { day: "Tue", mood: 3, icon: Meh },
    { day: "Wed", mood: 4, icon: Smile },
    { day: "Thu", mood: 5, icon: Smile },
    { day: "Fri", mood: 3, icon: Meh },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Your Wellness Journey
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Track your mental health, discover patterns, and receive personalized AI-powered guidance
        </p>
      </div>

      {/* Daily Check-in CTA */}
      {!todaysMood && (
        <Card className="border-2 border-primary/20 bg-gradient-calm shadow-soft">
          <CardContent className="p-6 text-center">
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="p-3 rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold">How are you feeling today?</h3>
                <p className="text-muted-foreground">Start your day with a quick mood check-in</p>
              </div>
              <Button 
                variant="wellness" 
                size="lg"
                onClick={() => setShowMoodCheckIn(true)}
                className="shadow-wellness"
              >
                <Sparkles className="h-5 w-5 mr-2" />
                Daily Check-in
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="shadow-soft hover:shadow-wellness transition-shadow duration-300">
            <CardContent className="p-6">
              <div className="flex items-center space-x-4">
                <div className="p-2 rounded-lg bg-primary-soft">
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="text-2xl font-bold">
                    {stat.value}{stat.suffix || ""}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Mood Tracking */}
        <Card className="lg:col-span-2 shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Activity className="h-5 w-5 text-primary" />
              This Week's Mood Pattern
            </CardTitle>
            <CardDescription>
              Track your emotional journey and identify patterns
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-end h-32">
                {recentMoods.map((day, index) => (
                  <div key={index} className="flex flex-col items-center space-y-2">
                    <div className={`p-2 rounded-full transition-all duration-300 ${
                      day.mood >= 4 ? 'bg-wellness-soft' : day.mood >= 3 ? 'bg-accent/20' : 'bg-muted'
                    }`}>
                      <day.icon className={`h-5 w-5 ${
                        day.mood >= 4 ? 'text-wellness' : day.mood >= 3 ? 'text-accent' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div className={`w-8 bg-gradient-primary rounded-t transition-all duration-500`} 
                         style={{ height: `${day.mood * 20}%` }} />
                    <span className="text-sm text-muted-foreground">{day.day}</span>
                  </div>
                ))}
              </div>
              <div className="pt-4 border-t">
                <p className="text-sm text-muted-foreground">
                  Average mood this week: <span className="font-semibold text-wellness">Good</span>
                </p>
                <Progress value={68} className="mt-2" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card className="shadow-soft">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-accent" />
              Quick Actions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <Button 
              variant="calm" 
              className="w-full justify-start"
              onClick={() => setShowMoodCheckIn(true)}
            >
              <Heart className="h-4 w-4 mr-2" />
              Mood Check-in
            </Button>
            <Button variant="calm" className="w-full justify-start">
              <Brain className="h-4 w-4 mr-2" />
              Mindfulness Exercise
            </Button>
            <Button variant="calm" className="w-full justify-start">
              <BookOpen className="h-4 w-4 mr-2" />
              Wellness Resources
            </Button>
            <Button variant="calm" className="w-full justify-start">
              <Calendar className="h-4 w-4 mr-2" />
              Schedule Check-in
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* AI Insights */}
      <WellnessInsights />

      {/* Mood Check-in Modal */}
      {showMoodCheckIn && (
        <MoodCheckIn
          onComplete={(mood) => {
            setTodaysMood(mood);
            setShowMoodCheckIn(false);
          }}
          onClose={() => setShowMoodCheckIn(false)}
        />
      )}
    </div>
  );
};

export default WellnessDashboard;