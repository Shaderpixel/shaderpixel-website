const config = {
  siteTitle: `Shaderpixel Studios`, // Site title.
  siteTitleSeparator: `|`, // Site title.
  siteTitleShort: `Shaderpixel Studios`, // Short site title for homescreen (PWA). Preferably should be under 12 characters to prevent truncation.
  siteTitleAlt: `Richard Lock's web development blog`, // Alternative site title for SEO.
  siteLogo: `/logos/logo-1024.png`, // Logo used for SEO and manifest.
  siteUrl: `https://iamrichardlock.com`, // Domain of your website without pathPrefix.
  pathPrefix: `/`, // Prefixes all links. For cases when deployed to example.github.io/gatsby-advanced-starter/.
  siteDescription: `This website contains portfolio highlights and web development blog of Richard Lock. I am currently open to take on projects for 2019`, // Website description used for RSS feeds/meta description tag/web manifest.
  siteRss: '/rss.xml', // Path to the RSS file.
  siteNavLinks: [
    {
      label: 'Writings',
      link: '/blog',
    },
    // {
    //   label: 'Projects',
    //   link: '/projects',
    // },
    {
      label: 'Reading List',
      link: '/reading-list',
    },
    {
      label: 'About',
      link: '/about',
    },
  ],
  // siteFBAppID: "1825356251115265", // FB Application ID for using app insights
  googleAnalyticsID: `UA-100130336-1`, // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // Disqus shortname.
  postDefaultCategoryID: 'Web Development', // Default category for posts.
  tocMaxDepth: 3, // headings maximum depth to show in table of contents
  dateFromFormat: 'YYYY-MM-DD', // Date format used in the frontmatter.
  dateFormat: 'MM/DD/YYYY', // Date format for display.
  postsPerPage: 1, // Amount of posts displayed per listing page.
  desktopMaxPaginationPages: 8, // number of pagination itms to show on listing pages, it will be value stated plus 1 for the current page
  mobileMaxPaginationPages: 3, // number of pagination itms to show on listing pages, it will be value stated plus 1 for the current page
  recentHomepagePosts: 5, // Amount of posts displayed on homepage
  userName: 'Richard Lock', // Username to display in the author segment.
  userEmail: 'autobot@iamrichardlock.com', // Email used for RSS feed's author segment
  userTwitter: 'Shaderpixel', // Optionally renders "Follow Me" in the UserInfo segment.
  userLocation: 'Toronto, Canada', // User location to display in the author segment.
  userAvatar: 'https://api.adorable.io/avatars/150/test.png', // User avatar to display in the author segment.
  userDescription:
    "Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people.", // User description to display in the author segment.
  // Links to social profiles/projects you want to display in the author segment/navigation bar.
  userLinks: [
    {
      label: 'GitHub',
      link: 'https://github.com/Shaderpixel',
      iconComponent: 'githubIcon',
    },
    {
      label: 'GitLab',
      link: 'https://gitlab.com/Shaderpixel',
      iconComponent: 'gitlabIcon',
    },
    {
      label: 'CodePen',
      link: 'https://codepen.io/Shaderpixel/',
      iconComponent: 'codepenIcon',
    },
    {
      label: 'Twitter',
      link: 'https://twitter.com/Shaderpixel',
      iconComponent: 'twitterIcon',
    },

    {
      label: 'LinkedIn',
      link: 'https://www.linkedin.com/in/richard-lock/',
      iconComponent: 'linkedinIcon',
    },
    {
      label: 'Email',
      link: 'mailto:lock.j.h@gmail.com',
      iconComponent: 'emailIcon',
    },
  ],
  themeColor: `#FFC107`, // Used for setting manifest and progress theme colors.
  backgroundColor: `#e0e0e0`, // Used for setting manifest background color.
  copyright: `Copyright © ${new Date().getFullYear()}. Richard Lock`, // Copyright string for the footer of the website and RSS feed.
};

// Validate

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === `/`) {
  config.pathPrefix = ``;
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, ``)}`;
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === `/`)
  config.siteUrl = config.siteUrl.slice(0, -1);

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== `/`)
  config.siteRss = `/${config.siteRss}`;

module.exports = config;
