import React from 'react';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

type SocialIconProps = {
  href: string;
  icon: React.ElementType;
  name: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon: Icon, name }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-[#B22222] text-white rounded-full w-8 h-8 flex items-center justify-center transition-opacity hover:opacity-80"
    aria-label={name}
  >
    <Icon className="w-4 h-4" />
  </Link>
);

const companyLinks = [
  { name: 'Home', href: 'https://antsq.com/' },
  { name: 'Plans & Pricing', href: 'https://antsq.com/plans-pricing/' },
  { name: 'About', href: 'https://antsq.com/about/' },
  { name: 'Blog', href: 'https://antsq.com/blog/' },
  { name: 'Contact', href: 'https://antsq.com/contact/' },
  { name: 'Terms & Conditions', href: '#' },
  { name: 'Privacy Policy', href: '#' },
];

const servicesLinks = [
  { name: 'Business Social Media Management', href: 'https://antsq.com/business-social-media-management/' },
  { name: 'Search Engine Optimization & Marketing', href: 'https://antsq.com/search-engine-optimization-marketing/' },
  { name: 'Brand Reputation Management', href: 'https://antsq.com/brand-reputation-management/' },
  { name: 'Email Marketing', href: 'https://antsq.com/email-marketing/' },
  { name: 'Graphic Design', href: 'https://antsq.com/graphic-design/' },
  { name: 'Web Development', href: 'https://antsq.com/web-development/' },
];

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: 'https://web.facebook.com/people/Antsq_media/100088118868015/?mibextid=LQQJ4d' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/antsq4smm' },
  { name: 'Linkedin', icon: Linkedin, href: 'https://www.linkedin.com/company/antsq/' },
  { name: 'Instagram', icon: Instagram, href: 'https://www.instagram.com/antsq_media/' },
];

const Footer = () => {
    return (
        <footer className="bg-[#FFE4E1] text-[#2C2C2C] pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr,1fr,1fr,1fr] gap-12 lg:gap-8">
                    <div className="md:pr-8">
                        <Link href="/" className="text-5xl font-bold text-[#2C2C2C] no-underline">
                           óntsQ
                        </Link>
                        <p className="mt-6 text-[#666666] text-base leading-relaxed">
                            We are an expert team, skilled and passionate about our jobs in growing your business organically with key strategies and planning.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-[#2C2C2C] mb-6">Company</h3>
                        <ul className="space-y-3">
                            {companyLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[#666666] hover:text-[#B22222] transition-colors text-base">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold text-lg text-[#2C2C2C] mb-6">Services</h3>
                        <ul className="space-y-3">
                            {servicesLinks.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-[#666666] hover:text-[#B22222] transition-colors text-base">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="font-bold text-lg text-[#2C2C2C] mb-6">Social Media</h3>
                        <div className="flex space-x-3 mb-8">
                            {socialLinks.map((social) => (
                                <SocialIcon key={social.name} name={social.name} href={social.href} icon={social.icon} />
                            ))}
                        </div>

                        <h3 className="font-bold text-lg text-[#2C2C2C] mb-4">Subscribe</h3>
                        <p className="text-[#666666] text-base mb-4 leading-normal">
                            Don't miss out! Subscribe to our email list to stay in the loop
                        </p>
                        <form className="flex flex-col items-start w-full">
                            <input 
                                type="email" 
                                placeholder="Email"
                                aria-label="Email for newsletter"
                                className="w-full p-3 rounded-md border-0 bg-white text-[#2C2C2C] placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#F7A4A4]"
                            />
                            <button 
                                type="submit" 
                                className="mt-3 bg-[#B22222] text-white py-2 px-8 rounded-md font-medium transition-transform hover:scale-105"
                                >
                                Send
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-24 text-center">
                    <div className="inline-block bg-[#B22222] text-white py-3 px-10 md:px-12 rounded-full">
                        <p className="text-sm font-normal">Copyright © 2022 Antsq | a vegah llc company</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;