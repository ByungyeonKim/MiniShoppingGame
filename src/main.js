'use strict';

// 제이슨 파일에서 items fetch하기
function loadItems() {
  return fetch('data/data.json')
    .then((response) => response.json())
    .then((json) => json.items);
}

// 주어진 items와 list 업데이트
function displayItems(items) {
  const container = document.querySelector('.items');
  container.innerHTML = items.map((item) => createHTMLString(item)).join('');
}

// 주어진 데이타 item에서 HTML list 생성
function createHTMLString(item) {
  return `
  <li class="item">
     <img src="${item.image}" alt="${item.type}" class="item__thumbnail" />
     <span class="item__description">${item.gender}, ${item.size}</span>
  </li>
  `;
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    // setEventListeners(items);
  })
  .catch(console.log);
