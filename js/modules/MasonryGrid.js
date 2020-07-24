const MasonryGrid = () => {
    let wrapper = ".l2-thinkpiece-card";

    function resizeTileItem(item){
        let grid = document.getElementsByClassName('tile')[0],
            rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap')),
            rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows')),
            contentHeight = item.querySelector(wrapper).getBoundingClientRect().height,
            rowSpan = Math.ceil((contentHeight+rowGap)/(rowHeight+rowGap));
        item.style.gridRowEnd = 'span '+rowSpan;
        item.style.height = contentHeight+"px";
    }

    function resizeAllTileItems(){
        var allItems = document.querySelectorAll('.tile-item');
        
        allItems.forEach((el,idx)=>{

            resizeTileItem(el);
        });
    }

    var tileEvents = ['load', 'resize'];
    tileEvents.forEach( function(event) {
        window.addEventListener(event, resizeAllTileItems);
    } );
}

export default MasonryGrid;