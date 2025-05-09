import { createNavigation } from 'next-intl/navigation';

import { routing } from '@/services';

const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);

export { getPathname, Link, redirect, usePathname, useRouter };
