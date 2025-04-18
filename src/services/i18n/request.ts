import { getRequestConfig } from 'next-intl/server';

import { isLocale } from '@/utils';

// noinspection ES6PreferShortImport
import { routing } from '../config/routing';

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !isLocale({ locale })) {
    locale = routing.defaultLocale;
  }

  return {
    locale,
    messages: (await import(`../../messages/${locale}.json`)).default,
  };
});
