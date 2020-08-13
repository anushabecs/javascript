var a = document.getElementById("t").innerHTML = `<div class="game" id="main"></div>`
var b = document.getElementById("main").innerHTML = `<span id ="enter">player</span>
<div class="box" id="box1"></div>
<div class="box" id="box2"></div>
<div class="box" id="box3"></div>
<div class="box" id="box4"></div>
<div class="box" id="box5"></div>
<div class="box" id="box6"></div>
<div class="box" id="box7"></div>
<div class="box" id="box8"></div>
<div class="box" id="box9"></div>

<button onclick="replay()">RESET</button>`

        
        var enter = document.getElementById("enter"),
                boxes = document.querySelectorAll("#main div"), X_or_O = 0;
          
            function Winner(b1,b2,b3){
                b1.classList.add("win");
                b2.classList.add("win");
                b3.classList.add("win");
                enter.innerHTML = b1.innerHTML  +  "Won the match";
                setTimeout(()=>{
                  replay();
               },1000);
               }
            
            function Win(){
                
                var box1 = document.getElementById("box1"),
                    box2 = document.getElementById("box2"),
                    box3 = document.getElementById("box3"),
                    box4 = document.getElementById("box4"),
                    box5 = document.getElementById("box5"),
                    box6 = document.getElementById("box6"),
                    box7 = document.getElementById("box7"),
                    box8 = document.getElementById("box8"),
                    box9 = document.getElementById("box9");
              if(box1.innerHTML !== "" && box1.innerHTML === box2.innerHTML && box1.innerHTML === box3.innerHTML)
                 Winner(box1,box2,box3);
         
              if(box4.innerHTML !== "" && box4.innerHTML === box5.innerHTML && box4.innerHTML === box6.innerHTML)
                 Winner(box4,box5,box6);
             
              if(box7.innerHTML !== "" && box7.innerHTML === box8.innerHTML && box7.innerHTML === box9.innerHTML)
                 Winner(box7,box8,box9);
             
              if(box1.innerHTML !== "" && box1.innerHTML === box4.innerHTML && box1.innerHTML === box7.innerHTML)
                 Winner(box1,box4,box7);
             
              if(box2.innerHTML !== "" && box2.innerHTML === box5.innerHTML && box2.innerHTML === box8.innerHTML)
                 Winner(box2,box5,box8);
             
              if(box3.innerHTML !== "" && box3.innerHTML === box6.innerHTML && box3.innerHTML === box9.innerHTML)
                 Winner(box3,box6,box9);
             
              if(box1.innerHTML !== "" && box1.innerHTML === box5.innerHTML && box1.innerHTML === box9.innerHTML)
                 Winner(box1,box5,box9);
             
              if(box3.innerHTML !== "" && box3.innerHTML === box5.innerHTML && box3.innerHTML === box7.innerHTML)
                 Winner(box3,box5,box7);  
              
             
            }
            for(var i = 0; i < boxes.length; i++){
                boxes[i].onclick = function(){
                    if(this.innerHTML !== "X" && this.innerHTML !== "O"){
                    if(X_or_O%2 === 0){
                       console.log(X_or_O);
                       this.innerHTML = "X"; 
                       enter.innerHTML = "player1";
                       Win();
                       X_or_O += 1;
                       
                    }else{
                        console.log(X_or_O);
                       this.innerHTML = "O";
                       enter.innerHTML = "player2";
                       Win();
                       X_or_O += 1;  
                    }
                }
                    
                };
            }
            
            function replay(){
                
                for(var i = 0; i < boxes.length; i++){
                    boxes[i].classList.remove("win");
                    boxes[i].innerHTML = "";
                    enter.innerHTML = "Player";
                    enter.style.fontSize = "25px";
                    
                }
                
            }