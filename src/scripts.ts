interface ArrOfObj {
  created: string;
  gender: string;
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
}

const wrapper = document.querySelector("[data-insert-cards]");
const btn = document.querySelector("[data-btn]");
const dataUrl = "https://rickandmortyapi.com/api/character/?page="
let counter = 1;

document.addEventListener("DOMContentLoaded", function () {   //when Web Page Start, load getData(counter)
  getData(counter);
});

btn.addEventListener("click", () => getData(counter));  //  button click + getData

const getData = (page: number) => {               // 
  fetch(dataUrl + page)                           // fetch() 
  .then((res) => res.json())

  .then((data) => {
    const arr: ArrOfObj[] = data.results;         // create new arr only 1 of parts (data.results)
    arr.forEach((el) => {                         // run throw the array (Object)
      const card = document.createElement("div"); // create div in HTML
      card.classList.add("card-block");           // add class 
      // push all in HTML
      card.innerHTML = `                          
        <img class="img-responsive" src=${el.image}>
        <p class="bold text-style">${el.name}</p>
        <p class="bold">${el.species} - ${el.status}</p>
        <p class="bold">Origins: ${el.origin.name}</p>
        <p class="bold">location: ${el.location.name}</p>`;
      wrapper.append(card);// append() add ich card (forEach - element) in section
      counter++                                   // page number 2, 3, 4 ...
      // console.log(el);

    });
  });

};
