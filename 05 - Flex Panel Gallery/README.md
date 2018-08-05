# JS30-5 Flex Panels Image Gallery

## Important Point
- CSS flexbox
  - 三層巢狀 flex
  - 垂直置中
  - 平均分配空間
- CSS transition，動畫移動過程的變化感
- `HTMLElement.classList` 的方法: `add`, `remove`, `toggle`, `contains`

## Operational Process
- 製作 5 張有背景圖的動畫畫廊
- 功能 :
  - 5 張圖橫向排列，長度佔畫面滿板，寬度佔畫面平均分配
  - 點擊其中一張會打開畫廊，再點擊同一張畫廊會關閉
  - 點擊不同畫廊的話，會同時關閉其他已打開的畫廊
  - 打開或關閉畫廊的動作結束後，裡面的字會秀出來或消失掉
  - 動畫: 打開/關閉畫廊、移動字、縮小/放大字

## Coding Content
- 使用 CSS :
  - 第一層 flex : 橫向排列、高度滿版、寬度平均分配 5 等份
  - 第二層 flex : 直向排列、佔整個寬度置中、高度平均分配 3 等份
  - 第三層 flex : 佔整個空間垂直置中
  - 加上 transition 動畫效果，也加上 `open` & `move` 樣式，配合 JS 指令打開、關閉、移動使用

- 使用 JS :
  - 為所有的畫廊加上`click`監聽事件，當點擊時觸發打開或關閉畫廊
  - 使用 `HTMLElement.classList` 的方法 `add`, `remove`, `toggle` 來操作 CSS 樣式產生打開或關閉的動作
  - 由於需要產生接續的動畫效果，會再加上`transitionend`監聽事件，接續觸發後面的移動字的動作

## Learning
1. flex
  - flex 層主要需加上此三種屬性:
    - `flex-direction`: 橫向排列還是直向排列
    - `align-items`: 高度/直向排版方式
    - `justify-content`: 寬度/橫向排版方式

  - 子層則可以加上以下屬性:
    - `flex`: 將寬度/橫排平均分配等份。(若子層有此屬性，flex 層的 `justify-content` 就會無效)
    - `align-self`: 此屬性為 `align-items` 的子層獨立版

  - 參考: [深入解析 CSS Flexbox](http://www.oxxostudio.tw/articles/201501/css-flexbox.html)

2. `HTMLElement.classList` 的方法
  - `add()`: 加上樣式
  - `remove()`: 移除樣式
  - `toggle()`: 若此樣式不存在就加上，反之有的話就移除
  - `contains()`: 檢測元素是否存在此樣式，返回布林值

## Deal With Problem
- 當連續點擊的話 :
  - 需要判斷是否有 `open` 樣式才能加上 `move` 樣式，為了避免動畫過程中產生錯誤
