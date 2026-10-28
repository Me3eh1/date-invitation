// Сохранение выбранного варианта свидания в Google-форму (см. README.md, раздел «Сохранение ответов»).
const RESPONSE_FORM = {
    actionUrl: "https://docs.google.com/forms/d/e/1FAIpQLSerF8_zhhiP6fNNZx1-clipawhG_MAaU2LdC1rA0HzNc5cPYQ/formResponse",
    optionField: "entry.1659871712" // вопрос «Что выбрал человек» (варианты: Кафе / Кино / Прогулка в парке / Ресторан / Все и сразу)
};

// ВАЖНО: поле в форме — с вариантами ответа, поэтому value должен точно совпадать
// с одним из них: "Кафе", "Кино", "Прогулка в парке", "Ресторан".
function logResponse(fields) {
    if (!RESPONSE_FORM.actionUrl || !fields.option || !RESPONSE_FORM.optionField) return;

    const params = new URLSearchParams();
    params.append(RESPONSE_FORM.optionField, fields.option);
    const url = RESPONSE_FORM.actionUrl;
    const payload = params.toString();

    // sendBeacon доживает до перехода на другую страницу, fetch — запасной вариант
    if (navigator.sendBeacon) {
        navigator.sendBeacon(url, new Blob([payload], { type: "application/x-www-form-urlencoded" }));
    } else {
        fetch(url, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: payload,
            keepalive: true
        }).catch(() => {});
    }
}
