import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check, Crown, Zap, Star, ArrowRight } from "lucide-react";

const pricingPlans = [
  {
    name: "Plan Básico",
    icon: Zap,
    description: "Perfecto para empezar tu presencia digital",
    priceUSD: "$100",
    priceCOP: "~COP $400.000",
    period: "/mes",
    features: [
      "Gestión de 2 redes sociales",
      "8 publicaciones mensuales",
      "Diseño gráfico básico",
      "Reporte mensual de resultados",
      "Soporte por email",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  },
  {
    name: "Plan Profesional",
    icon: Star,
    description: "La opción más popular para negocios en crecimiento",
    priceUSD: "$300",
    priceCOP: "~COP $1.200.000",
    period: "/mes",
    features: [
      "Gestión de 4 redes sociales",
      "20 publicaciones mensuales",
      "Campañas de publicidad (Ads)",
      "Diseño gráfico profesional",
      "Email marketing básico",
      "Reportes semanales",
      "Soporte prioritario",
    ],
    popular: true,
    buttonVariant: "cta" as const,
  },
  {
    name: "Plan Premium",
    icon: Crown,
    description: "Solución integral para empresas ambiciosas",
    priceUSD: "$600",
    priceCOP: "~COP $2.400.000",
    period: "/mes",
    features: [
      "Gestión ilimitada de redes",
      "Contenido diario personalizado",
      "Campañas Ads avanzadas",
      "SEO y posicionamiento",
      "Email marketing automatizado",
      "Video marketing incluido",
      "Consultoría estratégica mensual",
      "Soporte 24/7",
    ],
    popular: false,
    buttonVariant: "outline" as const,
  },
];

const additionalServices = [
  { name: "Curso básico de marketing", priceUSD: "$30", priceCOP: "COP $120.000" },
  { name: "Curso avanzado de publicidad", priceUSD: "$150", priceCOP: "COP $600.000" },
  { name: "Máster en marketing digital", priceUSD: "$500", priceCOP: "COP $2.000.000" },
  { name: "Landing page básica", priceUSD: "$100", priceCOP: "COP $400.000" },
  { name: "Sitio WordPress completo", priceUSD: "$300", priceCOP: "COP $1.200.000" },
  { name: "E-commerce / Tienda online", priceUSD: "$500+", priceCOP: "COP $2.000.000+" },
];

const PricingSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="precios" className="section-padding bg-gradient-hero text-primary-foreground">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-foreground/10 text-primary-foreground">
            <Crown className="w-4 h-4" />
            <span className="text-sm font-medium">Planes y Precios</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Precios{" "}
            <span className="text-secondary">Transparentes</span>
          </h2>
          
          <p className="text-lg text-primary-foreground/80">
            Sin costos ocultos. Elige el plan que mejor se adapte a tus necesidades. 
            Todos los precios en USD con equivalente en COP.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-3xl p-8 ${
                plan.popular 
                  ? 'bg-card text-card-foreground scale-105 shadow-card-hover' 
                  : 'bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-cta text-secondary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-cta">
                  Más Popular
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                plan.popular ? 'bg-secondary/10' : 'bg-primary-foreground/10'
              }`}>
                <plan.icon className={`w-7 h-7 ${plan.popular ? 'text-secondary' : 'text-primary-foreground'}`} />
              </div>

              {/* Plan Name */}
              <h3 className={`text-xl font-display font-bold mb-2 ${
                plan.popular ? 'text-foreground' : 'text-primary-foreground'
              }`}>
                {plan.name}
              </h3>
              
              <p className={`text-sm mb-6 ${
                plan.popular ? 'text-muted-foreground' : 'text-primary-foreground/70'
              }`}>
                {plan.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-secondary' : 'text-primary-foreground'
                  }`}>
                    {plan.priceUSD}
                  </span>
                  <span className={plan.popular ? 'text-muted-foreground' : 'text-primary-foreground/70'}>
                    {plan.period}
                  </span>
                </div>
                <div className={`text-sm ${plan.popular ? 'text-muted-foreground' : 'text-primary-foreground/60'}`}>
                  {plan.priceCOP}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-5 h-5 flex-shrink-0 ${
                      plan.popular ? 'text-secondary' : 'text-primary-foreground/80'
                    }`} />
                    <span className={`text-sm ${
                      plan.popular ? 'text-foreground' : 'text-primary-foreground/90'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button 
                variant={plan.buttonVariant}
                className={`w-full ${!plan.popular && 'border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10'}`}
                onClick={scrollToContact}
              >
                Empezar Ahora
                <ArrowRight className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-primary-foreground/5 backdrop-blur-sm rounded-3xl p-8 border border-primary-foreground/10"
        >
          <h3 className="text-2xl font-display font-bold text-center mb-8">
            Servicios Adicionales
          </h3>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="flex justify-between items-center p-4 bg-primary-foreground/5 rounded-xl"
              >
                <span className="text-primary-foreground/90">{service.name}</span>
                <div className="text-right">
                  <div className="font-bold text-secondary">{service.priceUSD}</div>
                  <div className="text-xs text-primary-foreground/60">{service.priceCOP}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
