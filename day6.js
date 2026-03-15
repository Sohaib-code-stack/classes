// heading = document.getElementById("heading")

// function text(){
//     heading.textContent = "Hello world"
// }

// function greeting(){
//     console.log("hello")
// }

// greeting()
// greeting()
// greeting()
// greeting()
// greeting()
// greeting()
// greeting()
// greeting()
// greeting()
// greeting()

// container = document.getElementById("container")

// container.textContent = 'something'
// container.innerHTML = `<p id="paragraph">something</p>`

// paragraph = document.getElementById("paragraph")
// paragraph.textContent = "something else"


// box1 = document.getElementsByClassName("box")
// box2 = document.getElementsByClassName("box")
// box3 = document.getElementsByClassName("box")
// box4 = document.getElementsByClassName("box")
// box5 = document.getElementsByClassName("box")
// box6 = document.getElementsByClassName("box")

// box.style.backgroundColor = "blue"
// box.style.backgroundColor = "brown"
// box.style.borderRadius = "20px"
// box = document.getElementsByClassName("box")

// function changeBg(){
//     box.style.color = "white"
// }

number = document.getElementById("number")
inc = document.getElementById("inc")
dec = document.getElementById("dec")
reset = document.getElementById("reset")

count = Number(number.textContent)

inc.onclick = function(){
    count++
    number.textContent = count
}
dec.onclick = function(){
    if(count<=0){
        count = 0
    }else{
        count--
        number.textContent = count
    }
}
reset.onclick = function(){
    count = 0
    number.textContent = count
}