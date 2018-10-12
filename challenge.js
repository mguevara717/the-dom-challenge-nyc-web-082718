
const counter = document.getElementById('counter')
const minusButton = document.getElementById('-')
const plusButton = document.getElementById('+')
const likeButton = document.getElementById('<3')
const likesUl = document.querySelector('.likes')
const commentsForm = document.getElementById('comment-form') //submit button
const newComment = document.getElementById('list')
const pauseButton = document.getElementById('pause')
const submit = document.getElementById('submit')

let count = 0
let likes = {}
let isPause = false;

//////////timer function///////////////////
  let timer = window.setInterval(function(){ //timer
   count++
   console.log(count)
   document.getElementById('counter').innerText = count; //read as javascript code

   }, 1000);
//////////end of timer function/////////////
minusButton.addEventListener("click", function(event) {
   count--;
      document.getElementById('counter').innerText = count; //render the button

})

plusButton.addEventListener("click", function(event) {
     count++;
        document.getElementById('counter').innerText = count; //render the button

})

likeButton.addEventListener("click", function(event) {
  likesUl.innerHTML = ""

  if(likes[count] !== undefined) {
    likes[count] += 1;
  }

  else {
    likes[count] = 1;
  }

  for (let key in likes) {
    likesUl.innerHTML += `<li>${key} has been liked ${likes[key]} times</li>`
    }
})

commentsForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent form from posting (refresh)

    const userInput = document.getElementById('userComment').value
      console.log(userInput)

      newComment.innerHTML += `<li>${userInput}</li>` //this will add tasks
        event.target.reset()

})

pauseButton.addEventListener("click", function(event) {

  if (isPause === false){
    minusButton.disabled = true;
    plusButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.innerText = "resume";
    likeButton.disabled = true;
    submit.disabled = true;
    isPause = !isPause;
  }
  else {
    minusButton.disabled = false;
    plusButton.disabled = false;
    likeButton.disabled = false;
    pauseButton.innerText = "pause"
    likeButton.disabled = false;
    submit.disabled = false;
    isPause = !isPause;
  }



})
