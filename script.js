let list = document.querySelector('.task-list');
let input = document.querySelector('.task-input');
let form = document.querySelector('.task-form');
let priority = document.querySelector('.task-priority');
let body = document.querySelector('body');
let themeButton = document.querySelector('.theme-button');

priority.onclick = function () {
  priority.classList.toggle('is-important');
  if (priority.classList.contains('is-important')) {
    priority.textContent = 'Важная задача';
  } else {
    priority.textContent = 'Обычная задача';
  }
};

form.onsubmit = function (evt) {
  evt.preventDefault();
  let newComment = document.createElement('li');
  list.append(newComment);
  newComment.textContent = input.value;
  input.value = "";
  if (priority.classList.contains('is-important')) {
    newComment.classList.add('is-important');
  } else {
    newComment.classList.remove('is-important');
    }
};

themeButton.onclick = function () {
  body.classList.toggle('dark-theme');
  if (body.classList.contains('dark-theme')) {
    themeButton.textContent = 'Светлая тема';
  } else {
    themeButton.textContent = 'Тёмная тема';
  }
};