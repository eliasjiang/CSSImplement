window.addEventListener('load',function () {  
    let arrow_l = this.document.querySelector('.arrow-l');
    let arrow_r = this.document.querySelector('.arrow-r');
    let focus = this.document.querySelector('.focus');
    let focusWidth = focus.offsetWidth;
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display = 'block';
        arrow_r.style.display = 'block';
        clearInterval(timer);
        timer = null;
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display = 'none';
        arrow_r.style.display = 'none';
        timer = this.setInterval(function(){
            arrow_r.click();
        },2000);

    })

    let ul = focus.querySelector('ul');
    let ol = focus.querySelector('ol');
    let num = 0;
    let circle = 0;
    for(let i =0;i<ul.children.length;i++){
        let li = this.document.createElement('li');
        li.setAttribute('index',i);
        ol.appendChild(li);
        li.addEventListener('click',function(){
            for(let i=0;i<ol.children.length;i++){
                ol.children[i].className = '';
            }
            this.className = 'current';
            let index = this.getAttribute('index');
            num = index;
            circle = index;
            console.log(index);
            animate(ul,- index*focusWidth);
        })
    }

    ol.children[0].className = 'current';
    let firstClone = ul.children[0].cloneNode(true);
    ul.appendChild(firstClone);
    
    arrow_r.addEventListener('click',function () {
        if(num==ul.children.length-1){
            ul.style.left = 0;
            num = 0;
        }  
        num++;
        animate(ul,-num* focusWidth);
        circle++;
        if(circle==ol.children.length){
            circle = 0;
        }
        for(let i=0;i<ol.children.length;i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })

    arrow_l.addEventListener('click',function () {
        if(num==0){
            num = ul.children.length-1;
            ul.style.left = num*focusWidth + 'px';
            
        }  
        num--;
        animate(ul,-num*focusWidth);
        circle--;
        if(circle<0){
            circle = ol.children.length-1;
        }
        for(let i=0;i<ol.children.length;i++){
            ol.children[i].className = '';
        }
        ol.children[circle].className = 'current';
    })

    let timer = this.setInterval(function(){
        arrow_r.click();
    },2000);


})