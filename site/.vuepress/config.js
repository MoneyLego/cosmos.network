module.exports = {
  title: "Cosmos Hub",
  description: "Information about the Cosmos Hub blockchain.",
  ga: "UA-51029217-7",
  markdown: {
    lineNumbers: true
  },
  locales: {
    // The key is the path for the locale to be nested under.
    // As a special case, the default locale can use '/' as its path.
    "/": {
      label: "English",
      lang: "en-US", // this will be set as the lang attribute on <html>
      title: "Cosmos Hub",
      description: "Website for the Cosmos Hub"
    },
    "/ko/": {
      label: "한국어",
      lang: "ko",
      title: "Cosmos Hub",
      description: "Website for the Cosmos Hub (한국어)"
    },
    "/zh/": {
      label: "简体中文",
      lang: "zh-CN",
      title: "Cosmos Hub",
      description: "Website for the Cosmos Hub (简体中文)"
    }
  },
  themeConfig: {
    sidebarDepth: 0,
    nav: [{ text: "Cosmos Network", link: "https://cosmos.network" }],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: ["/", "/intro/delegator-faq", "/intro/delegator-security"]
      },
      {
        title: "Documentation",
        collapsable: true,
        children: [
          "/what-is-gaia",
          "/installation",
          "/join-mainnet",
          "/validators/validator-setup",
          "/validators/overview",
          "/validators/security",
          "/validators/validator-faq",
          "/delegator-guide-cli",
          "/genesis",
          "/ledger",
          "/gaiacli",
          "/join-testnet",
          "/deploy-testnet"
        ]
      }
    ]
  }
};
