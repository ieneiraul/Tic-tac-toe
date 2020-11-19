var inside=document.querySelectorAll(".block");
var resetBtn=document.querySelector("#reset");
var winMessage=document.querySelector("#winMessage");
var btnX=document.querySelector("#btnX");
var btn0=document.querySelector("#btn0");
var btnSinglePlayer=document.querySelector("#singlePlayer");
var btnTwoPlayer=document.querySelector("#twoPlayer");
var turnWho=document.querySelector("#turnWho");
var p1Symbol="X";
var p2Symbol="0";
var end=false;
var winner=false;
var turn;
var gameMode2=false;


btnSinglePlayer.addEventListener("click", function(){
    gameMode2=false;
    btnSinglePlayer.classList.add("selected");
    btnTwoPlayer.classList.remove("selected");
    reset();
    init();
});

btnTwoPlayer.addEventListener("click", function(){
    gameMode2=true;
    btnTwoPlayer.classList.add("selected");
    btnSinglePlayer.classList.remove("selected");
    reset();
    init();
    if(p1Symbol==="X")
    {
        turn=1;
        turnWho.textContent="Player1's turn";
    }
    else 
    {
        turn=2;
        turnWho.textContent="Player2's turn";
    }
});

btnX.addEventListener("click", function(){
    btn0.classList.remove("selected");
    btnX.classList.add("selected");
    p1Symbol="X";
    p2Symbol="0";
    reset();
    if(gameMode2===true)
    {
        turn=1;
        turnWho.textContent="Player1's turn";
    }
});

btn0.addEventListener("click", function(){
    btnX.classList.remove("selected");
    btn0.classList.add("selected");
    p1Symbol="0";
    p2Symbol="X";
    reset();
    if(gameMode2===true)
    {
        turn=2;
        turnWho.textContent="Player2's turn";
    }
});

function init(){
	for(var i=0;i<inside.length;i++){
		inside[i].addEventListener("click",function(){
            if(gameMode2===false)
			{
                if(!end){
                    if(this.textContent==="")
                    {
                        this.textContent=p1Symbol;
                        winCondition();
                        verify();
                        if((!end)&&(!winner)){
                            pcTurn();
                            winCondition();
                            verify();
                    }
                    }
                }
            }
            else
            {
                if(!end){
                    if(this.textContent==="")
                    {
                        if(turn===1)
                        {
                            this.textContent=p1Symbol;
                            winCondition();
                            verify();
                            turn=2;
                            turnWho.textContent="Player2's turn";
                        }
                        else
                        {
                            this.textContent=p2Symbol;
                            winCondition();
                            verify();
                            turn=1;
                            turnWho.textContent="Player1's turn";
                        }
            
                    }
                }
            }
		});
	}
	resetBtn.addEventListener("click",function(){
		reset();
    });
}
function reset(){
    for(var i=0;i<inside.length;i++){
        inside[i].textContent="";
        inside[i].classList.remove("win");
        end=false;
    }
    winMessage.textContent="";
    winner=false;
    if((p1Symbol==="0")&&(gameMode2===false))
    {
        pcTurn();
    }
    turn=1;
    turnWho.textContent="";
    if(gameMode2===true)
    {
        if(p1Symbol==="X")
        {
            turn=1;
            turnWho.textContent="Player1's turn";
        }
        else 
        {
            turn=2;
            turnWho.textContent="Player2's turn";
        }
    }
}
function pcTurn(){
	var pos=Math.floor(Math.random() * 9); 
	while(inside[pos].textContent!="")pos=Math.floor(Math.random() * 9);
	inside[pos].textContent=p2Symbol;
}
function verify(){
	if(end!=true){
		end=true;
		for(var i=0;i<inside.length;i++)
			if(inside[i].textContent==="")end=false;
	}
	if((end)&&(!winner)) winMessage.textContent="Egalitate!";
}
function whoWins(symbol){
    if(gameMode2==false)
    {
        if(symbol===p1Symbol)winMessage.textContent="Player1 wins!";
	    if(symbol===p2Symbol)winMessage.textContent="Pc wins!";
    }
    else
    {
        if(symbol===p1Symbol)winMessage.textContent="Player1 wins!";
	    if(symbol===p2Symbol)winMessage.textContent="Player2 wins!";
    }
}
function winCondition()
{
    if((inside[0].textContent===inside[1].textContent) && (inside[1].textContent===inside[2].textContent) && (inside[0].textContent!=""))
    {
        inside[0].classList.add("win");
        inside[1].classList.add("win");
        inside[2].classList.add("win");
        end=true;winner=true;//alert(end);
        whoWins(inside[0].textContent);
    }
    else if((inside[3].textContent===inside[4].textContent)&&(inside[4].textContent===inside[5].textContent)&&(inside[5].textContent!=""))
    {
        inside[3].classList.add("win");
        inside[4].classList.add("win");
        inside[5].classList.add("win");
        end=true;winner=true;//alert(end);
        whoWins(inside[3].textContent);
    }
    else if((inside[6].textContent===inside[7].textContent)&&(inside[7].textContent===inside[8].textContent)&&(inside[8].textContent!=""))
    {
        inside[6].classList.add("win");
        inside[7].classList.add("win");
        inside[8].classList.add("win");
        end=true;winner=true;//alert(end);
        whoWins(inside[6].textContent);
    }
    else if((inside[0].textContent===inside[3].textContent)&&(inside[3].textContent===inside[6].textContent)&&(inside[0].textContent!=""))
    {
        inside[0].classList.add("win");
        inside[3].classList.add("win");
        inside[6].classList.add("win");
        end=true;winner=true;//alert(end);
        whoWins(inside[0].textContent);
    }
    else if((inside[1].textContent===inside[4].textContent)&&(inside[4].textContent===inside[7].textContent)&&(inside[7].textContent!=""))
    {
        inside[1].classList.add("win");
        inside[4].classList.add("win");
        inside[7].classList.add("win");
        end=true;winner=true;//alert(end);
        whoWins(inside[1].textContent);
    }
    else if((inside[2].textContent===inside[5].textContent)&&(inside[5].textContent===inside[8].textContent)&&(inside[8].textContent!=""))
    {
        inside[2].classList.add("win");
        inside[5].classList.add("win");
        inside[8].classList.add("win");
        end=true;winner=true;//alert(end);
        whoWins(inside[2].textContent);
    }
    else if((inside[0].textContent===inside[4].textContent)&&(inside[4].textContent===inside[8].textContent)&&(inside[8].textContent!=""))
    {
        inside[0].classList.add("win");
        inside[4].classList.add("win");
        inside[8].classList.add("win");
        end=true;winner=true;//alert(end);
        whoWins(inside[0].textContent);
    }
    else if((inside[2].textContent===inside[4].textContent)&&(inside[4].textContent===inside[6].textContent)&&(inside[6].textContent!=""))
    {
        inside[2].classList.add("win");
        inside[4].classList.add("win");
        inside[6].classList.add("win");
        end=true;winner=true;
        whoWins(inside[2].textContent);
    }
}

init();