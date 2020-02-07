var score = 0;
var simon = ['bg-dark'];
var buttons = [
  'btn-warning',
  'btn-danger',
  'btn-dark',
  'btn-info',
  'btn-success'
]
var colors = [
  'bg-warning',
  'bg-danger',
  'bg-dark',
  'bg-info',
  'bg-success'
]
var rando;

function random() {
  rando = Math.random() * 5;
  rando = Math.floor(rando);
  console.log(rando)
  if (colors[rando] === simon[simon.length - 1]) {
    random();
  } else {
    simon.push(colors[rando]);

  }
  return rando;
}


var input;

function display() {
  $('#simon-sq').html(`<div class='bg-dark square mx-auto'> </div>`);
}

function makeButtons() {
  $('#simonBtns').empty();
  for (var i = 0; i < 5; i++) {
    $('#simonBtns').append(`<div><button type="button" id=btn${i} class="btn btn-lg btn-block ans ${buttons[i]} ">  </button></div> <br>`)
  }

};

var answer = [];
var simonTurn = true;
function check() {
  if (JSON.stringify(simon) === JSON.stringify(answer)) {
    simonTurn = true;
    console.log("Simon's turn")
    score++;
    $('.simonScore').html(score);
    alert('Correct! Click next turn for the next round!')
  } else {
    $('#myModal').modal('toggle')
    console.log("game over");
  }
}

$(document).ready(function () {
  $('#start').on('click', function () {
    makeButtons();
    random();
    $('.next-turn').text('Click here to start the next round')
    $('#start').text('Next Turn')
    simon.forEach((name, i) => {

      setTimeout(function () {
        $('#simon-sq').html(`<div class='${name} square mx-auto'> </div>`);

      }, 1200 * i)
      setTimeout(function () {
        $('#simon-sq').empty();
      }, 1200 * simon.length)
    })

  })

  $(document).on('click', '.ans', function () {

    var id = $(this).attr('id')
    switch (id) {
      case 'btn0':
        input = 'bg-warning'
        break;
      case 'btn1':
        input = 'bg-danger'
        break;
      case 'btn2':
        input = 'bg-dark'
        break;
      case 'btn3':
        input = 'bg-info'
        break;
      case 'btn4':
        input = 'bg-success'
        break;

    }
    answer.push(input);


  });

  $('#end').on('click', function () {
    check();
    answer = [];
  })

  $('.home-link').on('click', function () {
    //Do a get request to our homepage
    window.location.href = "/";
  })
  $('.again').on('click', function () {
    location.reload();
  })

});
