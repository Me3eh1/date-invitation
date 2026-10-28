const messages = [
    "Ты уверена?",
    "Точно уверена??",
    "А может, всё-таки да?",
    "Ну пожалуйста...",
    "Ну просто подумай!",
    "Если ты скажешь «нет», я буду очень расстроен...",
    "Я буду очень грустить...",
    "Я буду очень-очень-очень грустить...",
    "Ладно, ладно, больше не спрашиваю...",
    "Шучу! Скажи «да», пожалуйста! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "date_options.html";
}