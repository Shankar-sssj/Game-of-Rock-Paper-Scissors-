let userscore =0;
let compscore=0;
const choices=document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");

const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

 

const generatecompchoice=()=>{
// rock ,paper ,scissors
    let options=["rock","paper","scissors"];
    const randidx= Math.floor(Math.random()*3);
    return options[randidx];
}


const playgame=(userchoice)=>{
    console.log("user choice = ",userchoice);
    // generate computer choice --> modular way of programming
    const compchoice=generatecompchoice();
        console.log("comp choice = ",compchoice);
        if(userchoice==compchoice){
            drawGame();


        }
        else{ 
            let Userwin=true;
            if(userchoice==="rock"){
                // papper,scissor
                Userwin=compchoice==="paper" ? false:true;
            }
            else if(userchoice==="paper"){
                //rock,paper
                Userwin=compchoice==="scissors"?false:true;

            }
            else{
                // rock ,paper
                Userwin =compchoice==="rock"?false:true;
            }
            showWinner(Userwin);
        }

}
const showWinner=(Userwin,userchoice,compchoice)=>{
    if(Userwin==true){
        userscore++;
        userscorepara.innerText=userscore;
        msg.innerText=`you win.${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";

    }
    else{
        compscore++;
        compscorepara.innerText=compscore;
        msg.innerText=`you loose.${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="red";

    }

 }
 const drawGame=()=>{
    console.log("Game was draw");
    msg.innerText="Game Was Drawn.play again!";
    msg.style.backgroundColor="#081b08";

 };
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        // console.log(userchoice);
        playgame(userchoice);
    })
});
