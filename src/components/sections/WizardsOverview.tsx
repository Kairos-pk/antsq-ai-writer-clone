"use client";

import { Rss, MailOpen, ShoppingCart, Rocket } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface Wizard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const wizards: Wizard[] = [
  {
    icon: Rss,
    title: 'Blog Wizard',
    description: 'Craft compelling blog posts like a pro',
    href: '#',
  },
  {
    icon: MailOpen,
    title: 'Email Wizard',
    description: 'Send emails that actually get opened',
    href: '#',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Wizard',
    description: 'Boost your sales and grow your business',
    href: '#',
  },
  {
    icon: Rocket,
    title: 'Startup Wizard',
    description: 'Launch your startup with confidence',
    href: '#',
  },
];

const WizardCard = ({ icon: Icon, title, description, href, index }: Wizard & { index: number }) => (
  <motion.a 
    href={href} 
    className="block group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ 
      y: -8,
      transition: { duration: 0.3 }
    }}
  >
    <div className="flex flex-col items-center justify-start text-center p-8 bg-[rgba(248,216,216,0.8)] rounded-2xl shadow-card h-full transition-all duration-300 group-hover:shadow-xl group-hover:bg-[rgba(248,216,216,0.95)]">
      <motion.div
        whileHover={{ scale: 1.2, rotate: 10 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-12 h-12 text-primary-red mb-4 group-hover:text-coral-pink transition-colors duration-300" />
      </motion.div>
      <motion.h3 
        className="text-xl font-bold text-dark-gray group-hover:text-primary-red transition-colors duration-300"
        whileHover={{ scale: 1.05 }}
      >
        {title}
      </motion.h3>
      <p className="text-gray mt-2 text-base group-hover:text-dark-gray transition-colors duration-300">
        {description}
      </p>
    </div>
  </motion.a>
);

const WizardsOverview = () => {
  return (
    <section className="bg-light-pink">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <motion.div 
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray">
            Explore AntsQ.AI Wizards
          </h2>
          <p className="mt-4 text-gray text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {wizards.map((wizard, index) => (
            <WizardCard key={wizard.title} {...wizard} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WizardsOverview;