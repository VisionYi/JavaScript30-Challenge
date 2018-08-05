# JS30-3 Playing with CSS Variables and JS

## Important Point
- CSS Variables and how to get/set Variable in JS
- 使用 JS 綁定操作
  - HTML `<input type="range">` **滑動條**
  - HTML `<input type="color">` **色彩選擇器**
- 使用 JS 取得 HTML DOM 上的 `data-*=""` 屬性中的值

## Operational Process
- 指定使用 CSS 變數來操作
- 事先初始化可操作的數值
- 使用滑動條: 改變圖片的邊框大小 & 模糊度
- 選取色彩選擇器: 改變圖片的背景顏色

## Learning
1. 使用 CSS Variables
  - 主要在`:root {}`命名變數，也可以在任意的選擇器內命名變數
  - 參考 :
    - [SASS, LESS 退散，原生 CSS 可以使用變數啦！](http://muki.tw/tech/native-css-variables/)
    - [Using CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables)

2. HTML 滑動條 & 色彩選擇器的使用
  - 這裡使用 JS 監聽事件的 `change` & `mousemove` 觸發操作的內容

3. 使用 `HTMLElement.dataset` 取得 HTML DOM 中 `data-*` 屬性的內容值
