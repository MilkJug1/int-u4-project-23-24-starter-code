// JavaScript goes here.
let numAnswer = document.querySelector(".first-question");
let resultDiv = document.querySelector(".result");
let thirdResult = document.querySelector(".third-question")
let preBtns = document.querySelectorAll(".prebtn");
let final = document.querySelector(".final");
let submitBtns = document.querySelectorAll(".submit-btn")
let workoutBtns = document.querySelectorAll(".workout")
let bodyBtns = document.querySelectorAll(".bodyBtn")
let focusBtn = document.querySelectorAll(".focusBtn");
var ans = {
    num: 0,
    numOfInfluencers: 0,
    set number(number) {
        this.num = number;
    },
    set influencers(influencers) {
        this.numOfInfluencers = influencers;
    },

    typeOfPre: "",
    favWorkout: "",
    partOfBody: "",
    focusedOn: "",


}

var bNormalTime;
var btooMuchTime;

// As ugly as this might be, its fine as this is for a project and that I just want to get this working.

submitBtns[0].addEventListener('click', function() {
    
    
    if (Number(ans.num) > 10) {
        var btooMuchTime = true
        var bNormalTime = false;
        return btooMuchTime
    } else if (Number(ans.num) <= 5) {
        var btooMuchTime = false;
        var bNormalTime = true;
        console.log(bNormalTime)
    } else if (Number(ans.num) == 0) {
        var btooMuchTime = false;
        var bNormalTime = false;
        
    }
    
    ans.num = numAnswer.value;
    console.log(ans.num)
    

});

submitBtns[1].addEventListener('click', function() {
    ans.influencers = thirdResult.value;
    console.log(ans.numOfInfluencers)
})

preBtns[0].addEventListener('click', function() {
    ans.typeOfPre = preBtns[0].value;
    console.log(ans.typeOfPre)
})

preBtns[1].addEventListener('click', function() {
    ans.typeOfPre = preBtns[1].value
})
preBtns[2].addEventListener('click', function() {
    ans.typeOfPre = preBtns[2].value
})

preBtns[3].addEventListener('click', function() {
    ans.typeOfPre = preBtns[3].value
})

workoutBtns[0].addEventListener('click', function() {
    ans.favWorkout = workoutBtns[0].value
})

workoutBtns[1].addEventListener('click', function() {
    ans.favWorkout = workoutBtns[1].value
})

workoutBtns[2].addEventListener('click', function() {
    ans.favWorkout = workoutBtns[2].value
})

workoutBtns[3].addEventListener('click', function() {
    ans.favWorkout = workoutBtns[3].value
})

workoutBtns[4].addEventListener('click', function() {
    ans.favWorkout = workoutBtns[4].value
})

bodyBtns[0].addEventListener('click', function() {
    ans.partOfBody = bodyBtns[0].value
})

bodyBtns[1].addEventListener('click', function() {
    ans.partOfBody = bodyBtns[1].value
})


bodyBtns[2].addEventListener('click', function() {
    ans.partOfBody = bodyBtns[2].value
})

bodyBtns[3].addEventListener('click', function() {
    ans.partOfBody = bodyBtns[3].value
})

bodyBtns[4].addEventListener('click', function() {
    ans.partOfBody = bodyBtns[4].value
})

focusBtn[0].addEventListener('click', function() {
    ans.focusedOn = focusBtn[0].value
})

focusBtn[1].addEventListener('click', function() {
    ans.focusedOn = focusBtn[1].value
})

focusBtn[2].addEventListener('click', function() {
    ans.focusedOn = focusBtn[2].value
})

focusBtn[3].addEventListener('click', function() {
    ans.focusedOn = focusBtn[3].value
})

focusBtn[4].addEventListener('click', function() {
    ans.focusedOn = focusBtn[4].value
})

final.addEventListener('click', function () {
    // Check all of the choices of what the user picked.
    
    if (bNormalTime == true && ans.numOfInfluencers > 0 && ans.favWorkout == "Benching" && ans.partOfBody === "Arms & Shoulders" && ans.focusedOn === "Most of the time") {
        resultDiv.innerHTML = "You are basically the equivelent of Sam Sulek in terms of knowledge."
        console.log("Sam Sulek Level");
    }

})