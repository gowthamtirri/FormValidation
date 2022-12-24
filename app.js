document.getElementById("name").addEventListener("blur", validateName);
document.getElementById("zip").addEventListener("blur", validateZip);
document.getElementById("email").addEventListener("blur", validateEmail);
document.getElementById("phone").addEventListener("blur", validatePhone);
document.getElementById("password").addEventListener("blur", validatePassword);
document
  .getElementById("Cpassword")
  .addEventListener("keyup", validateCpassword);

function validateName() {
  const name = document.getElementById("name");
  re = /^[a-zA-Z]{2,15}$/;

  if (!re.test(name.value)) {
    name.classList.add("is-invalid");
  } else {
    name.classList.remove("is-invalid");
    name.classList.add("text-success");
  }
}

function validateZip() {
  const zip = document.getElementById("zip");
  re = /^[0-9]{6}$/;

  if (!re.test(zip.value)) {
    zip.classList.add("is-invalid");
  } else {
    zip.classList.remove("is-invalid");
  }
}

function validateEmail() {
  const email = document.getElementById("email");
  re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]{2,8})([a-zA-Z]{2,5})$/;

  if (!re.test(email.value)) {
    email.classList.add("is-invalid");
  } else {
    email.classList.remove("is-invalid");
  }
}

function validatePhone() {
  const phone = document.getElementById("phone");
  re = /^[0-9]{10}$/;

  if (!re.test(phone.value)) {
    phone.classList.add("is-invalid");
  } else {
    phone.classList.remove("is-invalid");
  }
}
function validatePassword() {
  const password = document.getElementById("password");
  re = /[a-zA-Z0-9]{0,16}[\W]{1,5}/;

  if (!re.test(password.value) || password.value.length < 8) {
    password.classList.add("is-invalid");
  } else {
    password.classList.remove("is-invalid");
  }
}

function validateCpassword() {
  const confirmPassword = document.getElementById("Cpassword");
  const password = document.getElementById("password");
  console.log(password);
  if (confirmPassword.value !== password.value) {
    confirmPassword.classList.add("is-invalid");
  } else {
    confirmPassword.classList.remove("is-invalid");
  }
}
