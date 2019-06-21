window.addEventListener('load', ()=> {
     let long;
     let lat;
     let temperatureDescription = document.querySelector('.temperature-description');
     let temperatureDegree = document.querySelector('.temperature-degree');
     let locationTimezone = document.querySelector('.location-timezone');

     if(navigator.geolocation){
         navigator.geolocation.getCurrentPosition(position => {
           long = position.coords.latitude;
           lat = position.coords.longitude;

           const proxy = 'https://cors-anywhere.herokuapp.com/';
           const api = `${proxy}https://api.darksky.net/forecast/012698634aa3a4bd26ae2e69304988b5/${lat},${long}`;

           fetch(api)
            .then(response =>{
                return response.json();
            })
            .then(data => {
                console.log(data)
                const {temperature, icon} = data.currently;
                //Set DOM Elements from API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = icon;
                locationTimezone.textContent = data.timezone;
            });
         });
     }
});