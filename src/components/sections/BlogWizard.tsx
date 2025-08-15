"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const BlogIcon = ({ className }: { className?: string }) => (
  <svg
    width="44"
    height="44"
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M11 20.1667C13.251 20.1667 15.4055 21.0491 17.0056 22.6492C18.6057 24.2493 19.4881 26.4038 19.4881 28.6548M11 11C15.2215 11 19.2625 12.6687 22.3137 15.72C25.3649 18.7712 27.0336 22.8122 27.0336 27.0336M11.9167 33C12.4178 33 12.9004 32.7983 13.2755 32.4233C13.6505 32.0482 13.8522 31.5656 13.8522 31.0646C13.8522 30.5635 13.6505 30.0809 13.2755 29.7059C12.9004 29.3308 12.4178 29.1292 11.9167 29.1292C11.4156 29.1292 10.933 29.3308 10.558 29.7059C10.1829 30.0809 9.9812 30.5635 9.9812 31.0646C9.9812 31.5656 10.1829 32.0482 10.558 32.4233C10.933 32.7983 11.4156 33 11.9167 33Z"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BlogWizard = () => {
  return (
    <section className="bg-light-pink py-20 lg:py-24">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <motion.div 
            className="lg:w-1/2 flex flex-col items-start"
            initial={{ opacity: 0, x: -50 }}
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
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <BlogIcon className="text-primary-red h-11 w-11" />
              </motion.div>
              <h2 className="text-[32px] font-bold text-dark-gray">Blog Wizard</h2>
            </motion.div>
            <motion.p 
              className="text-gray mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Antsq's marketing team specializes in google's search engine mechanisms and nuances, making the best use of platforms & tools like Google Ads, Google console, and Google analytics to find the best keywords for your business & brand with the highest probability of generating conversions. Our team will help you understand the requirements of your potential audience & key customers by focusing on marketing strategies.
            </motion.p>
            <motion.a
              href="#"
              className="group bg-[#EF4444] text-white font-medium py-3 px-8 rounded-lg shadow-md hover:bg-red-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
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
          <motion.div 
            className="lg:w-1/2 mt-8 lg:mt-0"
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
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/professional-software-interface-mockup-f-e7bb7831-20250815085120.jpg"
                alt="Screenshot of the Blog Wizard interface in AntsQ.AI"
                width={1024}
                height={499}
                className="rounded-2xl shadow-card w-full h-auto hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BlogWizard;