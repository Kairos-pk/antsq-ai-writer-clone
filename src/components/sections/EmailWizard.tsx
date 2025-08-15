import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmailWizard = () => {
  return (
    <section className="bg-light-pink py-24 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          {/* Left Column: Image */}
          <div>
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/1ad0bc08-9d6f-4ba4-a0c3-2be1b684f3ee-antsq-com/assets/images/Screenshot-2023-04-17-at-12.12.50-AM-1024x504-8.png"
              alt="Email Wizard user interface screenshot"
              width={1024}
              height={504}
              className="rounded-2xl shadow-card"
            />
          </div>

          {/* Right Column: Content */}
          <div className="flex flex-col items-start">
            <div className="mb-6 flex items-center gap-5">
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-primary-red">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-h2 font-bold leading-tight text-dark-gray">
                Email Wizard
              </h3>
            </div>

            <p className="mb-8 text-body leading-[1.6] text-gray">
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
            </p>

            <Button
              asChild
              className="rounded-lg bg-primary-red px-8 py-6 text-button font-medium text-white shadow-lg transition-colors hover:bg-red-700"
            >
              <a href="#">Get Started</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailWizard;