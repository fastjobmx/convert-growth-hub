import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Globe, 
  Megaphone, 
  ArrowRight, 
  CheckCircle2,
  Code,
  ShoppingCart,
  BarChart3,
  Target,
  Share2
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Cursos de Marketing Digital",
    description: "Aprende estrategias probadas para dominar el marketing digital y hacer crecer tu negocio.",
    features: [
      "Marketing en redes sociales",
      "Publicidad en Google y Meta",
      "Email marketing efectivo",
      "SEO y posicionamiento web",
      "Análisis de datos y métricas",
    ],
    priceUSD: "Desde USD $30",
    priceCOP: "Desde COP $120.000",
    color: "secondary",
    subIcons: [BarChart3, Target],
  },
  {
    icon: Globe,
    title: "Desarrollo de Páginas Web",
    description: "Sitios web profesionales, rápidos y optimizados para convertir visitantes en clientes.",
    features: [
      "Landing pages de alta conversión",
      "Sitios WordPress personalizados",
      "E-commerce y tiendas online",
      "Diseño responsive y moderno",
      "Optimización SEO incluida",
    ],
    priceUSD: "Desde USD $100",
    priceCOP: "Desde COP $400.000",
    color: "accent",
    subIcons: [Code, ShoppingCart],
  },
  {
    icon: Megaphone,
    title: "Servicios Integrales de Marketing",
    description: "Gestión completa de tu presencia digital con estrategias personalizadas y resultados medibles.",
    features: [
      "Gestión de redes sociales",
      "Campañas publicitarias (Ads)",
      "SEO y posicionamiento orgánico",
      "Email marketing y automatización",
      "Reportes y análisis mensuales",
    ],
    priceUSD: "Desde USD $100/mes",
    priceCOP: "Desde COP $400.000/mes",
    color: "secondary",
    subIcons: [Share2, BarChart3],
  },
];

const ServicesSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/10 text-secondary">
            <Megaphone className="w-4 h-4" />
            <span className="text-sm font-medium">Nuestros Servicios</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Soluciones Digitales que{" "}
            <span className="text-secondary">Impulsan tu Negocio</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Servicios diseñados para maximizar tu presencia online y convertir 
            visitantes en clientes leales.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group relative bg-card rounded-3xl p-8 shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/50 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color === 'accent' ? 'from-accent/5 to-transparent' : 'from-secondary/5 to-transparent'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              {/* Icon */}
              <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${service.color === 'accent' ? 'bg-accent/10' : 'bg-secondary/10'}`}>
                <service.icon className={`w-8 h-8 ${service.color === 'accent' ? 'text-accent' : 'text-secondary'}`} />
              </div>

              {/* Content */}
              <h3 className="relative text-xl font-display font-bold text-foreground mb-3">
                {service.title}
              </h3>
              
              <p className="relative text-muted-foreground mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="relative space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 flex-shrink-0 ${service.color === 'accent' ? 'text-accent' : 'text-secondary'}`} />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Pricing */}
              <div className="relative mb-6 p-4 bg-muted/50 rounded-xl">
                <div className={`text-2xl font-bold ${service.color === 'accent' ? 'text-accent' : 'text-secondary'}`}>
                  {service.priceUSD}
                </div>
                <div className="text-sm text-muted-foreground">
                  {service.priceCOP}
                </div>
              </div>

              {/* CTA Button */}
              <Button 
                variant={service.color === 'accent' ? 'outline' : 'cta'}
                className="relative w-full group/btn"
                onClick={scrollToContact}
              >
                Solicitar Información
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>

              {/* Decorative Icons */}
              <div className="absolute top-4 right-4 flex gap-2 opacity-20">
                {service.subIcons.map((SubIcon, i) => (
                  <SubIcon key={i} className="w-5 h-5" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
