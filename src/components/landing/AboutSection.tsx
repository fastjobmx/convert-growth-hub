import { motion } from "framer-motion";
import { Award, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import profileAvatar from "@/assets/profile-avatar.jpg";

const stats = [
  { icon: Users, value: "150+", label: "Clientes Atendidos" },
  { icon: TrendingUp, value: "300%", label: "Incremento Promedio en Ventas" },
  { icon: Award, value: "8+", label: "Años de Experiencia" },
];

const achievements = [
  "Certificación en Google Ads & Analytics",
  "Meta Business Partner",
  "Especialista en SEO y SEM",
  "Desarrollador Web Certificado",
];

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-card">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Profile Image Container */}
            <div className="relative max-w-md mx-auto lg:mx-0">
              <div className="aspect-square rounded-3xl overflow-hidden shadow-card-hover">
                <img 
                  src={profileAvatar} 
                  alt="Experto en Marketing Digital" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-6 -right-6 bg-gradient-cta text-secondary-foreground p-4 rounded-2xl shadow-cta"
              >
                <div className="text-2xl font-bold">8+</div>
                <div className="text-xs">Años</div>
              </motion.div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mt-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-4 bg-background rounded-xl shadow-card"
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-secondary" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-secondary/10 text-secondary">
              <Award className="w-4 h-4" />
              <span className="text-sm font-medium">Sobre Mí</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Tu Socio Estratégico en{" "}
              <span className="text-secondary">Marketing Digital</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Con más de 8 años de experiencia ayudando a empresas y emprendedores 
              a crecer en el mundo digital. Mi enfoque combina estrategia, 
              creatividad y análisis de datos para lograr resultados medibles.
            </p>

            <p className="text-muted-foreground mb-8">
              He trabajado con más de 150 clientes en diferentes industrias, 
              desde startups hasta empresas consolidadas, logrando incrementos 
              promedio del 300% en sus ventas y visibilidad online.
            </p>

            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                  <span className="text-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>

            {/* Brands/Certifications */}
            <div className="flex items-center gap-6 opacity-60">
              <span className="text-sm text-muted-foreground">Certificado por:</span>
              <div className="flex items-center gap-4">
                <div className="text-xl font-bold text-foreground">Google</div>
                <div className="text-xl font-bold text-foreground">Meta</div>
                <div className="text-xl font-bold text-foreground">HubSpot</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
