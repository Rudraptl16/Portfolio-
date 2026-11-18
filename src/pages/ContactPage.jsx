import React from 'react';
import SEO from '../components/SEO';
import Contact from '../components/Contact';

const contactSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://patelrudra.in"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://patelrudra.in/contact"
        }
      ]
    },
    {
      "@type": "ContactPage",
      "name": "Contact Rudra Patel | Full Stack Developer (Frontend & Backend)",
      "url": "https://patelrudra.in/contact",
      "description": "Get in touch with Rudra Patel in Vadodara, Gujarat, India for full-stack web applications, frontend architectures, and backend API engineering.",
      "mainEntity": {
        "@type": "Person",
        "name": "Rudra Patel",
        "email": "patelrudra99098@gmail.com",
        "telephone": "+916354825621",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Vadodara",
          "addressRegion": "Gujarat",
          "addressCountry": "India"
        }
      }
    }
  ]
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-transparent pt-20 relative">
      <SEO 
        title="Contact & Project Inquiries"
        description="Get in touch with Rudra Patel in Vadodara, Gujarat. Ready to collaborate on your next full-stack project, web platform, or engineering challenge."
        keywords="Contact Rudra Patel, Hire full stack developer Vadodara, Hire backend developer India, freelance React developer Gujarat"
        canonical="https://patelrudra.in/contact"
        schema={contactSchema}
      />

      <Contact isPage={true} />
    </div>
  );
}
