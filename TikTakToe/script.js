 let boxes = document.querySelectorAll(".Box");
 let resetBtn = document.querySelector("#reset_btn");
 let newGameBtn = document.querySelector("#new_game_btn");
 let msgContainer = document.querySelector(".msg-container");
 let msg = document.querySelector("#msg");



 let turn0 = true;

 const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
 ]

 const resetGame = ()=>{
    turn0 = true;
    enableBox();
    msgContainer.classList.add("hide");
 }


boxes.forEach((Box) => {
    Box.addEventListener("click", () => {

        if(turn0){
            Box.innerText = "0";
             Box.style.color = "blue";
            turn0 = false;

        } else{

            Box.innerText ="X";
            Box.style.color = "green";
            turn0 = true;

        }
        Box.disabled = true;

        checkWinner();

    })
 })

 const enableBox = ()=>{
    for (let box of boxes){
        box.disabled = false; 
        box.innerText ="";
    }
 }

 const disableBox = ()=>{
    for (let box of boxes){
        box.disabled = true; 
    }
 }
 const showWinner = (Winner) => {
    msg.innerText = 'Congratulation, Winner is ' +Winner;
    msgContainer.classList.remove("hide");
    disableBox();

 }
 const checkWinner =() =>{


    for(let pattern of winPatterns){
        // console.log(pattern[0], pattern[1], pattern[2])
        // console.log(
        // boxes[pattern[0]].innerText, 
        // boxes[pattern[1]].innerText,
        // boxes[pattern[2]].innerText)

        
    let pos1val =  boxes[pattern[0]].innerText;
    let pos2val =  boxes[pattern[1]].innerText;
    let pos3val =  boxes[pattern[2]].innerText; 


    if (pos1val != "" && pos2val!= "" && pos3val != ""){

        if (pos1val === pos2val && pos2val === pos3val){
            
            showWinner(pos1val);
        }
    }
  }
};

 newGameBtn.addEventListener("click", resetGame);
 resetBtn.addEventListener("click", resetGame);


