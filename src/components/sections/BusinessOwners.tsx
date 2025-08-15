"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const BusinessOwners = () => {
  return (
    <section className="bg-[#FFE4E1] py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <motion.div 
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-3xl font-bold text-[#2C2C2C] lg:text-4xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Antsq.ai helps
            </motion.h2>
            <motion.h2 
              className="mt-1 text-4xl font-bold text-[#B22222] lg:text-5xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Business Owners
            </motion.h2>
            <motion.p 
              className="mt-6 text-base leading-relaxed text-[#666666]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Discover the limitless potential of AI.antsq.com – a cutting-edge
              writing app that will revolutionize your content creation game.
              Powered by the advanced technologies of GPT-3 and DALL·E, this app
              offers a wide range of features that go beyond simple text
              generation. With its unique ability to generate stunning visuals,
              AI.antsq.com takes your content to a whole new level, making it
              stand out and capture your audience's attention like never before.
              Moreover, its seamless integration with WordPress plugins makes it a
              comprehensive tool for all your writing needs, whether you're a
              blogger, content creator, or digital marketer. From optimizing
              your content for SEO to unlocking your creativity and boosting your
              productivity, AI.antsq.com is a game-changer in the world of content
              creation. Say goodbye to mundane writing tasks and unlock the true
              potential of your content with AI.antsq.com today.
            </motion.p>
            <motion.a
              href="https://antsq.com/ai-writer#"
              className="group mt-8 inline-flex items-center justify-center rounded-full bg-[#B22222] px-8 py-4 text-base font-medium text-white shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_25px_rgba(178,34,34,0.25)] hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </motion.a>
          </motion.div>

          <motion.div 
            className="relative flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/decorative-abstract-background-shape-in--ebc68ac5-20250815085154.jpg"
              alt="Decorative background shape"
              width={600}
              height={600}
              className="absolute inset-0 z-0 m-auto h-full w-full object-contain opacity-60"
            />
            <motion.div 
              className="relative z-10 rounded-3xl bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] lg:p-10 hover:shadow-[0_8px_30px_rgba(0,0,0,0.15)] transition-all duration-300"
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/modern-ai-writing-tool-illustration-feat-702db475-20250815085104.jpg"
                alt="Illustration of ants working on a laptop"
                width={475}
                height={353}
                className="h-auto w-full"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BusinessOwners;