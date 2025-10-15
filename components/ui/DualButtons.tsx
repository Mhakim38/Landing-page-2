'use client';

import React from 'react';
import OrangeButton from './OrangeButton';

interface DualButtonsProps {
  primaryText: string;
  secondaryText: string;
  primaryHref?: string;
  secondaryHref?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
  className?: string;
}

const DualButtons: React.FC<DualButtonsProps> = ({
  primaryText,
  secondaryText,
  primaryHref,
  secondaryHref,
  onPrimaryClick,
  onSecondaryClick,
  className = '',
}) => {
  return (
    <div className={`flex flex-col sm:flex-row gap-4 ${className}`}>
      <OrangeButton
        variant="primary"
        href={primaryHref}
        onClick={onPrimaryClick}
      >
        {primaryText}
      </OrangeButton>
      <OrangeButton
        variant="secondary"
        href={secondaryHref}
        onClick={onSecondaryClick}
      >
        {secondaryText}
      </OrangeButton>
    </div>
  );
};

export default DualButtons;
