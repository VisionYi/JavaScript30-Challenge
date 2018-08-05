# JS30-10 Hold Shift and Check Checkboxes

## Important Point
- 使用純 CSS 觸發清單項目的改變
- `input:checked + 樣式或選擇器`
- 深入研究 HTML DOM Checkbox
- 監聽事件 click + 按住鍵盤按鍵，能做出更多功能

## Operational Process
- 做一個可勾選/取消的列表清單
- 當勾選項目時，文字會加上刪除腺
- 按住鍵盤 shift 即可使用範圍勾選與範圍取消的功能
- 加入一個全部勾選/取消的功能

## Learning
1. 使用 JS 操作 `<input type="checkbox">`
  - 查看是否被勾選: `element.checked` 可以判斷
  - 勾選或取消 checkbox
    - `element.checked = true/false;`
    - `element.setAttribute('checked', '');` **此方法只適用於 loading 刷新頁面時**

2. 監聽事件 click 內的事件屬性有鍵盤相關功能
  - `event.shiftKey`、`event.ctrltKey`、`event.altKey`、`event.metaKey`
  - 以上代表在點擊的同時，也有按住**鍵盤 Shift、Ctrl、Alt、Windows** 的話，這些相對應的屬性將返回 `true`，否則都是 `false`

3. 把監聽事件內的回調函數中的 this 暫存起來
  - 使用個全域變數暫存起來
  - 用來取得上次的觸發事件
  - this 是指向觸發事件的 DOM 元素

4. 使用 CSS `input:checked + 樣式或選擇器`
  - 可以當作 JS 功能的**監聽事件 click**，操作指定的**樣式或選擇器**產生不同變化
  - 改變外型、加上/去除文字、搭配`transform`可以做出更多動畫效果
  - 參考: [You Don't Need JavaScript](https://github.com/you-dont-need/You-Dont-Need-JavaScript)

## Extended Thinking
- 增加拖曳功能，排列順序
