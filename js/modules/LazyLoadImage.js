const LazyLoadImage = (src, target) => {
    if ("IntersectionObserver" in window) {
        var lazyloadImages = target;
        var imageObserver = new IntersectionObserver(function(entries, observer) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              var image = entry.target;
              image.src = src;
              image.classList.remove("lazy");
              imageObserver.unobserve(image);
            }
          });
        });
        imageObserver.observe(lazyloadImages);
    } 
}

export default LazyLoadImage;