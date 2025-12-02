import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Layout, Megaphone } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Home: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, 200]);

  const services = [
    {
      title: "Brand & Voice",
      desc: "Positioning, taglines, and voice guides that keep every message on-brand.",
      icon: <Star size={24} className="text-brand-green" />,
      link: "/services"
    },
    {
      title: "Websites & Digital",
      desc: "Website copy, landing pages, and email flows that guide people to action.",
      icon: <Layout size={24} className="text-brand-green" />,
      link: "/services"
    },
    {
      title: "Campaigns & Launches",
      desc: "Concepts, themes, and scripts that tie your campaign together online and offline.",
      icon: <Megaphone size={24} className="text-brand-green" />,
      link: "/services"
    }
  ];

  const projects = [
    {
      client: "Gulfstream Aerospace",
      desc: "Brochure and print copy for the business-jet manufacturer.",
      category: "Print",
      link: "/work/1",
      image: "https://images.unsplash.com/photo-1540962351504-03099e0a754b?auto=format&fit=crop&q=80&w=1000"
    },
    {
      client: "Chemist Spirits",
      desc: "Brand and product copy supporting an 'apothecary' vibe for a craft distillery.",
      category: "Branding",
      link: "/work/7",
      image: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?auto=format&fit=crop&q=80&w=1000"
    },
    {
      client: "SkyBlue Homes",
      desc: "Friendly, personal website copy that reflects the founder’s unique service style.",
      category: "Website",
      link: "/work/8",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const marqueeItems = [
    "Brand Messaging", "Website Copy", "Campaign Concepts", "Video Scripts", "Taglines", "Voice Guides", "Email Marketing", "Social Strategy"
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-neutral-cream"
    >
      {/* HERO SECTION */}
      <section ref={targetRef} className="relative min-h-screen flex items-center justify-center px-4 pt-28 md:pt-36 pb-12 overflow-hidden">
        
        {/* Background Huge Text (Parallax) */}
        <motion.div 
          style={{ y: textY, opacity }}
          className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden"
        >
          <h1 className="text-[30vw] md:text-[25vw] font-bold text-secondary-sand/30 tracking-tighter select-none whitespace-nowrap">
            CREATIVE
          </h1>
        </motion.div>

        {/* Hero Card - Using HTC Green as base */}
        <motion.div 
          style={{ scale }}
          className="relative z-10 max-w-6xl w-full bg-brand-green rounded-3xl shadow-2xl border border-ui-forest/10 overflow-hidden text-ui-forest"
        >
          <div className="flex flex-col lg:flex-row min-h-[650px]">
            
            {/* Left Content */}
            <div className="flex-1 p-8 md:p-16 flex flex-col justify-center relative">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-20 pointer-events-none"></div>
              
              <Reveal delay={0.2}>
                <span className="inline-block text-ui-forest font-bold tracking-wider text-xs uppercase mb-8 border border-ui-forest/30 px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm">
                  Based in Savannah, GA
                </span>
              </Reveal>
              
              <Reveal delay={0.3}>
                <h2 className="text-5xl md:text-7xl font-heading font-bold leading-[1.1] mb-8 text-ui-forest">
                  Pure, clear, <br/><span className="text-neutral-cream">creative</span> copy.
                </h2>
              </Reveal>

              <Reveal delay={0.4}>
                <p className="text-lg md:text-xl text-ui-forest/80 font-medium mb-12 leading-relaxed max-w-lg">
                  HTCreative helps brands be remarkable and be remembered with sharp, human copy that actually sounds like you—and works.
                </p>
              </Reveal>

              <Reveal delay={0.5}>
                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                  <Link
                    to="/contact"
                    className="group px-8 py-4 bg-ui-forest text-neutral-cream font-bold rounded-full hover:bg-neutral-cream hover:text-ui-forest transition-all transform hover:-translate-y-1 shadow-xl"
                  >
                    Start a Project
                  </Link>
                  <Link
                    to="/work"
                    className="px-6 py-4 text-ui-forest font-bold hover:text-neutral-cream transition-colors flex items-center gap-2 group"
                  >
                    View Featured Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* Right Visual */}
            <div className="flex-1 bg-ui-forest/10 relative flex items-center justify-center p-10 overflow-hidden">
              
              {/* Abstract Floating Cards Animation */}
              <div className="w-full max-w-md relative z-10">
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white/40 backdrop-blur-xl p-6 rounded-2xl border border-white/30 shadow-xl transform rotate-3 mb-[-20px] ml-12"
                >
                  <div className="flex gap-2 mb-3">
                    <div className="h-2 w-2 rounded-full bg-secondary-clay"></div>
                    <div className="h-2 w-2 rounded-full bg-ui-gold"></div>
                    <div className="h-2 w-2 rounded-full bg-secondary-moss"></div>
                  </div>
                  <div className="h-2 w-1/2 bg-ui-forest/20 rounded mb-2"></div>
                  <div className="h-2 w-3/4 bg-ui-forest/10 rounded"></div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, y: [0, 10, 0] }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="bg-white p-8 rounded-2xl shadow-2xl transform -rotate-2 relative z-20 border border-ui-forest/5"
                >
                   <div className="absolute -top-4 -right-4 bg-ui-forest text-brand-green text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12">
                     Approved
                   </div>
                   <h3 className="text-brand-brown font-heading font-bold text-3xl mb-3">Collabcreation.</h3>
                   <p className="text-neutral-charcoal/80 text-base leading-relaxed">
                     "The collaboration of the best-of-the-best creative talents to realize a client’s vision and goals."
                   </p>
                   <div className="mt-6 flex items-center gap-3">
                      <div className="h-8 w-8 rounded-full bg-brand-brown flex items-center justify-center text-brand-green text-xs font-bold">HG</div>
                      <span className="text-sm font-bold text-brand-brown">Heather Grant</span>
                   </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="bg-ui-forest/20 backdrop-blur-md p-5 rounded-xl border border-ui-forest/10 shadow-lg transform -rotate-6 mt-[-10px] mr-12 ml-auto w-2/3"
                >
                  <div className="h-2 w-full bg-ui-forest/20 rounded mb-2"></div>
                  <div className="h-2 w-2/3 bg-ui-forest/20 rounded"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <div className="bg-brand-brown py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="flex items-center mx-6">
              <span className="text-brand-green font-bold text-lg uppercase tracking-wider font-heading">{item}</span>
              <Star size={12} className="ml-6 text-secondary-sand" fill="currentColor" />
            </div>
          ))}
        </div>
      </div>

      {/* SERVICES PREVIEW - Warm Sand Background */}
      <section className="py-24 bg-secondary-sand text-neutral-charcoal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <Reveal>
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-brand-brown">
                  Copy that does the heavy lifting.
                </h2>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-lg text-brand-brown/80 leading-relaxed mb-8">
                  From big-picture messaging to the words on the page, HTCreative makes sure every line has a job. Strategy first, then smart, clear writing.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link to="/services" className="inline-flex items-center font-bold border-b-2 border-brand-green pb-1 hover:text-ui-gold transition-colors text-brand-brown">
                  Explore all services
                </Link>
              </Reveal>
            </div>
            <div className="lg:w-2/3 grid md:grid-cols-2 lg:grid-cols-1 gap-6">
              {services.map((s, i) => (
                <Reveal key={i} delay={0.2 + (i * 0.1)}>
                  <Link to={s.link} className="group block bg-neutral-cream p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-neutral-taupe/30 transform hover:-translate-y-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-2 text-brand-brown group-hover:text-ui-gold transition-colors">{s.title}</h3>
                        <p className="text-neutral-charcoal/80">{s.desc}</p>
                      </div>
                      <div className="bg-secondary-sand/30 p-3 rounded-full group-hover:bg-brand-green group-hover:text-ui-forest transition-colors duration-300">
                        {s.icon}
                      </div>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED WORK - Deep Forest Background */}
      <section className="py-32 bg-ui-forest relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <Reveal>
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-cream mb-4">Projects</h2>
               <p className="text-neutral-warm/70 max-w-2xl mx-auto text-lg">
                 A few examples of brands I've helped clarify, sharpen, and launch.
               </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <Reveal key={i} delay={i * 0.15}>
                <Link to={p.link} className="block h-full">
                  <div className="bg-secondary-olive rounded-2xl overflow-hidden border border-brand-brown hover:border-brand-green transition-all duration-300 group h-full flex flex-col hover:shadow-2xl hover:-translate-y-2">
                    <div className="h-56 w-full overflow-hidden relative">
                        <div className="absolute inset-0 bg-ui-forest/20 group-hover:bg-transparent transition-colors z-10"></div>
                        <img src={p.image} alt={p.client} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute top-4 left-4 z-20">
                            <span className="bg-ui-forest/90 text-brand-green text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-brand-green/30 shadow-sm backdrop-blur-sm">
                              {p.category}
                            </span>
                        </div>
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-heading font-bold text-neutral-cream mb-3 group-hover:text-brand-green transition-colors">{p.client}</h3>
                      <p className="text-neutral-warm/80 leading-relaxed text-sm mb-6">
                        {p.desc}
                      </p>
                      <div className="mt-auto pt-6 border-t border-brand-brown flex justify-between items-center text-neutral-warm/50 group-hover:text-neutral-cream transition-colors">
                        <span className="font-medium text-sm">View Project</span>
                        <div className="bg-ui-forest p-2 rounded-full group-hover:bg-brand-green group-hover:text-ui-forest transition-colors">
                          <ArrowRight size={16} />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
          
          <Reveal delay={0.4}>
            <div className="text-center mt-16">
              <Link to="/work" className="inline-block px-10 py-4 border border-brand-green text-brand-green rounded-full hover:bg-brand-green hover:text-ui-forest transition-all font-bold tracking-wide">
                View Full Portfolio
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA - Soft Sage Background */}
      <section className="py-32 bg-ui-sage text-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <Reveal>
          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-ui-forest mb-8">
              Ready to make your message <span className="text-white underline decoration-4 decoration-white/30 underline-offset-4">impossible to ignore?</span>
            </h2>
            <p className="text-xl text-ui-forest/80 font-medium mb-12 max-w-2xl mx-auto">
              Tell me what you're working on and I'll let you know how I can help.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/contact" className="px-10 py-5 bg-ui-forest text-neutral-cream font-bold rounded-full hover:bg-neutral-cream hover:text-ui-forest transition-all shadow-xl hover:-translate-y-1 text-lg">
                Start a Project
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </motion.div>
  );
};

export default Home;