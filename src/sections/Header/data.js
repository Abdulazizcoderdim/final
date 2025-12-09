export const headerData = {
  logo: {
    text: "LOGO",
    src: "/logo.svg",
  },
  navItems: [
    { key: "why", label: "Why LegalSifter", href: "/" },
    { key: "solutions", label: "Solutions", href: "/design2" },
    { key: "blogs", label: "Blogs", href: "/design3" },
    {
      key: "resources",
      label: "Resources",
      href: "/design4",
      hasDropdown: true,
    },
    { key: "socials", label: "Socials", href: "#socials", hasDropdown: true },
  ],
  language: {
    current: "en",
    options: ["en", "uz"],
  },
  buttons: [
    { key: "waitlist", label: "Join Waitlist", variant: "secondary" },
    { key: "demo", label: "Request Demo", variant: "primary" },
  ],
};
