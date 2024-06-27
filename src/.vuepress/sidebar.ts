import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/sentence/":  [
    "something-better",
    "short-sentence",
    "like-yourself",
  ],

  "/ai/": [
    {
      text: "信息",
      prefix: "info/",
      collapsible: true,
      children: [
        "wetype-ai",
      ],
    },
    {
      text: "产品",
      prefix: "product/",
      collapsible: true,
      children: [
        "glif-app",
      ],
    },
  ],

  "/blog/": [
    "naval"
  ],

  "/tools/":  [
    "to-the-new-hustle-and-bustle",
    "save-money-is-a-habit",
    "what-is-relaxation",
    "what-am-i-interested-in",
  ],

});
