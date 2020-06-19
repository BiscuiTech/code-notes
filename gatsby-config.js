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
        logo: '/static/images/Biscui.png'
      },
    },
  ],
}
