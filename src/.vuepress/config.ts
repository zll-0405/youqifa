import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // base: "/blog/",
  dest: "src/.vuepress/dist",
  lang: "zh-CN",
  title: "有启发",
  description: "这是一个希望能带给你一些启发的网站",
  head: [ 
    ['link', { rel: 'icon', href: 'https://vip.helloimg.com/i/2024/05/15/66449c7354629.png' }],

    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=G-CSN77S03H5",async: true}],
    ['script', {},
                " window.dataLayer = window.dataLayer || [];\
                function gtag(){dataLayer.push(arguments);}\
                gtag('js', new Date());\
                gtag('config', 'G-CSN77S03H5');"],
  ],

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
