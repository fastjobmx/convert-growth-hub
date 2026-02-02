import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Globe, Megaphone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    document.getElementById('precios')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-primary-foreground"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 backdrop-blur-sm"
            >
              <TrendingUp className="w-4 h-4 text-secondary" />
              <span className="text-sm font-medium">Impulsa tu negocio al siguiente nivel</span>
            </motion.div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6">
              Marketing Digital que{" "}
              <span className="text-secondary">Convierte</span>{" "}
              y Genera{" "}
              <span className="text-accent">Resultados</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-xl">
              Cursos, desarrollo web y servicios de marketing digital para 
              hacer crecer tu negocio. Estrategias probadas que generan 
              ventas reales.
            </p>

            {/* Pricing Preview */}
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <Megaphone className="w-5 h-5 text-secondary" />
                <span className="text-sm">Cursos desde <strong>USD $30</strong></span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <Globe className="w-5 h-5 text-accent" />
                <span className="text-sm">Webs desde <strong>USD $100</strong></span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <Button 
                variant="hero" 
                size="xl"
                onClick={scrollToContact}
                className="group"
              >
                Contratar Servicio Ahora
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="heroOutline" 
                size="xl"
                onClick={scrollToPricing}
              >
                <Play className="w-5 h-5" />
                Ver Planes y Precios
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              {/* Floating Stats Card 1 */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-0 right-0 glass-effect p-6 rounded-2xl shadow-card-hover"
              >
                <div className="text-4xl font-bold text-primary mb-1">+500%</div>
                <div className="text-sm text-muted-foreground">ROI promedio</div>
              </motion.div>

              {/* Floating Stats Card 2 */}
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-32 left-0 glass-effect p-6 rounded-2xl shadow-card-hover"
              >
                <div className="text-4xl font-bold text-secondary mb-1">150+</div>
                <div className="text-sm text-muted-foreground">Clientes satisfechos</div>
              </motion.div>

              {/* Floating Stats Card 3 */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 7, repeat: Infinity }}
                className="absolute bottom-0 right-20 glass-effect p-6 rounded-2xl shadow-card-hover"
              >
                <div className="text-4xl font-bold text-accent mb-1">8+</div>
                <div className="text-sm text-muted-foreground">Años de experiencia</div>
              </motion.div>

              {/* Central Graphic Element */}
              <div className="w-80 h-80 mx-auto bg-primary-foreground/5 rounded-full border border-primary-foreground/10 flex items-center justify-center">
                <div className="w-60 h-60 bg-primary-foreground/5 rounded-full border border-primary-foreground/10 flex items-center justify-center">
                  <div className="w-40 h-40 bg-gradient-cta rounded-full flex items-center justify-center shadow-cta">
                    <TrendingUp className="w-16 h-16 text-primary-foreground" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
