# JS30-15 LocalStorage and Event Delegation

## Important Point
- 使用 LocalStorage 暫存資料
- Event Delegation 事件委託
- 使 form submit 事件不再刷新頁面
- `event.preventDefault()` 防止預設動作
- 使用 CSS 自訂 checkbox
- 使用原生 JS 做頁面 DOM 元素新增功能
- `element.appendChild()` 內層加入子元素

## Operational Process
- 做一個可以暫存的清單列表，當頁面刷新時狀態不變
- 可以新增項目
- 可以修改項目，使用 checkbox 勾選或取消
- 可以 刪除/勾選/取消 全部的項目

## Coding Content
itemsData: 資料庫資料 (使用 localStorage 暫存); itemsList: HTML DOM
主要有 4 個程式流程 :

1. 初始化 itemsList HTML
  - 取得 itemsData 資料來源
  - 把資料轉換成 HTML DOM 放上網頁頁面

2. 新增 item 到 itemsList & itemsData
  - 使用 submit 監聽事件綁定在 form 上
  - 把 input text 所輸入的資料 text 組成物件 item 格式
  - 再把資料轉換成 HTML DOM 放上網頁頁面，繼續接在 itemsList HTML 後面
  - 新增入 itemsData

3. 修改 item 其中一筆資料，可做勾選或取消
  - 使用 "事件委託 event delegation" 綁定 click 監聽事件在父層元素上
  - 取得那筆資料的 id，從 itemsData 中找到相對應的 item 後就做修改
  - 再重新存入 itemsData
  - 使用 checkbox + label + CSS 自動渲染頁面

4. 刪除/勾選/取消 全部的 items
  - 使用 click 監聽事件綁定在指定的 button 上
  - 從 itemsData 取得所有 items，直接對全部操作 刪除/勾選/取消
  - 再重新存入 itemsData
  - 最後初始化 itemsList HTML，重新渲染頁面


## Learning
1. 使用 LocalStorage 暫存資料
  - `localStorage.setItem(key, value)`、`localStorage.getItem(key)`...等等的 localStorage API
  - 需要先把資料轉成**字串序列**，當要取得時再轉回來
  - 把物件資料放入，使用`JSON.stringify(obj)`將物件轉為字串序列
  - 把序列化的資料取回，使用`JSON.parse(stringObj)`將字串序列轉為原來的物件型態
  - 參考: [HTML5 Web Storage](http://www.runoob.com/html/html5-webstorage.html)

2. Event Delegation 事件委託
  - 意旨委託父層元素綁定監聽事件在去往下獲取我們要的目標 selector，常用於綁定 ajax 取回來的資料
  - 使用監聽事件的`event.target`先取得子層元素
  - 再使用`target.matches(selector)`此 API 去確認我們要綁定的 selector，作為過濾條件
  - 參考 :
    - [JavaScript 事件委托詳解](https://qiutc.me/post/event-delegation.html)
    - [What is Event Delegation in JavaScript?](https://medium.com/@bretdoucette/part-4-what-is-event-delegation-in-javascript-f5c8c0de2983)

3. 使用監聽事件的`event.preventDefault()`
  - 為了防止執行預設動作

4. 使用 CSS 自訂 checkbox
  - `<input type="checkbox" id="${id}">` + `<label for="${id}">`
  - id 相同的話就會連動
  - 最後再加上 CSS `input:checked + label:before { content: '✅'; }` 做變化

5. 使用原生 JS 做頁面 DOM 元素新增功能
  - `element.appendChild(el)`
  - el 參數只能是 DOM 元素，不能是 HTML 形式
  - 功能: 使 element 內層元素再加入另外的子元素 el
  - 若需要放入 HTML，使用以下方法:
    - `const el = document.createElement('div');`
    - `el.innerHTML = 'yourHTML';`
    - 再放入參數，總結: 不方便啊!!

6. 隨機取得**由 數字+英文 所組成的字串**
  - `Math.random().toString(36).substr(2, n);` n 為產生的字數
  - 參考: [Generate random string/characters in JavaScript](https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript)
