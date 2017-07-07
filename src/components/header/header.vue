<template>
  <div class="header">
    <div class="content-wrapper">
      <div class="avatar">
        <img src="./avatar.jpg">
      </div>
      <div class="content">
        <div class="title">
          <span class="brand"></span>
          <span class="name">粥品香坊（回龙观）</span>
        </div>
        <div class="description">
          蜂鸟专送/38分钟到达
        </div>
        <div class="support">
          <span class="icon discount"></span>
          <span class="text">在线支付满28减5</span>
        </div>
      </div>
      <div class="supports_count">
        <span class="count">5个</span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper">
      <span class="bulletin-title"></span>
      <span class="bulletin-text">
        粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
      </span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="background">
      <img src="./avatar.jpg">
    </div>
    <div class="detail">
      <div class="detail-wrapper">
        <div class="detail-main">
          <div class="name">粥品香坊（回龙观）</div>
          <div class="star-wrapper">
            <div class="star star-48">
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item on"></span>
              <span class="star-item half"></span>
              <span class="star-item off"></span>
            </div>
          </div>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul class="supports">
            <li class="support">
              <span class="icon decrease"></span>
              <span class="text">在线支付满28减5</span>
            </li>
            <li class="support">
              <span class="icon discount"></span>
              <span class="text">VC无限橙果汁全场8折</span>
            </li>
            <li class="support">
              <span class="icon guarantee"></span>
              <span class="text">单人精彩套餐</span>
            </li>
            <li class="support">
              <span class="icon invoice"></span>
              <span class="text">该商家支持发票,请下单写好发票抬头</span>
            </li>
            <li class="support">
              <span class="icon special"></span>
              <span class="text">已加入“外卖保”计划,食品安全保障</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家公告</div>
            <div class="line"></div>
          </div>
          <div class="content">
            <p>
              粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。
            </p>
          </div>
        </div>
      </div>
      <div class="detail-close">
        <span class="icon-close"></span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"

  .header
    position relative
    background rgba(7,17,27,0.5)
    color white
    overflow hidden
    .content-wrapper
      position relative
      padding 24px 12px 18px 24px
      .avatar
        vertical-align top
        display inline-block
        width 64px
        height 64px
        img
          width:100%
      .content
        display inline-block
        margin-left 16px
        padding 2px 0 2px
        .title
          .brand
            display inline-block
            width 30px
            height 18px
            background-repeat no-repeat
            background-size 30px 18px
            vertical-align middle
            bg-image(brand)
          .name
            margin-left 6px
            font-size 16px
            line-height 18px
            font-weight bold
        .description
          margin-top 8px
          margin-bottom 10px
          font-size 12px
          font-weight 200
          line-height 12px
        .support
          .icon
            display inline-block
            width 12px
            height 12px
            background-size 12px 12px
            background-repeat no-repeat
            vertical-align middle
          .decrease
            bg-image(decrease_1)
          .discount
            bg-image(discount_1)
          .guarantee
            bg-image(guarantee_1)
          .invoice
            bg-image(invoice_1)
          .special
            bg-image(special_1)

          .text
            margin-left 4px
            font-size 10px
            line-height 12px
            font-weight 200
      .supports_count
        background rgba(0,0,0,0.2)
        border-radius 8px
        position absolute
        right 12px
        bottom 18px
        height 24px
        padding 4px 8px
        box-sizing border-box
        .count
          font-size 10px
          line-height 12px
          font-weight 200


    .bulletin-wrapper
      position relative
      padding 0 12px
      white-space nowrap
      overflow hidden
      text-overflow ellipsis
      height 28px
      line-height 28px
      background rgba(7,17,27,0.2)
      .bulletin-title
        display inline-block
        width 22px
        height 12px
        background-repeat no-repeat
        background-size 22px 12px
        vertical-align middle
        bg-image(bulletin)

      .bulletin-text
        margin 0 4px
        font-size 10px
        font-weight 200
      .icon-keyboard_arrow_right
        position absolute
        top: 9px
        right 2px
    .background
      position absolute
      top:0
      left 0
      right 0
      bottom 0
      z-index -1
      filter blur(10px)
      img
        width 100%
        height 100%
    .detail
      position fixed
      top:0
      left 0
      right 0
      bottom 0
      background rgba(7,17,27,0.8)
      z-index 100
      .detail-wrapper
        min-height 100%
        padding 64px 0 32px
        .detail-main
          .name
            text-align center
            font-size 16px
            line-height 16px
            font-weight 700
            margin-bottom 16px
          .star-wrapper
            height 24px
            text-align center
            .star-24
              .star-item
                display inline-block
                width 10px
                height 10px
                background-repeat no-repeat
                background-size 10px 10px
              .on
                bg-star(star24_on)
              .half
                bg-star(star24_half)
              .off
                bg-star(star24_off)
            .star-36
              .star-item
                display inline-block
                width 15px
                height 15px
                background-repeat no-repeat
                background-size 15px 15px
              .on
                bg-star(star36_on)
              .half
                bg-star(star36_half)
              .off
                bg-star(star36_off)
            .star-48
              .star-item
                display inline-block
                width 20px
                height 20px
                background-repeat no-repeat
                background-size 20px 20px
              .on
                bg-star(star48_on)
              .half
                bg-star(star48_half)
              .off
                bg-star(star48_off)


          .title
            padding 28px 36px 24px
            display flex
            .line
              position relative
              top: 8px
              flex 1
              width 107px
              height 2px
              background: rgba(255,255,255,0.2);
            .text
              float left
              margin 0 12px

          .supports
            padding 0 48px
            .support
              margin-bottom 12px
              .icon
                display inline-block
                width 16px
                height: 16px
                background-size 16px 16px
                background-repeat no-repeat
                vertical-align middle
              .decrease
                bg-image(decrease_2)
              .discount
                bg-image(discount_2)
              .guarantee
                bg-image(guarantee_2)
              .invoice
                bg-image(invoice_2)
              .special
                bg-image(special_2)

              .text
                margin-left 6px
                font-size 12px
                font-weight 200
                line-height 12px



          .content
            padding 0 48px
            font-size 12px
            font-weight 200
            line-height 24px

      .detail-close
        text-align center
        line-height 32px
        font-size 32px
        height 32px
        margin-top -160px
        color rgba(255,255,255,0.5)
</style>
