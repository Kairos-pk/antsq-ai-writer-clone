"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface PricingPlan {
  name: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth: number;
  imageHeight: number;
  price: number;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: "Free Plan",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/ant-5-6b1bbceb-scaled-17.webp",
    imageAlt: "ant 5-6b1bbceb",
    imageWidth: 214,
    imageHeight: 250,
    price: 0,
    features: [
      "100 free credits per lifetime",
      "AI wizards",
      "AI prompts",
      "SEO-Optimized",
      "Human-like-Written",
    ],
  },
  {
    name: "Basic Plan",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/ant-6-d3c86b8b-18.webp",
    imageAlt: "ant 6-d3c86b8b",
    imageWidth: 250,
    imageHeight: 250,
    price: 36,
    features: [
      "12,500 credits per month",
      "AI wizards",
      "AI prompts",
      "SEO-Optimized",
      "Human-like-Written",
      "10 Million words or 1250 images",
      "AI prompts + templates",
    ],
  },
  {
    name: "Premium Plan",
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/ant-7-b9de9c02-scaled-19.webp",
    imageAlt: "ant 7-b9de9c02",
    imageWidth: 214,
    imageHeight: 250,
    price: 47,
    features: [
      "17,000 credits per month",
      "AI wizards",
      "AI prompts",
      "SEO-Optimized",
      "Human-like-Written",
      "14 Million words or 1700 images",
      "AI prompts + templates",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="bg-light-pink py-20 lg:py-[120px]">
      <div className="container">
        <motion.h2 
          className="text-center text-[40px] font-bold text-dark-gray mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Pricing
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan, index) => (
            <motion.div 
              key={index} 
              className="group bg-light-pink border-2 border-primary-red rounded-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.1)] p-5 flex flex-col items-center hover:shadow-[0_8px_30px_rgba(178,34,34,0.15)] hover:-translate-y-2 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="bg-primary-red text-white py-2.5 px-5 rounded-[5px] group-hover:bg-coral-pink group-hover:text-dark-gray transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
              </motion.div>

              <motion.div 
                className="my-5 h-[250px] flex items-center justify-center"
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={plan.imageSrc}
                  alt={plan.imageAlt}
                  width={plan.imageWidth}
                  height={plan.imageHeight}
                  className="object-contain max-h-full drop-shadow-lg"
                />
              </motion.div>

              <motion.div 
                className="bg-primary-red text-white py-2.5 px-8 rounded-[5px] flex justify-center items-end gap-1 group-hover:bg-coral-pink group-hover:text-dark-gray transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                <span className="text-[25px] font-medium relative top-[-0.2em]">$</span>
                <span className="text-[48px] font-bold leading-none">{plan.price}</span>
                <span className="text-base font-normal">/ Month</span>
              </motion.div>

              <ul className="space-y-4 my-8 text-left w-full pl-6 md:pl-8 grow">
                {plan.features.map((feature, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index * 0.2) + (i * 0.1) }}
                  >
                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 mt-1.5" aria-hidden="true">
                      <path d="M12.9141 1.5L5.41406 9L1.91406 5.5" stroke="#2c2c2c" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="text-dark-gray font-normal text-base">{feature}</span>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  href="https://ai.antsq.com/register"
                  className="bg-primary-red text-white rounded-[5px] py-3 px-6 font-semibold text-center mt-auto hover:bg-coral-pink hover:text-dark-gray transition-all duration-300 shadow-md hover:shadow-lg block"
                >
                  Signup Now
                </Link>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;