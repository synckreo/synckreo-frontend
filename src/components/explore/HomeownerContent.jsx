import { React } from 'react';
import { Search } from '../ui/search/Search';
import { Button } from '../ui/buttons/Button';
import { ProfileCard } from '../ui/card/ProfileCard';
import { ProjectCard } from '../ui/card/ProjectCard';

import { filters } from '../../assets/dummy/filter';
import { companyData } from '../../assets/dummy/profile-cards';

export const HomeOwnerContent = () => {
  const searchCategories = ['Companies', 'Jobs'];

  return (
    <main className="container mx-auto px-1 sm:px-2 lg:px-4">
      <section className="mt-24 flex flex-col items-center gap-4">
        <h1 className="heading-56 leading-[1.2] font-semibold tracking-[2%]">
          Find the right expert for your next project
        </h1>
        <p>
          Browse trusted professionals and companies ready to bring
          your construction projects to life.
        </p>
        <div>
          <Search
            placeholder="What are your looking for?"
            dropdownOptions={searchCategories}
            buttonTitle="Search"
          />
        </div>
        <div className="mt-4 flex gap-4">
          <span>Filters:</span>
          <div>
            {filters.tags.map((tag) => (
              <span
                className="active:text-primary hover:text-primary m-1 cursor-pointer rounded-[20px] border px-4 py-2 text-sm font-medium hover:border-[#F57C00] active:border-[#F57C00]"
                key={tag}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 mb-24">
        {companyData.companies.map((company) => {
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
                  title={project.projectName}
                  likes={project.likes}
                  views={project.views}
                />
              ))}
            </ProfileCard>
          );
        })}
      </section>
    </main>
  );
};
