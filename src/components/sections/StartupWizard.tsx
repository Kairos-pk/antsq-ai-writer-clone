import React from 'react';
import Image from 'next/image';
import { Rocket } from 'lucide-react';

const StartupWizard = () => {
  return (
    <div className="bg-light-pink w-full">
      <div className="container mx-auto px-4 py-20 lg:py-[75px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image appears on the left on large screens, and second on smaller screens */}
          <div className="lg:order-1 order-2">
            <div className="relative">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/Screenshot-2023-04-17-at-2.05.38-AM-1024x504-10.png"
                alt="Startup Wizard Interface Screenshot"
                width={1024}
                height={504}
                className="rounded-xl shadow-[0_10px_40px_-15px_rgba(0,0,0,0.2)] w-full h-auto"
              />
            </div>
          </div>

          {/* Content appears on the right on large screens, and first on smaller screens */}
          <div className="lg:order-2 order-1">
            <div className="flex items-center gap-4 mb-5">
              <Rocket className="text-primary-red h-10 w-10 flex-shrink-0" aria-hidden="true" />
              <h2 className="text-dark-gray font-bold text-[32px] leading-tight">Startup Wizard</h2>
            </div>
            <p className="text-gray text-base leading-relaxed mb-8">
              Need a pitch deck, business plan, or investor presentation for your startup? Our professional writers have designed the Startup Writing Wizard to simplify the process of creating captivating content that conveys your unique value proposition. Stand out in the competitive startup landscape with our wizard's expertly crafted pitch decks, business plans, and investor presentations. Just provide your startup details, goals, and requirements, and let our wizard create content that tells your story and captivates your audience.
            </p>
            <a
              href="#"
              className="inline-block bg-primary-red text-white font-medium text-base px-8 py-3 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-red transition-all duration-300"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupWizard;