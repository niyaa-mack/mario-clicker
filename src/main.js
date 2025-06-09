let points = 20000 
let luigiLevel = 0
let princessLevel = 0
let daisyLevel = 0
let boxLevel = 0
let pLevel = document.getElementById("pLevel")
let lLevel = document.getElementById("lLevel")
let dLevel = document.getElementById("dLevel")
let bLevel = document.getElementById("boxLevel")

function changePoint(amount) {
points = points + amount
coinSwap.innerText = points + " Coins"
}

function buyPrincess () {
  if (points >= 200) {
    changePoint(-200)
    princessLevel = princessLevel + 1
    pLevel.innerText = 'Level ' + princessLevel

  } else {
    alert("Not enough money sorry")
  }
}


function buyLuigi() {
if (points >= 10000) {
  changePoint(-10000)
  luigiLevel = luigiLevel + 1 
  lLevel.innerText = 'Level ' + luigiLevel
} else {
  alert("Sorry click more")
}
}

function buyDaisy () {
  if (points >= 500000 ) {
    changePoint(-500000)
    daisyLevel = daisyLevel + 1 
    dLevel.innerText = 'Level ' + daisyLevel
  } else {
    alert("You poor sorry")
  }
}

function buyBox() {
  if (points >= 500) {
    changePoint(-500)
    boxLevel = boxLevel + 1 
    bLevel.innerText = 'level' + boxLevel
  } else {
    alert ("you dont have enough")
  }
}

function bigClick() {
  let basePoint = 1 + (princessLevel ** 10.02) + (luigiLevel ** 80.5) + (daisyLevel ** 115.05) + (boxLevel ** 195.05)

  changePoint(basePoint)

}