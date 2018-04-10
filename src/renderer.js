const renderer = (() => {
  const container = document.querySelector('#content');

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

  let addMenu = (menu) => {
    let head = document.createElement('h3');
    head.textContent = "Today's menu:";

    addContent(head);

    let menuContainer = document.createElement('div');
    menuContainer.classList.add('menu');

    menu.forEach(item => {
      menuContainer.appendChild(buildItem(item));
    });

    addContent(menuContainer);
  };

  return { addMenu };
})();

export default renderer;
