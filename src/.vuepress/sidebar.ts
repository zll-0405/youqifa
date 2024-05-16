import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/sentence/":  [
    "short-sentence",
    "like-yourself",
  ],

  "/books/": [
    {
      text: "个人成长",
      prefix: "life/",
      collapsible: true,
      children: [
        "growth-algorithm",
        "live-advice",
      ],
    },
    {
      text: "经济理财",
      prefix: "finance/",
      collapsible: true,
      children: [
        "finance-freedom-lesson-one",
        "wealth-awakening",
      ],
    },
  ],

});
