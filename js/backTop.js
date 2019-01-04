window.onload=function(){
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
