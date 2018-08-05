# JS30-2 JS and CSS Clock

## Important Point
- CSS transition-timing-function
- turn the dateTime into the degrees
- 使 HTML 元素設置到**指定的位置與特定的大小**

## Operational Process
設置一個時鐘，時針、分針、秒針都會自動轉動，搭配動畫效果

## Coding Content
- 設置 CSS
  - 讓三種指針都先 垂直指向 12 點鐘方向
  - 讓每種指針的寬度與長度都不一樣
  - 使用 `transition` 屬性設置動畫效果

- 設置 JS
  - 使用 `setInterval()` 設定每一秒鐘就觸發**指定函數**去改變狀態
  - 指定函數內容 :
    - 使用`Date()`物件取得當下的 **時、分、秒**
    - 再依序把這些時間轉換成**時鐘的角度**
    - 最後就是把這些角度都填入 HTML DOM 元素裡的 CSS `transform`角度屬性中

## Learning
1. CSS `transition-timing-function` 設定動畫變化過程的視覺感

2. 使用 CSS 讓 HTML 元素放置到指定位置

3. CSS `transform: rotate( xx deg)` 設定旋轉角度
  - 需要搭配 CSS `transform-origin` 設定以哪個定點做旋轉

## Deal With Problem
1. CSS 屬性的內容需要加入**數學計算**
  - 使用 `calc()` 就能輕易計算，比例與實際數字的計算也行
    - 例如: `width: calc(50% - 3px);`

2. 若需要取得 HTML DOM 元素的位置或長寬大小
  - 參考: [JavaScript獲取DOM元素位置和尺寸大小](http://www.cnblogs.com/dolphinX/archive/2012/11/19/2777756.html)

## Extended Thinking
- 設計有數字樣式的時鐘
- 可以讓時間快轉
- 可以設定固定的時間
