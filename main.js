
const loading = document.querySelector('#loading')

document.onreadystatechange = function () {
    if (document.readyState == "interactive" || document.readyState == "complete") {

        loading.style.opacity = 0;
        loading.style.visibility = 'hidden';

    }
}



// let inputs = document.querySelectorAll('input');

// for(i=0;i<inputs.length;i++) {
//     inputs[0].addEventListener('click', function() {
//         inputs[1].removeAttribute('required')
//     })
//     inputs[1].addEventListener('click', function() {
//         inputs[0].removeAttribute('required')
//     })
// }

let windowPosition;
const parallaxImg = document.querySelector('.desktop_intro')

document.body.onscroll = function() {
    windowPosition = window.pageYOffset;
    parallaxImg.style.transform = "translateY( -" + windowPosition * 1.25 + "px)";
}

function success() {
    const button = document.querySelector('form button');
    const input = document.querySelector('form input');

    button.innerText = "ENVIADO!"

    for(i=0;i<inputs.length;i++) {
        inputs[i].value = '';
    }

}

const handleSubmit = (e) => {
    dataLayer.push({event:'Enviado'});
    e.preventDefault()
    let myForm = document.getElementById('form');
    let formData = new FormData(myForm)
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    }).then(() => success()).catch((error) =>
      alert(error))
  }

document.querySelector("form").addEventListener("submit", handleSubmit);


