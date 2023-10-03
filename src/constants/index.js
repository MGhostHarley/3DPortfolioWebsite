import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  dimension,
  expel,
  kpmg,
  symantec,
  django,
  elasticSearch,
  flask,
  gcp,
  golang,
  python,
  postgres,
  mSpaceTheme,
  mLondon,
  mPride,
  bikeStarDashboard,
  donationDashboard,
  stonksMovie,
  twentyFour,
} from '../assets'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'experience',
    title: 'Experience',
  },
  {
    id: 'tech',
    title: 'Skills',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'React.js Developer',
    icon: web,
  },
  {
    title: 'API Builder',
    icon: mobile,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Process Creator',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'Golang',
    icon: golang,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Flask',
    icon: flask,
  },
  {
    name: 'Django',
    icon: django,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Elastic Search',
    icon: elasticSearch,
  },
  {
    name: 'Postgres',
    icon: postgres,
  },

  {
    name: 'GCP',
    icon: gcp,
  },

  {
    name: 'git',
    icon: git,
  },

  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Software Engineer, Platform',
    company_name: '24 Hour Fitness',
    icon: twentyFour,
    iconBg: '#E6DEDD',
    date: 'January 2023 - Current',
    points: [
      'Worked with stakeholders to implement end-to-end data solutions including data models, data pipelines, business intelligence products like Okta, Stripe',
      'Used Python, Golang, React, Typescript to build a dashboard tracking club usage and $5 million of membership sales',
    ],
  },
  {
    title: 'Senior Software Engineer',
    company_name: 'Dimension',
    icon: dimension,
    iconBg: '#E6DEDD',
    date: 'August 2022 - January 2023',
    points: [
      'Using JavaScript and Node.js, integrated the API of Active Campaign® to effectively send over 3,000 customer deals, resulting in total bookings of $25,000',
      'Managed and created new REST API endpoints connecting new features to our Firebase database and Big Query',
      'Integrated ChatGPT3 artificial intelligence (AI) API into our customer service queue to handle high level product questions.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'Expel',
    icon: expel,
    iconBg: '#E6DEDD',
    date: 'May 2020 - August 2022',
    points: [
      'Developed and implement UI features, using Ember.js. and Node.js, to increase the productivity of Expel’s Security Operation Center',
      'Using Go, helped implement and manage the performance of elastic search clusters.',
      'Used Python to create 20+ REST API endpoints and integrated with 12+ third party API Security services such as Microsoft Defender, Cloud flare and CrowdStrike, to automate workflows.',
    ],
  },
  {
    title: 'Software Engineer',
    company_name: 'KPMG',
    icon: kpmg,
    iconBg: '#E6DEDD',
    date: 'February 2018 - May 2021',
    points: [
      'Created a custom Python tool that saved the Florida Department of Transportation $1.8 million and 20,000 hours of manual work by automating the reconciliation between 600,000 pdf invoices and their financial database',
      'Developed a redaction engine for a government agency using Python and UiPath to download 9,000 medical documents and redact personal identifiable information, reducing manual labor costs of $250,000',
      'Led a team that built a Python application to analyze the sentiment, frequency and summarize over 100,000 submitted public comments on government regulations to help policy makers understand the data',
    ],
  },
  {
    title: 'Security Engineer',
    company_name: 'Symantec',
    icon: symantec,
    iconBg: '#E6DEDD',
    date: 'January 2016 - January 2018',
    points: [
      'Investigated and fixed technical issues for Symantec’s log collection platform that was used to detect malicious network traffic for the 2016 Rio Olympics',
      'Launched an internal web application utilizing Python and HTML and Django to aggregate information from Symantec’s internal databases and external threat analysis sources',
      'Designed a platform to track and manage Symantec employees’ progress on projects using Confluence, Python',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]
const personalPhotos = [
  // { name: 'Space M', icon: mSpaceTheme },
  { name: 'M London', icon: mLondon },
  // { name: 'M Pride', icon: mPride },
]
const projects = [
  {
    name: 'Donation Dashboard',
    description:
      'As election season gears up, I created a dashboard of donation data for a local candidate to give realtime, actionable insights. With permission from the candidate, I created a mock version for my portfolio with dummy data.',
    tags: [
      {
        name: 'python',
        color: 'blue-text-gradient',
      },
      {
        name: 'react',
        color: 'green-text-gradient',
      },
      {
        name: 'fastAPI',
        color: 'pink-text-gradient',
      },
    ],
    image: donationDashboard,
    source_code_link: 'https://github.com/MGhostHarley',
    live_project_url: 'https://donationdashboard.fun/',
  },
  {
    name: 'MovieBin',
    description: `My friends wanted a way to watch share, review and search movies with each other. MovieBin was born. It is built with Next.js 13, and uses single sign on for authentication, MongoDB to store information and uses RapidAPI for movie search.
      `,
    tags: [
      {
        name: 'Next.js',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
      {
        name: 'mysql',
        color: 'pink-text-gradient',
      },
    ],
    image: stonksMovie,
    source_code_link: 'https://github.com/MGhostHarley',
    live_project_url: 'https://stonksmoviesite.vercel.app/',
  },
  {
    name: 'BikeStar',
    description:
      'BikeStar is a simple dashboard that shows key insights about sales of a fictional bike brand and makes predictions. It is created using Node.js, Golang, MaterialUI and deployed using Vercel and Fly.io',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'material-ui',
        color: 'green-text-gradient',
      },
      {
        name: 'golang',
        color: 'pink-text-gradient',
      },
    ],
    image: bikeStarDashboard,
    source_code_link: 'https://github.com/MGhostHarley',
    live_project_url: 'https://bikestar.vercel.app/dashboard',
  },
]
const faqs = [
  {
    title: 'Where are you located?',
    answer:
      'I currently live in downtown San Francisco. I am interested in remote, hybrid and in person roles.',
  },
  {
    title: 'What kind of role are you interested in?',
    answer: "I'm open to both Fullstack and Backend Roles",
  },
  {
    title: 'What are your most used programming languages?',
    answer: 'I primarily write code in',
    list: ['Python', 'JavaScript', 'Golang'],
  },
  {
    title: 'What new tech are you exceited about?',
    answer:
      "I'm really exctied about Next.js and how React is exploring server side rendering. I think it has the potential to add huge benefits for front end development",
    list: ['Python', 'JavaScript', 'Golang'],
  },

  {
    title: "What's you're favorite color?",
    answer: 'Hopefully from this website, you can guess 😉',
  },
]

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  personalPhotos,
  faqs,
}
