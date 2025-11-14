'use client';

import React from 'react';
import StepItem from './StepItem';

interface Step {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
  features: string[];
}

interface StepsSectionProps {
  steps: Step[];
}

const StepsSection: React.FC<StepsSectionProps> = ({ steps }) => {
  return (
    <>
      {steps.map((step, index) => (
        <StepItem key={step.id} step={step} index={index} />
      ))}
    </>
  );
};

export default StepsSection;
