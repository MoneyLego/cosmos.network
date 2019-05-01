module.exports = {
  title: "Cosmos Hub",
  description: "Information about the Cosmos Hub blockchain.",
  ga: "UA-51029217-7",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Ubuntu:300,500,700"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css?family=Muli:400,400i,700,700i"
      }
    ]
  ],
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
    nav: [
      {
        text: "Wallets",
        items: [
          { text: "Lunie", link: "https://lunie.io" },
          { text: "Cosmostation", link: "https://www.cosmostation.io" },
          { text: "imToken", link: "https://token.im/" },
          { text: "Wetez", link: "https://www.wetez.io/pc/homepage)" }
        ]
      },
      {
        text: "Block Explorers",
        items: [
          { text: "Big Dipper", link: "https://cosmos.bigdipper.live" },
          { text: "Cosmos Overview", link: "https://genesislab.net" },
          { text: "Cosmos Visualizer", link: "https://nylira.net/3d" },
          { text: "Hubble", link: "https://hubble.figment.network" },
          { text: "Mintscan", link: "https://mintscan.io" },
          { text: "Stargazer", link: "https://stargazer.certus.one" }
        ]
      },
      { text: "Telegram", link: "https://t.me/cosmosproject" },
      { text: "Community", link: "https://cosmos.network/community" }
    ],
    sidebar: [
      {
        title: "Introduction",
        collapsable: false,
        children: [
          ["/", "Cosmos Hub"],
          "/intro/delegator-faq",
          "/intro/delegator-security"
        ]
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
