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

// привязываем обработчики к API 
valueInput.addEventListener("input", (e) => {
  progress.setValue(e.target.value);
});

animateCheckbox.addEventListener("change", (e) => {
  progress.setAnimated(e.target.checked);
});

hideCheckbox.addEventListener("change", (e) => {
  progress.setHidden(e.target.checked);
});
