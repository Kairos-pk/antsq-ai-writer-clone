import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';

const EcommerceWizard = () => {
  return (
    <section className="bg-light-pink py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <ShoppingCart className="h-10 w-10 text-primary-red" aria-hidden="true" />
              <h2 className="text-[32px] font-bold text-dark-gray">
                ECommerce Wizard
              </h2>
            </div>
            
            <p className="text-gray text-base leading-relaxed mb-8">
              Need persuasive product descriptions, category pages, or landing pages for your ecommerce website? Our experienced writers have developed the Ecommerce Writing Wizard to streamline the process of creating persuasive copy. Drive sales and boost your online store's conversion rates with our wizard's expertly crafted product descriptions and landing page copy. Simply provide your product details or landing page requirements, and let our wizard create persuasive content that entices your customers and compels them to take action.
            </p>
            
            <div className="mt-4">
              <a
                href="#"
                className="inline-block bg-primary-red text-white text-button font-medium py-3 px-8 rounded-lg hover:bg-red-700 transition-colors shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
          
          {/* Right Column: Image */}
          <div className="flex justify-center">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/Screenshot-2023-04-17-at-12.14.24-AM-1024x504-9.png"
              alt="ECommerce Wizard Interface Screenshot"
              width={1024}
              height={504}
              className="rounded-lg shadow-card w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EcommerceWizard;