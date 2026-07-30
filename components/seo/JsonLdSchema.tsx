import React from 'react';

interface JsonLdProps {
  type?: 'WebSite' | 'WebApplication' | 'Organization' | 'SoftwareApplication';
  customSchema?: Record<string, any>;
}

export function JsonLdSchema({ type = 'WebSite', customSchema }: JsonLdProps) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zashub', 
    url: 'https://zashub.vercel.app',
    logo: 'https://zashub.vercel.app/icon.svg',
    description: 'Discover nearby places, businesses, events, jobs, services and local updates with Zashub. Connect with your hometown community through one modern platform.',
    sameAs: [
      '',
      'https://github.com/zashub',
      '',
    ],
    parentOrganization: {
      '@type': 'Organization',
      name: 'Zashly',
    },
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zashub',
    alternateName: ['Zashub Platform', 'Zashub Local'],
    url: 'https://zashub.vercel.app',
    description: 'Discover Your City. Connect Locally. Modern local community platform for places, events, businesses, services, and jobs.',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://zashub.vercel.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  };

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Zashub',
    applicationCategory: 'SocialNetworkingApplication',
    operatingSystem: 'All',
    url: 'https://zashub.vercel.app',
    description: 'Discover nearby places, businesses, events, jobs, services and local updates with Zashub.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    author: {
      '@type': 'Organization',
      name: 'Zashly',
    },
  };

  const softwareAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Zashub',
    operatingSystem: 'Web, Android, iOS',
    applicationCategory: 'SocialNetworkingApplication',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '1250',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const schemasToRender = customSchema
    ? [customSchema]
    : [organizationSchema, webSiteSchema, webAppSchema, softwareAppSchema];

  return (
    <>
      {schemasToRender.map((schema, idx) => (
        <script
          key={idx}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
