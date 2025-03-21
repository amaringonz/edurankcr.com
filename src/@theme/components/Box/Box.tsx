import { Slot } from '@radix-ui/react-slot';
import type { Breakpoint } from '@theme/functions';
import { getVisibilityClasses } from '@theme/functions';
import type { VariantProps } from 'class-variance-authority';
import { cva, cx } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { memo } from 'react';

const boxVariants = cva('', {
  variants: {
    alignItems: {
      center: 'items-center',
      end: 'items-end',
      start: 'items-start',
      stretch: 'items-stretch',
    },
    animation: {
      default: 'transition-all duration-300 ease-in-out',
    },
    bgBackground: {
      black: 'bg-black',
      white: 'bg-white',
    },
    boxShadow: {
      default: 'shadow',
      200: 'shadow-200',
      card: 'shadow-card',
      lg: 'shadow-lg',
      md: 'shadow-md',
      sm: 'shadow-sm',
      none: 'shadow-none',
    },
    container: {
      true: 'container mx-auto',
    },
    display: {
      block: 'block',
      flex: 'flex',
      grid: 'grid',
      hidden: 'hidden',
      inline: 'inline',
      inlineBlock: 'inline-block',
      inlineFlex: 'inline-flex',
      visible: 'visible',
    },
    flexDirection: {
      column: 'flex-col',
      row: 'flex-row',
    },
    flexGrow: { true: 'flex-grow' },
    flexWrap: {
      nowrap: 'flex-nowrap',
      wrap: 'flex-wrap',
      wrapReverse: 'flex-wrap-reverse',
    },
    fontAlign: {
      center: 'text-center',
      left: 'text-left',
      right: 'text-right',
    },
    fontColor: {
      black: 'text-black',
      white: 'text-white',
    },
    fontSize: {
      lg: 'text-lg',
      md: 'text-base',
      sm: 'text-sm',
      xl: 'text-xl',
      xs: 'text-xs',
    },
    fontWeight: {
      bold: 'font-bold',
      medium: 'font-medium',
      normal: 'font-normal',
    },
    gap: {
      '2xl': 'gap-6',
      'auto': 'gap-auto',
      'lg': 'gap-4',
      'md': 'gap-3',
      'none': 'gap-none',
      'sm': 'gap-2',
      'xl': 'gap-5',
      'xs': 'gap-1',
    },
    height: {
      auto: 'h-auto',
      dvh: 'h-dvh',
      full: 'h-full',
      carouselLinear: 'h-4/5',
      carousel: 'h-[476px] md:h-[540px] lg:h-[36vw]',
    },
    justifyContent: {
      center: 'justify-center',
      end: 'justify-end',
      between: 'justify-between',
      start: 'justify-start',
    },
    minHeight: {
      auto: 'min-h-auto',
      full: 'min-h-full',
      dvh: 'min-h-dvh',
    },
    overflow: {
      auto: 'overflow-auto',
      hidden: 'overflow-hidden',
      scroll: 'overflow-scroll',
      visible: 'overflow-visible',
    },
    padding: {
      'none': 'p-0',
      'sm': 'p-2',
      'md': 'p-3',
      'lg': 'p-4',
      'xl': 'p-5',
      '2xl': 'p-6',
    },
    paddingX: {
      '2xl': 'px-6',
      'lg': 'px-4',
      'md': 'px-3',
      'none': 'px-0',
      'section': 'px-4 md:px-6 lg:px-0',
      'sm': 'px-2',
      'xl': 'px-5',
    },
    paddingY: {
      '2xl': 'py-6',
      'lg': 'py-4',
      'md': 'py-3',
      'none': 'py-0',
      'section': 'py-4 md:py-6 lg:py-16',
      'sm': 'py-2',
      'xl': 'py-5',
    },
    pointerEvents: {
      none: 'pointer-events-none',
    },
    position: {
      absolute: 'absolute',
      fixed: 'fixed',
      relative: 'relative',
      sticky: 'sticky',
    },
    rounded: {
      none: 'rounded-none',
      sm: 'rounded-sm',
      md: 'rounded-md',
      lg: 'rounded-lg',
      full: 'rounded-full',
    },
    transition: {
      true: 'transition-all',
    },
    transitionDuration: {
      0: 'duration-0',
      100: 'duration-100',
      200: 'duration-200',
      300: 'duration-300',
      400: 'duration-400',
      500: 'duration-500',
      700: 'duration-700',
      1000: 'duration-1000',
    },
    transitionTimingFunction: {
      linear: 'ease-linear',
      in: 'ease-in',
      out: 'ease-out',
      inOut: 'ease-in-out',
    },
    width: {
      auto: 'w-auto',
      full: 'w-full',
    },
    zIndex: {
      0: 'z-0',
      10: 'z-10',
      20: 'z-20',
      30: 'z-30',
      40: 'z-40',
      50: 'z-50',
    },
  },
});

type BoxProps = {
  as?: 'div' | 'section' | 'header' | 'footer' | 'main';
  asChild?: boolean;
  hiddenFrom?: Breakpoint;
  visibleFrom?: Breakpoint;
} & HTMLAttributes<HTMLElement> & VariantProps<typeof boxVariants>;

const Box = memo<BoxProps>(({
  className,
  asChild,
  hiddenFrom,
  visibleFrom,
  as: Tag = 'div',
  alignItems,
  animation,
  bgBackground,
  boxShadow,
  container,
  display,
  flexDirection,
  flexGrow,
  flexWrap,
  fontAlign,
  fontColor,
  fontSize,
  fontWeight,
  gap,
  height,
  justifyContent,
  minHeight,
  overflow,
  padding,
  paddingX,
  paddingY,
  pointerEvents,
  position,
  rounded,
  transition,
  transitionDuration,
  transitionTimingFunction,
  width,
  zIndex,
  ...props
}) => {
  const Comp = asChild ? Slot : Tag;
  const { hiddenClass, visibleClass } = getVisibilityClasses('flex', hiddenFrom, visibleFrom);

  return (
    <Comp
      className={cx(boxVariants({
        alignItems,
        animation,
        bgBackground,
        boxShadow,
        container,
        display,
        flexDirection,
        flexGrow,
        flexWrap,
        fontAlign,
        fontColor,
        fontSize,
        fontWeight,
        gap,
        height,
        justifyContent,
        minHeight,
        overflow,
        padding,
        paddingX,
        paddingY,
        pointerEvents,
        position,
        rounded,
        transition,
        transitionDuration,
        transitionTimingFunction,
        width,
        zIndex,
      }), hiddenClass, visibleClass, className)}
      {...props}
    />
  );
});

Box.displayName = 'Box';

export { Box };
