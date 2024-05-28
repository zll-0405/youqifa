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
        "good-luck",
        "live-this-life-well",
        "successful-mentality",
        "growth-algorithm",
        "live-advice",
      ],
    },
    {
      text: "经济理财",
      prefix: "finance/",
      collapsible: true,
      children: [
        "started-with-stock",
        "money-psychology",
        "finance-freedom-lesson-one",
      ],
    },
  ],
  "/thoughts/":  [
    "what-am-i-interested-in",
    "what-is-relaxation"
  ],

});
