 // Define Global Variables 

const sections = document.querySelectorAll('section');
const fragment = document.createDocumentFragment();

// creating list items 
/* followed instructions from one of the tutor`s webinars : 
 https://udacity.zoom.us/rec/play/TosjkZSUE0no7zGDEAKNJe7Oaw26Ic-Vpese5z2wLpQsKMHAdtJ_8aU-ybQHbXC-tCF-dCuFu5TELdmW.Xt7yjuQKzgjBZn6E?continueMode=true&_x_zm_rtaid=d3LKyTaDRomtA9pbZDTAaQ.1626277294216.b53654a0635966712058cd4cc8a93ae3&_x_zm_rhtaid=943
*/
sections.forEach((section) => {
    let listItem  = document.createElement('li') ;
    let link = section.getAttribute("id");
    let text = section.getAttribute("data-nav");
    listItem.innerHTML = `<a href="#${link}">${text}</a>`; 
    listItem.classList.add("menu__link");  // a class added to all list items for styling 

    // Event listener to target the chosen section with a smooth scrolling 
    listItem.addEventListener('click',(x)=> {
        x.preventDefault();  // preventing the default action from the anchor element ; to allow the event listener to happen  
        document.getElementById(link).scrollIntoView({behavior: "smooth"});  // targeting the id of the corresponing section in the loop 
              })
    fragment.appendChild(listItem);
        });

// appending all new created list items to the ul element  
document.getElementById('navbar__list').appendChild(fragment) ;


// start  intersection observer 

/* followed instructions from the following video :
 https://www.youtube.com/watch?v=gQ8WggeHoJU&t=373s
 and the MDN page  : 
  https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
  https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry/isIntersecting
*/

    // trigger options 
const options ={
       root: null ,
       rootMargin: '0px' ,
       threshold : 0.7 
}
    // defining a callback function , executed when the trigger occurs
const func = function (sections) {
    sections.forEach((section)=>{
        if (section.isIntersecting) {
            section.target.classList.add("your-active-class");   //class added to intersected section
        }
        else {
            section.target.classList.remove("your-active-class"); //class removed if not intersected 
        }
    })
}

    // defining intersection observer variable
const observer = new IntersectionObserver(func ,options) ;
sections.forEach((section) => {  //looping over all sections to observe 
    observer.observe(section) ;
});

// end  intersection observer 

