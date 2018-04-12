const contact = (() => {
  const container = document.querySelector('#container');

  let addContent = (content) => {
    container.appendChild(content);
  };

  let clearContainer = () => {
    container.textContent = '';
  };

  let clearTab = () => {
    document.querySelector('.active').classList.toggle('active');
  };

  let highlightTab = () => {
    document.querySelector('#contact').classList.add('active');
  };

  let prepare = () => {
    clearContainer();
    clearTab();
    highlightTab();
  };

  let render = () => {
    prepare();

    let content = document.createElement('div');
    content.classList.add('contact');

    let head = document.createElement('h3');
    head.textContent = 'Contact Us';

    let visitUs = document.createElement('h2');
    visitUs.textContent = 'Visit us at our main site';

    let address1 = document.createElement('p');
    address1.textContent = 'Lamuella';

    let address2 = document.createElement('p');
    address2.textContent = 'Main Village';

    let address3 = document.createElement('p');
    address3.textContent = 'Main Street, 42';


    content.appendChild(head);
    content.appendChild(visitUs);
    content.appendChild(address1);
    content.appendChild(address2);
    content.appendChild(address3);

    addContent(content);
  };

  return { render };
})();

export default contact;
