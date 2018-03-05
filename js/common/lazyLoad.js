export class LazyLoadImg {
    constructor(className) {
        this.className = className;
    }
    init() {
        const pics = Array.from(document.querySelectorAll(this.className));
        pics.forEach(item => io.observe(item));

        const io = new IntersectionObserver(ioes => {
            ioes.forEach(ioe => {
                let el = ioe.target;
                let intersectionRatio = ioe.intersectionRatio;
                if (intersectionRatio > 0 && intersectionRatio <= 1) {
                    loadImg(el);
                }
                el.onload = el.onerror = () => io.unobserve(el);
            });
        });
        window.addEventListener('load', (e) => {
            checkImgs();
        });
    }
    loadImg(el) {
        if (!el.src) {
            const source = el.dataset.src;
            el.src = source;
        }
    }
}