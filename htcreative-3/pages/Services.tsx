import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, MessageSquare, Monitor, PenTool, Plus, Minus, Sparkles } from 'lucide-react';
import { Reveal } from '../components/Reveal';

const Services: React.FC = () => {
  // Service Data
  const services = [
    {
      id: 'brand',
      title: "Brand & Messaging",
      icon: <MessageSquare size={32} />,
      description: "Your brand is more than a logo. It’s a story. I help you define who you are, who you’re talking to, and why they should care. We build the strategic foundation that makes all future marketing easier.",
      deliverables: [
        "Brand Voice & Tone Guides",
        "Mission & Vision Statements",
        "Taglines & Slogans",
        "Brand Story & Manifesto",
        "Value Propositions",
        "Audience Personas"
      ]
    },
    {
      id: 'digital',
      title: "Websites & Digital",
      icon: <Monitor size={32} />,
      description: "You have about 3 seconds to grab someone’s attention online. Let’s make them count. I write clear, conversion-focused copy that guides visitors from 'just browsing' to 'book now'.",
      deliverables: [
        "Website Copy (Home, About, Services)",
        "Landing & Sales Pages",
        "Email Nurture Sequences",
        "UX Microcopy",
        "Product Descriptions",
        "Newsletter Content"
      ]
    },
    {
      id: 'campaigns',
      title: "Campaigns & Print",
      icon: <PenTool size={32} />,
      description: "From billboard headlines to video scripts, I create cohesive campaign concepts that work across every channel. We’ll find the 'big idea' and roll it out everywhere.",
      deliverables: [
        "Campaign Concept Development",
        "Video & Audio Scripts",
        "Print Brochures & Mailers",
        "Social Media Strategy",
        "Display Ad Copy",
        "Trade Show Materials"
      ]
    }
  ];

  // FAQ Data
  const faqs = [
    {
      question: "What does your process look like?",
      answer: "It starts with a discovery call where we discuss your goals. From there, I move into strategy and outlining. Once we agree on the direction, I draft the copy. You typically get two rounds of revisions to ensure every word is perfect."
    },
    {
      question: "Do you work with design agencies?",
      answer: "Yes! I often partner with design studios, web developers, and digital agencies. I can work as a white-label partner behind the scenes or interface directly with your clients as part of your creative team."
    },
    {
      question: "How do you price your projects?",
      answer: "I project-base everything rather than billing hourly. This way, you know exactly what the investment is upfront, and I’m incentivized to do great work, not just fill hours. After our initial chat, I’ll send a custom proposal with clear options."
    },
    {
      question: "Do you offer rush turnarounds?",
      answer: "Depending on my current workload, I can sometimes accommodate rush requests for an additional fee. If you have a tight deadline, let me know immediately and I'll see what I can do."
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-neutral-cream min-h-screen pt-40 md:pt-56 pb-24"
    >
      {/* Hero Section */}
      <section className="px-6 mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:items-end">
            <div className="lg:w-2/3">
              <Reveal>
                <span className="text-secondary-moss font-bold tracking-widest text-xs uppercase mb-6 block flex items-center gap-2">
                  <Sparkles size={14} /> Services
                </span>
                <h1 className="text-5xl md:text-8xl font-heading font-bold text-brand-brown mb-8 leading-[0.9]">
                  Everything you need to say, <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-olive to-brand-green">said better.</span>
                </h1>
              </Reveal>
              <Reveal delay={0.2}>
                <p className="text-xl text-neutral-charcoal/80 leading-relaxed max-w-2xl">
                  Whether you need a full brand voice from scratch or just the right words for your next launch, I start with strategy and end with copy that fits.
                </p>
              </Reveal>
            </div>
            <div className="lg:w-1/3 lg:text-right lg:pb-4">
               <Reveal delay={0.3}>
                 <Link to="/contact" className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-ui-forest text-neutral-cream font-bold rounded-full hover:bg-brand-green hover:text-ui-forest transition-all shadow-lg hover:-translate-y-1">
                    Start a Project
                 </Link>
               </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Reveal key={service.id} delay={index * 0.1}>
              <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-xl shadow-brand-brown/5 border border-neutral-taupe h-full flex flex-col hover:-translate-y-2 transition-transform duration-500 group">
                
                {/* Icon */}
                <div className="w-16 h-16 bg-secondary-sand/40 rounded-2xl flex items-center justify-center text-brand-brown mb-8 group-hover:bg-brand-green group-hover:text-ui-forest transition-colors duration-300">
                  {service.icon}
                </div>

                <h2 className="text-2xl font-heading font-bold text-brand-brown mb-4">{service.title}</h2>
                <p className="text-neutral-charcoal/80 leading-relaxed mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="bg-neutral-cream/50 rounded-2xl p-6 border border-neutral-taupe/30">
                  <h3 className="text-xs font-bold text-brand-brown uppercase tracking-widest mb-4 opacity-60">Deliverables</h3>
                  <ul className="space-y-3">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-neutral-charcoal font-medium">
                        <CheckCircle2 size={16} className="text-brand-green mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-6 py-24 bg-brand-brown text-neutral-cream rounded-[3rem] mx-4 md:mx-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        
        <div className="max-w-3xl mx-auto relative z-10">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4 text-neutral-cream">Common Questions</h2>
              <p className="text-secondary-sand text-lg">
                Curious about how this works? Here are a few answers.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <AccordionItem question={faq.question} answer={faq.answer} />
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
             <div className="text-center mt-16">
                <p className="mb-6 text-neutral-warm">Still have questions?</p>
                <Link to="/contact" className="inline-flex items-center gap-2 text-brand-green font-bold hover:text-white transition-colors text-lg border-b-2 border-brand-green pb-1">
                   Get in touch <ArrowRight size={20} />
                </Link>
             </div>
          </Reveal>
        </div>
      </section>
    </motion.div>
  );
};

const AccordionItem = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-secondary-olive/30 rounded-2xl border border-secondary-olive/50 overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-secondary-olive/40"
      >
        <span className="text-lg font-bold text-neutral-cream">{question}</span>
        <span className={`p-2 rounded-full bg-brand-brown text-brand-green transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="p-6 pt-0 text-neutral-warm/80 leading-relaxed border-t border-secondary-olive/30">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Services;