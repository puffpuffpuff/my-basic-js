# Base Javascript Modules

This repo contain documentation for certain script that often use in web development.

## Table of content

- Lazyload Image
- Lazyload Background
- Collapsible
- Masonry Grid


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