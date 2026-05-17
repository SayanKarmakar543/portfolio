import { Bot, ArrowRight, Sparkles } from "lucide-react";
import { TiltCard } from "./TiltCard";

export const FeaturedProject = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-highlight/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <TiltCard intensity={8} className="max-w-5xl mx-auto">
          <div className="glass rounded-3xl p-8 md:p-12 border-2 border-primary/30 hover:border-primary/60 transition-all duration-500">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                  <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                  <span className="text-sm font-medium text-primary">Featured AI Project</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold">
                  <span className="text-primary">Persona-Bot</span>
                  <br />
                  <span className="text-white font-serif italic font-normal">AI Chatbot</span>
                </h2>
                
                <p className="text-muted-foreground text-lg">
                  Experience an AI-powered chatbot that adapts its personality based on user interactions. Built with advanced NLP and deployed on Hugging Face Spaces.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">Python</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">OpenAI</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">NLP</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/30">Hugging Face</span>
                </div>
                
                <a
                  href="https://huggingface.co/spaces/Sayan-Karmakar/Persona-Bot"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/30 group"
                >
                  <Bot className="w-5 h-5" />
                  Try Persona-Bot Live
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
              
              {/* Right Visual */}
              <div className="relative">
                <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-highlight/20 p-8 flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-grid-white/5" />
                  <Bot className="w-32 h-32 md:w-40 md:h-40 text-primary animate-pulse relative z-10" />
                  <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/30 rounded-full blur-2xl animate-pulse" />
                  <div className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-highlight/30 rounded-full blur-2xl animate-pulse delay-75" />
                </div>
              </div>
            </div>
          </div>
        </TiltCard>
      </div>
    </section>
  );
};
