const template = document.getElementById("template-grid").content;
const modalImage = document.getElementById("modalImage");
const piemodal = document.getElementById("piemodal");
const modal = document.getElementById("myModal");
class Card {
  constructor(title, link){
    this.name = title;
    this.link = link;
  }

  getTemplete(){
    return template.querySelector(".grid").cloneNode(true);
  }

  removeCard() {
    this.cardElement.remove();
  }
  openModal(){
    modalImage.src = this.link;
    piemodal.textContent = this.name;
    modal.style.display = "block";

    window.addEventListener('click', (event) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  }

  
  setEventListeners() {
    // Delete card functionality
    this.deleteCard.addEventListener("click", () => {
      this.removeCard(); 
    });
    this.img.addEventListener('click', () => {
      this.openModal();
    });


    // Logica del boton de me gusta
    let isHeartFull = false;
    this.likeButton.addEventListener("click", () => {
      const heartSymbol = this.likeButton.querySelector('.heart-symbol');

      if (isHeartFull) {
        heartSymbol.innerHTML = '&#x2661;'; // Empty heart
      } else {
        heartSymbol.innerHTML = '&hearts;'; // Full heart
      }

      isHeartFull = !isHeartFull;
    });
  }


  setProperties(){
    this.cardElement = this.getTemplete();
    this.img = this.cardElement.querySelector("img.galery");
    this.title = this.cardElement.querySelector("h2.spot");
    this.deleteCard = this.cardElement.querySelector(".btnbin");
    this.likeButton = this.cardElement.querySelector(".heart");
    this.pieimage = this.cardElement.querySelector(".pieimage");
    this.title.textContent = this.name;
    this.img.src = this.link;
    this.img.alt = this.name;
  }
  getCard(){
    this.setProperties();
    this.setEventListeners();
    return this.cardElement;
  }
}
export default Card