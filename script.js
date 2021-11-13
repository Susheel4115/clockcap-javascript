//this is for analogue clock code

hr = Math.trunc(Math.random() * 12) + 1;
min = Math.trunc(Math.random() * 60) + 1;

//converting time to degrees

hr_rotation = 30 * hr + min / 2;
min_rotation = 6 * min;

hour.style.transform = `rotate(${hr_rotation}deg)`;
minute.style.transform = `rotate(${min_rotation}deg)`;

console.log(hr);
console.log(min);
document.querySelector('.box1').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
});
document.querySelector('.box1').addEventListener('click', function () {
  var guess2 = Number(document.querySelector('.center2').value);

  console.log(guess2, typeof guess2);
});
const displayMessage = function (message) {
  document.querySelector('.result').textContent = message;
};

document.querySelector('.btn').addEventListener('click', function () {
  var guess = Number(document.querySelector('.guess').value);
  var guess2 = Number(document.querySelector('.center2').value);

  // When there is no inpu

  // When player wins
  if (guess == hr && guess2 == min) {
    // document.querySelector('.message').textContent = '🎉 Correct Number!';
    displayMessage('🎉 Congrats you passed the captcha!');

    // When guess is wrong
  } else {
    displayMessage('wrong captcha');
  }
});
