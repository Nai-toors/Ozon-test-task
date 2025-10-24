import { ProgressBlock } from "./ProgressBlock.js";

const progress = new ProgressBlock("#progress-container", {
  // опциональные параметры при инициализации компонента
  // size: 150,
  // strokeWidth: 15,
});

const valueInput = document.getElementById("value-input");
const animateCheckbox = document.getElementById("animate-checkbox");
const hideCheckbox = document.getElementById("hide-checkbox");

progress.setValue(valueInput.value);

valueInput.addEventListener("input", (e) => {
  let value = e.target.value;

  // берём только цифры
  value = value.replace(/\D/g, "");

  // убираем лишние нули (если ввести 000)
  value = value.replace(/^0+(?=\d)/, "");

  // ограничиваем значение от 0 до 100
  const numValue = parseInt(value);
  if (numValue > 100) {
    value = "100";
  }

  e.target.value = value;
  progress.setValue(value);
});

animateCheckbox.addEventListener("change", (e) => {
  progress.setAnimated(e.target.checked);
});

hideCheckbox.addEventListener("change", (e) => {
  progress.setHidden(e.target.checked);
});
