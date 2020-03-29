import React from 'react';

// Components
import { ReactComponent as Instagram } from './vectors/Instagram.svg';
import { ReactComponent as Facebook } from './vectors/Facebook.svg';
import { ReactComponent as Email } from './vectors/Email.svg';
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
  },
  {
    id: 22,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow22.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow22.jpg`
  },
  {
    id: 23,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow23.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow23.jpg`
  },
  {
    id: 24,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow24.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow24.jpg`
  },
  {
    id: 25,
    original: `${process.env.PUBLIC_URL}/assets/images/Slideshow25.jpg`,
    thumbnail: `${process.env.PUBLIC_URL}/assets/images/Slideshow25.jpg`
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
    id: 10,
    name: 'Code2Create 4.0',
    desc:
      'The wait is finally over, find yourself a team and get ready to lock horns with the wittiest and most creative minds across South India.',
    image: `${process.env.PUBLIC_URL}/assets/images/Code2Create.png`,
    url: 'https://c2c.acmvit.in',
    date: '7th - 9th March 2020'
  },
  {
    id: 9,
    name: 'Code Your Dreams',
    desc:
      'An initiative by ACM-VIT in collaboration with NGOs to enlighten the little minds at various schools about computers and coding.',
    image: `${process.env.PUBLIC_URL}/assets/images/HourOfCode.png`,
    url: 'https://www.instagram.com/p/B6Ggh8Bhwtd/?utm_source=ig_web_copy_link',
    date: '15th December 2019'
  },
  {
    id: 8,
    name: 'Local Hack Day',
    desc:
      'Presenting Local Hack Day Build - a one day hack where you think out the tangible or even the untangible!',
    image: `${process.env.PUBLIC_URL}/assets/images/LocalHackDay.png`,
    url:
      'https://www.instagram.com/p/B5fUVn5hKYN/?utm_source=ig_web_button_share_sheet',
    date: '8th December 2019'
  },
  {
    id: 7,
    name: 'Reverse Coding',
    desc:
      'ACM-VIT presents a whole reversal of your conventional perspective with our innovative event, Reverse Coding!',
    url: 'http://rcpc19.acmvit.in/',
    image: `${process.env.PUBLIC_URL}/assets/images/ReverseCoding.png`,
    date: '20th October 2019'
  },
  {
    id: 6,
    name: 'Learn To Compete',
    desc:
      'Learn To Compete is an exclusive competitive coding workshop, designed for the aspiring coders within you.',
    image: `${process.env.PUBLIC_URL}/assets/images/LearnToCompete.png`,
    url:
      'https://www.instagram.com/p/B2HiyflBI-X/?utm_source=ig_web_button_share_sheet',
    date: '21st September 2019'
  },
  {
    id: 5,
    name: 'Learn To Augment',
    desc:
      'Through Learn to Augment, ACM-VIT would like to provide you the opportunity to dive deeper into augmented reality.',
    image: `${process.env.PUBLIC_URL}/assets/images/LearnToAugment.png`,
    url: 'https://www.instagram.com/p/B14GIqLhEBZ/?utm_source=ig_web_copy_link',
    date: '31st August 2019'
  },
  {
    id: 4,
    name: 'Competitive Coding Cometh(by Coding Blocks)',
    desc:
      'We have for you the co-founder and mentor of Coding Blocks, Prateek Narang to impart his knowledge to the beginners and experts alike.',
    image: `${process.env.PUBLIC_URL}/assets/images/CodingBlocks.png`,
    url: 'https://c3.acmvit.in/',
    date: '20th July 2019'
  },
  {
    id: 3,
    name: 'Code2Create 3.0',
    desc:
      'Code2Create is back with its third rendition, and it is bigger and greater than ever before!',
    image: `${process.env.PUBLIC_URL}/assets/images/Code2Create.png`,
    url: 'https://c2c.acmvit.in',
    date: '22nd - 24th March 2019'
  },

  {
    id: 2,
    name: 'Code Your Dreams',
    desc:
      'An initiative by ACM-VIT in collaboration with NGOs to enlighten the little minds at various schools about computers and coding.',
    image: `${process.env.PUBLIC_URL}/assets/images/HourOfCode.png`,
    url: 'https://www.instagram.com/p/BufpgVtlarK/?utm_source=ig_web_copy_link',
    date: '26th, 27th February 2019 and 1st March 2019'
  },
  {
    id: 1,
    name: 'Codart',
    desc:
      'The name says it all. Codart = Code + Dart. This unconventional combination provides for an amusing experience, and it is the USP of this very unique coding contest.',
    image: `${process.env.PUBLIC_URL}/assets/images/CodeArt.png`,
    url: 'https://codart.acmvit.in/',
    date: '3rd February 2019'
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
    name: 'Kartik Soni',
    designation: 'Chair',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Kartik.jpg`,
    github: 'https://github.com/Kartik77',
    linkedIn: 'https://www.linkedin.com/in/kartik-soni-0b627b148/b'
  },
  {
    id: 2,
    name: 'Nimisha Bhatia',
    designation: 'Managing Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Nimisha.jpg`,
    github: 'https://github.com/NIMZB',
    linkedIn: 'https://www.linkedin.com/in/nimisha-bhatia-5b9b79155/'
  },
  {
    id: 3,
    name: 'Shubham Awasthi',
    designation: 'Technical Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Shubham.jpg`,
    github: 'https://github.com/awasthishubh/',
    linkedIn: 'https://www.linkedin.com/in/awasthishubh/'
  },
  {
    id: 4,
    name: 'Fiza Rasool',
    designation: 'General Secretary',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Fiza.jpg`,
    github: 'https://github.com/fizarasool27',
    linkedIn: 'https://www.linkedin.com/in/fiza/'
  },
  {
    id: 5,
    name: 'Aditya Srivastava',
    designation: 'Web-Master',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Aditya.jpg`,
    github: 'https://github.com/AdityaSrivast',
    linkedIn: 'https://www.linkedin.com/in/adityasrivast/'
  },
  {
    id: 6,
    name: 'Sarthak Dandotiya',
    designation: 'UI/UX Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Sarthak.jpg`,
    github: 'https://github.com/SarthakDandotiya/',
    linkedIn: 'https://www.linkedin.com/in/sarthakdandotiya/'
  },
  {
    id: 7,
    name: 'Svetansu Singh',
    designation: 'Treasurer',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Svetansu.jpeg`,
    github: 'https://github.com/Svetansu',
    linkedIn: 'https://www.linkedin.com/in/svetansu-singh-370aa8149/'
  },
  {
    id: 8,
    name: 'Sparsh Srivastava',
    designation: 'App Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Sparsh.jpg`,
    github: 'https://github.com/reallyinvincible/',
    linkedIn: 'https://www.linkedin.com/in/sparshsri'
  },
  {
    id: 9,
    name: 'Subhaditya Mukherjee',
    designation: 'Research Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Subhaditya.jpg`,
    github: 'https://www.github.com/SubhadityaMukherjee',
    linkedIn: 'https://www.linkedin.com/in/subhaditya-mukherjee-a36883100'
  },
  {
    id: 10,
    name: 'Rajat Gupta',
    designation: 'Competetive Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Rajat.jpg`,
    github: 'https://github.com/rajatg98',
    linkedIn: 'https://linkedin.com/in/rajatg98'
  },
  {
    id: 11,
    name: 'Madhur Dixit',
    designation: 'Research Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Madhur.jpg`,
    github: 'https://github.com/Chester-King',
    linkedIn: 'https://www.linkedin.com/in/madhur-dixit-065907157/'
  },
  {
    id: 12,
    name: 'Shrey Sindher',
    designation: 'App Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Shrey.jpg`,
    github: 'https://github.com/ssindher11',
    linkedIn: 'https://www.linkedin.com/in/shrey-sindher-0b3008167'
  },
  {
    id: 13,
    name: 'Shivank Sahai',
    designation: 'Web Projects Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Shivank.jpeg`,
    github: 'https://github.com/ShivankSahai',
    linkedIn: 'https://www.linkedin.com/in/shivank-sahai-3393b5172/'
  },
  {
    id: 14,
    name: 'Bhumij Gupta',
    designation: 'Creative Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/Bhumij.jpg`,
    github: 'https://github.com/bhumijgupta/',
    linkedIn: 'https://www.linkedin.com/in/bhumijgupta'
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
