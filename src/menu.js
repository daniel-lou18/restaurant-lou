import logo from './serve-food.png';

const menu = function() {
  const logoElem = document.createElement('div');
  const titleElem = document.createElement('div');
  const title = document.createElement('h1');
  const descrElem = document.createElement('div');
  const food = document.createElement('div');
  const price = document.createElement('div');
  
  const foodLogo = new Image();
  foodLogo.src = logo;
  logoElem.appendChild(foodLogo);
  logoElem.classList.add('logo');

  title.textContent = 'MENU';
  titleElem.appendChild(title);
  titleElem.classList.add('title');

  descrElem.appendChild(food);
  descrElem.appendChild(price);
  descrElem.classList.add('menu-content', 'description');

  let foodList = "arrowhead arrowroot artichokes artificial arugula ascidians asparagus avocados baby babyfood bacon bagel bagels baking balls balsam-pear bamboo bananas bar barbecue barley bars basil bean beans"
  let priceList = "8 24 15 15 40 26 14 22 21 43 12 25 43 12 35 21 35 42 7 10 42 9 37 19 20"
  function addToMenu(elem, list, className) {
    let array = list.split(" ");
    array.forEach(function(item) {
      let para = document.createElement('p');
      para.textContent = item;
      para.classList.add(className);
      elem.appendChild(para);
    })
  };
  addToMenu(food, foodList, 'food');
  addToMenu(price, priceList, 'price');

  const elemArray = [];
  elemArray.push(logoElem, titleElem, descrElem);
  const content = document.querySelector('#content');
  elemArray.forEach(elem => content.appendChild(elem));
};

export default menu;