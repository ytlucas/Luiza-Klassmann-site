import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  Instagram, 
  Facebook, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ChevronRight, 
  Star,
  CheckCircle2,
  Award,
  Users,
  Sparkles,
  Heart,
  Droplets,
  Zap
} from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cursos', href: '#cursos' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/80 backdrop-blur-xl py-3 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#inicio" 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-serif font-bold tracking-tighter group"
        >
          <span className="text-brand-terracotta group-hover:text-brand-sage transition-colors duration-300">LUIZA</span> 
          <span className="text-brand-gold font-light italic ml-1">KLASSMANN</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link, i) => (
            <motion.a 
              key={link.name} 
              href={link.href} 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-[11px] uppercase tracking-[0.2em] font-bold hover:text-brand-terracotta transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-terracotta transition-all group-hover:w-full" />
            </motion.a>
          ))}
          <motion.a 
            href="#contato"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="px-6 py-2.5 bg-brand-terracotta text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-brand-sage transition-all shadow-md"
          >
            Agendar
          </motion.a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-brand-ink p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col p-8 space-y-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-serif text-brand-ink hover:text-brand-terracotta transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://i.pinimg.com/736x/44/f7/01/44f701cf830750a0ec82a8fe41eba753.jpg"
          alt="Background"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-white text-[10px] font-bold tracking-[0.2em] uppercase mb-8 border border-white/20"
          >
            <Sparkles size={12} />
            LUIZA KLASSMANN MASSOTERAPIA
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl leading-[1.1] mb-8 tracking-tight text-white font-serif">
            Transformando <br />
            <span className="italic font-light">vidas</span> através <br />
            do <span className="text-brand-accent">toque.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl leading-relaxed font-light">
            Especialista em Liberação Miofascial e Terapias de Alta Performance. <br />
            Foco em resultados precisos e bem-estar profundo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.a 
              href="#contato" 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-brand-terracotta text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-brand-sage transition-all shadow-2xl flex items-center justify-center group"
            >
              Agendar Avaliação
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </motion.a>
            <motion.a 
              href="#servicos" 
              whileHover={{ scale: 1.05 }}
              className="px-10 py-5 border-2 border-white/30 text-white rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/10 transition-all flex items-center justify-center"
            >
              Ver Serviços
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="sobre" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="rounded-[60px] overflow-hidden shadow-2xl aspect-square relative z-10">
            <img 
              src="https://i.ibb.co/jvpdnB4m/487843042-2450645545322648-6455522586577811998-n.jpg" 
              alt="Luiza Klassmann" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-sage/10 rounded-full -z-10 blur-3xl" />
          <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-terracotta/10 rounded-full -z-10 blur-2xl" />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl mb-10 leading-tight">
            Uma trajetória dedicada à <span className="text-brand-terracotta italic font-light">excelência</span> no toque.
          </h2>
          <div className="space-y-8 text-brand-ink/70 leading-relaxed font-light text-lg">
            <p>
              Com anos de experiência e uma formação sólida, Luiza Klassmann consolidou-se como uma das principais referências em massoterapia de alta performance. Sua abordagem une técnica científica e sensibilidade, focando não apenas no alívio de sintomas, mas na recuperação funcional e estética do corpo.
            </p>
            <p>
              Além de seus atendimentos clínicos, Luiza dedica-se ao ensino, capacitando novos profissionais através de seus cursos presenciais e mentorias VIP, onde compartilha sua metodologia exclusiva de Liberação Miofascial.
            </p>
            <div className="grid grid-cols-2 gap-10 pt-8">
              <div className="space-y-3">
                <div className="w-10 h-10 bg-brand-terracotta/10 rounded-xl flex items-center justify-center text-brand-terracotta">
                  <Award size={20} />
                </div>
                <h4 className="font-bold text-xs uppercase tracking-widest">Autoridade</h4>
                <p className="text-sm text-brand-ink/50">Referência no ensino de terapias manuais.</p>
              </div>
              <div className="space-y-3">
                <div className="w-10 h-10 bg-brand-sage/10 rounded-xl flex items-center justify-center text-brand-sage">
                  <Zap size={20} />
                </div>
                <h4 className="font-bold text-xs uppercase tracking-widest">Performance</h4>
                <p className="text-sm text-brand-ink/50">Foco em resultados reais e duradouros.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      title: "Drenagem Linfática",
      image: "https://www.sbd.org.br/wp-content/uploads/2022/06/Drenagem-linfatica-e-benefica-para-a-saude-shutterstock-1.webp",
      description: "Estimula o sistema linfático para reduzir edemas, eliminar toxinas e melhorar a circulação.",
      tag: "Saúde & Estética"
    },
    {
      title: "Liberação Miofascial",
      image: "https://clubepaineiras.org.br/wp-content/uploads/2024/02/27-3-Liberacao-Miofascial.jpg",
      description: "Atua nas fáscias musculares para devolver mobilidade e aliviar tensões profundas.",
      tag: "Performance"
    },
    {
      title: "Ventosas",
      image: "https://blog.vitoriahoteis.com.br/wp-content/uploads/2025/09/sessao-terapia-ventosas-copos-costas.webp",
      description: "Técnica milenar que melhora a circulação sanguínea e libera toxinas musculares.",
      tag: "Recuperação"
    },
    {
      title: "Pedras Quentes",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSjjHposbntb78kw3yhlym8FCT7R2NiAHTZA&s",
      description: "Proporciona relaxamento profundo e alívio do estresse através do calor terapêutico.",
      tag: "Bem-estar"
    },
    {
      title: "Massagem Modeladora",
      image: "https://biocap.com.br/wp-content/uploads/2023/11/foto_blog_Novembro_1024x641_01.png",
      description: "Técnica vigorosa que auxilia na redução de medidas e melhora o contorno corporal.",
      tag: "Estética"
    },
    {
      title: "Skin Care",
      image: "https://www.clinicaleger.com.br/wp-content/uploads/2020/01/rotina-skincare-cuidados-com-a-pele.jpg",
      description: "Protocolos personalizados para manter a saúde e o brilho natural da sua pele.",
      tag: "Beleza"
    },
    {
      title: "Acupuntura",
      image: "https://medicinasa.com.br/wp-content/uploads/2020/11/acupuntura.jpg",
      description: "Equilíbrio energético e alívio de dores através de pontos estratégicos do corpo.",
      tag: "Equilíbrio"
    },
    {
      title: "Microagulhamento",
      image: "https://hamonir.com.br/wp-content/uploads/2022/02/microagulhamento-no-rosto-1300x731.jpg",
      description: "Estimula a produção de colágeno para rejuvenescimento e tratamento de cicatrizes.",
      tag: "Rejuvenescimento"
    }
  ];

  return (
    <section id="servicos" className="py-32 bg-[#FDFBF7]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-terracotta text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block"
          >
            Nossas Especialidades
          </motion.span>
          <h2 className="text-5xl md:text-6xl mb-6">Serviços de <span className="text-brand-sage italic font-light">Alta Performance</span></h2>
          <p className="text-brand-ink/50 max-w-2xl mx-auto font-light text-lg">
            Tratamentos exclusivos desenvolvidos para proporcionar resultados reais e uma experiência sensorial única.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-brand-gold/5"
            >
              <div className="h-64 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[9px] font-bold uppercase tracking-widest text-brand-ink shadow-sm">
                    {service.tag}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl mb-3 group-hover:text-brand-terracotta transition-colors">{service.title}</h3>
                <p className="text-brand-ink/50 text-sm leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
                <a 
                  href="#contato" 
                  className="inline-flex items-center justify-center w-full py-3 bg-brand-terracotta text-white rounded-2xl text-[10px] font-bold uppercase tracking-widest hover:bg-brand-sage transition-all shadow-lg shadow-brand-terracotta/20"
                >
                  Agendar <ChevronRight size={14} className="ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Courses = () => {
  return (
    <section id="cursos" className="py-32 bg-brand-ink text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-brand-gold rounded-full blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-brand-terracotta rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-gold text-[10px] font-bold uppercase tracking-[0.4em] mb-6 block">
              Formação Profissional
            </span>
            <h2 className="text-5xl md:text-7xl mb-10 leading-[1.1]">
              Capacite-se com quem é <span className="text-brand-gold italic font-light">referência</span> no mercado.
            </h2>
            <p className="text-white/60 text-xl mb-12 leading-relaxed font-light">
              O Curso de Liberação Miofascial (VIP e Presencial) foi desenvolvido para profissionais que desejam elevar o nível de seus atendimentos e dominar a técnica que mais cresce na massoterapia.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              {[
                { icon: <CheckCircle2 size={18} />, text: "Metodologia Prática" },
                { icon: <Award size={18} />, text: "Certificação VIP" },
                { icon: <Users size={18} />, text: "Turmas Reduzidas" },
                { icon: <Heart size={18} />, text: "Suporte Vitalício" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="text-brand-gold">{item.icon}</div>
                  <span className="text-sm font-medium uppercase tracking-widest text-white/80">{item.text}</span>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-brand-gold text-brand-ink rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white transition-all shadow-2xl shadow-brand-gold/20"
            >
              Quero ser Aluno(a)
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[50px] overflow-hidden shadow-2xl border-8 border-white/5 group">
              <img 
                src="https://i.ibb.co/Nd3hQ5Yn/Gemini-Generated-Image-w5m0iiw5m0iiw5m0.png" 
                alt="Aluna segurando certificado de Massoterapia" 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -top-10 -right-10 bg-brand-terracotta p-10 rounded-[40px] shadow-2xl transform rotate-6">
              <p className="text-[10px] font-bold uppercase tracking-widest mb-2 text-white/60">Próxima Turma</p>
              <p className="text-3xl font-serif italic">Vagas Limitadas</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};



const Footer = () => {
  return (
    <footer id="contato" className="bg-[#FDFBF7] pt-32 pb-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-20 mb-24">
          <div className="md:col-span-2">
            <a href="#" className="text-4xl font-serif font-bold tracking-tighter mb-8 block">
              <span className="text-brand-terracotta">LUIZA</span> 
              <span className="text-brand-gold font-light italic ml-2">KLASSMANN</span>
            </a>
            <p className="text-brand-ink/50 max-w-sm mb-10 text-lg font-light leading-relaxed">
              Promovendo saúde, bem-estar e alta performance através de terapias manuais especializadas e formação profissional de excelência.
            </p>
            <div className="flex gap-6">
              <motion.a 
                whileHover={{ y: -5 }}
                href="#" 
                className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-terracotta shadow-xl hover:bg-brand-terracotta hover:text-white transition-all"
              >
                <Instagram size={24} />
              </motion.a>
              <motion.a 
                whileHover={{ y: -5 }}
                href="#" 
                className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-brand-terracotta shadow-xl hover:bg-brand-terracotta hover:text-white transition-all"
              >
                <Facebook size={24} />
              </motion.a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-brand-ink/40 mb-10">Navegação</h4>
            <ul className="space-y-6 text-sm font-medium uppercase tracking-widest text-brand-ink/60">
              <li><a href="#inicio" className="hover:text-brand-terracotta transition-colors">Início</a></li>
              <li><a href="#sobre" className="hover:text-brand-terracotta transition-colors">Sobre</a></li>
              <li><a href="#servicos" className="hover:text-brand-terracotta transition-colors">Serviços</a></li>
              <li><a href="#cursos" className="hover:text-brand-terracotta transition-colors">Cursos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.3em] text-brand-ink/40 mb-10">Contato</h4>
            <ul className="space-y-8 text-sm font-light text-brand-ink/70">
              <li className="flex items-start gap-4">
                <MapPin size={20} className="text-brand-terracotta shrink-0" />
                <span>Rua das Palmeiras, 123 <br /> Centro, São Paulo - SP</span>
              </li>
              <li className="flex items-center gap-4">
                <Phone size={20} className="text-brand-terracotta shrink-0" />
                <span>(11) 99999-9999</span>
              </li>
              <li className="flex items-center gap-4">
                <MessageCircle size={20} className="text-brand-terracotta shrink-0" />
                <span>contato@luizaklassmann.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-ink/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] text-brand-ink/30 uppercase tracking-[0.4em] font-bold">
          <p>© 2024 Luiza Klassmann. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-brand-terracotta transition-colors">Privacidade</a>
            <a href="#" className="hover:text-brand-terracotta transition-colors">Termos</a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp */}
      <motion.a 
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://wa.me/5511999999999" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-10 right-10 w-20 h-20 bg-[#25D366] text-white rounded-[24px] flex items-center justify-center shadow-[0_20px_50px_rgba(37,211,102,0.4)] hover:shadow-[0_20px_60px_rgba(37,211,102,0.6)] transition-all z-50"
      >
        <MessageCircle size={40} />
      </motion.a>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen selection:bg-brand-terracotta/20 selection:text-brand-terracotta">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Courses />

      </main>
      <Footer />
    </div>
  );
}
