"use client";

import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import { motion } from 'framer-motion';

const EcommerceWizard = () => {
  return (
    <section className="bg-light-pink py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <motion.div 
            className="flex flex-col"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="flex items-center gap-4 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ShoppingCart className="h-10 w-10 text-primary-red" aria-hidden="true" />
              </motion.div>
              <h2 className="text-[32px] font-bold text-dark-gray">
                ECommerce Wizard
              </h2>
            </motion.div>
            
            <motion.p 
              className="text-gray text-base leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Need persuasive product descriptions, category pages, or landing pages for your ecommerce website? Our experienced writers have developed the Ecommerce Writing Wizard to streamline the process of creating persuasive copy. Drive sales and boost your online store's conversion rates with our wizard's expertly crafted product descriptions and landing page copy. Simply provide your product details or landing page requirements, and let our wizard create persuasive content that entices your customers and compels them to take action.
            </motion.p>
            
            <motion.div 
              className="mt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <motion.a
                href="#"
                className="group inline-block bg-primary-red text-white text-button font-medium py-3 px-8 rounded-lg hover:bg-red-700 transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                Get Started
              </motion.a>
            </motion.div>
          </motion.div>
          
          {/* Right Column: Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/modern-ecommerce-product-description-gen-e49f81e7-20250815085137.jpg"
                alt="ECommerce Wizard Interface Screenshot"
                width={1024}
                height={504}
                className="rounded-lg shadow-card w-full h-auto hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceWizard;