$(document).ready(function () {

  var time = 5;

  var btnColors = [
    'btn-primary',
    'btn-danger',
    'btn-warning',
    'btn-success'
  ]
  var wordColors = [
    'text-primary',
    'text-danger',
    'text-warning',
    'text-success'
  ]
  var words = [
    'blue',
    'red',
    'yellow',
    'green'
  ]

  var btnRand = 0;
  var wordRand = 0;
  var textRand = 0;
  var nounRand = 0;
  var score = 0;
  var promptRand = 0;
  var prompt;
  var game = true;
  function Randomize() {
    btnRand = Math.random() * 4;
    btnRand = Math.floor(btnRand);
    wordRand = Math.random() * 4;
    wordRand = Math.floor(wordRand);
    textRand = Math.random() * 4;
    textRand = Math.floor(textRand);
    promptRand = Math.random() * 4;
    promptRand = Math.floor(promptRand)
    if (btnRand === wordRand) {
      Randomize();
    }

  }

  function shiftArray(arr, rand) {

    for (var i = 0; i < rand; i++) {
      arr.push(arr.shift());
    }
  }

  function count() {
    intervalId = setInterval(function () {
      if (time === 0) {
        clearInterval(intervalId);
        $('#myModal').modal('toggle')
      }
      else {
        time--;
        $('.time').html(time);
      }
    }, 1000);
  }
  $('#colorStart').on('click', function (e) {
    e.preventDefault()
    count();
    gameStart();
  })

  function makeButtons() {
    //We will need to empty the buttons after an answer has been selected
    for (var i = 0; i < 4; i++) {
      $('#colorGameBtn').append(`<div><button type="button" id=btn${i} class="btn btn-lg btn-block ${btnColors[i]} ${wordColors[i]}"> ${words[i]} </button></div>`)
    }

  };

  function gameStart() {

    Randomize();
    checkAnswer();
    shiftArray(btnColors, btnRand);
    shiftArray(wordColors, wordRand);
    shiftArray(words, textRand);
    console.log(btnColors, wordColors, words);
    makeButtons();

  }

  gameStart();

  function checkAnswer() {
    prompt = `${words[promptRand]}`
    $('.new-prompt').html(prompt);
    switch (prompt) {
      case 'blue':
        prompt = 'primary'
        break;
      case 'red':
        prompt = 'danger'
        break;
      case 'yellow':
        prompt = 'warning'
        break;
      case 'green':
        prompt = 'success'
        break;

    };
    console.log(prompt)

  };

  $(document).on('click', '.btn', function () {
    $('.colorScore').html(score);

    var color = $(this).attr('class')
    if (color.includes(`text-${prompt}`)) {
      console.log('correct');
      score++;
      // console.log(score);
      $('.colorScore').html(score);
    }
    $('#colorGameBtn').empty();
    Randomize();
    shiftArray(btnColors, btnRand);
    shiftArray(wordColors, wordRand);
    shiftArray(words, textRand);
    makeButtons();
    checkAnswer();

  })

  $('.home-link').on('click', function () {
    window.location.href = '/'
  })
  $('.again').on('click', function () {
    location.reload();
  })

});