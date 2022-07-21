import logo from './serve-food.png';

const home = function() {
  const logoElem = document.createElement('div');
  const titleElem = document.createElement('div');
  const title = document.createElement('h1');
  const descrElem = document.createElement('div');
  const description = document.createElement('p');
  const description2 = document.createElement('p');
  
  const foodLogo = new Image();
  foodLogo.src = logo;
  logoElem.appendChild(foodLogo);
  logoElem.classList.add('logo');

  title.textContent = 'Restaurant chez Loutje';
  titleElem.appendChild(title);
  titleElem.classList.add('title');

  description.textContent = "We specialize in delicious food featuring fresh ingredients and masterful preparation by our culinary team. Whether you\’re ordering a multi-course meal or grabbing a drink and pizza at the bar, our lively, casual yet upscale atmosphere makes it perfect for dining with friends, family, clients and business associates."
  description2.textContent = "The approach to the menu was easy. We had no interest in trying to reinvent food. We went with choices that were popular catering requests — basic, down-home style — just from a wide range of regions. We are known for our generous portions of BBQ, Southern, Cajun/Creole meals, plus a touch of Caribbean fun. We will tell you now \– save room for dessert!"
  descrElem.appendChild(description);
  descrElem.appendChild(description2);
  descrElem.classList.add('description');

  const elemArray = [];
  elemArray.push(logoElem, titleElem, descrElem);
  const content = document.querySelector('#content');
  elemArray.forEach(elem => content.appendChild(elem));
};

export default home;