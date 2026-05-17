import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
} from "lucide-react";
import { Button } from "@/components/Button";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useInView } from "@/components/useInView";
import { FormInput, FormTextarea, validateEmail, validateName, validateMessage } from "@/components/FormValidation";
import { AvailabilityStatus } from "@/components/AvailabilityStatus";
import { CalendarModal } from "@/components/CalendarModal";
import { trackFormSubmission } from "@/components/analytics";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "sayankarmakar543@gmail.com",
    href: "mailto:sayankarmakar543@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "Available on request",
    href: "#contact",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Remote",
    href: "#",
  },
];

const messageTemplates = [
  {
    label: "Job Opportunity",
    message: "Hi Sayan,\n\nI came across your portfolio and I'm impressed with your backend development skills. We have an exciting opportunity that might interest you.\n\nWould you be available for a quick call to discuss?",
  },
  {
    label: "Freelance Project",
    message: "Hi Sayan,\n\nI have a freelance project involving Python/FastAPI development. Based on your portfolio, I think you'd be a great fit.\n\nCan we discuss the project details?",
  },
  {
    label: "Technical Consultation",
    message: "Hi Sayan,\n\nI'd like to consult with you regarding backend architecture and API design for our project.\n\nAre you available for a consultation?",
  },
  {
    label: "Collaboration",
    message: "Hi Sayan,\n\nI'm working on an interesting project and would love to collaborate with you.\n\nLet's connect and explore possibilities!",
  },
];

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({
    type: null,
    message: "",
  });
  const [sectionRef, sectionInView] = useInView({ threshold: 0.1 });
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState(null);

  const handleTemplateSelect = (template) => {
    setFormData({ ...formData, message: template.message });
    setSelectedTemplate(template.label);
    setTouched({ ...touched, message: true });
    setErrors({ ...errors, message: validateField("message", template.message) });
  };

  const validateField = (name, value) => {
    switch (name) {
      case "name":
        return validateName(value) ? "" : "Name must be at least 2 characters";
      case "email":
        return validateEmail(value) ? "" : "Please enter a valid email address";
      case "message":
        return validateMessage(value) ? "" : "Message must be at least 10 characters";
      default:
        return "";
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (touched[name]) {
      setErrors({ ...errors, [name]: validateField(name, value) });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({ ...touched, [name]: true });
    setErrors({ ...errors, [name]: validateField(name, value) });
  };

  const isFormValid = () => {
    return (
      validateName(formData.name) &&
      validateEmail(formData.email) &&
      validateMessage(formData.message)
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {
      name: validateField("name", formData.name),
      email: validateField("email", formData.email),
      message: validateField("message", formData.message),
    };
    
    setErrors(newErrors);
    setTouched({ name: true, email: true, message: true });

    if (!isFormValid()) {
      setSubmitStatus({
        type: "error",
        message: "Please fix the errors above before submitting.",
      });
      return;
    }

    setIsLoading(true);
    setSubmitStatus({ type: null, message: "" });
    
    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        publicKey
      );

      setSubmitStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      
      trackFormSubmission(formData);
      
      setFormData({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setErrors({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus({
        type: "error",
        message:
          error.text || "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section ref={sectionRef} id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className={`text-secondary-foreground text-sm font-medium tracking-wider uppercase transition-all duration-700 ${sectionInView ? 'animate-fade-in' : 'opacity-0'}`}>
            Get In Touch
          </span>
          <h2 className={`text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-100' : 'opacity-0'}`}>
            Let's build{" "}
            <span className="font-serif italic font-normal text-white">
              something great.
            </span>
          </h2>
          <p className={`text-muted-foreground transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-200' : 'opacity-0'}`}>
            Have a project in mind? I'd love to hear about it. Send me a message
            and let's discuss how we can work together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className={`glass p-8 rounded-3xl border border-primary/30 transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-300' : 'opacity-0'}`}>
            <form className="space-y-6" onSubmit={handleSubmit}>
              {/* Quick Message Templates */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-3">Quick Templates</label>
                <div className="grid grid-cols-2 gap-2">
                  {messageTemplates.map((template, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => handleTemplateSelect(template)}
                      className={`px-3 py-2 text-xs rounded-lg border transition-all ${
                        selectedTemplate === template.label
                          ? "bg-primary/20 border-primary text-primary"
                          : "border-border hover:border-primary/50 hover:bg-surface"
                      }`}
                    >
                      {template.label}
                    </button>
                  ))}
                </div>
              </div>

              <FormInput
                label="Name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.name ? errors.name : ""}
                success={touched.name && !errors.name && formData.name}
                placeholder="Your name..."
                required
              />

              <FormInput
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email ? errors.email : ""}
                success={touched.email && !errors.email && formData.email}
                placeholder="your@email.com"
                required
              />

              <FormTextarea
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.message ? errors.message : ""}
                success={touched.message && !errors.message && formData.message}
                placeholder="Your message..."
                required
                maxLength={500}
                rows={5}
              />

              <Button
                className="w-full"
                type="submit"
                size="lg"
                disabled={isLoading || !isFormValid()}
              >
                {isLoading ? (
                  <>Sending...</>
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>

              {submitStatus.type && (
                <div
                  className={`flex items-center gap-3 p-4 rounded-xl ${
                    submitStatus.type === "success"
                      ? "bg-green-500/10 border border-green-500/20 text-green-400"
                      : "bg-red-500/10 border border-red-500/20 text-red-400"
                  }`}
                >
                  {submitStatus.type === "success" ? (
                    <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  )}
                  <p className="text-sm">{submitStatus.message}</p>
                </div>
              )}
            </form>
          </div>

          <div className={`space-y-6 transition-all duration-700 ${sectionInView ? 'animate-fade-in animation-delay-400' : 'opacity-0'}`}>
            <AvailabilityStatus />
            
            <button
              onClick={() => setIsCalendarOpen(true)}
              className="w-full glass p-6 rounded-2xl hover:border-primary/50 border border-transparent transition-all group text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Schedule a Meeting</div>
                  <div className="text-sm text-muted-foreground">Book a time to discuss opportunities</div>
                </div>
              </div>
            </button>
            
            <div className="glass rounded-3xl p-8">
              <h3 className="text-xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-surface transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">
                        {item.label}
                      </div>
                      <div className="font-medium">{item.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <CalendarModal isOpen={isCalendarOpen} onClose={() => setIsCalendarOpen(false)} />
    </section>
  );
};
