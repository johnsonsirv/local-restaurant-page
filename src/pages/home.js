const homeContent = () => {
  let html = '';
  html = `<div class="page">
            <header>About Us</header>
            <p><u>Ntachi-Osa</u> is a local name meaning - <i>Eat enough, to prevent <u>Ulcer disease</u>.</i></p>
          </div>`;
  return html;
};

const homePage = (container) => {
  const element = container;
  element.innerHTML = homeContent();
};

export default homePage;
