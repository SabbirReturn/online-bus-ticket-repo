function scrollToSeats(){
    let seatLayout = document.getElementById("seatLayout");
    if(seatLayout){
        seatLayout.scrollIntoView({
            behavior:"smooth",
            block:"center"
        })
    }
    else{
        console.log('error')
    }
}

let seatBtns = document.querySelectorAll('.seat-btn');

for(let seatBtn of seatBtns){
    seatBtn.addEventListener('click', function(event){
        seatBtn.classList.toggle('selected-seat')
        let text = seatBtn.innerText;
        console.log(text)
    })
}
