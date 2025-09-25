import React from 'react';

export const Button = ({
  title,
  variant = 'outline',
  size = 'normal',
  styles,
}) => {
  const base =
    'rounded-lg font-semibold transition-colors duration-200 cursor-pointer';

  const variants = {
    outline:
      'bg-white border border-primary/50 text-primary hover:bg-primary hover:text-white',
    solid:
      'bg-primary text-white hover:bg-white hover:text-primary border border-primary',
  };

  const sizes = {
    normal: 'px-4 py-2',
    large: 'px-6 py-3',
  };

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${styles || ''}`}
    >
      {title}
    </button>
  );
};
