import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';
import '@fancyapps/fancybox';

import './components/MobNav';
import './components/VideoBlock';
// import './Popups';

export class Common {
  constructor() {
    this.init();
  }
  init() {
    objectFitImages();
    objectFitVideos();
  }
}

export default new Common();
