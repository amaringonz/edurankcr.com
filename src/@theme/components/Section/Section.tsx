import { Box } from '@theme/components';
import type { ComponentProps, FC } from 'react';
import { memo } from 'react';

type SectionProps = ComponentProps<typeof Box>;

const Section: FC<SectionProps> = memo(({
  ...props
}) => (
  <Box
    width="full"
    paddingY="section"
    paddingX="section"
    gap="2xl"
    as="section"
    {...props}
  />
));

Section.displayName = 'Section';

export { Section };
