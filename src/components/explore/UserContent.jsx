import { React, useState } from 'react';
import { Search } from '../ui/search/Search';
import { ProfileCard } from '../ui/card/ProfileCard';
import { ProjectCard } from '../ui/card/ProjectCard';
import { Card } from '../ui/card/Card';

import { filters } from '../../assets/dummy/filter';
import { companyData } from '../../assets/dummy/company-profile-cards';
import { data } from '../../assets/dummy/card';

export const UserContent = () => {
  const searchCategories = ['Companies', 'Projects', 'Professionals'];
  const [category, setCategory] = useState('Companies');

  const renderCompanies = () => {
    return companyData.companies
      .filter((company) => {
        return companyData.projects.some(
          (project) => project.companyId === company.id
        );
      })
      .map((company) => {
        const projects = companyData.projects.filter(
          (project) => project.companyId === company.id
        );

        return (
          <ProfileCard
            key={company.id}
            avatar={company.avatar}
            companyName={company.companyName}
            category={company.category}
            averageReplyTime={company.averageReplyTime}
            location={company.location}
            hourlyRate={company.hourlyRate}
            skills={company.skills}
            rating={company.rating}
            reviews={company.reviews}
            onSaveClick={() => {}}
            onGetInTouchClick={() => {}}
            onViewProfileClick={() => {}}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                projectBackgroundImg={project.image}
                projectName={project.projectName}
                likes={project.likes}
                views={project.views}
              />
            ))}
          </ProfileCard>
        );
      });
  };

  const renderProjects = () => {
    return companyData.companies.map((company) => {
      const jobPosts = companyData.jobPosts.filter(
        (jobPost) => jobPost.companyId === company.id
      );

      return jobPosts.map((jobPost) => {
        return (
          <div className="flex gap-4">
            <ProfileCard
              key={`${company.id}-${jobPost.id}`}
              avatar={company.avatar}
              companyName={company.companyName}
              category={company.category}
              averageReplyTime={company.averageReplyTime}
              location={company.location}
              hourlyRate={company.hourlyRate}
              skills={company.skills}
              rating={company.rating}
              reviews={company.reviews}
              jobDesc={jobPost.jobDesc}
              jobPostTitle={jobPost.jobPostTitle}
              applications={jobPost.applications}
              onApplyNow={() => {}}
            />
          </div>
        );
      });
    });
  };

  const renderProfessionals = () => {
    return (
      <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {data.professionals.map((professional) => (
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
    );
  };

  const categoryComponents = {
    Companies: renderCompanies(),
    Projects: renderProjects(),
    Professionals: renderProfessionals(),
  };

  return (
    <main className="container mx-auto px-1 sm:px-2 lg:px-4">
      <section className="mt-24 flex flex-col items-center gap-4 max-sm:p-6">
        <h3 className="text-center text-4xl leading-[1.2] font-semibold tracking-[2%] md:text-[56px]">
          Find the right expert for your next project
        </h3>
        <p className="text-center">
          Browse trusted professionals and companies ready to bring
          your construction projects to life.
        </p>
        <div className="w-sm p-2 md:w-lg">
          <Search
            placeholder="What are your looking for?"
            dropdownOptions={searchCategories}
            buttonTitle="Search"
            value={category}
            onChange={setCategory}
          />
        </div>
        <div className="mt-4 flex flex-col items-center gap-4 lg:flex-row">
          <span>Filters:</span>
          <div className="flex flex-wrap justify-center gap-2">
            {filters.tags.map((tag) => (
              <span
                className="active:text-primary hover:text-primary hover:border-primary active:border-primary cursor-pointer rounded-[20px] border border-gray-800/10 px-4 py-2 text-sm font-medium text-gray-800/70"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-6 my-12 md:my-24">
        {categoryComponents[category]}
      </section>
    </main>
  );
};
