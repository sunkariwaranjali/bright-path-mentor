import WellnessDashboard from "@/components/WellnessDashboard";
import wellnessHero from "@/assets/wellness-hero.jpg";
import { Heart, Shield, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-calm">
        <div className="absolute inset-0 opacity-40">
          <img 
            src={wellnessHero} 
            alt="Wellness platform hero image with calming gradients"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              MindWell AI
            </h1>
            <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto">
              Your AI-powered wellness companion for better mental health and academic success
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="h-4 w-4 text-wellness" />
                Mental Health Monitoring
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                AI-Powered Interventions
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-accent" />
                Student-Focused Support
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Dashboard */}
      <main className="container mx-auto px-4 py-8">
        <WellnessDashboard />
      </main>
    </div>
  );
};

export default Index;
