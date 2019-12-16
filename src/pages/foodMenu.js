import data from '../dataStore/foodlist.xml';

const foodMenuItems = (images, foodList) => {
  let html = '';
  html = '<div class="food-menu">';
  foodList.forEach((food) => {
    html = `${html}
              <div class="card">
                <div class="thumbnail"><img src="${images[food.image[0]].default}" alt="${food.name[0]}" title="${food.name[0]}"></div>
                <div class="info">
                  <p><h3>${food.name[0]}</h3></p>
                  <p>${food.description[0]}</p>
                  <p>Price: ${food.price[0]}</p>
                  <a class="btn-order" href="#">Order</a>
                </div>
              </div>`;
  });
  html = `${html}</div>`;

  return html;
};

const foodMenu = (container, images = null) => {
  const element = container;
  const foodList = Object.values(data.foodlist.food);
  element.innerHTML = foodMenuItems(images, foodList);
};

export default foodMenu;
