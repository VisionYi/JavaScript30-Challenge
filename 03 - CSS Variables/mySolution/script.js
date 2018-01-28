const inputs = document.querySelectorAll('.controls input');

/**
 * 取得 CSS 變數的初始內容值
 * @param {string} name CSS variable
 * @return {string} CSS variable value
 */
const getCSSVariableValue = (name = '') => {
    const styles = getComputedStyle(document.documentElement);
    return (styles.getPropertyValue(name)).trim();
};

/**
 * 初始化所有 input 種類元素的 value & data-sizing DOM 屬性
 * @param {Element} input
 */
const inputInitial = (input) => {
    const CSSVariable = getCSSVariableValue(`--${input.name}`);
    let [value, sizing] = ['', ''];

    if (input.type === 'range') {
        [value] = CSSVariable.match(/^\d*[.]?\d+/);
        [sizing] = CSSVariable.match(/[^\d.]+/i);
    } else {
        value = CSSVariable;
    }

    input.setAttribute('value', value);
    input.setAttribute('data-sizing', sizing);
};

/**
 * 放於監聽事件，更新 CSS 變數的內容值
 */
function CSSVariableUpdate() {
    const value = `${this.value}${this.dataset.sizing}`;
    document.documentElement.style.setProperty(`--${this.name}`, value);
}

[...inputs].forEach(inputInitial);
[...inputs].forEach(input => input.addEventListener('change', CSSVariableUpdate));
[...inputs].forEach(input => input.addEventListener('mousemove', CSSVariableUpdate));
