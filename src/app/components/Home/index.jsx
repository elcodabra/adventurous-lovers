import React from 'react';
import Section from '../Section';

// get youtube mp4 https://gist.github.com/el3zahaby/9e60f1ae3168c38cc0f0054c15cd6a83
// http://www.get-youtube-thumbnail.com/
const cards = [{
  image: 'http://i3.ytimg.com/vi/gDxI6UJmZKk/maxresdefault.jpg',
  src: 'https://www.youtube.com/watch?v=gDxI6UJmZKk'
}, {
  image: 'http://i3.ytimg.com/vi/6Haqb0zNr3g/maxresdefault.jpg',
  src: 'https://www.youtube.com/watch?v=6Haqb0zNr3g'
}, {
  image: 'http://i3.ytimg.com/vi/9-wOXQiQ0Tw/hqdefault.jpg',
  src: 'https://www.youtube.com/watch?v=9-wOXQiQ0Tw'
}, {
  image: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia/15674136-1-fre-FR/Running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia.jpg',
  src: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
}, {
  image: 'https://www.sportandfitness.bham.ac.uk/wp-content/uploads/2017/08/19221544_1386510058052804_5319076660845862382_o.jpg',
  src: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
}, {
  image: 'https://en.parisinfo.com/var/otcp/sites/images/node_43/node_51/node_232/running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia/15674136-1-fre-FR/Running-sur-piste-%7C-630x405-%7C-%C2%A9-fotolia.jpg',
  src: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
}];

const Home = () => (
  <div>
    <Section title={'Для мозга'} cards={cards} />
    <Section title={'Для души'} />
    <Section title={'Для тела'} />
  </div>
);

export default Home;
