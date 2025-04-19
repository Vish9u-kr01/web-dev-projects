function updateClock() {
  const now = new Date();
  const seconds = now.getSeconds();
  const minutes = now.getMinutes();
  const hours = now.getHours();

  // Calculate the degrees for each hand
  const secondDeg = seconds*6;
  const minuteDeg = minutes*6 
  const hourDeg = (hours%12)*30 + minutes*0.5 ;

  // Update the rotation of each hand
  document.getElementById('second').style.transform = `translateX(-50%) rotate(${secondDeg}deg)`;
  document.getElementById('minute').style.transform = `translateX(-50%) rotate(${minuteDeg}deg)`;
  document.getElementById('hour').style.transform = `translateX(-50%) rotate(${hourDeg}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately