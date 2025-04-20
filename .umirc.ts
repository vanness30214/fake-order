import { defineConfig } from "umi";


export default defineConfig({
  base:process.env.NODE_ENV==="production"?'/fake-order/':"/",
  publicPath:process.env.NODE_ENV==="production"?'/fake-order/':"/",
  routes: [
    { path: "/", component: "index" }
  ],
  outputPath:'build/fake-order',
  npmClient: 'pnpm',
  hash:true,
  copy: [ { from: 'CNAME', to: 'build' },]
});
