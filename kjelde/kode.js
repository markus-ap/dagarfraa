function updateCountdown() {
  // Calculate the time remaining
  if(targetTime < Date.now())
  {
      formatTimeToHtml(0,0,0,0);
      return;
  }
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
  
  formatTimeToHtml(days, hours, minutes, seconds);
}

function formatTimeToHtml(dagar, timar, minutt, sekund){
  var resultat = "";
  
  if(dagar != 0) resultat += (dagar == 1) ? dagar + " dag,</br>" : dagar + " dagar,</br>";
  resultat += (timar == 1) ? timar + " time,</br>" : timar + " timar,</br>";
  resultat += minutt + " minutt og,</br>" + sekund + " sekund";
  var p = document.getElementById("tid");
 
  if(dagar == 0 && timar == 0 && minutt == 0 && sekund == 0)
  {
    var kropp = document.getElementById("kropp");
    kropp.innerHTML = "DET HAR SKJEDD! 😱";
    return;
  }

  p.innerHTML = resultat;
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
