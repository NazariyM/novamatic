import { css } from '../_helpers';

class VideoBlock {
  constructor() {
    this.$blocks = $('.video-block');

    this.init();
  }

  init() {
    this.play();
  }

  play() {
    this.$blocks.each((i, $block) => {
      const $btn = $($block).find('.video-block__play-btn');
      const $video = $($block).find('.video-block__video');

      $btn.on('click', function () {
        const $this = $(this);

        $this.addClass(css.hide);
        $video[0].play();

        $video.on('click', () => {
          $video[0].pause();
          $btn.removeClass(css.hide);
        });
      });
    });
  }
}

export const VideoBlockAPI = new VideoBlock();
