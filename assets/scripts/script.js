const medias = document.querySelectorAll('.bulles');

window.addEventListener('load', () => {
    const TL = gsap.timeline({ paused: true });

    TL
        .staggerFrom(medias, 1, { right: -200, ease: 'power2.out' }, 0.3, '-=1');

    TL.play();
})