/**
 * 防彈跳 Library
 * 防止觸發過多的監聽事件
 */
function debounce(func, wait = 16, immediate = true) {
    let timeout;
    return (...args) => {
        const later = () => {
            timeout = null;
            if (!immediate) func.apply(this, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(this, args);
    };
}

const sliderImages = document.querySelectorAll('.slide-in');

/**
 * 偵測視窗中的位置是否有滾動到 image 所指定的範圍內
 * 有的話 image 就會顯示，未到或超過的話 image 就消失
 */
function checkSlide() {
    [...sliderImages].forEach((image) => {
        // 以整個頁面為基底，視窗底部的絕對位置，此會隨著滾動而改變
        const scrollWindowButton = window.scrollY + window.innerHeight;

        // 佔整個頁面的圖片之絕對位置
        const imageBottom = image.offsetTop + image.height;
        const imageHalf = image.offsetTop + (image.height / 2);

        const isScrollOnImage = scrollWindowButton > imageHalf;
        const isScrolledPast = window.scrollY > imageBottom;

        if (isScrollOnImage && !isScrolledPast) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));
