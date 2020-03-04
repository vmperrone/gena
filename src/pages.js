import Levi2 from './Components/AFrame/Levi2';
import SampleTextComponent from './Components/TextFrames/SampleTextComponent';

const pages = [{
  type: 'image',
  src: 'https://i.imgur.com/SpDoXiu.jpg'
}, {
  type: 'image',
  src: 'https://i.imgur.com/RjQa4Ka.jpg'
}, {
  type: 'aframe',
  src: Levi2,
  audio: '/audio/meteor-theory.mp3'
}, {
  type: 'text',
  src: SampleTextComponent
}];

export default pages;