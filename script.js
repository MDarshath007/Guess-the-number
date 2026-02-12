
    var guessno = document.getElementById("guessnumber")
    var Result = document.getElementById("result")
    var randomnumber = Math.floor(Math.random() * 10) + 1
    var score = document.getElementById("score")
    console.log(randomnumber)
    var totalscore = 10

    function check() {

        var enteredno = guessno.value
        if ((enteredno == randomnumber)) {
            result.textContent = "You are Right!!"
            alert("🎉CONGRATULATIONS YOU WON THE GAME !!!🎉 Your " + score.textContent)
            location.reload()
        }
        else if (totalscore = totalscore - 1) {
            score.textContent = "Score: " + totalscore
            result.textContent = "You are Wrong!!"
        }
        else if (totalscore = totalscore <= 0) {
            alert("YOU LOST THE GAME 😔 Your score: 0")
            location.reload()
        }
    }
