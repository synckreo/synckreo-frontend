import React from 'react';

import { Badge } from '../badge/Badge';
import { Button } from '../buttons/Button';

export const DetailItem = ({
  name,
  role,
  timeAgo,
  price,
  timeline,
  message,
  avatar,
}) => {
  return (
    <div className="rounded-xl border border-transparent bg-[#2626260D] p-3 transition-colors hover:border-gray-200 sm:p-4 md:p-5">
      <div className="mb-4 flex flex-col items-start justify-between gap-4 sm:flex-row">
        <div className="flex gap-4">
          <img
            src={avatar}
            alt={name}
            className="h-12 w-12 rounded-full border-2 border-white object-cover shadow-sm"
          />
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-bold text-gray-900">{name}</h3>
              <span className="text-xs font-medium text-gray-400">
                • {timeAgo}
              </span>
            </div>
            <Badge variant="role" title={role} />
          </div>
        </div>

        <Button title="View Full Bid" variant="outline" />
      </div>

      {/* Stats Row */}
      <div className="mb-3 flex flex-wrap items-center justify-between text-sm">
        <div>
          <span className="font-bold text-gray-900">Pro</span>
          <span className="ml-1 text-gray-600">{price}</span>
        </div>
        <div>
          <span className="font-bold text-gray-900">
            Estimated Timeline
          </span>
          <span className="ml-1 text-gray-600">{timeline}</span>
        </div>
      </div>

      {/* Message Content */}
      <div>
        <h4 className="mb-1 text-sm font-bold text-gray-900">
          Short Message
        </h4>
        <p className="text-sm leading-relaxed text-gray-600">
          {message}
        </p>
      </div>
    </div>
  );
};
