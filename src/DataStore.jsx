import { ReactComponent as Email } from './vectors/Email.svg';
import { ReactComponent as Facebook } from './vectors/Facebook.svg';
// Components
import { ReactComponent as Instagram } from './vectors/Instagram.svg';
import React from 'react';
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
    ]
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
    ]
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
    ]
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
    ]
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
      ` The guest speaker, Dr. Ganna Pogrebna held a session for the participants and also served as the judge for the event. The event was well-received by the participants.`
    ]
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

const TEAM = [
  {
    id: 1,
    name: 'Sarthak Gupta',
    designation: 'President',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Sarthak.jpg`,
    github: 'https://github.com/sarthakg04',
    linkedIn: 'https://linkedin.com/in/sarthak-gupta-b615398b'
  },
  {
    id: 2,
    name: 'Hrishita Chakrabarti',
    designation: 'Managing Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Hrishita.jpg`,
    github: 'https://github.com/HrishitaC',
    linkedIn: 'https://linkedin.com/in/hrishita-chakrabarti-a26018185'
  },
  {
    id: 3,
    name: 'Eesha Shetty',
    designation: 'Technical Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Eesha.png`,
    github: 'https://github.com/eeshashetty',
    linkedIn: 'https://linkedin.com/in/eeshashetty'
  },
  {
    id: 4,
    name: 'Anjali Roy',
    designation: 'General Secretary',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Anjali.jpg`,
    github: 'https://github.com/Anjali2505',
    linkedIn: 'https://linkedin.com/in/anjali-roy-b29814153'
  },
  {
    id: 5,
    name: 'Kashish Mittal',
    designation: 'Web-Master',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Kashish.jpg`,
    github: 'https://github.com/KASHISH2000',
    linkedIn: 'https://linkedin.com/in/kashish-mittal-profile'
  },
  {
    id: 6,
    name: 'Shovin Kakaraddi',
    designation: 'UI/UX Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Shovin.jpg`,
    github: ' https://github.com/NIVOSH379',
    linkedIn: 'https://in.linkedin.com/in/shovin-kakaraddi-30112718b'
  },
  {
    id: 7,
    name: 'Dhruv Roy',
    designation: 'Treasurer',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Dhruv.jpg`,
    github: 'https://github.com/DhruvRoy247',
    linkedIn: 'https://linkedin.com/mwlite/in/kumar-dhruv-roy-79633b166'
  },
  {
    id: 8,
    name: 'Devansh Mehta',
    designation: 'App Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Devansh.jpg`,
    github: 'https://github.com/dev5151',
    linkedIn: 'https://linkedin.com/in/devansh-mehta-181381167/'
  },
  {
    id: 9,
    name: 'Iishi Patel',
    designation: 'Research Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Iishi.jpg`,
    github: 'https://github.com/iishipatel',
    linkedIn: 'https://linkedin.com/in/iishi-patel-603411182'
  },
  {
    id: 10,
    name: 'Nimit Jain',
    designation: 'Competetive Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Nimit.jpg`,
    github: 'https://github.com/n4nimit2000',
    linkedIn: 'https://linkedin.com/in/nimit-jain-6b5859172/'
  },
  {
    id: 11,
    name: 'Jerelyn Preeja',
    designation: 'ACM-W Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Jerelyn.jpg`,
    github: 'https://github.com/TheWildWanderer',
    linkedIn: 'https://linkedin.com/in/jerelyn-p-premjit-b92159184'
  },
  {
    id: 12,
    name: 'Garima Bothra',
    designation: 'App Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Garima.jpg`,
    github: 'http://github.com/garima94921',
    linkedIn: 'http://linkedin.com/in/garima-bothra'
  },
  {
    id: 13,
    name: 'Elio Jordan Lopes',
    designation: 'Web Projects Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Elio.png`,
    github: 'https://github.com/lopeselio',
    linkedIn: 'https://linkedin.com/mwlite/in/elio-jordan-lopes-5b1533149'
  },
  {
    id: 14,
    name: 'Siddharth Nahar',
    designation: 'Competitive Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Siddharth.jpg`,
    github: 'https://github.com/VickyNahar',
    linkedIn: 'https://linkedin.com/in/sidharth-nahar-03013018b'
  },
  {
    id: 15,
    name: 'Sriya Reddi',
    designation: 'Operations Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Sriya.jpg`,
    github: 'https://github.com/SriyaReddi',
    linkedIn: 'https://in.linkedin.com/in/SriyaReddi'
  }
];

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
  TEAM
};
