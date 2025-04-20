import { defineConfig } from "umi";


export default defineConfig({
  base:process.env.NODE_ENV==="production"?'/virtual_leave_form/':"/",
  publicPath:process.env.NODE_ENV==="production"?'/virtual_leave_form/':"/",
  routes: [
    { path: "/", component: "index" }
  ],
  outputPath:'build/virtual_leave_form',
  npmClient: 'pnpm',
  hash:true,
  copy: [ { from: 'CNAME', to: 'build' },]
});
