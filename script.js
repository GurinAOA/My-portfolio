"use strict";

const modal = document.querySelector("#modal");
const btn = document.querySelector("#openModal");
const close = document.querySelector(".close");
const container = document.querySelector(".header__container");
const social = document.querySelector(".social");
const body = document.querySelector("body");
const linkAbout = document.querySelector("#aboutMe");
const linkExperience = document.querySelector("#experience");
const linkSkills = document.querySelector("#skills");
const linkProjects = document.querySelector("#projects");

linkAbout.addEventListener("click", function () {
  show();
});
function show() {
  modal.classList.remove("open");
}

linkExperience.addEventListener("click", function () {
  show();
});

linkSkills.addEventListener("click", function () {
  show();
});
linkProjects.addEventListener("click", function () {
  show();
});




btn.addEventListener("click", function () {
  openModal();
  disableScroll();
});
function openModal() {
  modal.classList.add("open");
  social.classList.add("index");
}

close.addEventListener("click", function () {
  closeModalCross();
  enableScroll();
});

function closeModalCross() {
  modal.classList.remove("open");
  social.classList.remove("index");
}

window.addEventListener("click", closeModal);

function closeModal(event) {
  if (event.target.classList.contains("open")) {
    modal.classList.remove("open");
    body.classList.remove("disable-scroll");
  }
}

function disableScroll() {
  body.classList.add("disable-scroll");
}

function enableScroll() {
  body.classList.remove("disable-scroll");
}

const form = document.querySelector("#form");
const nameInput = document.querySelector("#name");
const phoneInput = document.querySelector("#phone");
const messageInput = document.querySelector("#message");

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const login = nameInput.value;
  const password = phoneInput.value;
  const confirmPassword = messageInput.value;

  // Проверяем, что поля заполнены
  if (!login || !password || !confirmPassword) {
    alert("Пожалуйста, заполните все поля");
    return;
  }

  if (!isValidLogin(login)) {
    alert("Логин может содержать только буквы на латинице и цифры");
    return;
  }

  if (!isValidPassword(password)) {
    alert("Введите только числа");
    return;
  }

  form.submit();
});

function isValidLogin(login) {
  const pattern = /^[a-zA-Z0-9]+$/;
  return pattern.test(login);
}

function isValidPassword(password) {
  const pattern = /^(0|[1-9]\d*)$/;
  return pattern.test(password);
}

document.addEventListener("DOMContentLoaded", () => {
  const ajaxSend = async (formData) => {
    const response = await fetch("mail.php", {
      method: "POST",
      body: formData,
    });
    if (!response.ok) {
      throw new Error(
        `Ошибка по адресу ${url}, статус ошибки ${response.status}`
      );
    }
    return await response.text();
  };

  if (document.querySelector("form")) {
    const forms = document.querySelectorAll("form");

    forms.forEach((form) => {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const formData = new FormData(this);

        ajaxSend(formData)
          .then((response) => {
            console.log(response);
            form.reset(); // очищаем поля формы
          })
          .catch((err) => console.error(err));
      });
    });
  }
});

//задача
const nthFibo = (n) => {
  n1 = 0;
  n2 = 1;
  sum = 0;

  if (n == 1) return 0;
  if (n == 2) return 1;

  for (let i = 3; i <= n; i += 1) {
    sum = n1 + n2;
    n1 = n2;
    n2 = sum;
  }

  return sum;
};
