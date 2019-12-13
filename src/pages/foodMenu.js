const foodMenuItems = () => {
  let html = '';
  html = `<div class="food-menu">
            Our Menu;
          </div>`;
  return html;
};

const foodMenu = (container) => {
  const element = container;
  element.innerHTML = foodMenuItems();
};

export default foodMenu;
