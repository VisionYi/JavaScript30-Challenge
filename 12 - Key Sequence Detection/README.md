# JS30-12 Key Sequence Detection

## Important Point
- 使用`Array.splice()`做序列修改與限制字數
- 使用 ES6 Spread 讓字串分解為單一字元

## Operational Process
- 偵測輸入的密語是否有配對成功
  - 成功就會顯示圖示
- 輸入密語時就會自動偵測
  - 若超過設定的字數時，去除最前面的字。(限制字數輸入)

## Learning
1. 使用 `Array.splice()` 做序列修改與限制字數

2. 使用 ES6 Spread 讓字串分解為單一字元後組成一個陣列
  -  `[...'string']` 同等於 `['s', 't', 'r', 'i', 'n', 'g']`
