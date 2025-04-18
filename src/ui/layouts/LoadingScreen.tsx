'use client';

import { Logotype, Stack } from '@/components';
import { useUserStore } from '@/stores';

export const LoadingScreen = () => {
  const { user } = useUserStore();

  if (user) {
    return null;
  }

  return (
    <Stack
      bgBackground="secondary"
      height="auto"
      minHeight="dvh"
      gap="none"
      position="fixed"
      zIndex={50}
      alignItems="center"
      justifyContent="center"
      className="inset-0"
    >
      <Logotype variant="black" className="loading-logo" />
    </Stack>
  );
};
