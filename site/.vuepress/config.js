module.exports = {
  title: "Cosmos Hub",
  description: "Information about the Cosmos Hub blockchain.",
  // ga: "UA-51029217-2",
  dest: "./dist/docs",
  base: "/docs/",
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [{ text: "Cosmos Network", link: "https://cosmos.network" }],
    sidebar: [
      {
        title: "Overview",
        children: ["/intro/", "/intro/sdk-design", "/intro/ocap"]
      },
      {
        title: "Documentation",
        children: [
          "/cosmos-hub/what-is-gaia",
          "/cosmos-hub/installation",
          "/cosmos-hub/join-mainnet",
          "/cosmos-hub/validators/validator-setup",
          "/cosmos-hub/validators/overview",
          "/cosmos-hub/validators/security",
          "/cosmos-hub/validators/validator-faq",
          "/cosmos-hub/delegator-guide-cli",
          "/cosmos-hub/genesis",
          "/cosmos-hub/ledger",
          "/cosmos-hub/gaiacli",
          "/cosmos-hub/join-testnet",
          "/cosmos-hub/deploy-testnet"
        ]
      }
    ]
  }
};
