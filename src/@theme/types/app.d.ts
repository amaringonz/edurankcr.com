import type { getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';
import type { createFormatter } from 'use-intl';

import type en from '../../messages/en.json';
/* eslint-disable ts/consistent-type-definitions */
import type { formats } from './@theme/i18n';

declare global {
  interface IntlMessages extends Messages {}
  interface IntlFormats extends Formats {}
}

type Children = ReactNode;
type Locale = string;

type Messages = typeof en;
type Formats = typeof formats;

type ILayoutParams = {
  params: Promise<{
    locale: Locale;
  }>;
};

type IRootLayout = {
  children: Children;
} & ILayoutParams;

type IMeta = {} & ILayoutParams;

type IProviders = {
  children: Children;
} & ILayoutParams;

type IPageLayout = {
  children: Children;
} & ILayoutParams;

type ILayout = {
  children: Children;
} & ILayoutParams;

type IDictionary = {
  dictionary: Awaited<ReturnType<typeof getTranslations>>;
};

type IFormatter = {
  formater: Awaited<ReturnType<typeof createFormatter>>;
};

type IComponent = {
  children: Children;
  dictionary?: Awaited<ReturnType<typeof getTranslations>>;
};

export { IComponent, IDictionary, IFormatter, ILayout, IMeta, IPageLayout, IProviders, IRootLayout, Locale, Messages };
