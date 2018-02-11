const checkBoxesNode = document.querySelectorAll('.inbox .item input[type="checkbox"]');
const checkBoxes = [...checkBoxesNode];
const checkAll = document.querySelector('.inbox .title input[type="checkbox"]');
let lastChecked;

/**
 * 範圍勾選或範圍取消 checkbox
 * @param {Element} nowCheckbox
 * @param {Element} lastCheckbox
 */
function rangeChecked(nowCheckbox, lastCheckbox) {
    let inBetween = false;

    checkBoxes.forEach((checkbox) => {
        if (checkbox === nowCheckbox || checkbox === lastCheckbox) {
            lastCheckbox.checked = nowCheckbox.checked;
            inBetween = !inBetween;
        }

        if (inBetween) {
            checkbox.checked = nowCheckbox.checked;
        }
    });
}

/**
 * 處理 checkbox 點擊事件，按住鍵盤 shift 即可觸發範圍勾選功能
 * @param {object} ev
 */
function handleCheck(ev) {
    if (ev.shiftKey && lastChecked) {
        rangeChecked(this, lastChecked);
    }

    // 記住上一次點擊的 checkbox
    lastChecked = this;
}

/**
 * 處理 checkbox 全勾選或全取消
 */
function handleCheckAll() {
    checkBoxes.forEach((checkbox) => {
        checkbox.checked = this.checked;
    });
}

checkBoxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
checkAll.addEventListener('click', handleCheckAll);
