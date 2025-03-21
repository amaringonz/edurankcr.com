import { IconSearch } from '@tabler/icons-react';
import { Input } from '@theme/components';
import type { ComponentProps } from 'react';

type SearchBarProps = {} & ComponentProps<typeof Input>;

const Search = ({ ...props }: SearchBarProps) => {
  return (
    <Input
      leftSection={<IconSearch />}
      fontSize={300}
      shadow={200}
      height="lg"
      {...props}
    />
  );
};

export { Search };
