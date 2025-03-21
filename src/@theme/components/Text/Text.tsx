import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

const textVariants = cva('', {
  variants: {
    align: {
      center: 'text-center',
    },
    color: {
      inherit: 'text-inherit',
      black: 'text-black',
      white: 'text-white',
      primary: 'text-text-primary',
      secondary: 'text-text-secondary',
    },
    size: {
      'inherit': '',
      'lg': 'text-lg',
      'md': 'text-base',
      'sm': 'text-sm',
      'xs': 'text-xs',
      '300': 'text-300',
      '300-res': 'text-200 md:text-300-responsive',
      '400': 'text-400',
      '400-res': 'text-300 md:text-400-responsive',
      '700-res': 'text-600 md:text-700-responsive',
    },
    truncate: {
      true: 'truncate',
    },
    underline: {
      true: 'underline',
    },
    weight: {
      inherit: '',
      bold: 'font-bold',
      semibold: 'font-semibold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
  },
  defaultVariants: {
    color: 'inherit',
    size: 'inherit',
  },
});

type TextProps = {
  asChild?: boolean;
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
} & ComponentProps<'p'> & VariantProps<typeof textVariants>;

const Text: FC<TextProps> = memo(({
  asChild,
  as: Tag = 'p',
  className,
  align,
  color,
  size,
  truncate,
  underline,
  weight,
  children,
  ...props
}) => {
  const Comp = asChild ? Slot : Tag;

  return (
    <Comp
      className={cx(textVariants({
        align,
        color,
        size,
        truncate,
        underline,
        weight,
      }), className)}
      {...props}
    >
      {children}
    </Comp>
  );
});

Text.displayName = 'Text';

export { Text };
