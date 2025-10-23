// т.к. в требованиях сказано "Блок должен быть спроектирован так, чтобы его было легко переиспользовать в других приложениях", инкапсулируем логику в классе и сделаем export

export class ProgressBlock {
  constructor(containerSelector, options = {}) {
    // options - параметры (size, strokeWidth), которые можно передавать при инициализации экземпляра
    this.container =
      typeof containerSelector === "string"
        ? document.querySelector(containerSelector)
        : containerSelector;

    // настройки по умолчанию
    const defaults = {
      size: 150,
      strokeWidth: 10,
    };
    this.options = { ...defaults, ...options };

    // определяем физический размер контейнера для svg (само svg растяшивается на весь контейнер)
    this.container.style.width = `${this.options.size}px`;
    this.container.style.height = `${this.options.size}px`;

    // "единый источник истины"
    this.state = {
      value: 0,
      animated: false,
      hidden: false,
    };

    this.radius = this.options.size / 2 - this.options.strokeWidth / 2; // вычисление радиуса
    this.circumference = 2 * Math.PI * this.radius; // вычисление длины окружности

    this._render();

    //ссылки на элементы, которыми будем манипулировать
    this.elements = {
      circle: this.container.querySelector(".progress-circle"),
      svg: this.container.querySelector(".progress-svg"),
    };
  }

  // рисуем один раз svg в конструкторе, дальше только манипуляция с классами и css-свойствами
  _render() {
    const { size, strokeWidth } = this.options;
    const center = size / 2;

    this.container.innerHTML = `
      <svg class="progress-svg" viewBox="0 0 ${size} ${size}">
        <circle 
          class="progress-circle-bg"
          cx="${center}" 
          cy="${center}" 
          r="${this.radius}"
          style="stroke-width: ${strokeWidth}px;"
        />
        <circle 
          class="progress-circle"
          cx="${center}" 
          cy="${center}" 
          r="${this.radius}"
          style="
            stroke-width: ${strokeWidth}px;
            stroke-dasharray: ${this.circumference};
            stroke-dashoffset: ${this.circumference};
          "
        />
      </svg>`;
  }

  // метод синхронизации DOM с текущем состоянием - обновляем все значения, которые меняются через API
  _updateView() {
    const offset =
      this.circumference - (this.state.value / 100) * this.circumference;
    this.elements.circle.style.strokeDashoffset = offset;

    this.container.classList.toggle("is-animated", this.state.animated);

    this.container.classList.toggle("is-hidden", this.state.hidden);
  }

  // публичный API
  setValue(value) {
    const newValue = Math.max(0, Math.min(100, Number(value) || 0));
    this.state.value = newValue;
    this._updateView();
  }

  setAnimated(isAnimated) {
    this.state.animated = isAnimated;
    this._updateView();
  }

  setHidden(isHidden) {
    this.state.hidden = isHidden;
    this._updateView();
  }
}
