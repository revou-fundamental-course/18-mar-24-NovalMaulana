
let indexSlide = 1;
showSlide(1);

function nextSlide(n) {
    showSlide(indexSlide += n);
}

function showSlide(n) {
    let listImage = document.getElementsByClassName('idol');
    if (n > listImage.length) indexSlide = 1;

    let index = 0;
    while (index < listImage.length) {
        listImage[index].style.display = 'none';
        index++;
    }

    listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => {
    nextSlide(1);
}, 1000);

function validateForm() {
    var name = document.forms["myForm"]["userme"].value;
    var email = document.forms["myForm"]["email"].value;
    var message = document.forms["myForm"]["messagess"].value;
    if (name == "" || email == "" || message == "") {
      alert("Please fill in all the fields.");
      return false;
    }
  }