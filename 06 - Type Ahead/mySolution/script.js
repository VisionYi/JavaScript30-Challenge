const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const search = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

/**
 * 當打字輸入 input search 就立即顯示 suggestions 的清單
 *
 * 1. 使用 fetch 取得遠端 API 或 JSON 的資料內容
 * 2. 綁定監聽事件在 input search 上，取得搜尋所輸入的字
 * 3. 使用輸入的字，過濾資料的內容
 * 4. 再把內容變成網頁畫面 list 顯示出來
 * 5. 最後，把每筆資料中要搜尋的那個字標註起來
 */

function getMatchCity(citiesArr, word = '') {
    return citiesArr.filter((item) => {
        const regex = new RegExp(word, 'gi');
        return item.city.match(regex) || item.state.match(regex);
    });
}

function getHTMLCity(citiesArr, word = '') {
    return citiesArr.map((item) => {
        const regex = new RegExp(`(${word})`, 'gi');
        const cityName = item.city.replace(regex, '<span class="hl">$1</span>');
        const stateName = item.state.replace(regex, '<span class="hl">$1</span>');
        const formatPopulation = new Intl.NumberFormat().format(item.population);

        return `
            <li>
                <span class="city">${cityName}, ${stateName}</span>
                <span class="population">${formatPopulation}</span>
            </li>
        `;
    }).join('');
}

function displayHTML(citiesArr, word = '') {
    const matchCities = getMatchCity(citiesArr, word);
    const htmlList = getHTMLCity(matchCities, word);
    suggestions.innerHTML = htmlList;
}

function HandleFetchData(data) {
    const cities = [];
    cities.push(...data);

    search.disabled = false;
    search.placeholder = 'City or State';
    search.addEventListener('keyup', () => displayHTML(cities, search.value));

    // 防止按下 Enter 鍵執行 submit 的動作 (重新載入頁面)
    search.addEventListener('keypress', (ev) => {
        if (ev.keyCode === 13) {
            ev.preventDefault();
        }
    });
}

search.disabled = true;
search.placeholder = 'Loading...';

fetch(endpoint)
    .then(response => response.json())
    .then(HandleFetchData);
