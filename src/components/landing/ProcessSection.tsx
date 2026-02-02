import { motion } from "framer-motion";
import { MessageSquare, ClipboardCheck, Rocket, HeadphonesIcon } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Contacto y Asesoría",
    description: "Nos comunicamos para entender tus necesidades, objetivos y presupuesto. La primera consulta es completamente gratuita.",
  },
  {
    icon: ClipboardCheck,
    step: "02",
    title: "Definición de Necesidades",
    description: "Analizamos tu situación actual y creamos un plan estratégico personalizado con objetivos claros y medibles.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Entrega del Servicio",
    description: "Ejecutamos la estrategia acordada con total transparencia, manteniéndote informado en cada paso del proceso.",
  },
  {
    icon: HeadphonesIcon,
    step: "04",
    title: "Soporte y Seguimiento",
    description: "Monitoreamos resultados, optimizamos continuamente y te brindamos soporte para asegurar el éxito a largo plazo.",
  },
];

const ProcessSection = () => {
  return (
    <section id="proceso" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-accent/10 text-accent">
            <Rocket className="w-4 h-4" />
            <span className="text-sm font-medium">Cómo Funciona</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Un Proceso{" "}
            <span className="text-accent">Simple y Efectivo</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            De la idea a los resultados en 4 pasos claros. 
            Sin complicaciones, sin sorpresas.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Card */}
                <div className="relative bg-card p-8 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-8 bg-gradient-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-bold">
                    Paso {step.step}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 mt-4">
                    <step.icon className="w-8 h-8 text-accent" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>

                {/* Arrow (visible on large screens) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-24 -right-4 w-8 h-0.5 bg-border z-10">
                    <div className="absolute right-0 -top-1 w-0 h-0 border-t-4 border-b-4 border-l-8 border-transparent border-l-border" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
