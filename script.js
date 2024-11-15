const apiKey = '0a637603ce1e23aa17e3e73ab2328649
'; // OpenWeatherMap API anahtarınızı buraya ekleyin.

document.getElementById('getWeather').addEventListener('click', () => {
  const city = document.getElementById('city').value;

  if (city === '') {
    alert('Lütfen bir şehir adı girin.');
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=tr`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Şehir bulunamadı');
      }
      return response.json();
    })
    .then(data => {
      const weatherResult = document.getElementById('weatherResult');
      weatherResult.innerHTML = `
        <p><strong>${data.name}</strong> için hava durumu:</p>
        <p>Sıcaklık: ${data.main.temp}°C</p>
        <p>Durum: ${data.weather[0].description}</p>
        <p>Nem: ${data.main.humidity}%</p>
      `;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = `<p>${error.message}</p>`;
    });
});
