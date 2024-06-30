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
        "perplexity",
      ],
    },
  ],

  "/blog/": [
    "naval"
  ],

  "/tools/":  [
    "programmer-tools",
    "removebg",
    "listary",
  ],

});
