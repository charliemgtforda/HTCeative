import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { Reveal } from '../components/Reveal';
import { Link } from 'react-router-dom';

const Work: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Branding' | 'Websites' | 'Campaigns' | 'Print'>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-neutral-cream min-h-screen pt-40 md:pt-56 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <Reveal>
          <div className="mb-20 text-center max-w-3xl mx-auto">
            <span className="text-secondary-moss font-bold tracking-widest text-xs uppercase mb-4 block">Selected Projects</span>
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-brand-brown mb-8">Work that works.</h1>
            <p className="text-xl text-neutral-charcoal/80 leading-relaxed">
              Every project starts with a problem to solve. Here’s how HTCreative helps brands clarify, sharpen, and ship messaging that actually connects.
            </p>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-20">
            {['All', 'Branding', 'Websites', 'Campaigns', 'Print'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat as any)}
                className={`px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                  filter === cat 
                    ? 'bg-ui-forest text-neutral-cream shadow-lg scale-105' 
                    : 'bg-white text-brand-brown hover:bg-neutral-warm border border-neutral-taupe'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-x-12 gap-y-16">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <Reveal key={project.id}>
                <Link to={`/work/${project.id}`} className="block h-full">
                  <div className="group bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-neutral-taupe flex flex-col h-full hover:-translate-y-2">
                    <div className="h-72 overflow-hidden relative">
                      <div className="absolute inset-0 bg-ui-forest/20 group-hover:bg-ui-forest/0 transition-colors z-10 duration-500"></div>
                      <img 
                        src={project.image} 
                        alt={project.client} 
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute top-6 left-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider text-ui-forest shadow-sm">
                        {project.category}
                      </div>
                    </div>
                    
                    <div className="p-8 md:p-10 flex flex-col flex-grow relative">
                      <div className="mb-6">
                        <h2 className="text-3xl font-heading font-bold text-brand-brown mb-3">{project.client}</h2>
                        <p className="text-secondary-olive font-medium mb-8 text-lg border-l-2 border-brand-green pl-4">{project.description}</p>
                        
                        <div className="space-y-6">
                          {project.challenge && (
                            <div className="bg-neutral-cream p-4 rounded-xl">
                              <h4 className="font-bold text-brand-brown text-xs uppercase tracking-wide mb-2 opacity-70">The Challenge</h4>
                              <p className="text-neutral-charcoal text-sm leading-relaxed">{project.challenge}</p>
                            </div>
                          )}
                          
                          {project.approach && (
                            <div>
                              <h4 className="font-bold text-brand-brown text-xs uppercase tracking-wide mb-2 opacity-70">The Approach</h4>
                              <p className="text-neutral-charcoal/90 text-sm leading-relaxed">{project.approach}</p>
                            </div>
                          )}
                        </div>
                      </div>
                      
                      {project.outcome && (
                        <div className="mt-auto pt-6 border-t border-neutral-warm">
                           <h4 className="font-bold text-brand-brown text-xs uppercase tracking-wide mb-1 opacity-70">The Result</h4>
                           <p className="text-ui-forest font-bold">{project.outcome}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;