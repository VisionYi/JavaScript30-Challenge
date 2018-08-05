# JS30-6 Ajax Type Ahead

## Important Point
- use `fetch()` get the data from ajax
- use `RegExp()`
- 使用正規表示式去尋找文字 & 替換文字
  - `String.match()`
  - `String.replace()`
- 輸入搜尋文字，顯示列表清單 (操作資料流畫面的實作)

## Operational Process
- 從遠端抓取 JSON 檔的資料內容
- 製做一個搜尋資料的功能
- 每當打一個字輸入搜尋條時，就立即顯示搜尋結果，類似建議列條的型態
- 最後，再把每筆資料中要搜尋的那個字 highlight 標註起來


## Coding Content
- **概要:** 當打字輸入`<input>`搜尋條時，就立即顯示 suggestions 的清單列條

1. 使用 fetch 取得遠端 API 或 JSON 的資料內容

2. 綁定監聽事件 `keyup` 在`<input>`搜尋條上，取得輸入的每個字

3. 以輸入的字為條件，使用陣列的方法`filter()`過濾資料內容

4. 再把資料轉成 HTML 格式的清單列條

5. 之後再把每筆資料搜尋到的那個字標註起來 (改寫 HTML 內容)
  - 使用 `RegExp` 正規表示式搭配字串的方法 `match()` & `repalce()` 功能

6. 最後顯示 suggestions 清單列條

## Learning
1. [GitHubGist](https://gist.github.com/) 放 JSON 格式的檔案，可以從其他地方直接提取這個靜態資料

2. fetch 的使用
  - [AJAX與Fetch API - 從ES6開始的JavaScript學習生活](https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/ajax_fetch.html)
  - [使用 fetch 來進行 Ajax 呼叫](https://skychang.github.io/2015/11/02/JavaScript-Use_Javascript_Fetch/)

3. 正規表示式 & JavaScript RegExp 物件
  - [正規表達式 \- JavaScript | MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions)
  - [RegExp.$1-$9 - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/n)

4. 搭配正規表示式 尋找文字 & 替換文字
  - `String.match()`
    - 功能 : 尋找內容文字，回傳陣列形式
    - [String.prototype.match() | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)

  - `String.replace()`
    - 功能 : 替換文字
    - [String.prototype.replace() | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

5. 數字格式化
  - 可以使用 JavaScript 的 `Intl.NumberFormat` 物件，國際幣值轉換格式
  - [Intl.NumberFormat | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NumberFormat)
  - [How can I format numbers as dollars currency string in JavaScript?](https://stackoverflow.com/questions/149055/how-can-i-format-numbers-as-dollars-currency-string-in-javascript)
