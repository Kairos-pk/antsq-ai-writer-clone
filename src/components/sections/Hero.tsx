"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative bg-light-pink pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-[-10%] left-[-5%] w-72 h-72 bg-coral-pink/30 rounded-full filter blur-3xl opacity-50"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-[20%] right-[10%] w-96 h-96 bg-primary-red/10 rounded-full filter blur-3xl opacity-60"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        <motion.div 
          className="absolute bottom-[-15%] left-[20%] w-80 h-80 bg-coral-pink/20 rounded-full filter blur-3xl opacity-50"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.5, 0.6, 0.5],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
        <motion.div 
          className="absolute top-24 left-1/4 -translate-x-1/2 w-48 h-48 bg-coral-pink/30 rounded-[50%_40%_30%_50%/50%_30%_50%_40%] opacity-50"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div 
          className="hidden lg:block absolute top-10 right-1/2 translate-x-3/4 rotate-90 w-48 h-48 bg-coral-pink/20 rounded-[50%_40%_30%_50%/50%_30%_50%_40%] opacity-40"
          animate={{
            rotate: [90, 450],
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark-gray leading-tight" 
              style={{ textWrap: 'balance' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The Next <span className="text-primary-red">Generation</span> AI writing tool.
            </motion.h1>
            <motion.p 
              className="mt-6 text-lg text-gray max-w-xl mx-auto lg:mx-0 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Unleash Your Creativity and Productivity with AI.antsq.com. Our platform harnesses the power of <strong className="font-semibold text-dark-gray">GPT-3</strong> and <strong className="font-semibold text-dark-gray">DALL·E</strong> to offer SEO-optimized auto-blogging services with WordPress plugin support. Experience seamless productivity and take your content to the next level with AI.antsq.com today.
            </motion.p>
            <motion.div 
              className="mt-10 flex justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link
                href="https://ai.antsq.com/"
                className="group inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-red rounded-full shadow-lg transition-all duration-300 ease-in-out hover:bg-opacity-90 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary-red/25"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative mt-10 lg:mt-0 flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/modern-ai-writing-tool-illustration-feat-702db475-20250815085104.jpg"
                alt="AI writing tool illustration with ants and a computer screen"
                width={550}
                height={393}
                className="w-full max-w-lg h-auto drop-shadow-xl"
                priority
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;