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

function OnStartClick(e, checkTerms) {
  e.preventDefault();
  function checkTerms() {
    if (isChecked(this)) {
      button.disabled = false;
    } else {
      button.disabled = true;
    }
  }
  function isChecked(element) {
    return element.checked ? true : false;
  }
  timerId = setInterval(() => {
    const Value = colorId(currentValue, colors);
    document.body.style.background = Value;
  }, 1000);
}

// По клику на Стоп вызовем clearInterval и передадим
// аргументом ID того счетчика который надо остановить
refs.timerStop.addEventListener('click', () => {
  clearInterval(timerId);
  console.log('setInterval stopped!');
});

function colorId(element, array) {
  const min = 0;
  const max = legh - 1;
  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
  const index = randomIntegerFromInterval(min, max);
  return (element = array[index]);
}
