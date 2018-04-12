const menu = (() => {
  const container = document.querySelector('#container');
  const meals = [
    {
      'name': 'Sandwich',
      'desc': 'The very best sandwich created by Sandwich Maker himself!',
      'imgs': 'assets/sandwich.jpg',
      'imga': 'Gorgeous sandwich'
    },
    {
      'name': 'Steak',
      'desc': 'Supreme steak of a perfectly normal beast.',
      'imgs': 'assets/steak.jpg',
      'imga': 'Juicy steak'
    },
    {
      'name': 'Pizza',
      'desc': 'Pizza. What else should we add?',
      'imgs': 'assets/pizza.jpg',
      'imga': 'Delicious Pizza'
    }
  ];

  let addContent = (content) => {
    container.appendChild(content);
  };

  let buildItem = (item) => {
    let box = document.createElement('div');
    box.classList.add('item');

    let title = document.createElement('h4');
    let desc  = document.createElement('p');
    let img   = document.createElement('img');

    title.textContent = item['title'];
    desc.textContent  = item['desc'];
    img.src           = item['imgs'];
    img.alt           = item['imga'];

    box.appendChild(title);
    box.appendChild(img);
    box.appendChild(desc);

    return box;
  };

  let render = () => {
    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    let head = document.createElement('h3');
    head.textContent = "Today's menu:";

    menuContainer.appendChild(head);

    meals.forEach(item => {
      menuContainer.appendChild(buildItem(item));
    });

    addContent(menuContainer);
  };

  return { render };
})();

export default menu;
