# JS30-13 Slide In on Scroll

## Important Point
- 監聽事件 `scroll` 的使用
- debounce 防彈跳函數，防止觸發過多的監聽事件
- `window` 視窗位於頁面中的絕對位置 & 長寬大小
  - `scrollY`、`scrollX`、`innerHeight`、`innerWidth`
- HTML DOM 元素的絕對位置 & 長寬大小
  - `offsetTop`、`offsetLeft`、`offsetHeight`、`offsetWidth`

## Operational Process
- 當頁面滾動到指定位置或範圍時
- image 圖片就會顯現出來
- 未到達或超過的話圖片就消失回去

## Learning
1. `scroll` 監聽事件的使用
  - 每當滾動頁面時就會觸發

2. debounce 防彈跳函數
  - 為了防止觸發過多的監聽事件，減少效能消耗
  - 適合用於滾動、移動、滑鼠移動...等等的監聽事件

3. `window` 視窗位於頁面中的絕對位置 & 長寬大小
  - 視窗的絕對位置
    - `window.scrollY` (`window.pageYOffset`)
    - `window.scrollX` (`window.pageXOffset`)
  - 視窗的長寬
    - `window.innerHeight`、`window.innerWidth` 不包括頁面中的滾動條
    - `window.outerHeight`、`window.outerWidth` 包括整個瀏覽器頁面

4. HTML DOM 元素的絕對位置 & 長寬大小
  - 元素的絕對位置
    - `element.offsetTop`
    - `element.offsetLeft`
  - 元素的長寬大小
    - `element.offsetWidth`
    - `element.offsetHeight`
  - 參考: [JavaScript獲取DOM元素位置和尺寸大小](http://www.cnblogs.com/dolphinX/archive/2012/11/19/2777756.html)

## Extended Thinking
- 製作一個回到最頂部的功能
