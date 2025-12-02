import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Coffee, MapPin, BookOpen, Quote, Award, GraduationCap, Mic } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const About: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-neutral-cream min-h-screen pt-40 md:pt-56"
    >
      {/* Main Content Section */}
      <section className="max-w-7xl mx-auto px-6 mb-32">
        <div className="flex flex-col lg:flex-row gap-20 items-start">
          
          {/* Text Column */}
          <div className="flex-1 order-2 lg:order-1">
            <Reveal>
              <h1 className="text-5xl md:text-8xl font-heading font-bold text-brand-brown mb-12 tracking-tight">
                Hi, I’m <span className="text-transparent bg-clip-text bg-gradient-to-r from-ui-forest to-secondary-moss">Heather.</span>
              </h1>
            </Reveal>
            
            <Reveal delay={0.2}>
              <div className="prose prose-lg text-neutral-charcoal/90 leading-relaxed text-lg max-w-none">
                <p className="mb-8">
                  Why is collaboration so important? Because I could not do what I do alone. When I first began my career as an executive assistant at an advertising agency more than twenty years ago (was it really that long?), I had no idea the many hats I would be blessed to wear as I honed my experience in the marketing realm: writing for every medium, directing voice and on-screen talent, overseeing a graphic design department, directing on-location shoots and post-production editing, writing proposals and pitching campaigns, developing all-encompassing concepts – it was the most challenging and absolute BEST training I never knew I really needed! After nearly 10 years, working my way up from executive assistant to senior copywriter and ultimately creative director, I learned a lot about myself and also to appreciate the talents of those around me.
                </p>
                
                <div className="my-12 pl-6 border-l-4 border-brand-green">
                  <h3 className="text-3xl font-heading font-bold text-brand-brown mb-4">Two heads are better than one.</h3>
                  <p className="italic text-xl text-neutral-charcoal/80">
                    Every work contained within this site is the result of what I call <span className="font-bold text-brand-brown">“collabcreation”</span> – the collaboration of the best-of-the-best creative talents to realize a client’s vision and goals.
                  </p>
                </div>

                <p className="mb-8">
                   We push each other, encourage one another and work together for the greatest benefit of our clients. And while I have a whole lotta experience under my belt, when you choose HT Creative, you get that experience tenfold as my “ride or die” colleagues and I dedicate every ounce of our respective creative ingenuity to fuel your success.
                </p>

                <div className="w-24 h-1 bg-brand-brown/10 my-10 rounded-full"></div>

                <p className="mb-6">
                  As for me personally, I’m a graduate of the University of Georgia (summa cum laude), graduate of the Leadership Savannah program, winner of multiple Savannah ADDY awards (print production), Telly awards (television production), and Silver Microphone Awards (radio production).
                </p>
                <p>
                  In my spare time I like to write children’s books in rhyme (a passion since my own childhood) and dabble in as many creative endeavors as possible. Most of all, I thank you for visiting HTCreative.net and look forward to collaborating with you soon.
                </p>
                
                {/* Credentials / Awards List */}
                <div className="flex flex-wrap gap-3 mt-10 not-prose">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-taupe rounded-full text-sm font-bold text-brand-brown shadow-sm hover:border-ui-gold transition-colors">
                    <GraduationCap size={18} className="text-secondary-moss" /> UGA Summa Cum Laude
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-taupe rounded-full text-sm font-bold text-brand-brown shadow-sm hover:border-ui-gold transition-colors">
                    <Award size={18} className="text-secondary-moss" /> ADDY Awards
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-taupe rounded-full text-sm font-bold text-brand-brown shadow-sm hover:border-ui-gold transition-colors">
                    <Award size={18} className="text-secondary-moss" /> Telly Awards
                  </div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-neutral-taupe rounded-full text-sm font-bold text-brand-brown shadow-sm hover:border-ui-gold transition-colors">
                    <Mic size={18} className="text-secondary-moss" /> Silver Microphone Awards
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Image Column */}
          <div className="flex-1 w-full lg:w-auto flex justify-center lg:justify-end order-1 lg:order-2 lg:sticky lg:top-32">
            <Reveal delay={0.4}>
              <div className="relative w-full max-w-md aspect-[4/5] bg-secondary-sand rounded-[2rem] overflow-hidden shadow-2xl rotate-2 border-[8px] border-white group transition-transform hover:rotate-0">
                 <img 
                    src="https://i.postimg.cc/k4Yqz4zF/Heather.jpg" 
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
                    }}
                    alt="Heather Grant" 
                    className="w-full h-full object-cover object-[50%_20%] transition-all duration-700" 
                 />
                 <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ui-forest/90 via-ui-forest/50 to-transparent p-8 pt-24">
                    <p className="text-brand-green font-bold text-lg flex items-center gap-2 drop-shadow-md">
                      <MapPin size={18}/> Based in Savannah, GA
                    </p>
                 </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-ui-forest text-neutral-cream py-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
           <Reveal>
             <div className="text-center mb-20">
               <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-neutral-cream">How I Work</h2>
               <p className="text-secondary-sand text-lg">Simple, collaborative, and stress-free.</p>
             </div>
           </Reveal>
           
           <div className="grid md:grid-cols-4 gap-8 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-10 left-0 w-full h-0.5 bg-gradient-to-r from-ui-forest via-brand-green to-ui-forest opacity-30"></div>

             {[
               { title: "Discover", desc: "We talk about your goals, audience, and what’s not working." },
               { title: "Define", desc: "I develop a messaging direction and strategy outline." },
               { title: "Draft", desc: "You get a strong draft with room for feedback." },
               { title: "Polish", desc: "We refine and finalize copy you’re excited to use." },
             ].map((step, i) => (
               <Reveal key={i} delay={i * 0.2}>
                 <div className="relative z-10 text-center group">
                   <div className="w-20 h-20 bg-secondary-olive text-brand-green border-2 border-brand-green rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-8 shadow-lg group-hover:scale-110 transition-transform duration-300">
                     {i + 1}
                   </div>
                   <h3 className="text-xl font-bold mb-3 text-neutral-cream group-hover:text-brand-green transition-colors">{step.title}</h3>
                   <p className="text-neutral-warm/70 text-sm leading-relaxed px-4">{step.desc}</p>
                 </div>
               </Reveal>
             ))}
           </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {[
            { title: "Clarity First", desc: "If they have to read it twice, we lost them. I write to be understood, not to impress other writers." },
            { title: "Strategy + Creativity", desc: "Clever is good. Clever that sells is better. I balance both to ensure the work performs." },
            { title: "Collaboration", desc: "You know your business best. I help you articulate that knowledge without getting in the way." }
          ].map((v, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="bg-white p-10 rounded-3xl shadow-sm border border-neutral-taupe h-full hover:shadow-xl transition-shadow duration-300">
                <Quote className="text-brand-green mb-6 opacity-50" size={40} />
                <h3 className="text-xl font-heading font-bold text-brand-brown mb-4">{v.title}</h3>
                <p className="text-neutral-charcoal/80 leading-relaxed">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </motion.div>
  );
};

export default About;