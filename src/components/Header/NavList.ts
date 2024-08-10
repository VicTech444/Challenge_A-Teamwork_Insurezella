export const NavList = [
  {
    name: "Home",
    path: "/",
    title: 'Homepage link'
  },
  {
    name: "Find Insurance",
    path: "/find-insurance/",
    title: 'Find Insurance link',
    collapseMenu: true,
    collapseItems: [
      {
        name: "Collapse item one",
        href: "/collapse-one/",
      },
      {
        name: "Collapse item two",
        href: "/collapse-two/",
      }
    ]
  },
  {
    name: "Learn",
    path: "/learn/",
    title: 'Learn link'
  },
  {
    name: "About",
    path: "/about/",
    title: 'About link'
  }
];