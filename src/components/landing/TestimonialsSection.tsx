import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "María García",
    role: "CEO, TechStore Colombia",
    content: "Gracias a su estrategia de marketing, incrementamos nuestras ventas online en un 450% en solo 6 meses. La inversión en publicidad digital finalmente está generando resultados reales.",
    rating: 5,
    avatar: "MG",
  },
  {
    name: "Carlos Rodríguez",
    role: "Fundador, RestaurantePro",
    content: "El sitio web que desarrollaron para nosotros superó todas nuestras expectativas. Moderno, rápido y nuestros clientes ahora pueden hacer reservas online fácilmente.",
    rating: 5,
    avatar: "CR",
  },
  {
    name: "Ana Martínez",
    role: "Directora de Marketing, ModaStyle",
    content: "Los cursos de marketing digital me dieron las herramientas que necesitaba para manejar internamente nuestras campañas. El ROI ha sido increíble.",
    rating: 5,
    avatar: "AM",
  },
  {
    name: "Roberto Sánchez",
    role: "Gerente, Consultoría RS",
    content: "Profesionalismo, resultados y comunicación constante. La gestión integral de nuestras redes sociales ha transformado nuestra presencia digital.",
    rating: 5,
    avatar: "RS",
  },
];

const clientLogos = [
  "TechStore",
  "ModaStyle",
  "RestaurantePro",
  "Consultoría RS",
  "StartupX",
  "InnovaLab",
];

const TestimonialsSection = () => {
  return (
    <section id="testimonios" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/10 text-secondary">
            <Star className="w-4 h-4 fill-current" />
            <span className="text-sm font-medium">Testimonios</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Lo que Dicen Nuestros{" "}
            <span className="text-secondary">Clientes</span>
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Más de 150 clientes satisfechos respaldan nuestro trabajo. 
            Aquí algunas de sus historias de éxito.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative bg-background p-8 rounded-3xl shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-secondary/20" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-secondary fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-foreground mb-6 italic">
                "{testimonial.content}"
              </p>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-cta flex items-center justify-center text-secondary-foreground font-bold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Client Logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-muted-foreground mb-8">
            Empresas que confían en nosotros
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {clientLogos.map((logo, index) => (
              <motion.div
                key={logo}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-xl font-bold text-muted-foreground/50 hover:text-primary transition-colors"
              >
                {logo}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
