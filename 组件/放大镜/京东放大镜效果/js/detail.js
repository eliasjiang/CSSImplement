window.addEventListener('load',function () {  
    let preview_img = document.querySelector('.preview_img');
    let mask = document = document.querySelector('.mask');
    let big =document = document.querySelector('.big');
    preview_img.addEventListener('mouseover',function () {  
        mask.style.display = 'block';
        big.style.display = 'block';
    });
    preview_img.addEventListener('mouseout',function () {  
        mask.style.display = 'none';
        big.style.display = 'none';
    });

    preview_img.addEventListener('mousemove',function (e) {  
        let x = e.pageX - this.offsetLeft;
        let y = e.pageY - this.offsetTop;
        let maskX = x-mask.offsetWidth/2;
        let maskY = y-mask.offsetHeight/2;
        let maxX = preview_img.offsetWidth-mask.offsetWidth;
        let maxY = preview_img.offsetHeight-mask.offsetHeight;
        if(maskX<0){
            maskX=0;
        }else if(maskX>maxX){
            maskX= maxX;
        }

        if(maskY<0){
            maskY=0;
        }else if(maskY>maxY){
            maskY = maxY;
        }
        mask.style.left = maskX + 'px';
        mask.style.top = maskY + 'px';
        let bigIMg = document.querySelector('.bigImg');
        let bigMaxX = bigIMg.offsetWidth - big.offsetWidth;
        let bigMaxY = bigIMg.offsetHeight - big.offsetHeight;
        let bigX = maskX * bigMaxX / maxX;
        let bigY = maskY * bigMaxY / maxY;
        bigIMg.style.left = -bigX + 'px';
        bigIMg.style.top = -bigY + 'px';
    });


})