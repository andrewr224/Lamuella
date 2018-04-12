const about = (() => {
  const container = document.querySelector('#container');

  let addContent = (content) => {
    container.appendChild(content);
  };

  let render = () => {
    let content = document.createElement('div');
    content.classList.add('about');

    let head = document.createElement('h3');
    head.textContent = 'About Us';

    let about1 = document.createElement('p');
    about1.textContent = "Lamuella Restaurant combines an inspired menu with a casually sophisticated setting in a historic downtown main street building. It is the creation of Arthur Dent, the Sandwich Maker, and reflects his passion for cooking with a diverse and inspired menu of sandwiches.";

    let quote = document.createElement('blockquote');
    quote.textContent = "Lamuella is about the combined efforts of chefs, cooks, servers, farmers, vineyards, and brewers and I see that partnership extending to our guests by providing the highest quality food and service in a warm and welcoming environment.";

    let author = document.createElement('small');
    author.classList.add('author');
    author.textContent = "- Arthur Dent, Executive Chef, Cook, Server, Owner";

    let about2 = document.createElement('p');
    about2.textContent = "The restaurant is located on Lamuella, an idyllic planet on which days last leisurely 25-hours, plenty enough for a good sleep, and the year last exactly 300 days (so no messing around that, either) \
It is home to humanoids, migrating Perfectly Normal Beasts - main ingredient of the sandwich, and Pikka Birds.";
    let figure = document.createElement('figure');

    let img = document.createElement('img');
    img.src = 'assets/arthur.jpg';
    img.alt = 'Arthur Dent';

    let caption = document.createElement('figcaption');
    caption.textContent = 'Arthur Dent, The Sandwich Maker';

    figure.appendChild(img);
    figure.appendChild(caption);

    content.appendChild(head);
    content.appendChild(about1);
    content.appendChild(quote);
    content.appendChild(author);
    content.appendChild(about2);
    content.appendChild(figure);

    addContent(content);
  };

  return { render };
})();

export default about;
