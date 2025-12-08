import {
  Cg,
  Cmc,
  Instagram,
  Telegram,
  X,
} from "../../../assets/icons/socialIcons";

export const joinCommunityData = {
  title: "Join the LegalSifter Community",
  subtitle: `Stay connected and be the first to receive updates, releases and early access opportunities`,
  visual: {
    src: "/images/phone.webp",
  },
  form: {
    placeholder: "Join Waitlist",
    buttonLabel: "Request Demo",
    buttonIcon: "🔍",
  },
  socialLinks: [
    { name: "X", icon: X, href: "#twitter" },
    { name: "Telegram", icon: Telegram, href: "#telegram" },
    { name: "Instagram", icon: Instagram, href: "#instagram" },
    { name: "CoinGecko", icon: Cg, href: "#medium" },
    { name: "Cmc", icon: Cmc, href: "#discord" },
  ],
};
