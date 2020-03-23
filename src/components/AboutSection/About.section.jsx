import React, { useState } from 'react';

import SectionHeader from '../layout/Sections/SectionHeader';

const About = () => {
  const [about] = useState([
    {
      id: 1,
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a egestas enim. Integer nec ante in velit ultricies vestibulum. Sed orci nisl, ullamcorper ut aliquet ut, dapibus eu ipsum. Ut et lectus pellentesque lectus fermentum rhoncus. Aenean non nisi elit. Donec sit amet arcu blandit, viverra libero eget, porta massa. Pellentesque volutpat ut odio vel tempor. Nam fermentum accumsan turpis vel viverra. Aenean hendrerit vestibulum eros, sed elementum justo pulvinar mattis. Mauris cursus quam quis ornare lobortis. Donec justo mauris, commodo in leo quis, lacinia interdum est. Nullam et risus eget ipsum efficitur hendrerit. Nullam metus ex, vehicula a auctor ac, bibendum ac odio.'
    },
    {
      id: 2,
      text:
        'Aliquam eget magna tempor, finibus ligula et, venenatis tellus.Nulla facilisi.Donec vel metus orci.Suspendisse sagittis molestie varius.Donec dictum porta risus non gravida.Vivamus at est dignissim, aliquam eros ac, vehicula metus.Praesent et eros non nisi efficitur posuere sed in lacus.Phasellus ut pulvinar nibh.Aliquam eget dignissim justo.Vivamus ac egestas enim.Fusce lobortis a elit eu suscipit.'
    }
  ]);

  return (
    <div className="container mx-auto text-center">
      <SectionHeader>About Us</SectionHeader>
      {about.map(para => (
        <p className="text-xl my-4">{para.text}</p>
      ))}
    </div>
  );
};

export default About;
