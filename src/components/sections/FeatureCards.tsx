"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const features = [
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/three-cute-cartoon-ants-representing-emp-abb2f41a-20250815085112.jpg",
    imageAlt: "Ant illustration holding a wrench, representing empowerment.",
    title: "Empower",
    description: "Revolutionize your content creation with AI.antsq.com, the ultimate platform powered by GPT-3 and DALL·E for SEO-optimized auto-blogging with WordPress plugin support, unlocking unparalleled productivity and creativity.",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/three-cute-cartoon-ants-representing-emp-abb2f41a-20250815085112.jpg",
    imageAlt: "Ant illustration using a laptop, representing transformation.",
    title: "Transform",
    description: "Elevate your content game with AI.antsq.com, the cutting-edge platform utilizing GPT-3 and DALL·E to unleash your creativity and productivity through SEO-optimized auto-blogging with seamless WordPress plugin integration.",
  },
  {
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/three-cute-cartoon-ants-representing-emp-abb2f41a-20250815085112.jpg",
    imageAlt: "Ant illustration with a paintbrush and palette, representing innovation.",
    title: "Innovate",
    description: "Experience the future of content creation with AI.antsq.com, the innovative platform leveraging GPT-3 and DALL·E to revolutionize your productivity and enhance your content through SEO-optimized auto-blogging with full WordPress plugin compatibility.",
  },
];

const FeatureCards = () => {
  return (
    <div className="container mx-auto px-4 -mt-24 md:-mt-32 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="group bg-coral-pink rounded-2xl p-8 text-center flex flex-col items-center shadow-card hover:shadow-xl transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ 
              y: -8, 
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <motion.h3 
              className="text-3xl font-bold text-dark-gray group-hover:text-primary-red transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              {feature.title}
            </motion.h3>
            <p className="mt-4 text-base text-dark-gray leading-relaxed group-hover:text-gray transition-colors duration-300">
              {feature.description}
            </p>
            <motion.div 
              className="mt-auto pt-8"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={feature.imageSrc}
                alt={feature.imageAlt}
                width={128}
                height={121}
                className="drop-shadow-lg"
              />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;