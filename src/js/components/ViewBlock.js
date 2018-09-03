import {css} from '../_helpers';

class ViewBlock {
  constructor() {
    this.$block = $('.view-block');

    if (this.$block.length) this.init();
  }

  init() {
    this.change();
  }

  change() {
    this.$block.each((i, block) => {
      const $items = $(block).find('.view-block__items').children();
      const $btn = $(block).find('.view-block__nav').children();

      $btn.on('click', function (e) {
        const $this = $(e.currentTarget);

        $this.addClass(css.active);
        $this.siblings().removeClass(css.active);
        $items.removeClass(css.active);
        $items.eq($this.index()).addClass(css.active);
      });
    });
  }
}

export default new ViewBlock();
