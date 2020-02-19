let item = document.querySelector('.main__list-item');
let mainTitle = document.querySelector('.main__title');
let mainList = document.querySelector('.main__list');
let main = document.querySelector('.main');
let mainLink1 = document.querySelector('.main__list-item-link--one');
let mainLink2 = document.querySelector('.main__list-item-link--two');
let mainLink3 = document.querySelector('.main__list-item-link--three');

function accordeonTeam(){
  const members = document.querySelectorAll(".main__list-item");
  const team = document.querySelector(".main__list");

  team.addEventListener("click" , function(event){
      event.preventDefault(); 
      const target = event.target;
      mainTitle.classList.add('main__title--active');
      mainList.classList.add('main__list--active');
      mainList.classList.add('info__menu');
      main.classList.add('main--active'); 
      mainLink1.classList.add('main__list-item-link--active');
      mainLink2.classList.add('main__list-item-link--active');
      mainLink3.classList.add('main__list-item-link--active'); 

      if(target.classList.contains("main__list-item-link")){
          const member = target.parentNode; 
          const content = target.nextElementSibling;  
          // const contentHeight = content.firstElementChild.clientHeight;
       
              for (const iterator of members) {
                  if(iterator !== member){
                      iterator.classList.remove("main__list-item--active");
                      // iterator.lastElementChild.style.height= 0;
                  }
              }

              if(member.classList.contains("main__list-item--active")){
                  member.classList.remove("main__list-item--active");
                  // content.style.height = 0;
              }else{
                  member.classList.add("main__list-item--active");
                  // content.style.height = contentHeight + "px";
              }
      }
  });
}

accordeonTeam();
