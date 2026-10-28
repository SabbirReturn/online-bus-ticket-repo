function scrollToSeats(){
    let seatLayOut = document.getElementById('seatLayout')
    seatLayOut.scrollIntoView({
        behavior:"smooth",
        block:'center',
    })
}

let selectedSeatNum = [];
let seatBtns = document.querySelectorAll('.seat-btn')
for(let seat of seatBtns){
    seat.addEventListener('click', function(event){
        let selectedSeat = event.target;
        let selectedSeatText = selectedSeat.innerText;
        selectedSeat.classList.toggle('bg-green-500')
        selectedSeatNum.push(selectedSeatText); 
        // console.log(selectedSeatNum)
        console.log(selectedSeatNum)
    })
    
}


