import React from 'react';

const ABOUT = [
  {
    id: 1,
    title: 'About VIT',
    inner: false,
    text: (
      <>
        <p>
          Vellore Institute of Technology, Vellore is one of the most revered
          and distinguished engineering institution which holds the rare
          distinction of being one of the few colleges to impart world-class
          education along with encouragement towards co-curricular activities
          which help in overall development and transform students into
          responsible adults with a strong ethical core.
        </p>
        <br />
        <p>
          Vellore Institute of Technology was the birth-child of the tireless
          and relentless perseverance of our respected Chancellor, Dr. G.
          Viswanathan, whose objective since the very inception of this
          institution has been to provide an environment that would help foster
          intellectual aptitude, enhance human perception and create a society
          of extra-ordinary professionals capable of thinking new,
          out-of-the-box ideas and having the skills to implement them, in order
          to help the entire society as a whole.
        </p>
      </>
    )
  },
  {
    id: 2,
    title: 'About Us',
    inner: true,
    text: (
      <>
        <p>
          ACM-VIT, one of the most reputed and distinguished technical chapter
          in VIT, Vellore has been working with vision and determination since
          it’s inception in 2009, with the aspirations of advancement of
          computer science as a science and a profession. We are not just an
          organization, we are a family, united by one cause, working towards
          making technology more accessible much like our parent organization,
          ACM.
        </p>
        <br />
        <p>
          ACM-VIT has been working on projects related to graphic designing, web
          development, machine learning and app development and has been
          organizing events and workshop for the same. Apart from this, ACM-VIT
          also boasts of its own research wing, the only chapter in VIT to have
          that.
        </p>
        <br />
        <p>
          ACM-VIT has been the creator of websites that have garnered applaud
          and awe, like “Pravega-Racing”, “Code-2-create” and many more. ACM-VIT
          has also made websites with the aim of using technology to make life
          simpler like “All About VIT” and “VIT Cabshare”. ACM-VIT continues to
          pursue projects with diligence and ambition. Technology is their
          cause, objective, vision and mission. Ask why? Look at their motto,
          “Because Technology Matters”.
        </p>
      </>
    )
  },
  {
    id: 3,
    title: 'Our Ideologies',
    inner: true,
    text: (
      <>
        <div className="font-bold text-2xl">Sharing Knowledge</div>
        <p>
          Deriving inspiration from our parent organization, ACM, our primary
          goal is to impart knowledge and promote innovation in the field of
          computer science and we aim to achieve the same by providing numerous
          platforms to students to learn, build and enhance their skills.
        </p>
        <br />
        <div className="font-bold text-2xl">Overall Development</div>
        <p>
          We believe in practical learning and aim for all round development of
          a student in terms of lifelong learning, career development and
          professional networking along with technical skills
        </p>
        <br />
        <div className="font-bold text-2xl">Inclusion</div>
        <p>
          We are of the thought that the society is the strongest when it works
          together and thus believe in the upliftment of women and the LGBT
          community and their inclusion in technology and related fields. Our
          new ACM-W wing is a step in the same direction.
        </p>
      </>
    )
  }
];

const FACULTY = [
  {
    id: 1,
    name: 'Prof. Balakrushna Tripathy',
    designation: 'Dean of School of Information Technology & Engineering',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/DeanSite.png`
  },
  {
    id: 2,
    name: 'Dr. Aswani Kumar Cherukuri',
    designation: 'Faculty Coordinator',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Faculty1.png`
  },
  {
    id: 3,
    name: 'Prof. H.R. Vishwakarma',
    designation: 'Faculty Coordinator',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Faculty2.png`
  },
  {
    id: 4,
    name: 'Dr. Divya Udayan J.',
    designation: 'Faculty Coordinator',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Faculty3.jpeg`
  }
];

const TEAM = [
  {
    id: 1,
    name: 'Sarthak Gupta',
    designation: 'President',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 2,
    name: 'Hrishita Chakrabarti',
    designation: 'Managing Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 3,
    name: 'Eesha Shetty',
    designation: 'Technical Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 4,
    name: 'Anjali Roy',
    designation: 'General Secretary',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 5,
    name: 'Dhruv Roy',
    designation: 'Treasurer',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 6,
    name: 'Kashish Mittal',
    designation: 'Webmaster',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 7,
    name: 'Shovin Kakaraddi',
    designation: 'UI/UX Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 8,
    name: 'Devansh Mehta',
    designation: 'App Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 9,
    name: 'Iishi Patel',
    designation: 'Research Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 10,
    name: 'Nimit Jain',
    designation: 'Competetive Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 11,
    name: 'Jerelyn Preeja',
    designation: 'ACM-W Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 12,
    name: 'Sidharth Nahar',
    designation: 'Competetive Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 13,
    name: 'Elio Jordan Lopes',
    designation: 'Project Guide Web',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 14,
    name: 'Garima Bothra',
    designation: 'Project Guide App',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  },
  {
    id: 15,
    name: 'Sriya Reddi',
    designation: 'Operations Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/MysteryMan.png`,
    github: 'https://github.com',
    linkedIn: 'https://linkedin.com'
  }
];

const EVENTS = [
  {
    id: 11,
    name: 'Code2Create',
    desc:
      'The wait is finally over, find yourself a team and get ready to lock horns with the wittiest and most creative minds across South India.',
    image: `${process.env.PUBLIC_URL}/assets/images/Code2Create.png`,
    url: 'https://c2c.acmvit.in',
    date: '7/03/2020'
  },
  {
    id: 10,
    name: 'BlockchainEd',
    desc:
      'Learn the inner workings of blockchain - the hottest cybersec tech that has led to a whole new era of anonymous cooperation.',
    image: `${process.env.PUBLIC_URL}/assets/images/BlockchainEd.png`,
    url:
      'https://www.instagram.com/p/B73a4S2h3Gj/?utm_source=ig_web_button_share_sheet',
    date: '29/01/2020'
  },
  {
    id: 9,
    name: 'Local Hack Day Build',
    desc:
      'Presenting Local Hack Day Build - a one day hack where you think out the tangible or even the untangible!',
    image: `${process.env.PUBLIC_URL}/assets/images/LocalHackDay.png`,
    url:
      'https://www.instagram.com/p/B5fUVn5hKYN/?utm_source=ig_web_button_share_sheet',
    date: '1/12/2019'
  },
  {
    id: 8,
    name: 'Reverse Coding',
    desc:
      'ACM-VIT presents a whole reversal of your conventional perspective with our innovative event, Reverse Coding!',
    image: `${process.env.PUBLIC_URL}/assets/images/ReverseCoding.png`
  },
  {
    id: 7,
    name: 'HacktoberFest',
    desc:
      'With the biggest open source fest upon us, learn how to get yourself involved with one of the biggest events for developers across the world.',
    image: `${process.env.PUBLIC_URL}/assets/images/HacktoberFest.png`,
    url:
      'https://www.instagram.com/p/B3KphmShXgy/?utm_source=ig_web_button_share_sheet',
    date: '16/10/2019'
  },
  {
    id: 6,
    name: 'Learn To Compete',
    desc:
      'Learn To Compete is an exclusive competitive coding workshop, designed for the aspiring coders within you.',
    image: `${process.env.PUBLIC_URL}/assets/images/LearnToCompete.png`,
    url:
      'https://www.instagram.com/p/B2HiyflBI-X/?utm_source=ig_web_button_share_sheet',
    date: '21/09/2019'
  },
  {
    id: 5,
    name: 'SnapChat Filters',
    desc:
      "Join us on 'Getting Started With SnapChat Filters' to make your very own snapchat filters.",
    image: `${process.env.PUBLIC_URL}/assets/images/SnapchatFilters.png`,
    url:
      'https://www.instagram.com/p/B2Md0jLhCMu/?utm_source=ig_web_button_share_sheet',
    date: '11/09/2019'
  },
  {
    id: 4,
    name: "I'm Hacked",
    desc:
      'Learn the ins and outs of cyber security to understand the mind of a hacker and build a safer world wide web.',
    image: `${process.env.PUBLIC_URL}/assets/images/Hacked.png`,
    url:
      'https://www.instagram.com/p/B18YBa2hdDA/?utm_source=ig_web_button_share_sheet',
    date: '4/09/2019'
  },
  {
    id: 3,
    name: 'Learn To Augment',
    desc:
      'Through Learn to Augment, ACM-VIT would like to provide you the opportunity to dive deeper into augmented reality.',
    image: `${process.env.PUBLIC_URL}/assets/images/LearnToAugment.png`,
    url:
      'https://www.instagram.com/p/B1JgcK2hVc3/?utm_source=ig_web_button_share_sheet',
    date: '31/08/2019'
  },

  {
    id: 2,
    name: 'ML From Scratch',
    desc:
      'The ACM Research team presents to you a session where you take your first step into the world of Machine Learning where they guide you through the fundamentals of ML.',
    image: `${process.env.PUBLIC_URL}/assets/images/MLScratch.png`,
    url:
      'https://www.instagram.com/p/B0ytwPlBRan/?utm_source=ig_web_button_share_sheet',
    date: '7/08/2019'
  },
  {
    id: 1,
    name: 'Competetive Coding Cometh',
    desc:
      'We have for you the co-founder and mentor of Coding Blocks, Prateek Narang to impart his knowledge to the beginners and experts alike.',
    image: `${process.env.PUBLIC_URL}/assets/images/CodingBlocks.png`,
    url: 'http://c3.acmvit.in/',
    date: '20/07/2019'
  }
];

const BLOGS = [
  {
    id: 1,
    name: 'Li-Fi:The Future Of Internet',
    desc:
      'Imagine a time when each of the lightbulbs in your house is a source of Internet. Imagine a scenario where, standing...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/li-fi-the-future-of-internet-e573eab6bd0d'
  },
  {
    id: 2,
    name: 'Lottie Animations',
    desc:
      'Lottie is a mobile library for Android and iOS that parses Adobe After Effects animations exported as json...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/getting-started-with-lottie-animations-android-2c225ad2c467'
  },
  {
    id: 3,
    name: 'How to project an image...',
    desc:
      'We all have come across and used web apps where we can insert our pictures into other background images like...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/how-to-project-an-image-in-perspective-view-of-a-background-image-opencv-python-d101bdf966bc'
  },
  {
    id: 4,
    name: 'Bring out your Inner Technocrat',
    desc:
      'Remember the good old days when human interactions happened in real life and not via a screen? The...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/bring-out-your-inner-technocrat-b7da5f50190c'
  },
  {
    id: 5,
    name: 'The Infinite Art Machine',
    desc:
      'From time immemorial, humans have tried to be creative. We started with cave paintings and now...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/the-infinite-art-machine-3a2decab85d9'
  },
  {
    id: 6,
    name: 'The Future Of Software Bugs',
    desc:
      'A software bug is an error, a flaw or a fault in a computer program or software system that causes the app...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/the-future-of-software-bugs-4f8891184bdf'
  },
  {
    id: 7,
    name: 'Bash — Geek Mode On',
    desc:
      'Shell? Well sorry, this is a technical blog so I am not talking about the beach. I am talking about this shell...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/bash-geek-mode-on-b3d2d14e37e1'
  },
  {
    id: 8,
    name: 'Bash — Geek Mode On',
    desc:
      'Shell? Well sorry, this is a technical blog so I am not talking about the beach. I am talking about this shell...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/bash-geek-mode-on-b3d2d14e37e1'
  },
  {
    id: 9,
    name: 'Hyperloop',
    desc:
      'Since the very beginning of civilization, people have been discovering and inventing new ways of transportation...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/hyperloop-future-of-ultra-high-speed-transport-system-457b09cc86cd'
  },
  {
    id: 10,
    name: 'Chirp',
    desc:
      'Chirp SDKs take data, convert it into sound, which nearby devices decode seamlessly back into data. It...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/getting-started-with-chirp-android-aff372cf2761'
  }
];

const PROJECTS = [
  {
    id: 1,
    title: 'Octave',
    description: "Music Webite for ACM's iconic Code2Create.",
    image: `${process.env.PUBLIC_URL}/assets/images/Octave.png`,
    url: 'https://github.com/ACM-VIT/Octave'
  },
  {
    id: 2,
    title: 'Research Projects',
    description:
      'A collection of all projects done by the Research 2019 and 2020 team.',
    image: `${process.env.PUBLIC_URL}/assets/images/ResearchProjects.png`,
    url: 'https://github.com/ACM-VIT/Research-Projects-2020'
  },
  {
    id: 3,
    title: 'C2C Web Portal',
    description: "Web Portal for ACM's Code2Create.",
    image: `${process.env.PUBLIC_URL}/assets/images/C2CWeb.png`,
    url: 'https://github.com/ACM-VIT/c2c-website-2020'
  },
  {
    id: 4,
    title: 'FreeSlot Web Extension',
    description: 'A chrome extension to extract timetable from vtop.',
    image: `${process.env.PUBLIC_URL}/assets/images/FreeSlot.png`,
    url: 'https://github.com/ACM-VIT/freeslotWebExtension'
  }
];

const LINKS = [
  {
    id: 1,
    text: 'Home',
    scrollTo: '',
    offsetY: 0,
    active: true
  },
  {
    id: 2,
    text: 'About',
    scrollTo: 'about-section',
    offsetY: 0,
    active: false
  },
  {
    id: 3,
    text: 'Team',
    scrollTo: 'team-section',
    offsetY: 0,
    active: false
  },
  {
    id: 4,
    text: 'Events',
    scrollTo: 'events-section',
    offsetY: 0,
    active: false
  },
  {
    id: 5,
    text: 'Blogs',
    scrollTo: 'blogs-section',
    offsetY: 0,
    active: false
  },
  {
    id: 6,
    text: 'Projects',
    scrollTo: 'projects-section',
    offsetY: 0,
    active: false
  },
  {
    id: 7,
    text: 'Contact Us',
    scrollTo: 'contact-section',
    offsetY: 0,
    active: false
  }
];

const LEFTS_AND_WIDTHS = [
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 }
];

const OFFSET_POS = [0, 0, 0, 0, 0, 0, 0];

export {
  ABOUT,
  FACULTY,
  TEAM,
  EVENTS,
  BLOGS,
  PROJECTS,
  LINKS,
  LEFTS_AND_WIDTHS,
  OFFSET_POS
};
