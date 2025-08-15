"use client";

import React from 'react';
import Image from 'next/image';
import { Rocket } from 'lucide-react';
import { motion } from 'framer-motion';

const StartupWizard = () => {
  return (
    <div className="bg-light-pink w-full">
      <div className="container mx-auto px-4 py-20 lg:py-[75px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image appears on the left on large screens, and second on smaller screens */}
          <motion.div 
            className="lg:order-1 order-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/startup-pitch-deck-generator-software-in-97fceb3a-20250815085146.jpg"
                alt="Startup Wizard Interface Screenshot"
                width={1024}
                height={504}
                className="rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] w-full h-auto hover:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.25)] transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Content appears on the right on large screens, and first on smaller screens */}
          <motion.div 
            className="lg:order-2 order-1"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 15 }}
                transition={{ duration: 0.3 }}
              >
                <Rocket className="text-primary-red h-10 w-10 flex-shrink-0" aria-hidden="true" />
              </motion.div>
              <h2 className="text-dark-gray font-bold text-[32px] leading-tight">Startup Wizard</h2>
            </motion.div>
            <motion.p 
              className="text-gray text-base leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Need a pitch deck, business plan, or investor presentation for your startup? Our professional writers have designed the Startup Writing Wizard to simplify the process of creating captivating content that conveys your unique value proposition. Stand out in the competitive startup landscape with our wizard's expertly crafted pitch decks, business plans, and investor presentations. Just provide your startup details, goals, and requirements, and let our wizard create content that tells your story and captivates your audience.
            </motion.p>
            <motion.a
              href="#"
              className="inline-block bg-primary-red text-white font-medium text-base px-8 py-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-red transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default StartupWizard;