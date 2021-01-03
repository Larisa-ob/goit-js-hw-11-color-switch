import 'toastr/build/toastr.min.css';
import './toastrOption';
import './timer.css';
const refs = {
    timerStart: document.querySelector("button[data-action='start']"),
    timerStop: document.querySelector("button[data-action='stop']"),
    bodyColor: document.querySelector('body'),
};
let timerId = null;
let currentValue = null;
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];
const legh = colors.length;
// При клике на Старт, запустим интервал,
// будем каждую секунду менять цвет body
refs.timerStart.addEventListener('click', OnStartClick);

function OnStartClick(e) {
    if (timerId) {
        return;
    }
    e.preventDefault();
    console.log('start ...');

    timerId = setInterval(() => {
        const Value = colorId(currentValue, colors);
        document.body.style.background = Value;
    }, 1000);

    refs.timerStop.removeAttribute('disabled');
    refs.timerStart.setAttribute('disabled', true);
}

// По клику на Стоп вызовем clearInterval и передадим
// аргументом ID того счетчика который надо остановить
refs.timerStop.addEventListener('click', () => {
    if (!timerId) {
        return;
    }
    clearInterval(timerId);
    timerId = null;
    console.log('setInterval stopped!');
    refs.timerStart.removeAttribute('disabled');
    refs.timerStop.setAttribute('disabled', true);
});
//Для вывода ID элемента который выпал при работе генератора сл.чисел
function colorId(element, array) {
    const min = 0;
    const max = legh - 1;
    const randomIntegerFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };
    const index = randomIntegerFromInterval(min, max);
    return (element = array[index]);
}
