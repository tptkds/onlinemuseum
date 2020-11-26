var Body = {
  setColor : function(color){
    //document.querySelector('body').style.color = color;
    $('body').css('color',color);
  },

  setbackgroundColor : function(color){
    $('body').css('backgroundColor',color);
  },

}

var Links = {
  setColor : function(color){
    // var alist=document.querySelectorAll('a');
    // var i=0;
    // while(i < alist.length){
    //   console.log(alist[i]);
    //   alist[i].style.color = color;
    //   i=i+1;
    // }
    $('a').css('color',color); //제이쿼리사용  이 페이지에 있는 모든 a태그를 제이쿼리로 제어
  }
}

function nightDayHandler(self){
var target = document.querySelector('body');
if(self.value === 'night'){
  Body.setbackgroundColor('black');
  Body.setColor('white');
  document.querySelector('header').style.color = 'white';
  document.querySelector('header').style.backgroundColor = 'black';
  self.value='day';
  Links.setColor('white');
}

else{
  Body.setbackgroundColor('white');
  Body.setColor('black');
  document.querySelector('header').style.color = 'black';
    document.querySelector('header').style.backgroundColor = 'white';
  self.value='night';
  Links.setColor('black');

}
}
