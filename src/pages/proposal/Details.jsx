import React from 'react';

import { Badge } from '../../components/ui/badge/Badge';
import { ProposalDetailItem } from '../../components/ui/card/ProposalDetailItem';
import { DetailItem } from '../../components/ui/card/DetailItem';

import danielBishop from '../../assets/images/avatar/daniel-bishop.jpg';

import { companyData } from '../../assets/dummy/company-profile-cards';
import { ICONS } from '../../constants/icons';

const bidsData = [
  {
    id: 1,
    name: 'Noah Carter',
    role: 'Independent General Contractor',
    timeAgo: '1 day ago',
    price: '$65,000',
    timeline: '6–7 weeks',
    message:
      'Hi Ella, I’m a licensed contractor with over 12 years of experience in high-end kitchen remodels. I specialize in full-service renovations that include demo, framing, electric...',
    avatar: danielBishop,
  },
  {
    id: 2,
    name: 'Ava Sullivan',
    role: 'Sustainable Design Specialist',
    timeAgo: '1 day ago',
    price: '$60,000',
    timeline: '8 weeks',
    message:
      'Hello! I’d love to be considered for this kitchen remodel. As a specialist in eco-friendly design and sustainable building practices, I can help incorporate green materials, en...',
    avatar: danielBishop,
  },
  {
    id: 3,
    name: 'Mason Brooks',
    role: 'Renovation Expert',
    timeAgo: '1 day ago',
    price: '$58,000',
    timeline: '7 weeks',
    message:
      'Thanks for posting this opportunity. I’ve worked on several kitchen upgrades throughout Travis County, including two recent modern-style designs that match yo...',
    avatar: danielBishop,
  },
  {
    id: 4,
    name: 'Olivia Bennett',
    role: 'Licensed Project Manager & Builder',
    timeAgo: '1 day ago',
    price: '$60,000',
    timeline: '6–8 weeks',
    message:
      'Hi Ella, I’m Olivia — a licensed builder and certified project manager with over 15 years of experience in residential construction. My company specializes in modern kitche...',
    avatar: danielBishop,
  },
  {
    id: 5,
    name: 'Ethan Morales',
    role: 'Full-Service Remodel Contractor',
    timeAgo: '1 day ago',
    price: '$59,500',
    timeline: '6–8 weeks',
    message:
      "I've specialized in kitchen and bath renovations for the last decade. My bid includes all labor, materials, and a dedicated project manager to ensure everything stays on tr...",
    avatar: danielBishop,
  },
];

export const Details = () => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return (
    <>
      <div className="mt-24 flex flex-col gap-6 p-4 md:m-12 md:flex-row md:p-6 lg:m-24">
        {/* 1st Col */}
        <div className="flex flex-col gap-4 md:w-2/3">
          <div className="flex items-start gap-2 sm:gap-3">
            <img
              className="h-12 w-12 md:h-14 md:w-14"
              src={companyData.companies[0].avatar}
              alt={companyData.companies[0].companyName}
            />
            <div className="flex min-w-0 flex-1 flex-col gap-1 sm:gap-2">
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                <h3 className="text-sm leading-[100%] font-semibold sm:text-lg">
                  {companyData.companies[0].companyName}
                </h3>
                <Badge
                  title={companyData.companies[0].category}
                  variant="role"
                  asd
                />
              </div>
              <div className="flex flex-wrap items-center gap-2 text-xs sm:gap-3 sm:text-sm md:gap-4">
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <img
                    src={ICONS.dollar}
                    alt="Icon"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                  />
                  <span className="text-sm">
                    ${companyData.companies[0].hourlyRate}
                  </span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <img
                    src={ICONS.location}
                    alt="Location"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                  />
                  <span className="max-w-[120px] truncate sm:max-w-none">
                    {companyData.companies[0].location}
                  </span>
                </div>
                <div className="flex items-center gap-1 whitespace-nowrap">
                  <img
                    src={ICONS.clock}
                    alt="Clock"
                    className="h-3 w-3 sm:h-4 sm:w-4"
                  />
                  <span className="hidden sm:inline">
                    Replies in about{' '}
                    {companyData.companies[0].averageReplyTime} hours
                  </span>
                  <span className="sm:hidden">
                    ~{companyData.companies[0].averageReplyTime}h
                    reply
                  </span>
                </div>
                <div>
                  <div className="flex items-center gap-1 whitespace-nowrap">
                    <img
                      src={ICONS.star}
                      alt="star"
                      className="h-3 w-3 sm:h-4 sm:w-4"
                    />
                    <span className="font-semibold">
                      {companyData.companies[0].rating}
                    </span>
                    <span className="text-gray-500">
                      ({companyData.companies[0].reviews})
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-primary text-xl font-semibold md:text-2xl">
            {companyData.jobPosts[0].jobPostTitle}
          </h3>

          <ProposalDetailItem
            icon={ICONS.location}
            title="Location"
            description={`${companyData.jobPosts[0].city} City, ${companyData.jobPosts[0].region}`}
          />
          <ProposalDetailItem
            icon={ICONS.home}
            title="Project Type"
            description={`${companyData.jobPosts[0].projectType}`}
          />
          <ProposalDetailItem
            icon={ICONS.tools}
            title="Style Preference"
            description={`${companyData.jobPosts[0].stylePreference.join(' / ')}`}
          />
          <ProposalDetailItem
            icon={ICONS.eco}
            title="Sustainability"
            description={`${companyData.jobPosts[0].sustainability.join(', ')}`}
          />
          <ProposalDetailItem
            icon={ICONS.finance}
            title="Budget"
            description={`$${companyData.jobPosts[0].budget[0]} - $${companyData.jobPosts[0].budget[1]}`}
          />
          <ProposalDetailItem
            icon={ICONS.calendar}
            title="Start Date"
            description={`Start Date: ${new Date(companyData.jobPosts[0].startDate).toLocaleString(undefined, options)} -  Completion Date: ${new Date(companyData.jobPosts[0].endDate).toLocaleString(undefined, options)}`}
          />

          <div>
            <h3 className="text-base font-semibold">
              About the Job:
            </h3>
            <p>{companyData.jobPosts[0].jobDesc}</p>
          </div>

          <div>
            <h3 className="text-base font-semibold">
              Skills Required
            </h3>
            <ul className="list-disc pl-5">
              {companyData.jobPosts[0].skills.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm sm:mt-6 sm:text-base">
            <span className="text-gray-800/70">Applications:</span>
            <p className="font-medium text-gray-700">
              {companyData.jobPosts[0].applications}+
            </p>
          </div>
        </div>

        {/* 2nd Col */}
        <div className="flex flex-col gap-3 rounded-lg bg-gray-100 p-4 md:w-1/3">
          <h3 className="text-xl font-semibold text-gray-800">
            Details
          </h3>

          <div className="flex flex-col gap-3">
            {bidsData.map((bid) => (
              <DetailItem
                key={bid.id}
                name={bid.name}
                role={bid.role}
                timeAgo={bid.timeAgo}
                price={bid.price}
                timeline={bid.timeline}
                message={bid.message}
                avatar={bid.avatar}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
