let i_1 = document.querySelector('#le_1');
let i_2 = document.querySelector('#le_2');
let i_3 = document.querySelector('#le_3');
let i_4 = document.querySelector('#le_4');
let i_5 = document.querySelector('#le_5');

let KV = document.querySelector('#KV');
let s = 1;
let a = 0;

let stack = [];

function mug(){
    // ждем а секунд и 3 мигаем и ждем
    setTimeout(function() {
        //мигание
        var t = setInterval(function () {
            KV.style.visibility = (KV.style.visibility == 'hidden' ? KV.style.visibility ='' : KV.style.visibility ='hidden');
        }, 1500);
    // остановить МИГАНИЕ вывод через 3 секунд
    setTimeout(() => { clearInterval(t) }, 3000);
        console.log(`${s} этаж`)
      }, a * 1000); 
}

function level_1(){
    
        let k = 1;
    a = Math.abs(k - s);
    KV.style.cssText = `transition-duration: ${Math.abs(a)}s;`
    KV.style.top = 10 + "px";
    s = 1;
    
    if(KV.style.top === 10 + 'px'){
        mug();
        } 
    
    
}
function level_2(){
   
     let k = 2;
    a = Math.abs(k - s);
    KV.style.cssText = `transition-duration: ${Math.abs(a)}s;`
    KV.style.top = 160 + "px";
    s = 2;

    if(KV.style.top === 160 + 'px'){
        mug();
        }
 
    
}
function level_3(){

        let k = 3;
    a = Math.abs(k - s);
    KV.style.cssText = `transition-duration: ${Math.abs(a)}s;`
    KV.style.top = 310 + "px";
    s = 3;

    if(KV.style.top === 310 + 'px'){
        mug();
        }
  
}

function level_4(){
    
        let k = 4;
        a = Math.abs(k - s)
        KV.style.cssText = `transition-duration: ${Math.abs(a)}s;`
        KV.style.top = 460 + "px"  
        s = 4;
    
        if(KV.style.top === 460 + 'px'){
            mug();
            } 
}
function level_5(){
    
    let k = 5;
    a = Math.abs(k - s);
    KV.style.cssText = `transition-duration: ${Math.abs(a)}s;`
    KV.style.top = 610 + "px";
    s = 5;

    if(KV.style.top === 610 + 'px'){
        mug();
        }     

}

i_1.addEventListener('click',()=>{   
    stack.push(level_1);
});
i_2.addEventListener('click',()=>{   
    stack.push(level_2);
})
i_3.addEventListener('click',()=>{
    stack.push(level_3); 
})
i_4.addEventListener('click',()=>{
    stack.push(level_4);
})
i_5.addEventListener('click',()=>{
    stack.push(level_5) 
    stack.forEach((item)=>{
        item;
        stack.shift();
      });
})
