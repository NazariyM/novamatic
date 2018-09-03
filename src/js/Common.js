import objectFitImages from 'object-fit-images';
import objectFitVideos from 'object-fit-videos';
import '@fancyapps/fancybox';
import 'select2';

import './components/MobNav';
import './components/VideoBlock';
import './components/Sliders';
import './components/ViewBlock';

export class Common {
  constructor() {
    this.init();
  }
  init() {
    objectFitImages();
    objectFitVideos();
    this.customSelects();
  }

  customSelects() {
    $('.js-custom-select').select2({
      minimumResultsForSearch: -1
    });
  }
}

export default new Common();
