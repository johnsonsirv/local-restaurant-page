const foodMenuItems = () => {
  let html = '';
  html = `<div class="food-menu">
            <div class="card">Menu 1</div>
            <div class="card">Menu 1</div>
            <div class="card">Menu 1</div>
            <div class="card">Menu 1</div>
            <div class="card">Menu 1</div>
            <div class="card">Menu 1</div>
            <div class="card">Menu 1</div>
            <div class="card">Menu 1</div>
            <div class="card">Menu 1</div>
          </div>`;
  return html;
};

const foodMenu = (container) => {
  const element = container;
  element.innerHTML = foodMenuItems();
};

export default foodMenu;
