let bookedSeatsSelector=document.querySelector('.bookedSeats');
let leftSeatsSelector=document.querySelector('.leftSeats');
let seatsSelector=document.querySelectorAll('.seat');

let bookedSeats=0;
let leftSeats=seatsSelector.length;

bookedSeatsSelector.innerHTML=bookedSeats;
leftSeatsSelector.innerHTML=leftSeats;

seatsSelector.forEach((seat) => {
    seat.addEventListener('click',() =>{
        seat.classList.toggle('booked');
        seat.classList.contains('booked')? bookSeats(1):bookSeats(-1);
    });
});

const bookSeats=(ele)=>{
    bookedSeats +=1*ele;
    leftSeats -= 1*ele;

bookedSeatsSelector.innerHTML=bookedSeats;
leftSeatsSelector.innerHTML=leftSeats;
};