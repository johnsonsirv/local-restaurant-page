const homeContent = () => {
  let html = '';
  html = `<div class="page">
            Welcome to Ntachi-Osa (Local name) meaning <i>Eat enough, to prevent Ulcer</i>;
          </div>`;
  return html;
};

const homePage = (container) => {
  const element = container;
  element.innerHTML = homeContent();
};

export default homePage;
