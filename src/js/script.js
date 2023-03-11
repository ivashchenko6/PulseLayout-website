const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    dots: false,
    nav: false
    
});


document.querySelectorAll('.slider-btn').forEach(item => {
    item.addEventListener('click', (e) => {
        const target = e.currentTarget.dataset['side'];
        if(target === 'left') {
            slider.goTo('prev');
        }else {
            slider.goTo('next');
        }
    })
})
