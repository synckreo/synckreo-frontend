import React from 'react';
import { Search } from '../../components/ui/search/Search';
import { Card } from '../../components/ui/card/Card';
import { Button } from '../../components/ui/buttons/Button';
import { data } from '../../assets/dummy/card';
import explore_page_banner from '../../assets/images/explore_page_banner.webp';
import arrowIcon from '../../assets/icons/arrow.svg';

export const GuestContent = () => (
  <main className="container mx-auto px-1 sm:px-2 lg:px-4">
    <section className="mt-24 flex h-min flex-col justify-center">
      <div className="mb-10 flex flex-col items-center gap-20 lg:flex-row">
        <div className="flex-1">
          <h1 className="leading-snug font-bold">
            <span
              className="block"
              style={{ height: '1.2em', overflow: 'hidden' }}
            >
              Build
            </span>
            <span
              className="text-primary block"
              style={{ height: '1.2em', overflow: 'hidden' }}
            >
              Connections
            </span>
            <span
              className="block"
              style={{ height: '1.2em', overflow: 'hidden' }}
            >
              That Last
            </span>
          </h1>
        </div>
        <div className="flex flex-1 flex-col gap-4">
          <p>
            Linking professionals, companies and clients in one
            trusted construction network.
          </p>
          <Search
            placeholder="Search for jobs, companies, and professional"
            buttonTitle="Search"
            searchInputBorderColor="border-orange-600/50"
          />
        </div>
      </div>
      {/* Image Bannner */}
      <div>
        <img
          className="h-auto w-full rounded-3xl"
          src={explore_page_banner}
          alt="Banner"
        />
      </div>
    </section>

    <section className="flex flex-col items-center">
      <div className="mt-24 mb-12 max-w-4xl">
        <h2 className="heading-56 text-center font-bold">
          Find the Right Expert for your Next Project
        </h2>
        <p className="text-center text-[#333333]">
          From skilled tradespeople and trusted contractors to
          proactive homeowners and experienced developers — our
          network brings together everyone who makes construction
          happen.{' '}
        </p>
      </div>

      {/* Professionals */}
      <div className="w-full">
        <div className="flex items-center justify-between px-4">
          <h3 className="text-primary text-2xl font-semibold">
            Construction Professionals
          </h3>
          <Button
            title="Explore More"
            variant="explore"
            size="contact"
            icon={
              <img src={arrowIcon} alt="arrow" className="h-4 w-4" />
            }
            iconPosition="right"
          />
        </div>
        {/* Card Container */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.professionals.slice(0, 4).map((professional) => (
              <Card
                key={professional.id}
                image={professional.image}
                name={professional.name}
                title={professional.title}
                description={professional.description}
                category={professional.category}
                rating={professional.rating}
                reviewCount={professional.reviewCount}
                onButtonClick={() => handleContactClick(professional)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Companies */}
      <div className="w-full">
        <div className="flex items-center justify-between px-4">
          <h3 className="text-primary text-2xl font-semibold">
            Construction Companies
          </h3>
          <Button
            title="Explore More"
            variant="explore"
            size="contact"
            icon={
              <img src={arrowIcon} alt="arrow" className="h-4 w-4" />
            }
            iconPosition="right"
          />
        </div>
        {/* Card Container */}
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {data.companies.map((company) => (
              <Card
                key={company.id}
                image={company.image}
                name={company.name}
                title={company.title}
                description={company.description}
                category={company.category}
                rating={company.rating}
                reviewCount={company.reviewCount}
                onButtonClick={() => handleContactClick(company)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  </main>
);
