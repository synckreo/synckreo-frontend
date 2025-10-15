import { React } from 'react';

export const Badge = ({ title, variant }) => {
  const variants = {
    role: 'text-primary rounded-[6px] bg-[#F57C001A] px-2 py-1.5 text-xs font-medium whitespace-nowrap sm:px-3',
    category:
      'rounded-3xl bg-gray-200 px-2 py-1.5 text-xs font-medium whitespace-nowrap sm:px-4 sm:py-2.5 sm:text-sm',
    filter:
      'active:text-primary hover:text-primary hover:border-primary active:border-primary cursor-pointer rounded-[20px] border border-gray-800/10 px-4 py-2 text-sm font-medium text-gray-800/70',
  };

  return <span className={`${variants[variant]}`}>{title}</span>;
};
