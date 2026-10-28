import React from 'react';

/**
 * Single source of truth for the official Trust Realtors transparent logo.
 * Includes query string versioning (?v=3) to prevent browser cache retention.
 */
export const LOGO_SRC = '/brand/logo-transparent.png?v=3';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'h-10 w-auto object-contain shrink-0',
  width = 100,
  height = 100,
  alt = 'Trust Realtors logo',
}) => {
  return (
    <img
      src={LOGO_SRC}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="eager"
      decoding="async"
    />
  );
};

export default Logo;
