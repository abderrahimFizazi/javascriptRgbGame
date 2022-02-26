/*global console*/
/*global document*/
var qst = document.getElementById('qst'),mark,a,b,c,index,sum=0;
    boxes = document.querySelectorAll('.box'),
    level = document.getElementById('level').children;
    replay = document.getElementById('replay');
var x;
    note = document.getElementById("score"),
    high = document.getElementById("high");
 level[0].onclick =  function(){
    for(i=0;i<9;i++) boxes[i].classList.remove('hide');
   result.innerHTML = 'Play';
     result.style.backgroundColor = '#26C281';
     boxback(0);
}
result.onclick = function(){
    for(i=0;i<9;i++) boxes[i].classList.remove('hide');
   result.innerHTML = 'Play';
     result.style.backgroundColor = '#26C281';
     boxback(0);
}
level[1].onclick = function(){
    for(i=0;i<9;i++) boxes[i].classList.remove('hide');
     result.innerHTML = 'Play';
     result.style.backgroundColor = '#26C281';
        boxback(1);
}
level[2].onclick = function(){
 for(i=0;i<9;i++) boxes[i].classList.remove('hide');
        result.innerHTML = 'Play';
     result.style.backgroundColor = '#26C281';
    boxback(2);
}
function boxback(index){
          for(i=0;i<9;i++) boxes[i].style.border = 'none';
    a = Math.floor(Math.random() * 256); 
         b = Math.floor(Math.random() * 256); 
         c = Math.floor(Math.random() * 256); 
         qst.innerHTML = "RGB("+a+","+b+","+c+")";
     x =  Math.floor(Math.random() * (index+1)*3);
    for(var j=0;j<9;j++){
            x1 =  Math.floor(Math.random() * 256);
            x2 =  Math.floor(Math.random() * 256);
            x3 =  Math.floor(Math.random() * 256);
            boxes[j].style.backgroundColor = "rgb(" +x1 +","+x2+","+x3+")";
                boxes[j].onclick = function(){
                result.innerHTML = 'Unfotunatly try again';
                result.style.backgroundColor = 'red';
               setTimeout(level[index].onclick,1500);
                boxes[x].style.border = '5px dashed white';
                }
        if(j==x){        boxes[j].style.backgroundColor = "rgb(" +a +","+b+","+c+")";
                         boxes[j].onclick  = function(){
                         result.innerHTML = 'Great, you are right  ';
                         result.style.backgroundColor = '#26C281';
                         setTimeout(level[index].onclick,1500);
                         score(index);
                         }
                 }
    }
    for(i=(index+1)*3;i<9;i++) boxes[i].classList.add('hide');
    console.log(x);
}
var h=0;
function score(mark){
for( i=0;i<9;i++){ 
 boxes[i].style.backgroundColor = "rgb(" +a +","+b+","+c+")";
}
   sum = sum + mark + 1;
    note.innerHTML = 'Score : '+sum;
    if(h<sum) h=sum;
    high.innerHTML = ' High Score : '+h;
}
replay.onclick = function(){
    sum=0;
    note.innerHTML = 'Score : '+sum;
    for(i=0;i<9;i++){
        boxes[i].classList.remove('hide');
        boxes[i].style.backgroundColor ='white';
    }
}





   