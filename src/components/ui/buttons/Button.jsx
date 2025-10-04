import React from 'react';

export const Button = ({
  title,
  variant = 'outline',
  size = 'normal',
  styles,
  onClick,
  icon,
  iconPosition = 'left',
}) => {
  const base =
    'rounded-lg font-semibold transition-colors duration-200 cursor-pointer';

  const variants = {
    outline:
      'bg-white border border-primary/50 text-primary hover:bg-primary hover:text-white',
    solid:
      'bg-primary text-white hover:bg-white hover:text-primary border border-primary',
    contact:
      'max-w-max flex-shrink-0 border border-[#F57C0080] text-primary bg-[#F5F5F5] font-bold text-lg hover:bg-[#F57C0080]/10',
    explore:
      'flex items-center gap-2 border border-[1px] rounded-[8px] border-[#F57C0080] text-primary font-bold text-lg cursor-pointer transition-colors hover:bg-[#F57C0080]/10',
    iconOnly: 'p-2 border border-gray-200',
  };

  const sizes = {
    normal: 'px-4 py-2',
    large: 'px-6 py-3',
    contact: 'px-4 pt-[11px] pb-[11px]',
  };

  const isIconOnly = variant === 'iconOnly';

  return (
    <button
      className={`${base} ${isIconOnly ? variants.iconOnly : sizes[size]} ${variants[variant]} ${styles || ''}`}
      onClick={onClick}
    >
      {isIconOnly ? (
        icon
      ) : (
        <>
          {iconPosition === 'left' && icon && (
            <span className="flex-shrink-0">{icon}</span>
          )}
          <span className="flex-shrink-0">{title}</span>
          {iconPosition === 'right' && icon && (
            <span className="flex-shrink-0">{icon}</span>
          )}
        </>
      )}
    </button>
  );
};
