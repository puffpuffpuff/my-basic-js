const Collapsible = () => {
    let coll = document.querySelectorAll(".l-collapsible");
    let i;
    let prevHeight = 0;

    coll.forEach((el,idx)=>{
        el.addEventListener("click", function() {
            el.classList.toggle("active");
            let content = el.nextElementSibling,
                height;
            
            if (content.style.maxHeight){
                content.style.maxHeight = null;
                height = -prevHeight;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                height = content.scrollHeight;
                prevHeight = height;
            } 

            if(el.classList.contains('js-collapse')){
                resizeAllTileItems(idx, height);
            }
        });
    });
}

export default Collapsible;