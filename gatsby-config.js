module.exports = {
  siteMetadata: {
    title: 'BiscuiTech\'s code notes',
    description: `BiscuiTech memory bank`,
    author: 'BiscuiTech',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'notes',
        basePath: '/',
        showThemeInfo: false,
        showDescriptionInSidebar: true,
        logo: 'static/images/Biscui.png'
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BiscuiTech's Code Notes`,
        short_name: `CodeNotes`,
        description: `Notes on code. My memory bank.`,
        start_url: `/`,
        background_color: `hsl(210, 38%, 95%)`,
        theme_color: `hsl(345, 100%, 69%)`,
        display: `standalone`,
        icon: `static/images/Biscui.png`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/*`, `/tag/*`],
      },
    },
  ],
}
