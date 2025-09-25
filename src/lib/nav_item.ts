export interface NavItem {
  name: string;
  path: string;
}

export const navItems: NavItem[] = [
  {
    name: "Posts",
    path: "/posts",
  },
  {
    name: "Projects",
    path: "/projects",
  },
  {
    name: "About me",
    path: "/about_me",
  },
  {
    name: "Experience",
    path: "/experience_dev",
  },
];
