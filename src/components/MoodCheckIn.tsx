import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { 
  Smile, 
  Meh, 
  Frown, 
  Laugh, 
  Angry,
  Heart,
  CheckCircle2
} from "lucide-react";

interface MoodCheckInProps {
  onComplete: (mood: number) => void;
  onClose: () => void;
}

const MoodCheckIn = ({ onComplete, onClose }: MoodCheckInProps) => {
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const [selectedFactors, setSelectedFactors] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [step, setStep] = useState(1);

  const moods = [
    { value: 5, icon: Laugh, label: "Excellent", color: "text-wellness", bgColor: "bg-wellness-soft" },
    { value: 4, icon: Smile, label: "Good", color: "text-primary", bgColor: "bg-primary-soft" },
    { value: 3, icon: Meh, label: "Okay", color: "text-accent", bgColor: "bg-accent/20" },
    { value: 2, icon: Frown, label: "Poor", color: "text-orange-500", bgColor: "bg-orange-100" },
    { value: 1, icon: Angry, label: "Terrible", color: "text-destructive", bgColor: "bg-destructive/10" },
  ];

  const factors = [
    "Sleep Quality", "Academic Stress", "Social Connections", "Physical Activity",
    "Nutrition", "Work-Life Balance", "Financial Stress", "Family Relationships",
    "Weather", "Health Concerns", "Achievement", "Relaxation Time"
  ];

  const handleFactorToggle = (factor: string) => {
    setSelectedFactors(prev => 
      prev.includes(factor) 
        ? prev.filter(f => f !== factor)
        : [...prev, factor]
    );
  };

  const handleComplete = () => {
    if (selectedMood) {
      onComplete(selectedMood);
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-primary" />
            Daily Wellness Check-in
          </DialogTitle>
          <DialogDescription>
            Help us understand how you're feeling today to provide better support
          </DialogDescription>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">How are you feeling right now?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
                {moods.map((mood) => (
                  <Card 
                    key={mood.value}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-soft ${
                      selectedMood === mood.value 
                        ? 'ring-2 ring-primary shadow-wellness' 
                        : ''
                    }`}
                    onClick={() => setSelectedMood(mood.value)}
                  >
                    <CardContent className="p-4 text-center space-y-2">
                      <div className={`p-3 rounded-full ${mood.bgColor} mx-auto w-fit`}>
                        <mood.icon className={`h-8 w-8 ${mood.color}`} />
                      </div>
                      <p className="font-medium">{mood.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                variant="wellness" 
                onClick={() => setStep(2)}
                disabled={!selectedMood}
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">What's influencing your mood today?</h3>
              <p className="text-muted-foreground mb-4">Select any factors that apply (optional)</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {factors.map((factor) => (
                  <Badge
                    key={factor}
                    variant={selectedFactors.includes(factor) ? "default" : "outline"}
                    className={`cursor-pointer p-2 justify-center transition-all duration-200 ${
                      selectedFactors.includes(factor) 
                        ? 'bg-primary text-primary-foreground' 
                        : 'hover:bg-primary/10'
                    }`}
                    onClick={() => handleFactorToggle(factor)}
                  >
                    {factor}
                  </Badge>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Any additional thoughts?</h3>
              <Textarea
                placeholder="Share anything else on your mind (optional)..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="min-h-[100px]"
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button variant="wellness" onClick={handleComplete}>
                <CheckCircle2 className="h-4 w-4 mr-2" />
                Complete Check-in
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default MoodCheckIn;