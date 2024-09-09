let score = JSON.parse(localStorage.getItem('score')) || { wins: 0, losses: 0, ties: 0 };

  


    function reset() {
      score.wins = 0;
      score.losses = 0;
      score.ties = 0;
      localStorage.setItem('score', JSON.stringify(score)); 
      updateScore();
    }

    function updateScore(){
        document.querySelector('.js-score').innerHTML=`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
    }
    

    let computerMove = '';

    function random() {
      const randomNumber = Math.random() * 10;
      if (randomNumber < 3) {
        computerMove = 'rock';
      } else if (randomNumber < 6) {
        computerMove = 'paper';
      } else {
        computerMove = 'scissor';
      }
    }

    function play(playerMove) {
      random(); 
      let result = '';

      if (playerMove === computerMove) {
        result = 'tie';
        console.log("It's a tie!");
      } else if (
        (playerMove === 'rock' && computerMove === 'scissor') ||
        (playerMove === 'paper' && computerMove === 'rock') ||
        (playerMove === 'scissor' && computerMove === 'paper')
      ) {
        result = 'win';
        console.log('You win!');
      } else {
        result = 'lose';
        console.log('You lose!');
      }

      document.querySelector('.moves').innerHTML = `You chose <img src="${playerMove}-emoji.png" class="mo-btn">, Computer chose <img src="${computerMove}-emoji.png" class="mo-btn">`;


      document.querySelector('.result').innerHTML=`you ${result}`

      
      if (result === 'win') {
        score.wins += 1;
      } else if (result === 'lose') {
        score.losses += 1;
      } else {
        score.ties += 1;
      }

      
      localStorage.setItem('score', JSON.stringify(score));

      updateScore();
    }