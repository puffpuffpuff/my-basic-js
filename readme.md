# Base Javascript Modules

This repo contain documentation for certain script that often use in web development.

## Table of content

- Lazyload Image
- Lazyload Background
- Collapsible
- Masonry Grid
- Swipe Event
- Carousel Slider for Clients
- 


## Lazyload Image

This modules used for lazy loading images.

### required files:

- js/modules/LazyLoadImage.js

### Application:

on Html:

```html
    <img data-src="./path/to.img" class="js-lazyimg">
```

on Javascript:

```javascript
    import LazyLoadImage from './modules/LazyLoadImage';

    document.querySelectorAll('.js-lazyimg').forEach((el) => {
        LazyLoadImage(el.dataset.src,el);
    });
```


## Lazyload Background

This modules used for lazy loading background.

### required files:

- js/modules/LazyLoadBackground.js

### Application:

on Html:

```html
    <div class="js-lazybg" data-bg="url('./path/to.background')">
        <h2>Hello world</h2>
    </div>
```

on Javascript:

```javascript
    import LazyLoadBackground from './modules/LazyLoadBackground';

    document.querySelectorAll('.js-lazybg').forEach((el) => {
        LazyLoadBackground(el.dataset.src,el);
    });
```


## Collapsible

This modules used for collapse element.

### required files:

- js/modules/Collapsible.js
- sass/modules/_collapsible.scss

### Application:

on Html:

```html
    <div class="col-12">
        <button class="l-collapsible">
            <h2>Collapse this</h2>
        </button>
        <div class="l-collapsible-content">
            <p>
                Content goes here
            </p>
        </div>
    </div>
```

on Javascript:

```javascript
    import Collapsible from './modules/Collapsible';

    Collapsible();
```


## Masonry Grid

Create grid that inspire by masonry grid

### required files:

- js/modules/MasonryGrid.js
- sass/modules/_gridtiles.scss

### Application:

on Html:

add wrapper class that wrap each of the content will later be used by javascript
```html
    <div class="tile">
        <div class="tile-item">
            <div class="wrapper-class">Content goes here</div>
        </div>
        <div class="tile-item">
            <div class="wrapper-class">Content goes here</div>
        </div>
    </div>
```

On sass file, change the repeat count into the number of column you desired:
```css
    grid-template-columns: repeat(2, minmax(100px,1fr));
```

on Javascript:

import the script
```javascript
    import MasonryGrid from './modules/MasonryGrid';

    MasonryGrid();
```

adjust the wrapper class name according to class element that wrap each content on MasonryGrid.js
```javascript
    let wrapper = ".wrapper-class";
```



## Swipe Event

Add swipe event listener for touch screen devices

### required files:

- js/modules/SwipeEvent.js

### Application:

on Javascript:

import the script first 
```javascript
    require('./modules/SwipeEvent');
```

there are for event type `swiped-left`,`swiped-right`,`swiped-up`,`swiped-down`
to ignore the swipe event on element add `data-swipe-ignore="true"`
below is example when listening to swipe left event:
```javascript
    el.addEventListener('swiped-left',(e)=>{/*callback function*/})
```



## Carousel Slider for Clients

Carousel Slider for clients

### required files:

- js/modules/SwipeEvent.js
- js/modules/CarouselSlider.js
- sass/modules/_carousel.scss

### Application:

on Javascript:

makesure SwapEvent loaded in `app.js `
```javascript
    require('./modules/SwipeEvent');

    import CarouselSlider from './modules/CarouselSlider';  
    
    CarouselSlider();
```

Setup:
- wrapper: container that has overflow hidden with max width no more than device width
- content container: element that will hold all carousel content
- content class: element that will store each content
- swipe area: element that will listen to swipe event, element width must be equal to wrapper width and height equal to content container, also it must be covering the content container
- control Area: element used for storing all the bullet and control for carousel

```html
<div id="wrapper">
    <div id="contentContainer">
        <div class="contentClass"></div>
        <div class="contentClass"></div>
        <div class="contentClass"></div>
    </div>
    <div id="swipeArea"></div>
    <div class="controlArea"></div>
</div>
```

on `js//modules/CarouselSlider` change bellow variable according to class/id above
```javascript
    controlClass = '.controlArea',
    swipeId = 'swipeArea',
    wrapperId = 'wrapper',
    contentContainerId = 'contentContainer',
    contentClass = '.contentClass';
```
