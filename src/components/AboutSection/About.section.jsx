import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SectionHeader from '../layout/Sections/SectionHeader.component';

const About = ({ findOffset }) => {
  const [about] = useState([
    {
      id: 1,
      title: 'About VIT',
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
            institution has been to provide an environment that would help
            foster intellectual aptitude, enhance human perception and create a
            society of extra-ordinary professionals capable of thinking new,
            out-of-the-box ideas and having the skills to implement them, in
            order to help the entire society as a whole.
          </p>
        </>
      )
    },
    {
      id: 2,
      title: 'About Us',
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
            ACM-VIT has been working on projects related to graphic designing,
            web development, machine learning and app development and has been
            organizing events and workshop for the same. Apart from this,
            ACM-VIT also boasts of its own research wing, the only chapter in
            VIT to have that.
          </p>
          <br />
          <p>
            ACM-VIT has been the creator of websites that have garnered applaud
            and awe, like “Pravega-Racing”, “Code-2-create” and many more.
            ACM-VIT has also made websites with the aim of using technology to
            make life simpler like “All About VIT” and “VIT Cabshare”. ACM-VIT
            continues to pursue projects with diligence and ambition. Technology
            is their cause, objective, vision and mission. Ask why? Look at
            their motto, “Because Technology Matters”.
          </p>
        </>
      )
    },
    {
      id: 3,
      title: 'Our Ideologies',
      text: (
        <>
          <div className="font-bold text-2xl">Sharing Knowledge</div>
          <p>
            Deriving inspiration from our parent organization, ACM, our primary
            goal is to impart knowledge and promote innovation in the field of
            computer science and we aim to achieve the same by providing
            numerous platforms to students to learn, build and enhance their
            skills.
          </p>
          <br />
          <div className="font-bold text-2xl">Overall Development</div>
          <p>
            We believe in practical learning and aim for all round development
            of a student in terms of lifelong learning, career development and
            professional networking along with technical skills
          </p>
          <br />
          <div className="font-bold text-2xl">Inclusion</div>
          <p>
            We are of the thought that the society is the strongest when it
            works together and thus believe in the upliftment of women and the
            LGBT community and their inclusion in technology and related fields.
            Our new ACM-W wing is a step in the same direction.
          </p>
        </>
      )
    }
  ]);

  return (
    <section
      ref={el => {
        if (!el) return;
        findOffset(el.getBoundingClientRect().y);
      }}
      className="container mx-auto text-center my-12"
      id="about-section"
    >
      {about.map(section => (
        <div key={section.id}>
          <SectionHeader>{section.title}</SectionHeader>
          <div className="text-xl my-4 text-justified">{section.text}</div>
        </div>
      ))}
    </section>
  );
};

About.propTypes = {
  findOffset: PropTypes.func.isRequired
};

export default About;
