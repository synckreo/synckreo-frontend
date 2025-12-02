import React from 'react';

export const ProposalDetailItem = ({ icon, title, description }) => {
  if (!icon) {
    return (
      <div className="rounded-lg border border-red-500/50 bg-red-50 p-2">
        <div className="text-xs font-semibold text-red-700">
          Missing icon for: {title || '(no title)'}
        </div>
        <div className="text-xs text-red-500">
          Received icon: {String(icon)}
        </div>
        <p className="mt-1 text-sm">{description}</p>
      </div>
    );
  }

  const iconKey = Object.keys(icon)[0];
  const iconSrc = icon[iconKey];
  const altText = `${iconKey.charAt(0).toUpperCase() + iconKey.slice(1)} icon`;

  return (
    <div className="rounded-lg border border-gray-800/30">
      <div className="flex flex-col gap-2 p-2">
        <div className="flex items-center gap-1">
          <span>
            <img
              src={icon}
              alt={altText}
              className="h-3 w-3 sm:h-4 sm:w-4"
            />
          </span>
          <span className="text-sm text-gray-800/70">{title}</span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
