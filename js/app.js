 // Define Global Variables 

const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

// creating list items 

sections.forEach((section) => {
    let listItem  = document.createElement('li') ;
    let link = section.getAttribute("id");
    let text = section.getAttribute("data-nav");
    listItem.innerHTML = `<a href="#${link}">${text}</a>`;
    fragment.appendChild(listItem);
      });

document.getElementById('navbar__list').appendChild(fragment) ;

