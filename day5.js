
btn = document.getElementById("btn")

answer = document.getElementById("answer")

btn.onclick = function(){
    field1 = Number(document.getElementById("field1").value)
    field2 = Number(document.getElementById("field2").value)
    field3 = document.getElementById("field3").value
    
    if(field3 == "+"){
        answer.textContent = field1 + field2
    }
    else if(field3 == "-"){
        answer.textContent = field1 - field2
    }
    else if(field3 == "*"){
        answer.textContent = field1 * field2
    }
    else if(field3 == "/"){
        answer.textContent = field1 / field2
    }
}

