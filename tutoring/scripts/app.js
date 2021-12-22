let customalert = document.getElementById("custom-alert");
const user_input = document.getElementById("results");

new URLSearchParams(window.location.search).forEach((value, name) => {
  user_input.append(`${name} : ${value}`)
  user_input.append(document.createElement('br'))
  user_input.append(document.createElement('br'))
})

function showAlert(){
  // let user_name = document.querySelector("full_name").nodeValue;
  customalert.style.display='block';
}

function hideAlert(){
  customalert.style.display='none';
}

hideAlert();