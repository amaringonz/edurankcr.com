import { Text } from '@theme/components';
import type { IComponent } from '@theme/types';

type HeadingProps = {} & IComponent;

const HeadingHero = ({ children }: HeadingProps) => {
  return (
    <Text
      as="h1"
      color="white"
      size="700-res"
      weight="medium"
      align="center"
    >
      {children}
    </Text>
  );
};

const Heading = ({ children }: HeadingProps) => {
  return (
    <Text
      as="h2"
      color="primary"
      size="400-res"
      weight="semibold"
      align="center"
    >
      {children}
    </Text>
  );
};

export { Heading, HeadingHero };
