const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const otherButtons = document.querySelectorAll('.add-items button');
const STORAGE_KEY = 'items';

const getItemsData = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
// 隨機取得 5 碼數字加英文組成的，參考: https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
const getRandomId = (number = 5) => Math.random().toString(36).substr(2, number);

/**
 * 規劃程式邏輯，itemsData: 資料庫資料 (使用 localStorage 暫存)，itemsList: HTML DOM
 * 1. 初始化 itemsList HTML
 *      - 取得 itemsData 資料來源
 *      - 把資料轉換成 HTML DOM 放上網頁頁面
 * 2. 新增 item 到 itemsList & itemsData
 *      - 使用 submit 監聽事件綁定在 form 上
 *      - 把 input text 所輸入的資料 text 組成物件 item 格式
 *      - 再把資料轉換成 HTML DOM 放上網頁頁面，繼續接在 itemsList HTML 後面
 *      - 新增入 itemsData
 * 3. 修改 item 其中一筆資料，可做勾選或取消
 *      - 使用 "事件委託 event delegation" 綁定 click 監聽事件在父層元素上
 *      - 取得那筆資料的 id，從 itemsData 中找到相對應的 item 後就做修改
 *      - 再重新存入 itemsData
 *      - 使用 checkbox + CSS 自動渲染頁面
 * 4. 刪除/勾選/取消 全部的 items
 *      - 使用 click 監聽事件綁定在指定的 button 上
 *      - 從 itemsData 取得所有 items，直接對全部操作 刪除/勾選/取消
 *      - 再重新存入 itemsData
 *      - 最後初始化 itemsList HTML，重新渲染頁面
 */

const getHTMLItem = item => `
    <input type="checkbox" id="${item.id}" ${item.done ? 'checked' : ''}/>
    <label for="${item.id}">${item.text}</label>
`;

function initialItemsList(items = []) {
    itemsList.innerHTML = '';

    if (items.length !== 0) {
        itemsList.innerHTML = items.map(item => `<li>${getHTMLItem(item)}</li>`).join('');
    } else {
        itemsList.innerHTML = '<li class="nothing">Nothing of items...</li>';
    }
}

function insertItems(item, items = []) {
    if (items.length === 0) itemsList.innerHTML = '';

    const elementLi = document.createElement('li');
    elementLi.innerHTML = getHTMLItem(item);
    itemsList.appendChild(elementLi);

    items.push(item);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function handleAddItem(ev) {
    // 防止 form 執行預設動作 (重新載入頁面)
    ev.preventDefault();

    const text = this.querySelector('input[name=item]').value;
    const item = {
        text,
        done: false,
        id: getRandomId(),
    };

    insertItems(item, getItemsData());

    // 把 form 裡所有 input 的值都重置
    this.reset();
}

function updateItems(id, items = []) {
    items.forEach((item) => {
        if (item.id === id) {
            item.done = !item.done;
        }
    });
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
}

function handleUpdateItem(ev, targetSelector) {
    // 由於使用 "事件委託 event delegation"，需要找尋內部的目標 Selector
    // 做過濾，把除了被綁定的目標 Selector 以外的東西都過濾掉
    // 此為簡易的解決方法，詳細請看 https://qiutc.me/post/event-delegation.html
    if (!ev.target.matches(targetSelector)) return;

    const element = ev.target;
    updateItems(element.id, getItemsData());
}

function handleButton(ev) {
    ev.preventDefault();
    const items = getItemsData();

    if (this.id === 'delete') items.length = 0;
    if (this.id === 'check') items.forEach((item) => { item.done = true; });
    if (this.id === 'un-check') items.forEach((item) => { item.done = false; });

    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    initialItemsList(items);
}


initialItemsList(getItemsData());
addItems.addEventListener('submit', handleAddItem);
itemsList.addEventListener('click', ev => handleUpdateItem(ev, 'input[type="checkbox"]'));
[...otherButtons].forEach(btn => btn.addEventListener('click', handleButton));
