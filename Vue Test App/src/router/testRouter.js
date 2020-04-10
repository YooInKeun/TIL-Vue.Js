import TestListView from "../views/test/TestListView.vue";

const testRoutes = [
  {
    path: "/",
    redirect: "/test/list"
  },
  {
    path: "/test/list",
    name: "testList",
    component: TestListView
  },
];

export { testRoutes };
