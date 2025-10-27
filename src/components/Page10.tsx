import React from 'react';
// Import icons from react-icons
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { BsHeadset } from "react-icons/bs";

// --- TypeScript Interfaces ---

/** Defines the shape of a single navigation link */
interface LinkItem {
  name: string;
  href: string;
}

/** Defines the props for the FooterLinkList component */
interface FooterLinkListProps {
  title: string;
  links: LinkItem[];
}

// --- Reusable Component ---

// A reusable component for the link lists, now typed with React.FC
const FooterLinkList: React.FC<FooterLinkListProps> = ({ title, links }) => (
  <div>
    {/* List Title (e.g., "PLATFORM") */}
    <h3 className='text-sm font-bold tracking-wider text-blue-900 uppercase mb-4'>
      {title}
    </h3>
    {/* List of Links */}
    <ul className='space-y-3'>
      {links.map((link) => (
        <li key={link.name}>
          <a
            href={link.href}
            className='text-base text-blue-950 hover:text-blue-700 hover:underline'
          >
            {link.name}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

// --- Data (Typed) ---

// Define the link data with the LinkItem[] type
const platformLinks: LinkItem[] = [
  { name: 'Website builder', href: '#' },
  { name: 'Online store', href: '#' },
  { name: 'Email marketing', href: '#' },
  { name: 'Pricing', href: '#' },
];

const featuresLinks: LinkItem[] = [
  { name: 'Online courses', href: '#' },
  { name: 'Digital downloads', href: '#' },
  { name: 'Webinars', href: '#' },
  { name: 'Coaching', href: '#' },
  { name: 'Community', href: '#' },
  { name: 'Landing pages', href: '#' },
  { name: 'Blogging', href: '#' },
  { name: 'Integrations', href: '#' },
];

const resourcesLinks: LinkItem[] = [
  { name: 'Changelog', href: '#' },
  { name: 'Podia alternatives', href: '#' },
  { name: 'Demo', href: '#' },
  { name: 'Blog', href: '#' },
];

const podiaLinks: LinkItem[] = [
  { name: 'About', href: '#' },
  { name: 'Become an affiliate', href: '#' },
  { name: 'Podia reviews', href: '#' },
];

const supportLinks: LinkItem[] = [
  { name: 'Contact us', href: '#' },
  { name: 'Help center', href: '#' },
  { name: 'Getting started', href: '#' },
  { name: 'Hire a Podia Pro', href: '#' },
];

// --- Main Component ---

const Page10: React.FC = () => {
  return (
    // Main section with the light blue background
    <section className='relative bg-[#DDE7F0]'>
      
      {/* Floating Support Button */}
      <div className='fixed bottom-5 left-5 z-20'>
        <a href="#" className='w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group'>
          <BsHeadset className='text-3xl text-blue-900 group-hover:scale-110 transition-transform' />
        </a>
      </div>

      {/* Main footer content container */}
      <div className='max-w-7xl mx-auto px-6 sm:px-12 py-16 lg:py-24'>
        
        {/* Top section: Logo and Link Grids */}
        {/* Grid: 1 col on mobile, 2 on tablet, 6 on desktop */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-8'>
          
          {/* Column 1: Logo */}
          <div className='mb-4 lg:mb-0'>
            <h1 className='text-4xl font-bold text-blue-950'>podia</h1>
          </div>
          
          {/* Column 2: Platform Links */}
          <FooterLinkList title="Platform" links={platformLinks} />
          
          {/* Column 3: Features Links */}
          <FooterLinkList title="Features" links={featuresLinks} />
          
          {/* Column 4: Resources Links */}
          <FooterLinkList title="Resources" links={resourcesLinks} />
          
          {/* Column 5: Podia Links */}
          <FooterLinkList title="Podia" links={podiaLinks} />
          
          {/* Column 6: Support Links */}
          <FooterLinkList title="Support" links={supportLinks} />

        </div>

        {/* Bottom section: Social, Copyright, and Legal */}
        <div className='mt-16 pt-10 border-t border-blue-900 border-opacity-20
                        flex flex-col-reverse md:flex-row md:justify-between md:items-center 
                        text-blue-950 gap-8'>
          
          {/* Social Icons */}
          <div className='flex gap-5'>
            <a href="#" className='text-2xl hover:text-gray-900'><FaXTwitter /></a>
            <a href="#" className='text-2xl hover:text-gray-900'><FaFacebook /></a>
            <a href="#" className='text-2xl hover:text-gray-900'><FaInstagram /></a>
            <a href="#" className='text-2xl hover:text-gray-900'><FaYoutube /></a>
          </div>
          
          {/* Copyright */}
          <div className='text-sm text-center md:text-left'>
            Podia Labs, Inc. © 2025
          </div>
          
          {/* Legal Links */}
          <div className='flex gap-6 text-sm font-medium justify-center'>
            <a href="#" className='hover:underline'>Terms</a>
            <a href="#" className='hover:underline'>Privacy</a>
            <a href="#" className='hover:underline'>Cookie Preferences</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page10;

