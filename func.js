const number1 = document.getElementById("number-1")
const number2 = document.getElementById("number-2")
const number3 = document.getElementById("number-3")
const number4 = document.getElementById("number-4")
const number5 = document.getElementById("number-5")
const number6 = document.getElementById("number-6")
const number7 = document.getElementById("number-7")
const number8 = document.getElementById("number-8")
const number9 = document.getElementById("number-9")
const number0 = document.getElementById("number-0")
const numberDot = document.getElementById("number-dot")
const numberPlus = document.getElementById("number-plus")
const numberDEL = document.getElementById("number-DEL")
const numberMinus = document.getElementById("number-minus")
const numberMultiply = document.getElementById("number-multiply")
const numberDivide = document.getElementById("number-divide")
const Result = document.getElementById("number-result")
const output = document.getElementById("GimmeTheNumbers")
const reset = document.getElementById("number-reset")

// const n0 = 0
// const n1 = 1
// const n2 = 2
// const n3 = 3
// const n4 = 4
// const n5 = 5
// const n6 = 6
// const n7 = 7
// const n8 = 8
// const n9 = 9
// const nDot = "."
// const nPlus = "+"
// const nMinus = "-"
// const nMultiply = "*"
// const nDivide = "/"
// const nDel = ""
// const nResult = ""
// const nOut = ""
// const nReset = ""

number0.addEventListener("click", (e)=>{
    output.innerText += 0;
})
number1.addEventListener("click", (e)=>{
    output.innerText += 1;
})
number2.addEventListener("click", (e)=>{
    output.innerText += 2;
})
number3.addEventListener("click", (e)=>{
    output.innerText += 3;
})
number4.addEventListener("click", (e)=>{
    output.innerText += 4;
})
number5.addEventListener("click", (e)=>{
    output.innerText += 5;
})
number6.addEventListener("click", (e)=>{
    output.innerText += 6;
})
number7.addEventListener("click", (e)=>{
    output.innerText += 7;
})
number8.addEventListener("click", (e)=>{
    output.innerText += 8;
})
number9.addEventListener("click", (e)=>{
    output.innerText += 9;
})
numberPlus.addEventListener("click", (e)=>{
    const val1 = output.innerText;
    output.innerText = "";
    const val2 = output.innerText;
    const val3 = Number(val1) + Number(val2);
    console.log(val3);
    output.innerText = val3;
    }
)