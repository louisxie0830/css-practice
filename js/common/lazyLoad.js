export class LazyLoadImg {
    constructor(className) {
        window.addEventListener('load', (e) => {
            this.init();
        });
        this.className = className;
    }
    init() {
        const io = new IntersectionObserver(ioes => {
            ioes.forEach(ioe => {
                let el = ioe.target;
                let intersectionRatio = ioe.intersectionRatio;
                if (intersectionRatio > 0 && intersectionRatio <= 1) {
                    this.loadImg(el);
                }
                el.onload = el.onerror = () => io.unobserve(el);
            });
        });
        const pics = Array.from(document.querySelectorAll(this.className));
        pics.forEach(item => io.observe(item));
    }
    loadImg(el) {
        if (!el.src) {
            const source = el.dataset.src;
            el.src = source;
        }
    }
}