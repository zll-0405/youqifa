import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/sentence/":  [
    "short-sentence",
    "like-yourself",
  ],

  "/books/": [
    {
      text: "人生",
      prefix: "life/",
      collapsible: true,
      children: [
        "live-advice",
      ],
    },
    {
      text: "财务",
      prefix: "finance/",
      collapsible: true,
      children: [
        "finance-freedom-lesson-one",
        "wealth-awakening",
      ],
    },
  ],

});
