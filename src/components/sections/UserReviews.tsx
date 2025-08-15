"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const logos = [
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Samsung_Logologos-11.webp", 
    alt: "Samsung logo", 
    width: 135,
    height: 45
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Group-48095472logos-12.webp", 
    alt: "Anking On logo", 
    width: 178,
    height: 40
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Google-Cloud-Logos-brands-and-logotypes-2logos-13.webp", 
    alt: "Google logo",
    width: 115,
    height: 38
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Amazon_logologos-14.webp", 
    alt: "Amazon logo",
    width: 118,
    height: 36
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-Google-Cloud-Logologos-15.webp", 
    alt: "Google Cloud logo",
    width: 170,
    height: 28
  },
  { 
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/px-6554796_previewlogos-16.webp", 
    alt: "Google logo",
    width: 115,
    height: 38
  },
];

const UserReviews = () => {
  return (
    <section className="py-20">
      <div className="container">
        <motion.h2 
          className="text-center text-4xl font-bold text-dark-gray mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Users Reviews
        </motion.h2>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-10 md:gap-x-16 lg:gap-x-20">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.1,
                filter: "grayscale(0%)",
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="filter grayscale object-contain hover:grayscale-0 transition-all duration-300 cursor-pointer"
                style={{ height: 'auto', maxHeight: '45px' }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UserReviews;