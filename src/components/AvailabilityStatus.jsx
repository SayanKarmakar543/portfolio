import { Clock, Coffee, Moon, Zap } from "lucide-react";
import { useState, useEffect } from "react";

export const AvailabilityStatus = ({ className = "" }) => {
  const [status, setStatus] = useState("available");

  useEffect(() => {
    // Auto-detect status based on time (optional)
    const updateStatus = () => {
      const hour = new Date().getHours();
      const day = new Date().getDay();
      
      // Weekend
      if (day === 0 || day === 6) {
        setStatus("limited");
      }
      // Night time (10 PM - 6 AM IST)
      else if (hour >= 22 || hour < 6) {
        setStatus("offline");
      }
      // Lunch time (12 PM - 1 PM IST)
      else if (hour >= 12 && hour < 13) {
        setStatus("busy");
      }
      // Working hours
      else {
        setStatus("available");
      }
    };

    updateStatus();
    // Update every minute
    const interval = setInterval(updateStatus, 60000);

    return () => clearInterval(interval);
  }, []);

  const statusConfig = {
    available: {
      icon: Zap,
      label: "Actively Looking",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      dotColor: "bg-green-500",
      description: "Python Backend / GenAI / Agentic AI Engineer",
    },
    busy: {
      icon: Coffee,
      label: "Busy",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      dotColor: "bg-yellow-500",
      description: "Will respond within 2 hours",
    },
    limited: {
      icon: Clock,
      label: "Limited Availability",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      dotColor: "bg-orange-500",
      description: "Available for urgent matters",
    },
    offline: {
      icon: Moon,
      label: "Offline",
      color: "text-gray-400",
      bgColor: "bg-gray-500/10",
      borderColor: "border-gray-500/30",
      dotColor: "bg-gray-500",
      description: "Will respond in the morning",
    },
  };

  const config = statusConfig[status];
  const Icon = config.icon;

  return (
    <div className={`glass rounded-2xl p-6 border ${config.borderColor} ${className}`}>
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 rounded-xl ${config.bgColor} flex items-center justify-center flex-shrink-0`}>
          <Icon className={`w-6 h-6 ${config.color}`} />
        </div>
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className={`w-2 h-2 ${config.dotColor} rounded-full animate-pulse`} />
            <span className={`font-semibold ${config.color}`}>{config.label}</span>
          </div>
          <p className="text-sm text-muted-foreground">{config.description}</p>
          
          {/* Response time */}
          <div className="mt-3 pt-3 border-t border-border space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Work Preference:</span>
              <span className="font-medium">Remote / Hybrid</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Work Type:</span>
              <span className="font-medium">Full-time</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-muted-foreground">Notice Period:</span>
              <span className="font-medium">30 days</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Compact version for Hero section
export const AvailabilityBadge = () => {
  const [status, setStatus] = useState("available");

  useEffect(() => {
    const updateStatus = () => {
      const hour = new Date().getHours();
      const day = new Date().getDay();
      
      if (day === 0 || day === 6) {
        setStatus("limited");
      } else if (hour >= 22 || hour < 6) {
        setStatus("offline");
      } else if (hour >= 12 && hour < 13) {
        setStatus("busy");
      } else {
        setStatus("available");
      }
    };

    updateStatus();
    const interval = setInterval(updateStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  const statusConfig = {
    available: {
      label: "Available for work",
      color: "bg-green-500",
    },
    busy: {
      label: "Currently busy",
      color: "bg-yellow-500",
    },
    limited: {
      label: "Limited availability",
      color: "bg-orange-500",
    },
    offline: {
      label: "Currently offline",
      color: "bg-gray-500",
    },
  };

  const config = statusConfig[status];

  return (
    <div className="glass rounded-xl px-4 py-3 animate-float">
      <div className="flex items-center gap-3">
        <div className={`w-3 h-3 ${config.color} rounded-full animate-pulse`} />
        <span className="text-sm font-medium">{config.label}</span>
      </div>
    </div>
  );
};
