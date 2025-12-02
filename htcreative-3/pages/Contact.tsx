import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    company: '',
    service: [] as string[],
    budget: '',
    timeline: '',
    message: ''
  });

  const handleServiceChange = (service: string) => {
    setFormState(prev => {
      if (prev.service.includes(service)) {
        return { ...prev, service: prev.service.filter(s => s !== service) };
      }
      return { ...prev, service: [...prev.service, service] };
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would submit to a backend or email service
    alert("Thanks for reaching out! This is a demo site.");
  };

  const services = ["Brand Messaging", "Website Copy", "Campaign / Launch", "Scripts", "Other"];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-neutral-cream min-h-screen pt-44 md:pt-60 pb-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-brand-brown mb-6">
            Let’s talk about your project.
          </h1>
          <p className="text-xl text-neutral-charcoal/80">
            Tell me a bit about what you’re working on and what you need help saying. I’ll follow up with next steps, timing, and a clear plan.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
          {/* Form */}
          <div className="flex-grow bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-brand-brown/5">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-brown uppercase tracking-wide">Name *</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    className="w-full bg-neutral-cream border border-neutral-taupe rounded-lg p-3 focus:ring-2 focus:ring-brand-green outline-none transition-all"
                    value={formState.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-brand-brown uppercase tracking-wide">Email *</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    className="w-full bg-neutral-cream border border-neutral-taupe rounded-lg p-3 focus:ring-2 focus:ring-brand-green outline-none transition-all"
                    value={formState.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-brown uppercase tracking-wide">Company / Organization</label>
                <input 
                  type="text" 
                  name="company"
                  className="w-full bg-neutral-cream border border-neutral-taupe rounded-lg p-3 focus:ring-2 focus:ring-brand-green outline-none transition-all"
                  value={formState.company}
                  onChange={handleChange}
                />
              </div>

              <div className="space-y-3">
                <label className="text-sm font-bold text-brand-brown uppercase tracking-wide">What do you need help with?</label>
                <div className="flex flex-wrap gap-3">
                  {services.map(s => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleServiceChange(s)}
                      className={`px-4 py-2 rounded-full text-sm font-medium border transition-all ${
                        formState.service.includes(s)
                          ? 'bg-ui-forest text-neutral-cream border-ui-forest'
                          : 'bg-white text-brand-brown border-neutral-taupe hover:border-brand-green'
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-brown uppercase tracking-wide">Timeline</label>
                    <select 
                      name="timeline"
                      className="w-full bg-neutral-cream border border-neutral-taupe rounded-lg p-3 focus:ring-2 focus:ring-brand-green outline-none"
                      value={formState.timeline}
                      onChange={handleChange}
                    >
                      <option value="">Select timeline...</option>
                      <option value="ASAP">ASAP</option>
                      <option value="1-3 Months">1-3 Months</option>
                      <option value="3+ Months">3+ Months</option>
                    </select>
                 </div>
                 <div className="space-y-2">
                    <label className="text-sm font-bold text-brand-brown uppercase tracking-wide">Budget Range</label>
                    <select 
                      name="budget"
                      className="w-full bg-neutral-cream border border-neutral-taupe rounded-lg p-3 focus:ring-2 focus:ring-brand-green outline-none"
                      value={formState.budget}
                      onChange={handleChange}
                    >
                      <option value="">Select budget...</option>
                      <option value="<$1k">&lt; $1k</option>
                      <option value="$1k-5k">$1k - $5k</option>
                      <option value="$5k-10k">$5k - $10k</option>
                      <option value="$10k+">$10k+</option>
                    </select>
                 </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-brand-brown uppercase tracking-wide">Tell me more about the project</label>
                <textarea 
                  name="message"
                  rows={5}
                  className="w-full bg-neutral-cream border border-neutral-taupe rounded-lg p-3 focus:ring-2 focus:ring-brand-green outline-none transition-all"
                  value={formState.message}
                  onChange={handleChange}
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-4 bg-ui-forest text-neutral-cream font-bold rounded-full hover:bg-brand-green hover:text-ui-forest transition-all shadow-lg text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-10">
             <div>
                <h3 className="text-lg font-bold text-brand-brown mb-4">Direct Contact</h3>
                <div className="space-y-4 text-neutral-charcoal">
                   <div className="flex items-center gap-3">
                      <Mail className="text-secondary-moss" size={20} />
                      <span>heather@htcreative.net</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <Phone className="text-secondary-moss" size={20} />
                      <span>912.667.8824</span>
                   </div>
                   <div className="flex items-center gap-3">
                      <MapPin className="text-secondary-moss" size={20} />
                      <span>Savannah, GA</span>
                   </div>
                </div>
             </div>

             <div className="bg-secondary-sand/30 p-6 rounded-2xl border border-secondary-sand">
                <h4 className="font-bold text-brand-brown mb-2">Response Time</h4>
                <p className="text-neutral-charcoal text-sm">
                  I typically respond within 1-2 business days. If you haven't heard back, please check your spam folder.
                </p>
             </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Contact;