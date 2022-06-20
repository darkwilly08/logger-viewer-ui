import React from 'react';

import { DefaultLayout } from '@darkwilly08/layouts';

const items = [
  {
    title: 'Home',
    icon: 'home',
    action: () => alert('testing'),
    children: [
      {
        title: 'Test',
        icon: 'search',
        href: '/search',
      },
      {
        title: 'Page2',
        icon: 'home',
        href: '/test',
      },
    ],
  },
  {
    title: 'Dashboard',
    icon: 'dashboard',
    href: '/dashboard',
  },
  {
    title: 'Settings',
    icon: 'settings',
    href: '/settings',
  },
];

export function getLayout(page: JSX.Element) {
  return <DefaultLayout items={items}>{page}</DefaultLayout>;
}
