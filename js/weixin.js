 ~(function(){
      var   desW = 640,
              winW = document.documentElement.clientWidth,
              ratio = winW/desW;
              document.documentElement.style.fontSize = ratio *100+"px";
  })()
// 翻屏动画
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical',
    loop: true,
    onSlideChangeEnd: function(swiper){
       var curIn = swiper.activeIndex,
             slideAry = swiper.slides,
             total = slideAry.length;          
       var pageId = "page";
       switch(curIn){
           case 0:
                pageId += total-2;
                break;
           case (total-1):
                pageId += 1;  
                break; 
            default:
                pageId += curIn;     
       }
       //当前项添加id，其他移除
       [].forEach.call(slideAry,function(item,index){
          if(curIn  === index){
             item.id =  pageId;
             return;
          }
          item.id = null;
       })

     }
  })      
  //music
  ~function(){
    var musicMenu = document.getElementById('musicMenu'),
          musicAudio = document.getElementById('musicAudio');
          musicMenu.addEventListener('click',function(){
            if(musicAudio.paused){
                  musicAudio.play();
                  musicMenu.className = 'music move';
                  return;
            }
                 musicAudio.pause();
                 musicMenu.className = 'music pause';
          },false)
          function controlMusic(){
              musicAudio.volume = 0.1;
              musicAudio.play();
              musicAudio.addEventListener('canplay',function(){
                  console.log('canplay');
                  musicMenu.style.display = 'block';
                  musicMenu.className = 'music move';
              },false);
          }
         window.setTimeout(controlMusic,1000);
  }()  
