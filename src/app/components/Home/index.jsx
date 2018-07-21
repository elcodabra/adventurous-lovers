import React from 'react';
import Section from '../Section';

const images = [{
  src: 'https://www.sportandfitness.bham.ac.uk/wp-content/uploads/2017/08/19221544_1386510058052804_5319076660845862382_o.jpg',
  // youtubeVideoId: 'n0F6hSpxaFc'
}, {
  src: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia/15674136-1-fre-FR/Running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia.jpg',
  // youtubeVideoId: 'n0F6hSpxaFc'
}, {
  src: 'https://www.sportandfitness.bham.ac.uk/wp-content/uploads/2017/08/19221544_1386510058052804_5319076660845862382_o.jpg',
  // youtubeVideoId: 'n0F6hSpxaFc'
}, {
  src: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia/15674136-1-fre-FR/Running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia.jpg',
  // youtubeVideoId: 'n0F6hSpxaFc'
}, {
  src: 'https://www.sportandfitness.bham.ac.uk/wp-content/uploads/2017/08/19221544_1386510058052804_5319076660845862382_o.jpg',
  // youtubeVideoId: 'n0F6hSpxaFc'
}, {
  src: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia/15674136-1-fre-FR/Running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia.jpg',
  // youtubeVideoId: 'n0F6hSpxaFc'
}];

const newImages = [{ src: 'public/1.png' }, { src: 'public/2.png' },{ src: 'public/1.png' }, { src: 'public/2.png' },{ src: 'public/1.png' }, { src: 'public/2.png' },]

const Home = () => (
  <div>
    <Section title={'Для мозга'} images={newImages} />
    <Section title={'Для души'} />
    <Section title={'Для тела'} />
  </div>
);

export default Home;
