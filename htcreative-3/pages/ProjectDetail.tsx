import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import { Reveal } from '../components/Reveal';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <Navigate to="/work" />;
  }

  // Helper to determine media type and embed URL
  const getMediaContent = (url: string) => {
    if (url.includes('vimeo.com')) {
      const vimeoId = url.split('.com/')[1].split('?')[0];
      return (
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe 
            src={`https://player.vimeo.com/video/${vimeoId}?title=0&byline=0&portrait=0`}
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="Vimeo video"
          ></iframe>
        </div>
      );
    } else if (url.includes('youtube.com') || url.includes('youtu.be')) {
       let youtubeId = '';
       if (url.includes('youtu.be')) {
         youtubeId = url.split('.be/')[1];
       } else {
         youtubeId = url.split('v=')[1]?.split('&')[0];
       }
       return (
        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg bg-black">
          <iframe 
            src={`https://www.youtube.com/embed/${youtubeId}`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="YouTube video"
          ></iframe>
        </div>
      );
    } else {
      // Image
      return (
        <img 
          src={url} 
          alt="Portfolio Item" 
          className="w-full h-auto rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300" 
        />
      );
    }
  };

  const hasPortfolio = project.portfolio && project.portfolio.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="bg-neutral-cream min-h-screen pt-40 md:pt-56 pb-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Back Link */}
        <Reveal>
          <Link to="/work" className="inline-flex items-center gap-2 text-brand-brown hover:text-ui-gold font-bold mb-10 transition-colors group">
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" /> Back to Work
          </Link>
        </Reveal>

        {/* Header */}
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-12 mb-16 items-start">
             <div>
                <span className="inline-block bg-secondary-sand text-ui-forest px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-heading font-bold text-brand-brown mb-6">{project.client}</h1>
                <p className="text-xl md:text-2xl text-neutral-charcoal/80 font-medium leading-relaxed border-l-4 border-brand-green pl-6">
                  {project.description}
                </p>
             </div>
             
             <div className="space-y-8 lg:pl-12 pt-4">
               {project.industry && (
                 <div>
                    <h4 className="text-xs font-bold text-brand-brown uppercase tracking-widest opacity-60 mb-2">Industry</h4>
                    <p className="text-lg text-neutral-charcoal font-medium">{project.industry}</p>
                 </div>
               )}
               
               {/* Display Challenge/Approach/Outcome if story isn't present, or as supplementary info */}
               {!project.story && project.challenge && (
                 <div>
                    <h4 className="text-xs font-bold text-brand-brown uppercase tracking-widest opacity-60 mb-2">The Challenge</h4>
                    <p className="text-neutral-charcoal/80 leading-relaxed">{project.challenge}</p>
                 </div>
               )}

               {!project.story && project.approach && (
                 <div>
                    <h4 className="text-xs font-bold text-brand-brown uppercase tracking-widest opacity-60 mb-2">The Approach</h4>
                    <p className="text-neutral-charcoal/80 leading-relaxed">{project.approach}</p>
                 </div>
               )}

               {project.outcome && (
                 <div>
                    <h4 className="text-xs font-bold text-brand-brown uppercase tracking-widest opacity-60 mb-2">The Result</h4>
                    <p className="text-neutral-charcoal/80 leading-relaxed font-bold">{project.outcome}</p>
                 </div>
               )}
             </div>
          </div>
        </Reveal>

        {/* Story Section */}
        {project.story && (
          <Reveal>
            <div className="max-w-4xl mx-auto mb-24">
              <div className="h-px w-24 bg-brand-green mb-8"></div>
              <h3 className="text-2xl font-heading font-bold text-brand-brown mb-6">Behind the work</h3>
              <div className="prose prose-stone prose-lg text-neutral-charcoal/90 leading-relaxed whitespace-pre-line">
                {project.story}
              </div>
            </div>
          </Reveal>
        )}

        <div className="h-px w-full bg-brand-brown/10 mb-20"></div>

        {/* Portfolio Gallery - Only render if portfolio items exist */}
        {hasPortfolio && (
          <div className="space-y-16">
            <Reveal>
              <h2 className="text-2xl font-heading font-bold text-brand-brown mb-8 flex items-center gap-3">
                <span className="w-8 h-px bg-brand-brown/50"></span>
                Project Gallery
              </h2>
            </Reveal>

            {/* Mapped Portfolio Items */}
            {project.portfolio!.map((url, index) => (
              <Reveal key={index} delay={index * 0.1}>
                  <div className="flex justify-center">
                    <div className="w-full max-w-5xl">
                      {getMediaContent(url)}
                    </div>
                  </div>
              </Reveal>
            ))}
          </div>
        )}

        {/* CTA Footer */}
        <div className="mt-32 text-center bg-brand-brown rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/noise.png')] opacity-10 pointer-events-none"></div>
           <Reveal>
              <h2 className="text-3xl md:text-5xl font-heading font-bold text-neutral-cream mb-8">See something you like?</h2>
              <p className="text-secondary-sand/80 text-lg mb-10 max-w-2xl mx-auto">
                Let's apply the same level of care and craft to your brand.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 px-10 py-4 bg-brand-green text-ui-forest font-bold rounded-full hover:bg-neutral-cream transition-all transform hover:-translate-y-1 shadow-lg"
              >
                Start a Project <ArrowUpRight size={20} />
              </Link>
           </Reveal>
        </div>

      </div>
    </motion.div>
  );
};

export default ProjectDetail;