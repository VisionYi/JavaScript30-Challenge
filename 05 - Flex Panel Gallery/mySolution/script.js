const allPanel = document.querySelectorAll('.panels .panel');
const MOVE = 'move-text';
const OPEN = 'open';

/**
 * 1. 當點擊未打開的畫廊時，打開此畫廊，也關閉其他已打開的畫廊
 * 2. 當點擊已打開的畫廊時，就關閉它
 */
function toggleOpen() {
    // 移除其他有 open 樣式的畫廊圖
    [...allPanel].forEach((panel) => {
        if (panel !== this && panel.classList.contains(OPEN)) {
            panel.classList.remove(OPEN);
            panel.classList.remove(MOVE);
        }
    });

    this.classList.toggle(OPEN);
}

/**
 * 1. 當打開或關閉畫廊後 ('flex' 的動畫結束後)，就移動文字
 * 2. 當連續按的話，需要判斷是否有 open 樣式才能加上 move 樣式，為了避免動畫過程中產生錯誤
 * @param {object} ev 事件
 */
function toggleMove(ev) {
    /* Safari transitionend event.propertyName === flex */
    /* Chrome + FF transitionend event.propertyName === flex-grow */
    if (ev.propertyName.includes('flex') && this.classList.contains(OPEN)) {
        this.classList.add(MOVE);
    }
    if (ev.propertyName.includes('flex') && !this.classList.contains(OPEN)) {
        this.classList.remove(MOVE);
    }
}

[...allPanel].forEach(panel => panel.addEventListener('click', toggleOpen));
[...allPanel].forEach(panel => panel.addEventListener('transitionend', toggleMove));
