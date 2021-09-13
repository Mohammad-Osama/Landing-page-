 // Define Global Variables 

const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

// creating list items 

sections.forEach((section) => {
    let listItem  = document.createElement('li') ;
    let link = section.getAttribute("id");
    let text = section.getAttribute("data-nav");
    listItem.innerHTML = `<a href="#${link}">${text}</a>`; 
    listItem.classList.add("menu__link");

    // Event listener with a scroll
    listItem.addEventListener('click',(x)=> {
        x.preventDefault();
        document.getElementById(link).scrollIntoView({behavior: "smooth"});
              })
    fragment.appendChild(listItem);
        });

// appending all changes to the document 
document.getElementById('navbar__list').appendChild(fragment) ;


// start  intersection observer 

// trigger options 
const options ={
       root: null ,
       rootMargin: '0px' ,
       threshold : 0.7 
}
// defining callback function when trigger occurs
const func = function (sections) {
    sections.forEach((section)=>{
        if (section.isIntersecting) {
            section.target.classList.add("your-active-class");
        }
        else {
            section.target.classList.remove("your-active-class");
        }
    })
}

// definig intersection observer variable
const observer = new IntersectionObserver(func ,options) ;
sections.forEach((section) => {
    observer.observe(section) ;
});

// end  intersection observer 

