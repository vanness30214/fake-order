import { defineConfig } from "umi";

export default defineConfig({
  base:process.env.NODE_ENV==="production"?'/vanness30214':"/",
  routes: [
    { path: "/", component: "index" }
  ],
  outputPath:'build',
  npmClient: 'pnpm',
});
