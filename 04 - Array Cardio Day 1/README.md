# JS30-4 Array Cardio Day 1

## Important Point
- Array prototype method: `sort`, `map`, `filter`, `reduce`
- 可把資料做過濾或加工處理
- 取得/設置 HTML DOM 裡的內文: `element.textContent`

## Operational Process
1. 使用`filter()`，取得出生在某一個世紀的人們
2. 使用`map()`，取出每個人的 fullName 之陣列集合
3. 使用`sort()`，依照出生日期做排序
4. 使用`reduce()`，加總每個人的存活年紀，回傳總數字
5. 依照存活年紀做排序
6. 需要去別的網站操作的
7. 依照 last name 做排序
8. 取得陣列裡的各個東西的總數，轉換成物件`{東西： 總數目}`

## Learning
1. Array prototype method，以下這些方法的參數都是放入 callback function
- `sort()`
  - 參數 : `function(a, b) {}`
  - 功能 : 把陣列做比較後再排序
  - [Array.prototype.sort() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

- `map()`
  - 參數 : `function(currentValue, index, array) {}`
  - 功能 : 修改陣列的每個內容值
  - [Array.prototype.map() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

- `filter()`
  - 參數 : `function(currentValue, index, array) {}`
  - 功能 : 過濾陣列，符合條件設置回傳 true，否則設置回傳 false
  - [Array.prototype.filter() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

- `reduce()`
  - 參數 1 : `function(total, currentValue, index, array) {}`
  - 參數 2 : `initialValue` 初始值
  - 功能 : 把陣列做累計值處理，需設置初始值後再開始累計
  - [Array.prototype.reduce() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)

1. 取得/設置 HTML DOM 裡的內文: `element.textContent`

2. 使用 `console.table()`
  - 以表格的形式來顯示 object & array 的值

## Extended Thinking
- object & array 的表格形式，可以直接顯示在網頁畫面上，代替 `console.table()` 功能
