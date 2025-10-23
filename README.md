# Progress Block

Круговой прогресс-бар с анимацией, созданный на чистом JavaScript и CSS. Создано в рамках тестового задания для Ozon банк.

## Демо доступно по [ссылке](https://nai-toors.github.io/Ozon-test-task/)


## Возможности

- ✅ Круговой прогресс-бар с настраиваемым размером
- ✅ Анимация вращения
- ✅ Возможность скрытия/показа

## Установка

1. Скопируйте файлы в ваш проект:
   ```
   js/ProgressBlock.js
   css/style.css
   ```

2. Подключите стили в HTML:
   ```html
   <link rel="stylesheet" href="css/style.css" />
   ```

3. Создайте контейнер для прогресс-бара:
   ```html
   <div id="progress-container"></div>
   ```

## Использование

### Базовое использование

```javascript
import { ProgressBlock } from "./js/ProgressBlock.js";

// создание экземпляра с настройками по умолчанию
const progress = new ProgressBlock("#progress-container");

// установка значения (0-100)
progress.setValue(75);
```

### Расширенные настройки

```javascript
const progress = new ProgressBlock("#progress-container", {
  size: 200,        // размер в пикселях (по умолчанию: 150)
  strokeWidth: 15   // толщина линии (по умолчанию: 10)
});
```

### API методы

| Метод | Описание | Параметры |
|-------|----------|-----------|
| `setValue(value)` | Устанавливает значение прогресса | `value` - число от 0 до 100 |
| `setAnimated(isAnimated)` | Включает/выключает анимацию вращения | `isAnimated` - boolean |
| `setHidden(isHidden)` | Скрывает/показывает прогресс-бар | `isHidden` - boolean |

### Примеры использования

```javascript
// установка значения
progress.setValue(50);

// уключение анимации вращения
progress.setAnimated(true);

// укрытие прогресс-бара
progress.setHidden(true);
```
Где `progress` - экзеvпляр класса ProgressBlock

## Кастомизация

### CSS переменные

Вы можете настроить внешний вид через CSS переменные:

```css
:root {
  --progress-color: #0066ff;    /* цвет прогресс-бара */
  --animation-speed: 1.5s;      /* скорость анимации */
}
```

## Технические детали

- **Размер**: ~3KB (JS + CSS)
- **Зависимости**: Нет
- **Поддержка браузеров**: Все современные браузеры
- **ES6 модули**: Да

## Структура проекта

```
progress-block/
├── index.html          # Демо страница
├── js/
│   ├── ProgressBlock.js # Основной класс компонента
│   └── main.js         # Демо логика
├── css/
│   └── style.css       # Стили компонента
└── README.md           # Документация
```


