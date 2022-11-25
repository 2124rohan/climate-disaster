const text = document.getElementById("changeText")
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')
const messageThree = document.querySelector('#message-3')
const messageFour = document.querySelector('#message-4')
const box = document.querySelector(".box")
const moreData = document.querySelector("#more")
const disasterSummery = document.getElementById("summery")

// const name1 = document.getElementById('name1')
// const email = document.getElementById('email')
// const phoneno = document.getElementById('phoneno')
// const countt = document.getElementById('countt')
// const UPI = document.getElementById('UPI')
// const cause = document.getElementById('cause')
// const message = document.getElementById('message')
// const btn = document.getElementById("btn")

// // btn.addEventListener('submit',(e)=>{
// //     name1.value="";
// //     email.value=" ";
// //     phoneno.value=" ";
// //     countt.value=" ";
// //     cause.value=" ";
// //     UPI.value=" ";
// //     message.value=" ";
// // });

window.addEventListener("load", (e)=>{
    e.preventDefault()
    messageOne.textContent = 'Loading...'
    messageTwo.textContent = ''
    text.addEventListener('click',(e)=>{
        e.preventDefault()
        text.innerHTML="Next"
        box.style.visibility = "visible"
        disasterSummery.style.visibility="visible"


    fetch('/disaster').then((response)=>{
    response.json().then((data)=>{
            messageOne.textContent = data.disData
            messageTwo.textContent = data.finalData
            messageThree.textContent = data.date.substr(0, 10)
            messageFour.textContent =data.information
    })
})    
})

})

