 // temaplete id: template_43pki0v
 //service id: service_u1zr2ee
 // public key: L2fNzBfAYvu2Hhepv

function moveBackground(event){
  const shapes = document.querySelectorAll(".shape")
  const scaleFactor = 1/20;
  const x = event.clientX * scaleFactor;
  const y = event.clientY * scaleFactor;

  for (let i =0; i< shapes.length; ++i){
    const isOdd = i % 2 !==0;
    const boolInt = isOdd ? -1 : 1;
    shapes[i].style.transform= `translate(${x * boolInt}px, ${y * boolInt}px)`
  }
}


 function contact(event) {
    event.preventDefault();
    const loading = document.querySelector(".modal__overlay--loading");
    const success = document.querySelector(".modal__overlay--success");
    loading.classList += " modal__overlay--visible";
    emailjs
      .sendForm(
        "service_u1zr2ee",
        "template_43pki0v",
        event.target,
        "L2fNzBfAYvu2Hhepv"
      )
      .then(() => {
        loading.classList.remove("modal__overlay--visible");
        success.classList += " modal__overlay--visible";
      })
      .catch(() => {
        loading.classList.remove("modal__overlay--visible");
        alert(
          "The email service is temporarily unavailable. Please contact me directly at juan.ray.rios@gmail.com"
        );
      });
  }
let isModalOpen = false;
  function toggleModal(){
    if (isModalOpen){
      isModalOpen = false;
      return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList +="modal--open";
  }