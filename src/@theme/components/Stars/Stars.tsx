import { IconStarFilled } from '@tabler/icons-react';
import { cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

const STAR_COLORS = ['#A3A8FF', '#8791FF', '#6A7BFF', '#5271FF', '#5271FF'];
const DISABLED_COLOR = '#6A6A6A';

const getStarColor = (rate: number) => STAR_COLORS[Math.round(rate) - 1];

const Star: FC<{ half?: boolean; color: string; disabled?: boolean }> = ({ half = false, color, disabled = false }) => {
  const bgColor = disabled ? DISABLED_COLOR : color;

  return (
    <div className="relative flex items-center justify-center size-5">
      <div
        className={cx('w-full h-full', half ? 'rounded-tl-sm rounded-bl-sm' : 'rounded-sm')}
        style={{ backgroundColor: bgColor }}
      />
      {half && (
        <div
          className="w-full rounded-tr-sm rounded-br-sm h-full"
          style={{ backgroundColor: DISABLED_COLOR }}
        />
      )}
      <IconStarFilled size={14} className="absolute text-white" />
    </div>
  );
};

const Stars: FC<{ rate: number } & ComponentProps<'div'>> = memo(({ className, rate, ...props }) => {
  const color = getStarColor(rate);

  return (
    <div className={cx('flex items-center gap-1', className)} {...props}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        const half = rate >= index + 0.5 && rate < starValue;
        const disabled = rate <= index;

        return (
          <Star key={index} half={half} color={color} disabled={disabled} />
        );
      })}
    </div>
  );
});

Stars.displayName = 'Stars';

export { Stars };
