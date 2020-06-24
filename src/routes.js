import Create from "./components/Create.vue";
import Read from "./components/Read.vue";

export const routes = [
  { path: "", component: Create },
  { path: "/read", component: Read },
];
