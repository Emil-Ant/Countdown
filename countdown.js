// target date
const targetDate = new Date('2023-05-24T00:00:00');

function updateCountdown() {
    let now = new Date();
    let diff = targetDate - now;

    // Calculate remaining days, hours, minutes and seconds
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((diff % (1000 * 60)) / 1000);

    // displaying countdown 
    let countdownElement = document.getElementById('countdown');
    countdownElement.innerHTML = `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;


  // Update every second (the setTimeout function runs the function every second here)
  setTimeout(updateCountdown, 1000);
}

updateCountdown();