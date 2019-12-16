import mapPlaceholderImg from '../images/map-locator.png';
import emailImg from '../images/email.png';
import phoneImg from '../images/phone.png';

const contactInfo = () => {
  let html = '';
  html = `<div class="page">
            <header>Contact Us</header>
            <p><img src="${mapPlaceholderImg}" alt="address" class="icon">
            2 New Haven, Enugu State, Nigeria 44100
            </p>
            <p><img src="${emailImg}" alt="address" class="icon">
            info@ntachiosa.com
            </p>
            <p><img src="${phoneImg}" alt="address" class="icon">
            +234 - 708 7899 6789
            </p>
          </div>`;
  return html;
};

const contactUs = (container) => {
  const element = container;
  element.innerHTML = contactInfo();
};

export default contactUs;
