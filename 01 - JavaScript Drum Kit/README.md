# JS30-1 JavaScript Drum Kit

## Important Point
- keydown event & keyCode
- playing audio
- listening for transition end event
- dealing with animation event

## Operational Process
- 當鍵盤被按下指定的按鍵後
- 使對應的聲音撥放出來
- 使對應的網頁圖像做出變化，支持人性化，有加入動畫效果

## Coding Content
- 使用 DOM 監聽事件，監聽 `keydown` 事件，當鍵盤按下的時候觸發

- 再來取得觸發按鍵的 keyCode，對應到我們指定的 keyCode

- 播放聲音
  - 當觸發按鍵時，只要 keyCode 對應到指定的 audio DOM，就對它進行播放

- 改變圖像 key DOM 物件
  - 當觸發按鍵時，只要 keyCode 對應到指定的 Key DOM 物件，就對它加上要變換的 class 屬性
  - 動畫效果為 Key DOM 本身 CSS `transition` 屬性(轉變的時間)的效果

- 由於 key DOM 變換後還要馬上再變回來
  - 需要加入 DOM 監聽事件`transitionend`，當指定的 DOM transition 屬性轉變完成後就會馬上觸發
  - 當觸發後，移除剛剛加上的 class 屬性轉變回來

## Learning
### CSS3 的 `transition` & `transform` 屬性
只要 DOM 加上這兩個 CSS 屬性，網頁就能有類似動畫的效果，就是添加變換的過程，能夠讓畫面更生動。

- `transition` 屬性 :
  - 可指定元素的轉換時間與過程

- `transform` 屬性 :
  - 可以讓元素旋轉、歪斜、放大、縮小、移動...等等的變形

- 參考: [CSS transform 能旋轉、傾斜、縮放變形 box](http://boohover.pixnet.net/blog/post/35341387-%E6%97%8B%E8%BD%89%E3%80%81%E5%82%BE%E6%96%9C%E3%80%81%E7%B8%AE%E6%94%BE%E7%9A%84%E8%AE%8A%E5%BD%A2%E6%95%88%E6%9E%9C-transform-%28css-prope)

### HTML Audio 或 Video 的操作
- 主要是操作 `<audio>` 和 `<video>` 的標籤元素

- 基本操作方法 :
  - `play()` 播放
  - `pause()` 暫停
  - `load()` 修改元素的 src 內容後，重新載入播放
- 控制時間的屬性 :
  - `currentTime` 返回或設置現在播放的時間點(seconds)
  - `duration` 返回時間總長度(seconds)

- 參考: [HTML Audio/Video DOM Reference](https://www.w3schools.com/tags/ref_av_dom.asp)

### DOM 監聽事件 `keydown`
- `keydown`事件是**當使用者按下鍵盤時觸發**

- 另一個`keyup`事件則是**當使用者放開鍵盤後觸發**

- 主要用來取得**按下哪個按鍵**，使用 `evnet.keyCode`此屬性取得按鍵的編號

### DOM 監聽事件 `transitionend`
- 當 DOM 元素的 CSS transition 屬性結束動作後將會觸發

- 會返回多個 event 物件，但每個物件的`event.propertyName`屬性都是不同的
  - 這代表此 CSS 的屬性轉變結束了，主要用來指定哪個屬性結束後該做什麼

## Deal With Problem
1. 當連續按同一個按鍵的情況
  - 聲音
    - 播放的時間需要先歸零再執行播放，這樣才有重複的效果

  - CSS transition 動畫效果
    - 基本上是 先強制結束正在進行的動畫再返回初始的狀態，之後再繼續執行動畫效果
    - 但在初始化與接續執行的之間，**需要加上一毫秒延遲**，讓狀態有時間真的能夠初始化

2. `querySelector()` 和 `querySelectorAll()` 的使用
  - 前者是**取得單一元素**，後者是**取得所有相關的元素**

  - 由於要綁定每個 key DOM 需要使用`querySelectorAll()`來取得所有元素

  - `querySelectorAll()`**取得的內容是 NodeList 物件結構**，可以使用`...`擴展運算子轉成**陣列結構**

## Extended Thinking
- 可以把變化時間做成可調整，由 JavaScript 輸入修改，模組化
