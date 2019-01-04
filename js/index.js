window.onload=function(){
  var container=document.getElementsByClassName('banner');
  var list=document.getElementById('list');
  var buttons=document.getElementById('buttons').getElementsByTagName('span');
  var prev=document.getElementById('prev');
  var next=document.getElementById('next');
  var index=1;
  var interval=9600;
   var animated = false;
  function animate(offset){
    if (offset == 0) {
                return;
            }
            animated = true;

    var newleft=parseInt(list.style.left)+offset;//新值
    var time=300;//位移总时间
    var interval=3;//位移间隔时间
    var speed=offset/(time/interval);//单次位移量

    //进行单次位移
    function go(){
      if((newleft<parseInt(list.style.left)&&speed<0)||(newleft>parseInt(list.style.left)&&speed>0)){
      list.style.left=parseInt(list.style.left)+speed+'px';
      setTimeout(go,interval);
    }else{
          list.style.left=newleft+'px';
        if (newleft>-1920){
          list.style.left=-7680+'px';
        }
        if (newleft<-7680){
          list.style.left=-1920+'px';
        }
         animated = false;

      }

    }
    go();
  }
  //自动播放
     function play() {
            timer = setTimeout(function () {
                next.onclick();
                play();
            }, interval);
        }
        function stop() {
            clearTimeout(timer);
        }
  prev.onclick=function(){
    if (animated) {
                return;
            }
    animate(1920);
    if(index==1){
      index=4;
    }else{
      index-=1;
    }
    showbutton()
  }
  next.onclick=function(){
    if (animated) {
                return;
            }
    animate(-1920);
    if(index==4){
      index=1;
    }else{
      index+=1;
    }
    showbutton()
  }
  function showbutton(){
    for(var i=0;i<buttons.length;i++){
      if(buttons[i].className=='on'){
        buttons[i].className='';
        break;
      }
    }
      buttons[index-1].className='on';
  }
  for(var i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
      if (animated) {
                    return;
                }

      if (this.className=='on') {
        return;
      }
      var myindex=parseInt(this.getAttribute('index'));
      var offset=1920*(index-myindex);
      animate(offset);
      index=myindex;
      showbutton();


    }
  }
  container.onmouseover=stop;
  container.onmouseout=play;
  play();

// -----------------回到顶部--------------
var abtn =  document.getElementById('abtn');
   var timer = null;
   window.onscroll = function(){
       var height11 = document.body.scrollTop || document.documentElement.scrollTop;
//        console.log("scrollTop:"+height11);
//        console.log("clientHeight:"+document.documentElement.clientHeight);
       if(height11 > document.documentElement.clientHeight){
           abtn.style.display = "block";
       }else{
           abtn.style.display = "none";
       }
   };

   abtn.onclick = function(){
       timer = setInterval(function(){
           var scrolltop = document.body.scrollTop; // document.documentElement.scrollTop;
           document.body.scrollTop -= 100;
           if(document.body.scrollTop == 0){
               clearInterval(timer);
           }
       },30);
   };
}
