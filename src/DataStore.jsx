import React from 'react';
import { ReactComponent as Email } from './vectors/Email.svg';
import { ReactComponent as Facebook } from './vectors/Facebook.svg';
// Components
import { ReactComponent as Instagram } from './vectors/Instagram.svg';
import { ReactComponent as Twitter } from './vectors/Twitter.svg';

const LEFTS_AND_WIDTHS = [
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 },
  { left: 0, width: 0 }
];

const CONTACT_DETAILS = {
  name: '',
  email: '',
  message: ''
};

const GALLERY_IMAGES = [
  {
    id: 1,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow1.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow1.jpg`
  },
  {
    id: 2,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow2.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow2.jpg`
  },
  {
    id: 3,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow3.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow3.jpg`
  },
  {
    id: 4,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow4.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow4.jpg`
  },
  {
    id: 5,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow5.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow5.jpg`
  },
  {
    id: 6,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow6.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow6.jpg`
  },
  {
    id: 7,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow7.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow7.jpg`
  },
  {
    id: 8,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow8.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow8.jpg`
  },
  {
    id: 9,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow9.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow9.jpg`
  },
  {
    id: 10,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow10.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow10.jpg`
  },
  {
    id: 11,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow11.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow11.jpg`
  },
  {
    id: 12,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow12.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow12.jpg`
  },
  {
    id: 13,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow13.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow13.jpg`
  },
  {
    id: 14,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow14.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow14.jpg`
  },
  {
    id: 15,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow15.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow15.jpg`
  },
  {
    id: 16,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow16.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow16.jpg`
  },
  {
    id: 17,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow17.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow17.jpg`
  },
  {
    id: 18,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow18.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow18.jpg`
  },
  {
    id: 19,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow19.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow19.jpg`
  },
  {
    id: 20,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow20.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow20.jpg`
  },
  {
    id: 21,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow21.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow21.jpg`
  }
];

const LANDING_LINES = [
  'Because technology matters',
  "There's future, There's innovation",
  'We do what we dream',
  'Encouraging diversity, igniting minds'
];

const SOCIAL_LINKS = [
  {
    id: 1,
    logo: <Instagram />,
    handle: '@acmvit',
    url: 'https://www.instagram.com/acmvit'
  },
  {
    id: 2,
    logo: <Facebook />,
    handle: '@ACM.VITU',
    url: 'https://facebook.com/ACM.VITU'
  },
  {
    id: 3,
    logo: <Email />,
    handle: '@acmvit',
    url:
      'https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1&source=mailto&to=outreach.acmvit@gmail.com'
  },
  {
    id: 4,
    logo: <Twitter />,
    handle: '@ACM_VIT',
    url: 'https://twitter.com/ACM_VIT'
  }
];

const OFFSET_POS = [0, 0, 0, 0, 0, 0, 0];

const PROJECTS = [
  {
    id: -2,
    title: 'Hacktoberfest 2020',
    description:
      'Collection of projects developed cheering the biggest open source fest.',
    image: `${process.env.PUBLIC_URL}/assets/images/hacktober.jpg`,
    url: 'https://github.com/acm-vit'
  },
  {
    id: -1,
    title: 'Reverse Coding',
    description:
      'Tech stack written for our flagship event, ReverseCoding 2020. Handles user interaction, team operations, IDE and online judge.',
    image: `${process.env.PUBLIC_URL}/assets/images/rc.jpg`,
    url: 'https://github.com/ACM-VIT/rc-heimdall'
  },
  {
    id: 0,
    title: 'Dolos',
    description:
      'A friendly data mocking service to generate random data in the required format.',
    image: `${process.env.PUBLIC_URL}/assets/images/dolos.jpg`,
    url: 'https://github.com/ACM-VIT/dolos'
  },
  {
    id: 1,
    title: 'Octave',
    description: "Music Website for ACM's iconic Code2Create.",
    image: `${process.env.PUBLIC_URL}/assets/images/Octave.png`,
    url: 'https://octave.acmvit.in'
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
    url: 'https://c2c.acmvit.in'
  },
  {
    id: 4,
    title: 'FreeSlot',
    description: 'A chrome extension to extract timetable from vtop.',
    image: `${process.env.PUBLIC_URL}/assets/images/FreeSlot.png`,
    url: 'https://freeslot.acmvit.in'
  },
  {
    id: 5,
    title: 'Ojas Website',
    description: "The official website of VIT's Formula Student Electric Team",
    image: `${process.env.PUBLIC_URL}/assets/images/OjasWebsite.png`,
    url: 'https://www.ojasracing.com/'
  },
  {
    id: 6,
    title: 'Intruder',
    description:
      'A fun gaming website that was created for the event organized during ACM’s hackathon c2c.',
    image: `${process.env.PUBLIC_URL}/assets/images/Intruder.png`,
    url: 'https://intruder.acmvit.in'
  },
  {
    id: 7,
    title: 'Headscratcher',
    description:
      'A fun gaming website made during GraVitas (VIT’s technical fest) for one of ACM’s event called L2A that is learn to augment.',
    image: `${process.env.PUBLIC_URL}/assets/images/Headscratcher.jpg`,
    url: 'http://hs.acmvit.in/'
  },
  {
    id: 8,
    title: 'Head Count',
    description:
      'This is a Revolutionary Android App that has provided with a new way of taking attendance in meeting, class rooms or in any event.',
    image: `${process.env.PUBLIC_URL}/assets/images/HeadCount.jpg`,
    url: 'https://play.google.com/store/apps/details?id=com.acmvit.headcount'
  },
  {
    id: 9,
    title: 'C2C App',
    description:
      'This app was made to facilitate the participants and provide them with food during Code2Create which they could avail using the e-coupons',
    image: `${process.env.PUBLIC_URL}/assets/images/C2CApp.jpg`,
    url: 'https://github.com/reallyinvincible/Code2Create'
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

const EVENTS = [
  {
    id: 1,
    name: 'Learn to Augment',
    desc:
      'ACM VIT conducted its workshop ‘Learn to Augment’ on 4th October which took a deep dive into the world of Augmented reality.',
    image: `${process.env.PUBLIC_URL}/assets/images/L2A.svg`,
    url: '',
    date: '4th October, 2020',
    info: [
      `ACM VIT conducted its workshop ‘Learn to Augment’ on 4th October
    which took a deep dive into the world of Augmented reality. The
    workshop started with the guest speaker, Ms. Neha Tiwari, who
    talked about AR and also answered the participant’s queries. It
    was then followed by a session where the participants were taught,
    all the basics about spark AR and how to make innovative filters
    using the spark AR software. A fun mini hack was then conducted
    where the participants had a chance to showcase the skills they
    learnt in the workshop.`,
      `The Guest speaker for the workshop was Neha Tiwari, a senior unity
    developer. She has had 3-4 years of experience in AR/VR/MR
    industry. She has created more then 40+ applications in
    AR/VR/MR/games, which also includes web XR applications.`
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/L2A.jpeg`
  },
  {
    id: 2,
    name: 'Learn to Compete',
    desc:
      'Learn to Compete - a two-day workshop wherein participants were taught a few common tricks and algorithms needed in Competitive Programming.',
    image: `${process.env.PUBLIC_URL}/assets/images/L2C.svg`,
    url: '',
    date: '2nd – 3rd October, 2020',
    info: [
      `Learn to Compete - a two-day workshop wherein participants were taught a few common tricks and algorithms needed in Competitive Programming. This was be followed by an intense 12- hour long code-a-thon to get a hands-on experience with competitive programming.`,
      `Mr Satyam Jindal a VIT alumnus currently working as a software developer at Amazon. He was one of the best coders of his year, winning awards at international competitions like CalHacks organized by UC Berkeley and coming in 3rd at the ICPC Chennai Provincial contest.
      He has a 5-star rating on CodeChef placing him in the top 1.3% and is in the top 3%tile on SPOJ. 
      `
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/L2C.png`
  },
  {
    id: 3,
    name: 'Reverse Coding',
    desc:
      'Reverse Coding was a competitive coding event held over the course of two rounds. Participants could participate individually or as a team of two.',
    image: `${process.env.PUBLIC_URL}/assets/images/RC.svg`,
    url: '',
    date: '18th December, 2020 and 20th December, 2020',
    info: [
      `Reverse Coding was a competitive coding event held over the course of two rounds. Participants
      could participate individually or as a team of two. The first round was conducted on the 18th of
      December 2020. The 15 best-performing teams of round one advanced to round two. The
      second round was conducted on 20th December 2020. The entirety of the event was conducted
      online using Google Meet and a portal made by the ACM Technical Team. The essence of the
      event was to deduce the script code whose input-output pairs were given as questions.`
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/RC.jpeg`
  },
  {
    id: 4,
    name: 'Code++',
    desc:
      'The five-hour competition aimed to challenge the mathematical and logical thinking skills of the participants.',
    image: `${process.env.PUBLIC_URL}/assets/images/CPP.svg`,
    url: '',
    date: '2nd May, 2020',
    info: [
      `ACM VIT Student chapter conducted “Code Plus Plus”, a competitive coding contest. The five-hour competition aimed to challenge the mathematical and logical thinking skills of the participants. It was held on the HackerRank portal where the participants were awarded points based on the number of test cases they were able to run successfully. Moreover, a forum was created to post the editorials and answer queries.`,
      `The event was a huge success with the participants appreciating the difficulty of the problem statements.`
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/CPP.png`
  },
  {
    id: 5,
    name: 'Neural Hack',
    desc:
      'ACM-VIT Student Chapter organized “The Neural Hack”, a 48 hour long hackathon which focussed on problems in the field of AI.',
    image: `${process.env.PUBLIC_URL}/assets/images/Neural.svg`,
    url: '',
    date: '4th and 5th December, 2020',
    info: [
      `ACM-VIT Student chapter organized “The Neural Hack”, a 48 hour long hackathon which focussed on problems in the field of AI. The hackathon was open to all and was conducted on Devpost. A discord channel was created for the participants to discuss and converse.`,
      `The guest speaker, Dr. Ganna Pogrebna held a session for the participants and also served as the judge for the event. The event was well-received by the participants.`
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/Neural.jpeg`
  },
  {
    id: 6,
    name: 'Apptitude',
    desc:
      'Apptitude was a 24hrs app hackathon where the participants had to build innovative apps with the certain constraints given to them.',
    image: `${process.env.PUBLIC_URL}/assets/images/Apptitude.svg`,
    url: '',
    date: '26th and 27th July, 2020',
    info: [
      `ACM VIT Student chapter conducted “Apptitude”, a 24hrs app hackathon where the participants had to build innovative apps with the certain constraints given to them. It was held on the “Apptitude” app which was made by our app team.`,
      `A discord channel was created for the participants to engage in discussion and to answer queries. The event was a resounding success and we received rave reviews from our participants.`
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/Apptitude.jpeg`
  },
  {
    id: 7,
    name: 'Code2Create',
    desc:
      'Code2Create, a 36 hour long hackathon, is ACM-VIT’s flagship event and one of the grandest annual events hosted in VIT.',
    image: `${process.env.PUBLIC_URL}/assets/images/C2C.svg`,
    url: '',
    date: '7th - 9th March, 2019',
    info: [
      `A thrilling tech sprint awaited by numerous innovators, Code2Create witnesses a plethora of skill sets. Code2Create is all about designing, building and creating; a place where graphic designers, software developers, app developers, and web developers collaborate intensively on projects.`,
      `Code2Create'20 saw more than 500 participants. The judges were renowned experts in their respective fields. Participants from across the country indulge in 36 hours of intense brainstorming, designing, creating and testing, along with some engaging and very enjoyable side quests.`
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/C2C.jpeg`
  },
  {
    id: 8,
    name: 'Hour of Code',
    desc:
      'Hour of Code was an opportunity to enlighten the little minds at The NSM school, with a little about computers and code.',
    image: `${process.env.PUBLIC_URL}/assets/images/HOC.svg`,
    url: '',
    date: '15th December, 2019',
    info: [
      `We were delighted to use the "Hour of Code" as an opportunity to enlighten the little minds at The NSM school, with a little about computers and code. After sitting them down for a good introduction, we were glad to help them with the fun coding games we had in store for them and soon had a little quiz about computers the form of the game.`,
      `After bringing our fun 2 hour learning session with the kids to an end, we took the time out to get to know the kids a bit with a little chat and had a round of fun and dance before we bid them goodbye.`
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/HOC.jpeg`
  },
  {
    id: 9,
    name: 'Kick Start Learn',
    desc:
      'KICK START LEARN was an online session where we gave an intro to the different tech domains namely App, Web, Research, Design and Competitive.',
    image: `${process.env.PUBLIC_URL}/assets/images/KSL.svg`,
    url: '',
    date: '18th November, 2020',
    info: [
      `ACM VIT Student chapter conducted “KICK START LEARN”, an online session where we gave an intro to the different tech domains namely App, Web, Research, Design and Competitive. It was an interactive session held on Microsoft teams, where the participants were actively engaging in discussions.`,
      `The event was a great success and we received laudable feedback from our participants.`
    ],
    modalImg: `${process.env.PUBLIC_URL}/assets/images/KSL.jpeg`
  }
];

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
          and awe, like “Pravega-Racing”, &quot;Team Ojas, VIT&quot;,
          “Code-2-create” and many more. ACM-VIT has also made websites with the
          aim of using technology to make life simpler like “All About VIT” and
          “VIT Cabshare”. ACM-VIT continues to pursue projects with diligence
          and ambition. Technology is their cause, objective, vision and
          mission. Ask why? Look at our motto, “Because Technology Matters”.
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

const BLOGS = [
  {
    id: 1,
    name: 'Getting started with Neural Networks',
    desc:
      'Neural networks are a set of algorithms, modeled loosely after the human brain, that...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/getting-started-with-neural-networks-3e9af6c837db'
  },
  {
    id: 2,
    name: 'Jetpack Compose: Build Better Apps Faster',
    desc: 'Jetpack Compose is a modern toolkit for building native Android UI. It simplifies...',
      image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/jetpack-compose-build-better-apps-faster-23869369f476'
  },
  {
    id: 3,
    name: 'POP! - Portfolio Optimization in Python',
    desc: 
      'When we invest our money an age-old idiom comes to mind, “Do not put all eggs in one basket.” Therefore...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/pop-python-optimization-in-python-647ee3366edf'
  },
  {
    id: 4,
    name: 'How I coded an iOS app in 20 minutes',
    desc:
      'Want to create your own iOS App that fetches news from your favorite news websites?',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/how-i-coded-an-ios-app-in-20-minutes-830c1e894579'
  },
  {
    id: 5,
    name: 'Restful CRUD API with hapi.js',
    desc:
      'Hapi.js (shorthand for Http-API, pronounced happy and also known as hapi) is an open-source...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/restful-crud-api-with-hapi-js-c92edd36d8df'
  },
  {
    id: 6,
    name: 'Li-Fi:The Future Of Internet',
    desc:
      'Imagine a time when each of the lightbulbs in your house is a source of Internet. Imagine a scenario where, standing...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/li-fi-the-future-of-internet-e573eab6bd0d'
  },
  {
    id: 7,
    name: 'Lottie Animations',
    desc:
      'Lottie is a mobile library for Android and iOS that parses Adobe After Effects animations exported as json...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/getting-started-with-lottie-animations-android-2c225ad2c467'
  },
  {
    id: 8,
    name: 'How to project an image...',
    desc:
      'We all have come across and used web apps where we can insert our pictures into other background images like...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/how-to-project-an-image-in-perspective-view-of-a-background-image-opencv-python-d101bdf966bc'
  },
  {
    id: 9,
    name: 'Bring out your Inner Technocrat',
    desc:
      'Remember the good old days when human interactions happened in real life and not via a screen? The...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/bring-out-your-inner-technocrat-b7da5f50190c'
  },
  {
    id: 10,
    name: 'The Infinite Art Machine',
    desc:
      'From time immemorial, humans have tried to be creative. We started with cave paintings and now...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/the-infinite-art-machine-3a2decab85d9'
  },
  {
    id: 11,
    name: 'The Future Of Software Bugs',
    desc:
      'A software bug is an error, a flaw or a fault in a computer program or software system that causes the app...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/the-future-of-software-bugs-4f8891184bdf'
  },
  {
    id: 12,
    name: 'Bash — Geek Mode On',
    desc:
      'Shell? Well sorry, this is a technical blog so I am not talking about the beach. I am talking about this shell...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url: 'https://medium.com/acmvit/bash-geek-mode-on-b3d2d14e37e1'
  },
  {
    id: 13,
    name: 'Hyperloop',
    desc:
      'Since the very beginning of civilization, people have been discovering and inventing new ways of transportation...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/hyperloop-future-of-ultra-high-speed-transport-system-457b09cc86cd'
  },
  {
    id: 14,
    name: 'Chirp',
    desc:
      'Chirp SDKs take data, convert it into sound, which nearby devices decode seamlessly back into data. It...',
    image: `${process.env.PUBLIC_URL}/assets/images/Medium.png`,
    url:
      'https://medium.com/acmvit/getting-started-with-chirp-android-aff372cf2761'
  }
];

const TEAM = [
  {
    id: 1,
    name: 'Harsh Avinash',
    designation: 'Chairperson',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Harsh.JPG`,
    github: 'https://github.com/Harsh-Avinash',
    linkedIn: 'https://www.linkedin.com/in/harsh-avinash/'
  },
  {
    id: 2,
    name: 'Aryan Khubchandani',
    designation: 'Vice Chairperson',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Aryan.JPG`,
    github: 'https://github.com/aryankhubachandani',
    linkedIn: 'https://www.linkedin.com/in/aryan-khubchandani-948735203'
  },
  {
    id: 3,
    name: 'Gagan Malvi',
    designation: 'Technical Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Gagan.JPG`,
    github: 'https://github.com/gaganmalvi',
    linkedIn: 'https://www.linkedin.com/in/gaganmalvi/'
  },
  {
    id: 4,
    name: 'Sumona Sud',
    designation: 'Secretary',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Sumona.JPG`,
    github: 'https://github.com/ishiyadav',
    linkedIn: 'https://www.linkedin.com/in/ishiyadav/'
  },
  {
    id: 5,
    name: 'Chirayu Sharma',
    designation: 'Co-Secretary',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Chirayu.JPG`,
    github: 'https://github.com/Chirayu123dot',
    linkedIn: 'https://linkedin.com/in/chirayusharma'
  },
  {
    id: 6,
    name: 'Thillai Chithambaram',
    designation: 'Research Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Thillai.JPG`,
    github: 'https://github.com/itzThillaiC',
    linkedIn: 'https://www.linkedin.com/in/thillai-chithambaram'
  },
  {
    id: 7,
    name: 'Jeet Kaushik',
    designation: 'Design Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Jeet.JPG`,
    github: 'https://github.com/Iamjeetkaushik',
    linkedIn: 'https://www.linkedin.com/in/jeet-kaushik-b8a843207/'
  },
  {
    id: 8,
    name: 'Dhriti',
    designation: 'Creative Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Dhriti.JPG`,
    github: '#',
    linkedIn: 'https://www.linkedin.com/in/dhriti-kharangra-096b34211/'
  },
  {
    id: 9,
    name: 'Rehber Moin',
    designation: 'Competitive Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Rehber.JPG`,
    github: 'https://github.com/DocFlex',
    linkedIn: 'https://www.linkedin.com/in/r0m/'
  },
  {
    id: 10,
    name: 'Swarup Kharul',
    designation: 'Projects Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Swarup.JPG`,
    github: 'https://github.com/swarupkharul',
    linkedIn: 'https://www.linkedin.com/in/swarupkharul'
  },
  {
    id: 11,
    name: 'Pramika Garg',
    designation: 'Finance Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Pramika.JPG`,
    github: '#',
    linkedIn: '#'
  }
];

const ACMWTEAM = [
  {
    id: 1,
    name: 'Ananya Grover',
    designation: 'ACM-W Chairperson',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Ananya.JPG`,
    github: '#',
    linkedIn: '#'
  },
  {
    id: 2,
    name: 'Aishwarya Manjunath',
    designation: 'ACM-W Vice Chairperson',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Aishwarya.JPG`,
    github: 'https://github.com/aishwarya58',
    linkedIn: 'https://www.linkedin.com/in/aishwarya-manjunath-25989919a/'
  },
  {
    id: 3,
    name: 'Manvi Aggarwal',
    designation: 'ACM-W Design Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Manvi.JPG`,
    github: 'https://github.com/ManviAggarwal',
    linkedIn: 'https://www.linkedin.com/in/manvi-aggarwal-3b1b4b1a6/'
  },
  {
    id: 4,
    name: 'Samridh Agarwal',
    designation: 'ACM-W General Secretary',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Samridh.JPG`,
    github: 'https://github.com/Samridh29',
    linkedIn: 'https://www.linkedin.com/in/samridhagarwal29'
  }
]

const DEV_INFO = [
  {
    id: 1,
    original: `${process.env.PUBLIC_URL}/assets/images/Developer1.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Developer1Thumb.jpg`,
    name: 'Priyanshu'
  },
  {
    id: 2,
    original: `${process.env.PUBLIC_URL}/assets/images/Developer2.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Developer2Thumb.jpg`,
    name: 'Rithvik'
  },
  {
    id: 3,
    original: `${process.env.PUBLIC_URL}/assets/images/Developer3.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Developer3Thumb.jpg`,
    name: 'Rohan'
  },
  {
    id: 4,
    original: `${process.env.PUBLIC_URL}/assets/images/Developer4.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Developer4Thumb.jpg`,
    name: 'Shreyas'
  }
];

export {
  LEFTS_AND_WIDTHS,
  CONTACT_DETAILS,
  GALLERY_IMAGES,
  LANDING_LINES,
  SOCIAL_LINKS,
  OFFSET_POS,
  PROJECTS,
  DEV_INFO,
  FACULTY,
  EVENTS,
  ABOUT,
  LINKS,
  BLOGS,
  TEAM,
  ACMWTEAM
};
