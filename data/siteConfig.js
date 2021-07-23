module.exports = {
  siteTitle: 'La Bakería',
  siteDescription: 'Sharing a Fun New Distraction',
  authorName: 'Sr. Argote',
  twitterUsername: 'strangehill',
  authorAvatar: 'avatar.jpeg', // file in content/images
  defaultLang: 'en', // show flag if lang is not default. Leave empty to enable flags in post lists
  authorDescription: `
  Antonio is a dude with not enough time on his hands to try all the things he wants to try.
  He likes to develop websites and has recently been excited about making electronic music and
  baking desserts.
  This site will only deal with the latter of those interests but if you want you can track him
  down on numerous social media platforms and if you become interested in the code under the
  hood here, I've left it open for you to peruse at
  <a href="https://www.github.com/strangehill/bakeria" rel="noopener" target="_blank">github.com/strangehill/bakeria</a>.
  `,
  siteUrl: 'https://sr.argote.org',
  disqusSiteUrl: '',
  // Prefixes all links. For cases when deployed to maxpou.fr/gatsby-starter-morning-dew/
  pathPrefix: '/gatsby-starter-morning-dew', // Note: it must *not* have a trailing slash.
  siteCover: 'cover-baymax.jpeg', // file in content/images
  background_color: '#ffffff',
  theme_color: '#222222',
  display: 'standalone',
  icon: 'content/images/baymax.png',
  postsPerPage: 6,
  disqusShortname: 'maxpou',
  headerTitle: 'gatsby-starter-morning-dew',
  headerLinksIcon: 'baymax.png', //  (leave empty to disable: '')
  headerLinks: [
    {
      label: 'Blog',
      url: '/',
    },
    {
      label: 'About',
      url: '/about-gatsby-starter-morning-dew',
    },
    {
      label: 'Installation',
      url: '/how-to-install',
    },
  ],
  // Footer information (ex: Github, Netlify...)
  websiteHost: {
    name: 'GitHub',
    url: 'https://github.com',
  },
  footerLinks: [
    {
      sectionName: 'Explore',
      links: [
        {
          label: 'Blog',
          url: '/',
        },
        {
          label: 'About',
          url: '/about-gatsby-starter-morning-dew',
        },
        {
          label: 'Installation',
          url: '/how-to-install',
        },
      ],
    },
    {
      sectionName: 'Follow the author',
      links: [
        {
          label: 'GitHub',
          url: 'https://github.com/strangehill/gatsby-starter-morning-dew',
          rel: 'external',
        },
        {
          label: 'Website',
          url: 'https://www.maxpou.fr',
          rel: 'external',
        },
        {
          label: 'Twitter',
          url: 'https://twitter.com/strangehill',
          rel: 'external',
        },
      ],
    },
  ],
}
