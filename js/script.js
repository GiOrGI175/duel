let plertRandom = Math.floor(Math.random() * 6) + 1;

console.log(plertRandom);

let botRandom = Math.floor(Math.random() * 6) + 1;

console.log(botRandom);

let btn = document.getElementById('palybtn');

btn.addEventListener('click', function () {
  let randomNumber = Number(prompt('give me number'));

  console.log(plertRandom);

  console.log(botRandom);

  function duel(randomNumber, plertRandom, botRandom) {
    let playerimg = document.querySelector('.pleyerimg');

    let botimg = document.querySelector('#botimg');

    if (randomNumber === plertRandom) {
      alert('win');

      playerimg.classList.toggle('movie_pleyer');

      setTimeout(function () {
        botimg.classList.toggle('botimg_none');
      }, 1000);
    } else if (randomNumber === botRandom) {
      alert('lose');

      botimg.classList.toggle('movie_bot');

      setTimeout(function () {
        playerimg.classList.toggle('player_none');
      }, 1000);
    } else {
      alert('tie, Shoot again');
    }
  }

  duel(randomNumber, plertRandom, botRandom);
});
