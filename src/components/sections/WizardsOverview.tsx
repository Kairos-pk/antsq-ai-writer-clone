import { Rss, MailOpen, ShoppingCart, Rocket } from 'lucide-react';
import { type LucideIcon } from 'lucide-react';

interface Wizard {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const wizards: Wizard[] = [
  {
    icon: Rss,
    title: 'Blog Wizard',
    description: 'Craft compelling blog posts like a pro',
    href: '#',
  },
  {
    icon: MailOpen,
    title: 'Email Wizard',
    description: 'Send emails that actually get opened',
    href: '#',
  },
  {
    icon: ShoppingCart,
    title: 'Ecommerce Wizard',
    description: 'Boost your sales and grow your business',
    href: '#',
  },
  {
    icon: Rocket,
    title: 'Startup Wizard',
    description: 'Launch your startup with confidence',
    href: '#',
  },
];

const WizardCard = ({ icon: Icon, title, description, href }: Wizard) => (
  <a href={href} className="block group">
    <div className="flex flex-col items-center justify-start text-center p-8 bg-[rgba(248,216,216,0.8)] rounded-2xl shadow-card h-full transition-transform duration-300 ease-in-out group-hover:scale-105">
      <Icon className="w-12 h-12 text-primary-red mb-4" />
      <h3 className="text-xl font-bold text-dark-gray">{title}</h3>
      <p className="text-gray mt-2 text-base">{description}</p>
    </div>
  </a>
);

const WizardsOverview = () => {
  return (
    <section className="bg-light-pink">
      <div className="container mx-auto px-4 py-20 lg:py-28">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-dark-gray">
            Explore AntsQ.AI Wizards
          </h2>
          <p className="mt-4 text-gray text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {wizards.map((wizard) => (
            <WizardCard key={wizard.title} {...wizard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WizardsOverview;