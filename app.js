const clock = document.querySelector('.clock');
let weekday = ['Sun', 'Mon', 'Tue','Wed', 'Thu', 'Fri', 'Sat', ];

window.addEventListener('load', () => {
  getTime();
});

function getTime(){
  const today = new Date();
  let day = today.getDay();
  let hour = today.getHours();
  let minutes = today.getMinutes();
  let ampm = hour >= 12 ? 'pm': 'am';
  hour %= 12;
  if(minutes <10)  minutes = new String(`0${minutes}`);
  clock.textContent = `${weekday[day]} ${hour}:${minutes} ${ampm}`
  setTimeout(getTime, 100);
}
