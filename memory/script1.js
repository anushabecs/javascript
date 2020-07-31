var isFirstCard = true;
var firstCard;
var secondCard;
var lockBoard = false;
function onCardClick(element){
    if(lockBoard == true){
        return;
    }
    if(isFirstCard == true){
        element.classList.add('flip');
        isFirstCard = false;
        firstCard = element;
        console.log("first card");
        console.log(firstCard);
    }
    else
    {
        secondCard = element;
        element.classList.add('flip');
        console.log("second card");
        console.log(secondCard);
        if(firstCard.dataset.cardname == secondCard.dataset.cardname){
            firstCard.style.pointerEvents = 'none';
            secondCard.style.pointerEvents ='none';
            isFirstCard = true;
            firstCard = null;
            secondCard = null;
            lockBoard = false;
        }else{
           // isFirstCard = true;
            setTimeout(function()){
                firstCard.classList.remove('fliip');
                secondCard.classList.remove('flip');
                lockBoard = false;
                isFirstCard = true;
            },1000);
        }
    }

}

function shuffle(){
    var allCards=document.querySelectorAll('.memory')
    allCards.forEach(function(cards){
        var rand =Math.random();
        console.log(rand);
    });

}