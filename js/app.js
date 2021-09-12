 // Define Global Variables 

const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

// creating list items 

sections.forEach((section) => {
    let listItem  = document.createElement('li') ;
    let link = section.getAttribute("id");
    let text = section.getAttribute("data-nav");
    listItem.innerHTML = `<a href="#${link}">${text}</a>`; 

    // Event listener with a scroll
    listItem.addEventListener('click',(x)=> {
        x.preventDefault();
        document.getElementById(link).scrollIntoView({behavior: "smooth"});
              })
    fragment.appendChild(listItem);
        });
        
// appending all changes to the document 
document.getElementById('navbar__list').appendChild(fragment) ;

