$(function(){

  /**상단 검은색 배너 숨기기*/

  let lastScroll = 0;

  $(window).scroll(function(){

    curr = $(this).scrollTop();
    target = $('.ad-top').offset().top;

    if (curr > 100) {
      if (curr >= lastScroll) {
        
        $('.btn-fix').removeClass('show');
        
      } else {
        
        $('.btn-fix').addClass('show');
        
      }
      
    } else {
      $('.btn-fix').removeClass('show');
      
    }
  

    lastScroll = curr;

    /**상단메뉴 스크롤*/
    
    if (curr > 0) {
      $('.header').addClass('fixed')
    }else{
      $('.header').removeClass('fixed')
    }
      
    /**상단메뉴 전체메뉴 버튼 */
    $('.gnb .btn-menu').click(function(){
      $('.gnb').toggleClass('on');
      $('.gnb .group-all').stop().slideToggle();
    })
      
  })

  /**
   * 상단 검은색 배너 오토플레이
  */
  const navAd = new Swiper('.ad-top',{
    loop:true,
    effect:'fade',
    fadeEffect: { 
      crossFade: true 
      },
    autoplay:{
      delay:2500,
      disableOnInteraction:false
    },
    overserver:true,
    observeParents:true,

  })
  

  /**
   * 메인슬라이드
   */
  const mainSlide = new Swiper('.main-slide',{
    loop:true,
    effect:'fade',
    autoplay:{
      delay:3000,
      disableOnInteraction:false
    },
    pagination:{
      el:'.swiper-pagination',
    }
  })


  /**
   * sc-best tab기능
   */
  $('.btn-tab').click(function(){

    target = $(this).data('target');

    $(this).addClass('active').siblings().removeClass('active');
    $(target).addClass('active').siblings().removeClass('active');

  })


  /**
  * 상품 스와이퍼-슬라이드 나열
  */
  const legSlide = new Swiper('.leg-slide',{
    spaceBetween:10,
    slidesPerView:2.2,
    // observer:true,
    // observeParents:true,
  })

  const bratopSlide = new Swiper('.bratop-slide',{
    spaceBetween:10,
    slidesPerView:2.2,
  })

  const setSlide = new Swiper('.set-slide',{
    spaceBetween:10,
    slidesPerView:2.2,
  })


  /**btn-fix 위로 올리기 기능 */
  $('.btn-fix').click(function(){
    window.scrollTo({top:0,behavior:"smooth"});

  })

  /**
   * 왼쪽 숨김메뉴 열고 닫기
   */
  $('.btn-util.menu').click(function(){
    $('.side-nav').addClass('on');
    $('body').addClass('hidden');
  })
  $('.side-nav .close').click(function(){
    $('.side-nav').removeClass('on');
    $('body').removeClass('hidden');
  })

  /**
   * 왼쪽 숨김메뉴 열린 부분 외 클릭시, 닫기
   */
  $('html').click(function(e){
    if ($(e.target).hasClass('hidden')) {
      $('.side-nav').removeClass('on');
      $('body').removeClass('hidden');
    }
  })

  /**
   * 왼쪽 숨김메뉴 탭
   */
  $('.side-nav .cate:not(.none)').click(function(e){
    e.preventDefault();

    if ($(this).hasClass('on')) {
      $(this).removeClass('on');
      $(this).siblings('.sub-list').slideUp();
      
    } else {
      $(this).addClass('on');
      $(this).siblings('.sub-list').slideDown();

    }

  })


  /**
   * 검색창 열고 닫기
   */
  $('.search').click(function(){
    $('.group-search').addClass('show');
  })
  $('.btn-back').click(function(){
    $('.group-search').removeClass('show');
  })

  /**
   * 입력없이 검색시, 안내창뜨기
   */
  $('.submit').click(function(){
    
    tect = $('.input-text').val();

    if (text = '') {
      alert('검색어를 입력해주세요');
      $('.input-text').focus();
    }

  })
})