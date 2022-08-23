export const header = {
  logo: '/assets/img/header-logo.svg',
};

export const navItem = [
  {
    name: 'Home',
    path: '/',
    id: 1
  },
  {
    name: 'Thương hiệu',
    path: '/shop',
    id: 2,
    subNav: [
      {
        name: 'Channel',
        path: '/shop',
      },
      {
        name: 'Gucci',
        path: '/shop',
      },
      {
        name: 'Christian Dior',
        path: '/shop',
      },
    ],
  },
  {
    id: 3,
    name: 'Danh mục',
    path: '/shop',
    subNav: [
      {
        name: 'Nước hoa nữ',
        path: '/shop',
      },
      {
        name: 'Nước hoa nam',
        path: '/shop',
      },
      {
        name: 'Christian Dior',
        path: '/shop',
      },
      {
        name: 'Nước hoa Niche',
        path: '/shop',
      },
      {
        name: 'Nước hoa cao cấp',
        path: '/shop',
      },
    ],
  },
  {
    id: 4,
    name: 'Kiến thức về nước hoa',
    path: '/blog',
  },
  {
    id: 5,
    name: 'Liên hệ',
    path: '/contact',
  },
];
