import React from 'react';

export const Button = ({ title, variant = 'outline', styles }) => {
  const base =
    'px-4 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer';

  const variants = {
    outline:
      'border border-primary/50 text-primary hover:bg-primary hover:text-white',
    solid:
      'bg-primary text-white hover:bg-white hover:text-primary border border-primary',
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${styles || ''}`}
    >
      {title}
    </button>
  );
};
