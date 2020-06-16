import LazyLoadImage from "./LazyLoadImage";

const LazyLoadBackground = function(bg, target){
    if ("IntersectionObserver" in window) {
    
        var lazyloadBackground = target;
        var imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                var image = entry.target;
                image.style.backgroundImage = bg;
                image.classList.remove("img-lazy");
                imageObserver.unobserve(image);
            }
            });
        });
  
        imageObserver.observe(lazyloadBackground);
    }
}

export default LazyLoadBackground;