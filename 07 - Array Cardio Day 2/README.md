# JS30-7 Array Cardio Day 2

## Important Point
- Array prototype method: `some`, `every`, `find`, `findIndex`
- Array prototype method: `splice`, `slice`

## Operational Process
1. 使用 `some()`，檢查資料內容是否至少有一個符合條件

2. 使用 `every()`，檢查資料內容是否都符合條件

3. 使用 `find()`，找尋一個 ID 號碼相符的資料提取出來

4. 使用 `findIndex()`，找尋一個 ID 號碼相符的資料，提取它是排 index 第幾順位

5. 同上，把此 ID 的資料從原本的陣列資料裡刪除掉

## Learning
1. Array prototype method，以下這些方法的參數都是放入 callback function

- `some()`
  - 參數 : `function(currentValue, index, array) {}`
  - 功能 : 陣列裡至少有一個符合條件就返回 `true`
  - [Array.prototype.some() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)

- `every()`
  - 參數 : `function(currentValue, index, array) {}`
  - 功能 : 陣列裡必須都符合條件才會返回 `true`
  - [Array.prototype.every() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

- `find()`
  - 參數 : `function(currentValue, index, array) {}`
  - 功能 : 從最前頭開始找尋，只要找到有符合條件的資料就停止，**返回此完整資料**
  - [Array.prototype.find() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)

- `findIndex()`
  - 參數 : `function(currentValue, index, array) {}`
  - 功能 : 從最前頭開始找尋，只要找到有符合條件的資料就停止，**返回此資料的 index**
  - [Array.prototype.findIndex() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

1. Array prototype method，以下是陣列的**切片功能**

- `splice(start, deleteCount, item1...)`
  - item1... 是新增的內容
  - 功能 : 刪除或新增陣列裡的內容，會直接修改原本的陣列
  - [Array.prototype.splice() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)

- `slice(begin, end)`
  - 功能 : 取得陣列裡的內容，從 begin (index) 到 end 的內容， begin 可以是負值(從最後開始)
  - [Array.prototype.slice() - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
