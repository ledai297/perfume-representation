export const header = {
  logo: '/assets/img/header-logo.svg',
};

export const navItem = [
  {
    name: 'Home',
    path: '/',
    key: 'home',
    id: 1
  },
  {
    name: 'Thương hiệu',
    path: '/shop',
    id: 2,
    key: 'brandIds',
    subNav: [],
  },
  {
    id: 3,
    name: 'Danh mục',
    path: '/shop',
    key: 'categoryIds',
    subNav: [],
  },
  {
    id: 4,
    key: 'blog',
    name: 'Kiến thức về nước hoa',
    path: '/blog',
  },
  {
    id: 5,
    key: 'contact',
    name: 'Liên hệ',
    path: '/contact',
  },
];
