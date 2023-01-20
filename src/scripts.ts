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
const dataUrl = "https://rickandmortyapi.com/api/character/?page=1"

document.addEventListener("DOMContentLoaded", function () {
  getData();
});



btn.addEventListener("click", () => getData());

const getData = () => {
  fetch("https://rickandmortyapi.com/api/character/?page=1")
  .then((res) => res.json())

  .then((data) => {
    const arr: ArrOfObj[] = data.results;
    arr.forEach((el) => {
      const card = document.createElement("div");
      card.classList.add("card-block");
      card.innerHTML = `
        <img class="img-responsive" src=${el.image}>
        <p class="bold text-style">${el.name}</p>
        <p class="bold">${el.species} - ${el.status}</p>
        <p class="bold">Origins: ${el.origin.name}</p>
        <p class="bold">location: ${el.location.name}</p>`;
      wrapper.append(card);
      console.log(el);
    });
  });

};
