const contactInfo = () => {
  let html = '';
  html = `<div class="page">
            Contact Us
          </div>`;
  return html;
};

const contactUs = (container) => {
  const element = container;
  element.innerHTML = contactInfo();
};

export default contactUs;
