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
    designation: 'Chair',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/SarthakGupta.jpg`,
    github: 'https://www.github.com/sarthakg04',
    linkedIn: 'https://www.linkedin.com/in/sarthak-gupta-b615398b'
  },
  {
    id: 2,
    name: 'Hrishita Chakrabarti',
    designation: 'Managing Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/HrishitaChakrabarti.jpg`,
    github: 'https://www.github.com/HrishitaC',
    linkedIn: 'https://www.linkedin.com/in/hrishita-chakrabarti-a26018185'
  },
  {
    id: 3,
    name: 'Eesha Shetty',
    designation: 'Technical Director',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/EeshaShetty.png`,
    github: 'http://www.github.com/eeshashetty',
    linkedIn: 'http://www.linkedin.com/in/eeshashetty'
  },
  {
    id: 4,
    name: 'Anjali Roy',
    designation: 'General Secretary',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/AnjaliRoy.jpg`,
    github: 'https://www.github.com/Anjali2505',
    linkedIn: 'https://www.linkedin.com/in/anjali-roy-b29814153'
  },
  {
    id: 5,
    name: 'Dhruv Roy',
    designation: 'Treasurer',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/DhruvRoy.jpg`,
    github: 'https://www.github.com/DhruvRoy247',
    linkedIn: 'https://www.linkedin.com/mwlite/in/kumar-dhruv-roy-79633b166'
  },
  {
    id: 6,
    name: 'Kashish Mittal',
    designation: 'Web Master',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/KashishMittal.jpg`,
    github: 'https://www.github.com/KASHISH2000',
    linkedIn: 'http://www.linkedin.com/in/kashish-mittal-profile'
  },
  {
    id: 7,
    name: 'Shovin Kakaraddi',
    designation: 'UI/UX Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/ShovinK.jpg`,
    github: 'https://www.github.com/NIVOSH379',
    linkedIn: 'https://in.linkedin.com/in/shovin-kakaraddi-30112718b'
  },
  {
    id: 8,
    name: 'Devansh Mehta',
    designation: 'App Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/DevanshMehta.jpg`,
    github: 'https://www.github.com/dev5151',
    linkedIn: 'https://www.linkedin.com/in/devansh-mehta-181381167/'
  },
  {
    id: 9,
    name: 'Iishi Patel',
    designation: 'Research Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/IishiPatel.jpg`,
    github: 'https://www.github.com/iishipatel',
    linkedIn: 'https://www.linkedin.com/in/iishi-patel-603411182'
  },
  {
    id: 10,
    name: 'Nimit Kumar Jain',
    designation: 'Competetive Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/NimitJain.jpg`,
    github: 'https://www.github.com/n4nimit2000',
    linkedIn: 'https://www.linkedin.com/in/nimit-jain-6b5859172/'
  },
  {
    id: 11,
    name: 'Jerelyn P. Premjit',
    designation: 'ACM-W Lead',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/JerelynP.jpg`,
    github: 'https://github.com/TheWildWanderer',
    linkedIn: 'https://www.linkedin.com/in/jerelyn-p-premjit-b92159184'
  },
  {
    id: 12,
    name: 'Sidharth Nahar',
    designation: 'Competetive Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/SidharthNahar.jpg`,
    github: 'https://www.github.com/VickyNahar',
    linkedIn: 'https://www.linkedin.com/in/sidharth-nahar-03013018b'
  },
  {
    id: 13,
    name: 'Elio Jordan Lopes',
    designation: 'Web Projects Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/ElioLopes.jpg`,
    github: 'http://www.github.com/lopeselio',
    linkedIn: 'https://www.linkedin.com/mwlite/in/elio-jordan-lopes-5b1533149'
  },
  {
    id: 14,
    name: 'Garima Bothra',
    designation: 'App Projects Guide',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/GarimaBothra.jpg`,
    github: 'http://www.github.com/garima94921',
    linkedIn: 'http://www.linkedin.com/in/garima-bothra'
  },
  {
    id: 15,
    name: 'Sriya Reddi',
    designation: 'Operations Head',
    avatarURL: `${process.env.PUBLIC_URL}/assets/images/SriyaReddi.jpg`,
    github: 'https://www.github.com/SriyaReddi',
    linkedIn: 'https://in.linkedin.com/in/SriyaReddi'
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
    image: `${process.env.PUBLIC_URL}/assets/images/HOUROFCODE-01.png`,
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
    image: `${process.env.PUBLIC_URL}/assets/images/ReverseCoding.png`,
    date: '(Offline Round) 16th October 2019 & (Online Round) 20th October 2019'
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
    image: `${process.env.PUBLIC_URL}/assets/images/HOUROFCODE-01.png`,
    url: 'https://www.instagram.com/p/BufpgVtlarK/?utm_source=ig_web_copy_link',
    date: '26th, 27th February 2019 and 1st March 2019'
  },
  {
    id: 1,
    name: 'Codart',
    desc:
      'The name says it all. Codart = Code + Dart. This unconventional combination provides for an amusing experience, and it is the USP of this very unique coding contest.',
    image: `${process.env.PUBLIC_URL}/assets/images/Codart.png`,
    url: 'https://codart.acmvit.in/',
    date:
      '(Online Round) 3rd February 2019 & (Offline Round) 10th February 2019'
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
    title: 'FreeSlot Extension',
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
