/**
 * 指定 audio 播放聲音
 * @param {object} ev
 */
function playSound(ev) {
    const audio = document.querySelector(`audio[data-key="${ev.keyCode}"]`);

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
}

/**
 * 指定 key DOM 改變 CSS class 屬性名稱
 * @param {object} ev
 */
function changeKeyClass(ev) {
    const key = document.querySelector(`.key[data-key="${ev.keyCode}"]`);

    if (!key) return;

    // 當連續按的情況下，處理動畫還在轉變的時候，需要使 transition 的動畫時間歸零
    // 動畫時間拉長的話就有明顯的感受
    if (key.classList.contains('playing')) {
        key.style.transition = 'all 0s';
        key.classList.remove('playing');

        // 延遲一毫秒是為了讓 transition 動作有時間真的能夠初始化，再繼續執行後續步驟
        setTimeout(() => {
            key.style.transition = '';
            key.classList.add('playing');
        }, 1);
    } else {
        key.classList.add('playing');
    }
}

document.addEventListener('keydown', playSound);
document.addEventListener('keydown', changeKeyClass);

/**
 * 當 CSS transform 屬性轉變結束後就移除指定 CSS class 屬性名稱
 * @param {object} ev
 */
function removeClass(ev) {
    if (ev.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// 綁定每個 key DOM 事件
// 使用 querySelectorAll() 取得的是 NodeList 物件結構，要使用 ... 轉成陣列結構
const nodeKeys = document.querySelectorAll('.key');
[...nodeKeys].forEach(key => key.addEventListener('transitionend', removeClass));
