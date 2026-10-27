function scrollToSeats(){
    let seatLayOut = document.getElementById('seatLayout')
    seatLayOut.scrollIntoView({
        behavior:"smooth",
        block:'center',
    })
}

let seatBtns = document.querySelectorAll('.seat-btn')
for(let seat of seatBtns){
    seat.addEventListener('click', function(){
        console.log('click');
    })
}