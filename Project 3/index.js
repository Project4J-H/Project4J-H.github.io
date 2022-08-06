
let  randomNum=Math.trunc(Math.random()*101);
console.log(randomNum);
const checkBtn=document.querySelector('.checkButton');
const reset=document.querySelector('.b2');
const tryA=document.querySelector('.tryAgain');
document.querySelector('.b2').addEventListener('click', function(){
    window.location.reload();
    // return false;
  });
const uInput= document.querySelector('.uInput');
const msg=document.querySelector('#hints');
const pic=document.querySelector('#image1');
const hS=document.querySelector('#highScore');
const score= document.querySelector('#score');
const gamebox=document.querySelector('.gamebox');
const box= document.querySelector('.uInput');
const checkbutton=document.querySelector('.checkButton');
const span=document.querySelector('#spanInner');
const yourScore=document.querySelector('#yourScore');
const best=document.querySelector('#best');
const playAgain=document.querySelector('.playAgain');
const innerP=document.querySelector('#innerP');
const topmsg=document.querySelector('#topmsg');
const guessbox=document.querySelector('.guessbox');
const submit=document.querySelector('.submitScore');
const modalScore=document.querySelector('#modalScore');


  let points = 10;
  let highScore=0;
  let guesses=9; ///change back
  let bestS=0;
  let current=0;
  let highS=0;
  let history=[];

  function duplicates(arr, num)
  {
    found=false;
      for(let i =0; i<arr.length;i++)
      {
        if(arr[i]===num)
        {
          found=true;
          return found;
        }
      }
    return found;
  }

  function recordHighScore(num)
  {
      if(highS<num)
    {
    highS=num;
    }
    return highS;
  }

  function youLose()
  {
    points--;
    bestS=recordHighScore(current);
    hS.textContent=(`High Score: ${bestS}`);
    score.textContent=(`Score: ${points}`);
    msg.textContent=('Sorry! You loose!');
    pic.src="images/lose2.png";
    box.style.display="none";//user input box
    checkbutton.style.display="none";//check button
    span.textContent=(`${randomNum}` );
    yourScore.style.display="block";
    yourScore.textContent=(`My number was ${randomNum}`);
    msg.style.display="none";
    topmsg.style.display='block';
    topmsg.textContent= 'Sorry You Lose =(';
    gamebox.style.paddingBottom='5%';
    guessbox.style.height="75%";
    innerP.style.display="block";
    innerP.textContent=("Don't give up and Try again. You can win next Time.");
    yourScore.textContent=(`My number was: ${randomNum}` );
    tryA.style.display="block";
    modalScore.textContent=(`Your High Score is: ${bestS}`);
    modalScore.value=bestS;
    console.log(modalScore.value);
    bestS=0;
    submit.style.display='block';

  }
  function eraseHistory(arr)
  {
    while (arr.length > 0) {
      arr.pop();
    }
  }
  function youWin()
  {
    current+=1;
    bestS=recordHighScore(current);
    hS.textContent=(`High Score: ${bestS}`);
    pic.src="images/won2.png";
    topmsg.style.display='block';
    topmsg.textContent= ('Congratulation! You win!');
    box.style.display="none";
    checkbutton.style.display="none";
    span.textContent=(`${randomNum}` );
    innerP.style.display='block';
    innerP.textContent=(`Your guess was correct ${randomNum} is my secret number.`);
    best.style.display='block';
    yourScore.style.display='block';
    yourScore.textContent=(`Your Score: ${points}` );
    best.textContent=(`Best: ${current}` );
    msg.style.display="none";
    playAgain.style.display="block";
    guessbox.style.height="68%";
    gamebox.style.paddingBottom='5%';

    // document.querySelector().textContent=(`Your guess was correct ${randomNum} is my secret number.`);
  }

  function verify()
  {
    if(document.getElementById("userName").value==' ')
    {
      alert('User name is Empty please enter a User Name to submit');
        return false;
    }
    else if(document.getElementById("fName").value==' ')
    {
      alert('First name is Empty please enter a User Name to submit');
        return false;
    }
    else if(document.getElementById("lName").value==' ')
    {
      alert('Last name is Empty please enter a User Name to submit');
        return false;
    }
      return true;
  }

checkBtn.addEventListener('click', function () {

  document.querySelector('#guessesHis').innerHTML=history ;  //Displays Guess History to User

    if(duplicates(history, Number(uInput.value)) ) ///CHECK THIS FUNCTION
    {
      msg.textContent='Repeated guess try another guess!';

    }
   else if(!Number(uInput.value) ||Number(uInput.value)<1 ||Number(uInput.value)>100 )
    {
        msg.textContent="You can only enter numbers between 1 and 100";
    }
    else if(guesses===0)
    {
       youLose();
    }

      else if (Number(uInput.value)===randomNum )
    {
      youWin();
    }
    else if(Number(uInput.value)>randomNum)
    {
      history.push(Number(uInput.value));
        points --;
        guesses--;
        score.textContent=(`Score: ${points}`);
        msg.textContent=('Guess is high');
    }
  else if(Number(uInput.value)<randomNum)
    {
      history.push(Number(uInput.value));
      points --;
      guesses--;
      score.textContent=(`Score: ${points}`);
      msg.textContent=('Guess is low ');
    }
    document.querySelector('#guessesHis').innerHTML=history ;
});
//FOR PLAYAGAIN BUTTON

playAgain.addEventListener('click', function()
{
  eraseHistory(history);
  document.querySelector('#guessesHis').innerHTML=history + ' ';
  randomNum=Math.trunc(Math.random()*101);
  console.log(randomNum);
  points=10;
  guesses=9;
  uInput.style.marginLeft="auto";
  uInput.style.marginRight="auto";
  uInput.ariaPlaceholder='Guess a number';
  msg.textContent='Guess a number';
  bestS=recordHighScore(current);
  hS.textContent=(`High Score: ${bestS}`);
  pic.src="images/guy1.png";
  box.style.display="block";
  checkbutton.style.display="block";
  checkbutton.style.marginLeft="auto";
  checkbutton.style.marginRight="auto";
  msg.style.display="block";
  playAgain.style.display="none";
  guessbox.style.height="60%";
  score.textContent='Score: 10';
  topmsg.style.display="none";
  innerP.style.display='none';
  yourScore.style.display='none';
  best.style.display='none';
  submit.style.display='none';
});

tryA.addEventListener('click', function()
{
  eraseHistory(history);
  document.querySelector('#guessesHis').innerHTML=history + ' ';
  randomNum=Math.trunc(Math.random()*101);
  console.log(randomNum);
  points=10;
  guesses=9;
  uInput.style.marginLeft="auto";
  uInput.style.marginRight="auto";
  uInput.ariaPlaceholder='Guess a number';
  msg.textContent='Guess a number';
  bestS=recordHighScore(current);
  hS.textContent=(`High Score: ${bestS}`);
  pic.src="images/guy1.png";
  box.style.display="block";
  checkbutton.style.display="block";
  checkbutton.style.marginLeft="auto";
  checkbutton.style.marginRight="auto";
  msg.style.display="block";
  playAgain.style.display="none";
  guessbox.style.height="60%";
  score.textContent='Score: 10';
  topmsg.style.display="none";
  innerP.style.display='none';
  yourScore.style.display='none';
  best.style.display='none';
  tryA.style.display="none";
    submit.style.display='none';
  current=0;

});

// First modal
let modal = document.getElementById("modal1");
let btn = document.querySelector('.prevHS');
let spans = document.getElementsByClassName("close")[0];
btn.addEventListener('click',function()
{
modal.style.display = "block";
});

spans.addEventListener('click',function()
{
modal.style.display = "none";
});

// second modal
let modal2 = document.getElementById("modal2");
let btn2 = document.querySelector('.submitScore');
let spans2 = document.getElementsByClassName("close2")[0];
btn2.addEventListener('click',function()
{
modal2.style.display = "block";
});

spans2.addEventListener('click',function()
{
modal2.style.display = "none";
});
