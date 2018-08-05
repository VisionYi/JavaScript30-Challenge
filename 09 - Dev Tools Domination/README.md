# JS30-9 14 Must Know Dev Tools Tricks

## Important Point
- 使用 Chrome 開發者工具展示 **中斷偵錯**
- 全域變數 **`console`** 方法的各種用法

## Operational Process
- 使用全域變數 `console` 來玩玩它的 13 種功能，會有意想不到的功能

## Learning
1. Chrome 開發者工具展示 - **中斷偵錯**
    - 在 Elements 中選擇想要中斷的 HTML 元素->點右鍵-> break on -> attribute modifications

2. 全域變數 `console` 功能使用
  - `console.log()`
    - 一般使用

  - `console.log('I am a %s', '💩')`
    -  %s 在字串中可以代入變數

  - `console.log('%c Great', 'font-size:50px; color:red;')`
    - %c 設在字串開頭就能使用 CSS 功能在 Console 中顯示

  - `console.warn()`
    - 會附上警告的圖示

  - `console.error()`
    - 會附上錯誤的圖示

  - `console.info()`
    - 會附上注意的圖示

  - `console.assert(condition, string)`
    - 若 condition 的結果是 true 就顯示 string 內容

  - `console.clear()`
    - 清除在這行之前所顯示在 Console 中的任何內容

  - `console.dir()`
    - 把 HTML DOM element 的內容屬性或方法**以物件的方式顯示出來**，不再只顯示 HTML 標籤格式而已

  - `console.table()`
    - 以**表格的形式**顯示陣列或物件內容

  - `console.count()`
    - 只要執行此程式就會**累加次數在內存中**，次數會顯示在每次印出來的後面

  - `console.group(g)` 或 `console.groupCollapsed(g)` + `console.groupEnd()`
    - 可以用**變數 g 來分群組**，變數 g 為每個群組的標題名稱

  - `console.time(text)` + `console.timeEnd(text)`
    - 可以計算 `time()` 到 `timeEnd()` 這之間**經過多少了時間(ms)**，常用在測試延遲或串接 API 的時候
    - 變數 text 為此次計算的註解名稱
