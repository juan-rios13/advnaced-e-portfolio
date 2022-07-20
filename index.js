 // temaplete id: template_43pki0v
 //service id: service_u1zr2ee
 // public key: L2fNzBfAYvu2Hhepv

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