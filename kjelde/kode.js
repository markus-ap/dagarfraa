function updateCountdown() {
  // Calculate the time remaining
  timeRemaining = targetTime - Date.now();

  // If the countdown is complete, stop the interval and display a message
  if (timeRemaining < 0) {
    clearInterval(interval);
    console.log("Countdown complete!");
    return (0,0,0,0);
  }

  // Calculate the number of days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  // Display the time remaining
  
  return (days, hours, minutes, seconds);
  
  var p = document.getElementById("tid");
  p.innerHTML = days + " dagar,</br>" + hours + " timar,</br>" + minutes + " minutt,</br>og " + seconds + " sekund";
}

function formatTimeToHtml(dagar, timar, minutt, sekund){
  var resultat = "";
  
  if(dagar != 0) res += (dagar == 1) ? dagar + " dag,</br>" : dagar + " dagar,</br>";
  res += (timar == 1) ? timar + " time,</br>" : timar + " timar,</br>";
  res += minutt + " minutt og,</br>" + sekund + " sekund";
  
  return resultat
}

async function fyll_gif(){
    const samenlikning = document.getElementById("samenlikning");
    let gifUrl = await getRandomGif(søkeord);
    samenlikning.innerHTML = "<img id='gif' src='" + gifUrl + "'>";
}

async function getRandomGif(searchTerm) {
    // Build the API endpoint URL
    const apiKey = "nXQZqueNgbznfpm65bfJ8YL1wFvxmZG4";
    const endpoint = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}&tag=${searchTerm}`;
  
    // Make the GET request to the API
    const response = await fetch(endpoint);
  
    // Check the response status code
    if (response.status !== 200) {
      console.error(`Error: ${response.status}`);
      return;
    }
  
    // Parse the response data
    const data = await response.json();
  
    // Return the GIF URL
    return data.data.images.original.url;
}
