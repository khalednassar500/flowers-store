/*-- on scroll window --*/
window.onscroll = () => {
  if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
    document.querySelector('nav').classList.add('sticky');
  }else {
    document.querySelector('nav').classList.remove('sticky');
  }
}

/*----------------------------------------------------------*/
const PRODUCT = {
  'Item1': {
    'link': 'img1.jpeg',
    'price': 20
  },
  'Item2': {
    'link': 'img2.jpeg',
    'price': 10
  },
  'Item3': {
    'link': 'img3.jpeg',
    'price': 18
  },
  'Item4': {
    'link': 'img4.jpeg',
    'price': 40
  },
  'Item5': {
    'link': 'img5.jpeg',
    'price': 25
  },
  'Item6': {
    'link': 'img6.jpeg',
    'price': 22
  },
  'Item7': {
    'link': 'img7.jpeg',
    'price': 25
  },
  'Item8': {
    'link': 'img8.jpeg',
    'price': 12
  },
  'Item9': {
    'link': 'img9.jpeg',
    'price': 11
  },
  'Item10': {
    'link': 'img10.jpeg',
    'price': 30
  },
  'Item11': {
    'link': 'img11.jpeg',
    'price': 33
  },
  'Item14': {
    'link': 'img14.jpg',
    'price': 23
  },
  'Item15': {
    'link': 'img15.jpeg',
    'price': 8
  },
  'Item16': {
    'link': 'img16.jpeg',
    'price': 20
  },
  'Item17': {
    'link': 'img17.jpeg',
    'price': 29
  },
  'Item18': {
    'link': 'img18.jpeg',
    'price': 28
  },
  'Item19': {
    'link': 'img19.jpeg',
    'price': 34
  },
  'Item20': {
    'link': 'img20.jpeg',
    'price': 26
  },
  'Item21': {
    'link': 'img21.jpeg',
    'price': 27
  },
  'Item22': {
    'link': 'img22.jpeg',
    'price': 40
  },
  'Item23': {
    'link': 'img23.jpeg',
    'price': 50
  },
  'Item24': {
    'link': 'img24.jpeg',
    'price': 33
  },
  'Item25': {
    'link': 'img25.jpeg',
    'price': 44
  },
  'Item26': {
    'link': 'img26.jpeg',
    'price': 43
  },
  'Item27': {
    'link': 'img27.jpeg',
    'price': 34
  },
  'Item28': {
    'link': 'img28.jpeg',
    'price': 36
  },
  'Item29': {
    'link': 'img29.jpeg',
    'price': 38
  },
  'Item30': {
    'link': 'img30.jpeg',
    'price': 37
  },
  'Item31': {
    'link': 'img31.jpeg',
    'price': 42
  }
}
const ALL_ITEMS = Object.keys(PRODUCT);

/*-- open and close shearch bar behavior --*/
const SEARCH_BAR = document.getElementById('search_bar');
const SEARCH_RESULT = document.getElementById('search_resualt_container');

function openSearch() {
  SEARCH_BAR.classList.add('show');
  SEARCH_BAR.firstElementChild.focus();
  document.body.style.cssText = 'overflow-y: hidden;';
}
function closeSearch() {
  SEARCH_BAR.classList.remove('show');
  SEARCH_BAR.firstElementChild.value = '';
  SEARCH_RESULT.parentElement.classList.remove('show');
  document.body.style.cssText = 'overflow-y: visible;';
}
/*-- Display search result values --*/
function search(e) {
  SEARCH_RESULT.innerHTML = '';
  let tValue = e.target.value
  if (tValue) {
    SEARCH_RESULT.parentElement.classList.add('show');
    let result = '';
    for (let x of ALL_ITEMS) {
      if (x.toLocaleLowerCase().includes(tValue.toLocaleLowerCase())) {
        result += `
        <div class='item' id=${x}>
          <img class='item-img' src='./images/${PRODUCT[x].link}' alt='flower'>
          <h3 class='item-title'>${x}.</h3>
          <p class="price">Price: ${PRODUCT[x].price}$.</p>
          <button onclick='add2list(this)'>ADD TO CARD <img src="./images/icons/shopping.png" alt='shoping card flower'></button>
        </div>`;
      }
    }
    SEARCH_RESULT.innerHTML = result ? result :"<p id='false'>There is no matching result</p>";
  }else {
    SEARCH_RESULT.parentElement.classList.remove('show');
  }
}
SEARCH_BAR.addEventListener('keyup', search)
/*-- create a dynamic style for header images --*/
const ELE_WITH_S1_CLASS = [...document.getElementsByClassName('s1')];
const ELE_WITH_S2_CLASS = [...document.getElementsByClassName('s2')];

let className1 = ['right', 'back', 'left', 'top', 'bottom', 'front'];
let className2 = ['bottom', 'top', 'left', 'back', 'right', 'front'];
let currentClass1 = 'front';
let currentClass2 = 'front';

let counter = 0;

setInterval(() => {
  if (counter == 6) {
    counter = 0;
  }
  
  ELE_WITH_S1_CLASS.forEach((ele) => {
    ele.classList.add(`show-${className1[counter]}`)
    ele.classList.remove(`show-${currentClass1}`);
  })
  ELE_WITH_S2_CLASS.forEach((ele) => {
    ele.classList.add(`show-${className2[counter]}`)
    ele.classList.remove(`show-${currentClass2}`);
  })

  currentClass1 = className1[counter];
  currentClass2 = className2[counter];
  ++counter;
}, 3000);

/*-- sort image in a pagination style --*/

const SORT_RANDOM = (arr) => {
  return [...arr].sort(() => Math.random() - 0.5);
}
const RANDOMLY_ITEMS = SORT_RANDOM(ALL_ITEMS);
const PRODUCTS_CONTAINER = document.getElementById('collection');

function displayItems(num) {
  PRODUCTS_CONTAINER.innerHTML = '';
  let fragment = document.createDocumentFragment();

  for (let x = num; x <= num + 11; x++) {
    if (!RANDOMLY_ITEMS[x]) {
      break;
    }
    
    let div = document.createElement('div');
    div.setAttribute('class', 'item');
    div.setAttribute('id', RANDOMLY_ITEMS[x])
    div.innerHTML += `<img class='item-img' src='./images/${PRODUCT[RANDOMLY_ITEMS[x]].link}' alt='flower'>
                      <h3 class='item-title'>${RANDOMLY_ITEMS[x]}.</h3>
                      <p class="price">Price: ${PRODUCT[RANDOMLY_ITEMS[x]].price}$.</p>
                      <button onclick='add2list(this)'>ADD TO CARD <img src="./images/icons/shopping.png" alt='shoping card flower'></button>`
    fragment.appendChild(div);
  }

  PRODUCTS_CONTAINER.appendChild(fragment)
};
displayItems(0);
/*
const INPUT_NUM = document.getElementById('input_num');


function targetItem(e) {
console.log(Number(e.target.value) )
  if(![0, 1, 2, 3, 4, 5, 6, 7, 8, 9].includes(Number(e.key)) || Number(e.target.value) < 0 || Number(e.target.value) >= MAX_PAGINATION+1) {
    e.preventDefault();
    e.target.value = currentPage;
    return;
  }
  if (e.key == 'Enter' && Number(e.target.value) <= MAX_PAGINATION && e.target.value && Number(e.target.value) >= 1) {
    displayItems((Number(e.target.value) * 12) - 12);
    currentPage = Number(e.target.value);
  }/*else if(e.key == 'Enter') {
    console.log('enter a vaild number' + Number(e.target.value))
  }
  if ( Number(e.target.value) <= 0 || Number(e.target.value) > MAX_PAGINATION ) {
    console.log(99999)
  }
}
INPUT_NUM.addEventListener('keyup', targetItem);
*/
const MAX_PAGINATION = (ALL_ITEMS.length % 12 ? (parseInt(ALL_ITEMS.length / 12)) + 1 : ALL_ITEMS.length / 12);
document.getElementById('max_num').textContent = MAX_PAGINATION;
let currentPage = 1;

function next(i) {
  let x = currentPage + 1;

  if (x <= MAX_PAGINATION) {
    document.getElementById('min_num').textContent = x;
    currentPage = x;
    displayItems((x * 12) - 12);
    document.getElementById('prev').classList.remove('disabled');
  }
  if (x == MAX_PAGINATION) {
    i.classList.add('disabled');
  }
}
function prev(i) {
  let x = currentPage - 1;

  if (x >= 1) {
    document.getElementById('min_num').textContent = x;
    currentPage = x;
    displayItems((x * 12) - 12);
    document.getElementById('next').classList.remove('disabled');
  }
  if (x == 1) {
    i.classList.add('disabled');
  }
}

/*-- On click "add to card" button --*/
const SHOPING_LIST = {};

function add2list(x) {
  let item = x.parentElement.id;
  if (!Object.keys(SHOPING_LIST).includes(item)) {
    SHOPING_LIST[item] = Object.create(PRODUCT[item]);
    SHOPING_LIST[item].num = 1;
    document.getElementById('shopping_bag_length').innerHTML = Object.keys(SHOPING_LIST).length;
  }
}

/*-- when open shopping list --*/
const SHOPPING_BAG = document.getElementById('shopping_bag');
let totalPrice = 0;

function openShoppingBag() {
  totalPrice = 0;
  SHOPPING_BAG.classList.add('show');
  document.body.style.cssText = 'overflow-y: hidden;';

  let div = '';
  let shoppingListIds = Object.keys(SHOPING_LIST);
  for (let x = 0; x <= shoppingListIds.length-1; x++) {
    div += `<div class="item" id="${shoppingListIds[x]}">
    <img class="item-img" src="./images/${SHOPING_LIST[shoppingListIds[x]]['link']}" alt="flower">
    <p class="item-title" title='Bouquet110'>${shoppingListIds[x]}</p>
    <p class="price">${SHOPING_LIST[shoppingListIds[x]]['price']}$.</p>
    <input type="number" min='1' value="${SHOPING_LIST[shoppingListIds[x]]['num']}" onkeyup='increasePrice(this)' onclick='increasePrice(this)'>
  </div>`

  totalPrice += SHOPING_LIST[shoppingListIds[x]]['price'];
  }
  document.getElementById('items').innerHTML = div;
  
  document.getElementById('total_price').textContent = totalPrice;
}
function closeShoppingBag() {
  SHOPPING_BAG.classList.remove('show');
  document.body.style.cssText = 'overflow-y: visible;';
}

function increasePrice(x) {
  x.parentElement.children[2].textContent = PRODUCT[x.parentElement.id].price * x.value + '$'; 
  SHOPING_LIST[x.parentElement.id].price = PRODUCT[x.parentElement.id].price * x.value ;
  SHOPING_LIST[x.parentElement.id].num = x.value;

  let t = 0;
  for (let y of Object.keys(SHOPING_LIST)) {
    t += SHOPING_LIST[y].price;
  }
  document.getElementById('total_price').textContent = t;
}

let x = document.querySelectorAll('#items .item .price');

/*-- responsive design for small devices --*/
function navRes() {
  document.querySelector('#nav_list').classList.toggle('res')
}