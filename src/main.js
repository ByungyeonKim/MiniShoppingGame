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

function onButtonClick(event, items) {
  const dataset = event.target.dataset;
  const key = dataset.key;
  const value = dataset.value;

  if (key == null || value == null) {
    return;
  }

  displayItems(items.filter((item) => item[key] === value));
}

function setEventListeners(items) {
  const logo = document.querySelector('.logo');
  const btns = document.querySelector('.btns');
  logo.addEventListener('click', () => displayItems(items));
  btns.addEventListener('click', (event) => onButtonClick(event, items));
}

// main
loadItems()
  .then((items) => {
    displayItems(items);
    setEventListeners(items);
    console.log(items);
  })
  .catch(console.log);
