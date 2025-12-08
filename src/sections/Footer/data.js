import {
  Cg,
  Cmc,
  Instagram,
  IqWiki,
  linkTree,
  Telegram,
  X,
} from "../../assets/icons/socialIcons";

export const footerData = {
  brand: {
    name: "OZAK AI",
    logo: "/logos/ozak-ai.svg",
    description:
      "Subscribe to our newsletter to get the latest updates on everything Ozak AI",
  },
  quickLinks: [
    { key: "presale", label: "Presale", href: "#presale" },
    { key: "predictive", label: "Predictive AI", href: "#predictive-ai" },
    { key: "buy", label: "Buy $OZ", href: "#buy-oz" },
    { key: "whitepaper", label: "Whitepaper", href: "#whitepaper" },
    { key: "tokenomics", label: "Tokenomics", href: "#tokenomics" },
    { key: "roadmap", label: "Roadmap", href: "#roadmap" },
  ],
  aiAgents: [
    { key: "individuals", label: "For Individuals", href: "#individuals" },
    { key: "business", label: "For Business", href: "#business" },
    { key: "depin", label: "DePIN", href: "#depin" },
    { key: "waitlist", label: "Join Waitlist", href: "#waitlist" },
  ],
  extras: [
    { key: "media", label: "Media Kit", href: "#media-kit" },
    { key: "blogs", label: "Blogs", href: "#blogs" },
    { key: "docs", label: "Documentation", href: "#docs" },
    { key: "support", label: "Support", href: "#support" },
  ],
  socialLinks: [
    { name: "Twitter", icon: X, href: "#twitter" },
    { name: "Telegram", icon: Telegram, href: "#telegram" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "Cmc", icon: Cmc, href: "#discord" },
    { name: "Cg", icon: Cg, href: "#medium" },
    { name: "IqWiki", icon: IqWiki, href: "#star" },
    { name: "LinkTree", icon: linkTree, href: "#star" },
  ],
  legal: [
    { key: "terms", label: "Terms", href: "#terms" },
    { key: "disclaimers", label: "Disclaimers", href: "#disclaimers" },
    { key: "privacy", label: "Privacy", href: "#privacy" },
  ],
};
