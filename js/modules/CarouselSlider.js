import { wrap } from "lodash";

const CarouselSlider = () => {
    let maxRowDesktop = 4,
    maxColDesktop = 6,
    maxRowMobile = 5,
    maxColMobile = 3,
    controlClass = '.js-bullet-control',
    swipeId = 'partner-swipe',
    wrapperId = 'clientwrapper',
    contentContainerId = 'clients-all',
    contentClass = '.l2-client-slider-wrap';

    let images = document.querySelectorAll(contentClass);
    

    if(!images || !control) return;
    
    let wrapperWidth = document.getElementById(wrapperId).getBoundingClientRect().width,
        imgWidth = 0,
        maxCol = 0,
        imagesContainer = document.getElementById(contentContainerId),
        swipeArea = document.getElementById(swipeId),
        control = document.querySelector(controlClass),
        c = 0,
        speed = 0;

    images.forEach((el)=>{
        el.style.padding = "16px";
    });

    if(window.innerWidth < 769) {
        imgWidth = wrapperWidth / maxColMobile;
        maxCol = Math.ceil(images.length/maxRowMobile); 
        imagesContainer.style.width = imgWidth * maxCol + "px";
        c = Math.ceil(images.length/(maxRowMobile * maxColMobile));
    } else {
        imgWidth = wrapperWidth / maxColDesktop;
        maxCol = Math.ceil(images.length/maxRowDesktop); 
        imagesContainer.style.width = imgWidth * maxCol + "px";
        c = Math.ceil(images.length/(maxColDesktop * maxRowDesktop));
    }

    images.forEach((el)=>{
        el.style.width = imgWidth+'px';
        el.firstChild.nextSibling.style.width = (imgWidth - 32)+"px";
    });

    for (let i = 0; i < c; i++) {
        let dom = document.createElement('span');
        dom.classList.add('carousel-client-bullet');
        dom.classList.add('js-client-bullet');
        if(i==0){
            dom.classList.add('active');
        }
        dom.dataset.id = i;
        control.appendChild(dom);
    }

    carousel();

    function carousel(){
        document.querySelectorAll('.js-client-bullet').forEach((el,idx) => {
            el.classList.remove('active');
            if(idx == speed){
                el.classList.add('active');
            }
        });
        imagesContainer.style.transform = `translateX(-${speed * wrapperWidth}px)`;
        if(speed+1 >= c){
            speed = 0
        } else {
            speed++;
        }
        setTimeout(carousel, 5000);
    }

    control.addEventListener('click',(e)=>{
        if ( e.target && e.target.matches('.js-client-bullet')){
            document.querySelectorAll('.js-client-bullet').forEach((el) => {
                el.classList.remove('active');
            });
            let t = e.target.dataset.id;
            speed = t;
            e.target.classList.add('active');
            imagesContainer.style.transform = `translateX(-${t * wrapperWidth}px)`;
        }
    });

    swipeArea.addEventListener('swiped-left', function(e) {
        if(speed == 0){
            speed = 1;
            imagesContainer.style.transform = `translateX(-${wrapperWidth}px)`;
        }else{
            if(speed < 40){
                imagesContainer.style.transform = `translateX(-${speed * wrapperWidth}px)`;
                speed+=1;
            }
        }
        document.querySelectorAll('.js-client-bullet').forEach((el,idx) => {
            el.classList.remove('active');
            if(idx == speed){
                el.classList.add('active');
            }
        });
    });

    swipeArea.addEventListener('swiped-right', function(e) {
        if(speed > 0 && speed < 40){
            speed-=1;
            if(speed < 0){
                speed=0;
                imagesContainer.style.transform = `translateX(-${wrapperWidth}px)`;
            }else{
                imagesContainer.style.transform = `translateX(-${speed * wrapperWidth}px)`;
            }
        }
        document.querySelectorAll('.js-client-bullet').forEach((el,idx) => {
            el.classList.remove('active');
            if(idx == speed){
                el.classList.add('active');
            }
        });
    });
}

export default CarouselSlider;