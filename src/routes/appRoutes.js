import { Homepage, Searchpage } from "pages";

const appRoutes = [
  {
    name: "Searchpage",
    component: Searchpage,
    exact: true,
    path: "/searchpage",
  },
  {
    name: "Homepage",
    component: Homepage,
    exact: true,
    path: "/",
  },
];

export default appRoutes;
