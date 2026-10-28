# Will You Be My Valentine? 

This project is designed to be an interactive webpage to ask someone to be your Valentine. Please use this code as inspiration.
---
## Respect Open-Source
I built this for **fun & learning**. If you fork or modify it:  
✔ **Use it for creativity, personal projects, or learning**  
✔ **Give proper credit when using it in public**  
✔ **Respect the original creator’s work**  
 




## How It Works 

This project consists of a simple webpage with a "Yes" and "No" button. When the user clicks the "No" button, the button text changes to a series of  messages, and the "Yes" button grows larger. If the user clicks the "Yes" button, they are redirected to a new page (`yes_page.html`).

### Features:
- **Interactive Buttons**: The "No" button cycles through , while the "Yes" button grows in size.
- **Responsive Design**: The webpage is designed to work on all screen sizes.

---

## How to Use 

1. **Download the Files**:
   - Clone this repository or download the `index.html`, `styles.css`,`yes_style.css`,`yes_page.html` and `script.js` files.

2. **Open the Project**:
   - Open the `index.html` file in your web browser.


---


## Code Overview 

### Files:

- `index.html`: The main HTML file that structures the webpage.
- `styles.css`: The CSS file that styles the webpage.
- `script.js`: The JavaScript file that handles the button interactions.
- `yes_page.html`: The yes page that sturctures the webpage.
- `yes_style.css`: The css file that styles the yes webpage.



### Key Functions:

- `handleNoClick()`: Changes the "No" button text and increases the size of the "Yes" button.
- `handleYesClick()`: Redirects the user to `yes_page.html`.

---

## License 📄

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Сохранение ответов (Google Формы) 📝

GitHub Pages — статический хостинг и сам по себе не умеет сохранять данные. Поэтому выбранный вариант свидания отправляется в Google-форму, а ответы копятся на вкладке «Ответы» и в связанной Google-Таблице.

**Настроено:** форма «Свидание» с одним вопросом «Что выбрал человек» (варианты: Кафе / Кино / Прогулка в парке / Ресторан / Все и сразу). Адрес формы и ID поля уже прописаны в `logger.js` (`RESPONSE_FORM`).

**Отправляется только одно событие** — клик по карточке на странице выбора (`date_options.html`). Нажатия «Да»/«Нет» на главной странице никуда не отправляются.

**Нюансы:**
- Поле в форме — с вариантами ответа, поэтому отправляемое значение должно **точно совпадать** с одним из них. Соответствие задано в атрибутах `onclick` карточек в `date_options.html` (например, карточка «Ужин в ресторане» отправляет «Ресторан»).
- Если поменяете варианты в Google-форме — не забудьте поправить и `onclick`-значения в `date_options.html`, иначе ответ не запишется.
- Ссылка на форму видна в коде страницы, поэтому теоретически возможны шуточные записи не от вашей пары.

**Смотреть ответы:** [вкладка «Ответы» формы](https://docs.google.com/forms/d/e/1FAIpQLSerF8_zhhiP6fNNZx1-clipawhG_MAaU2LdC1rA0HzNc5cPYQ/edit) → значок Таблицы, чтобы создать связанную Google-Таблицу (выгружается в Excel/CSV).

---

