function temp() {
  let temperature = document.getElementById("tempinput").value;
  let message = document.getElementById("message");
  if (temperature >= 30 && temperature <= 99) {
    message.textContent = "🥵 It's very hot!";
    message.style.backgroundColor = "red";
  } else if (temperature >= 20 && temperature <= 29) {
    message.textContent = "😊 Nice weather.";
    message.style.backgroundColor = "green";
  } else if (temperature >= 10 && temperature <= 19) {
    message.textContent = "🧥 It's a bit chilly.";
    message.style.backgroundColor = " orange";
  } else if (temperature >= 1 && temperature <= 9) {
    message.textContent = "❄️ It's cold!";
  } else if (temperature >= 100 && temperature <= 499) {
    message.textContent = "boiling♨️";
  } else if (temperature >= 500) {
    message.textContent = "bro u cooked, LITERALLY";
  } else {
    message.textContent = "freezing 🥶❄️";
    message.style.backgroundColor = "red";
  }
}
