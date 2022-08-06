
// スライダー設定
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  // loop true; 3 枚目の画像まで行った場合、1枚めに戻る指定
  speed: 400,
  spaceBetween: 40,
  width: 400,
  loop: true,
  loopedSlides: 6,
  // slidesPerView:3,
  
  // If we need pagination
  // pagination: ページスライド分のドット
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
    // clickableをtrueにすれば、paginationでスライドできる
  },
  
  // xx以上のサイズになった時に変化が起こる
  breakpoints: {
    250: {
      spaceBetween: 12,
      width: 274,
    },
    951: {
      spaceBetween: 40,
      width: 400,
    }
  }
});

// リンク、toTopをクリックした時の遷移
jQuery('a[href^="#"]').on('click', function(){
  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if ( id != '#'){
    position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});

// toTopボタンの表示、非表示
jQuery(window).on('scroll', function(){
  if (100 < jQuery(this).scrollTop()){
    jQuery('.to-top').addClass('is-show');
  }else {
    jQuery('.to-top').removeClass('is-show');
  }
});

// アコーディオン実装

jQuery('.qa-box-q').click(function(){
  jQuery(this).next().slideToggle();
  // this = .qa-box-q,   これのnext = qa-box-a が slideToggle で開閉されるという動き
  jQuery(this).children('.qa-box-icon').toggleClass('is-open');
  // this = .qa-box-q,   これのchildren = qa-box-icon が toggleClassによりis-openの状態にされるという動き
  return false;
});

// smoothscroll
// ＃から始まるURLがクリックされた時
$('a[href^="#"]').click(function() {
  // 移動速度を指定（ミリ秒）
  let speed = 300;
  // hrefで指定されたidを取得
  let id = $(this).attr("href");
  // idの値が＃のみだったらターゲットをhtmlタグにしてトップに戻るようにする
  let position = $(target).offset().top;
  // ターゲットの位置までspeedの速度で移動
  $("html, body").animate (
    {
      scrollTop:position - $('#js-header').outerHeight()
      // スクロールしたところからheaderの高さを引く
    },
    speed
    );
    return false;
  });
  
  //  form入力確認
  let $submit = $( '#js-submit')
  $( '#js-form input, #js-form textarea').on('change', function(){
    if(
      $( '#js-form input[type="text"]').val() !== ""&&
      $( '#js-form input[type="email"]').val() !== ""&&
      $( '#js-form input[type="checkbox"]').prop( 'checked') ===true
      // Text, email が入力されて、且つ、プライバシーポリシーにチェックがされている時、
      ){
        // 全て入力されたとき
        $submit.prop( 'disabled', false)
        $submit.addClass( '-active')
      } else {
        // 入力に不足があるとき
        $submit.prop( 'disabled', true)
        $submit.removeClass( '-active')
        // active クラスが付けられるもしくは取り除かれる
      }
    });

    // $(function() {
    //   $('.drawer').drawer();
    // });

    $(document).ready(function() {
      $('.drawer').drawer();
    });