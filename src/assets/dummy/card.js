import card_professional_01 from '../images/card-images/card_professional_01.webp';
import card_professional_02 from '../images/card-images/card_professional_02.webp';
import card_professional_03 from '../images/card-images/card_professional_03.webp';
import card_professional_04 from '../images/card-images/card_professional_04.webp';
import card_company_01 from '../images/card-images/card_company_01.webp';
import card_company_02 from '../images/card-images/card_company_02.webp';
import card_company_03 from '../images/card-images/card_company_03.webp';
import card_company_04 from '../images/card-images/card_company_04.webp';

export const data = {
  professionals: [
    {
      id: 1,
      name: 'Marco Reyes',
      category: 'Architect',
      description:
        '12+ years building residential homes and managing full-scope projects across Luzon.',
      image: card_professional_01,
      rating: 4.9,
      reviewCount: 48,
    },
    {
      id: 2,
      name: 'Tanya Delgado',
      category: 'Architect',
      description:
        'Expert in residential and commercial wiring, licensed and safety-certified.',
      image: card_professional_02,
      rating: 4.8,
      reviewCount: 48,
    },
    {
      id: 3,
      name: 'Jay Navarro',
      category: 'Architect',
      description:
        'From rough framing to detailed trim work, craftsmanship is my signature.',
      image: card_professional_03,
      rating: 4.4,
      reviewCount: 48,
    },
    {
      id: 4,
      name: 'Leo Santos',
      category: 'Architect',
      description:
        'Skilled in installing energy-efficient aircon and heating units for homes and offices.',
      image: card_professional_04,
      rating: 4.6,
      reviewCount: 48,
    },
  ],
  companies: [
    {
      id: 1,
      name: 'UrbanCraft Builders, Inc.',
      category: 'Company',
      description:
        'Trusted for quality urban residential builds since 2018.',
      image: card_company_01,
      rating: 4.8,
      reviewCount: 48,
    },
    {
      id: 2,
      name: 'Skyline Works Construction Co.',
      category: 'Company',
      description:
        'Sky-focused services for high-rise and mixed-use from commercial to residential.',
      image: card_company_02,
      rating: 4.9,
      reviewCount: 48,
    },
    {
      id: 3,
      name: 'BuildRight PH',
      category: 'Company',
      description:
        'Affordable yet durable construction for every Filipino family.',
      image: card_company_03,
      rating: 4.4,
      reviewCount: 48,
    },
    {
      id: 4,
      name: 'Cementra General Contracting',
      category: 'Company',
      description:
        'Commercial and infrastructure-focused with communities as our cornerstone.',
      image: card_company_04,
      rating: 4.6,
      reviewCount: 48,
    },
  ],
};
