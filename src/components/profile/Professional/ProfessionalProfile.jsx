import { React, useState } from 'react';
import { ProfileHeader } from '../shared/ProfileHeader';
import { ProjectGallery } from './ProjectGallery';
import { Tab } from '../shared/Tab';
import { About } from '../shared/About';
import {
  professionalProfile,
  professionalWorks,
} from '../../../assets/dummy/professionals';

export const ProfessionalProfile = () => {
  const { role } = professionalProfile;
  const [activeTab, setActiveTab] = useState('first');

  const tabConfig = {
    professional: {
      label: 'Work',
      content: (
        <ProjectGallery professionalWorks={professionalWorks} />
      ),
    },
    company: {
      label: 'Projects',
      content: <div>Company projects content</div>,
    },
    homeowner: {
      label: 'Open Projects',
      content: <div>Open projects content</div>,
    },
  };

  const config = tabConfig[role] || tabConfig.professional;

  const tabs = [
    { id: 'first', label: config.label },
    { id: 'second', label: 'About' },
  ];

  return (
    <div className="mt-24">
      <ProfileHeader
        location={professionalProfile.location}
        role={professionalProfile.role}
        name={professionalProfile.name}
        reviews={professionalProfile.reviewCount}
        rating={professionalProfile.rating}
        likes={professionalProfile.stats.likes}
        followers={professionalProfile.stats.followers}
        following={professionalProfile.stats.following}
        badge={professionalProfile.title}
        avatar={professionalProfile.avatar}
      />

      <Tab
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <div className="mt-6 flex justify-center">
        {activeTab === 'first' && config.content}
        {activeTab === 'second' && (
          <About skills={professionalProfile.skills} />
        )}
      </div>
    </div>
  );
};
