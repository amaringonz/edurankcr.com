'use client';

import * as ProgressPrimitive from '@radix-ui/react-progress';
import { cx } from 'class-variance-authority';
import type { ComponentPropsWithoutRef, FC } from 'react';
import { memo } from 'react';

type ProgressProps = {
  bgColor?: 'neon' | 'primary';
  height?: 'sm' | 'md';
} & ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>;

const Progress: FC<ProgressProps> = memo(({ className, bgColor = 'primary', height = 'md', value, ...props }) => (
  <ProgressPrimitive.Root
    className={cx(
      'relative w-full overflow-hidden rounded-full bg-background-secondary',
      height === 'sm' ? 'h-[8px]' : 'h-3',
      className,
    )}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className={cx(
        'h-full w-full flex-1 transition-all',
        bgColor === 'neon' ? 'bg-brand-neon' : 'bg-interactive-primary',
      )}
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
