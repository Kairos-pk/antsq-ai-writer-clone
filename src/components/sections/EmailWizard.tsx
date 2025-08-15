"use client";

import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const EmailWizard = () => {
  return (
    <section className="bg-light-pink py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              whileHover={{ 
                scale: 1.03,
                y: -5,
                transition: { duration: 0.3 }
              }}
            >
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee/generated_images/clean-email-marketing-software-interface-9e58f525-20250815085128.jpg"
                alt="Email Wizard user interface screenshot"
                width={1024}
                height={504}
                className="rounded-2xl shadow-card hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div 
            className="flex flex-col items-start"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div 
              className="mb-6 flex items-center gap-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.div 
                className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary-red"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Mail className="h-8 w-8 text-white" />
              </motion.div>
              <h3 className="text-h2 font-bold leading-tight text-dark-gray">
                Email Wizard
              </h3>
            </motion.div>

            <motion.p 
              className="mb-8 text-body leading-[1.6] text-gray"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Want to make a lasting impression with your emails? Our skilled
              writers have created the Email Writing Wizard to simplify the
              process of crafting compelling and personalized emails. Boost your
              open rates, click-through rates, and conversions with our wizard's
              expertly crafted email templates. Whether it's a newsletter, a
              promotional email, or a follow-up, our wizard ensures your emails
              are engaging and effective in building meaningful connections with
              your subscribers. Just provide your message and recipient
              details, and let our wizard create email copy that captivates your
              audience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Button
                asChild
                className="group rounded-lg bg-primary-red px-8 py-6 text-button font-medium text-white shadow-lg transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:-translate-y-1"
              >
                <motion.a 
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started
                </motion.a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EmailWizard;