// const timeE1 = document.getElementById('time');
// const dateE1 = document.getElementById('date');
// const currentweatherItemE1 = document.getElementById('current-weather-items');
// const timeZone = document.getElementById('time-zone');
// const countryE1 = document.getElementById('country');
// const weatherForecastE1 = document.getElementById('weather-forecast');
// const currentTempE1 = document.getElementById('current-temp');
// const days = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
// const months = ['jan', 'feb', 'mar', 'april', 'may', 'jun', 'july', 'aug', 'sep', 'oct', 'nov', 'dec'];
// const API_KEY = '48fede77cc27bd3d38210d2319021427';
// const time = new Date();

// const day = time.getDay();


// setInterval(() => {
//   const time = new Date();
//   const month = time.getMonth();
//   const date = time.getDate();
//   const day = time.getDay();
//   const hours = time.getHours();
//   const hoursin12hoursFormat = hours >= 13 ? hours % 12 : hours
//   const hour = hoursin12hoursFormat <= 9 ? '0'+hoursin12hoursFormat : hoursin12hoursFormat;
//   const minutes = time.getMinutes();
//   const min = minutes <= 9 ? '0'+ minutes : minutes;

//   let ampm;

//   if (hours >= 12)
//     ampm = 'PM';
//   else {
//     ampm = 'AM';
//   }

//   timeE1.innerHTML = hour + ':' + min + ' ' +`<span class='ampm'>${ampm}</span>` ;
//   dateE1.innerHTML = days[day] + ',' + date + ' ' + ',' + months[month];
// }, 1000);

// let loading = false;
// // function to fetch data for current day
// getweatherData()
// function getweatherData() {
//   loading = true;
//   navigator.geolocation.getCurrentPosition((success) => {
//     // let (latitude,longitude)=success.coords;
//     var latitude = success.coords.latitude;
//     var longitude = success.coords.longitude;
    
//       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=48fede77cc27bd3d38210d2319021427`)
//       .then((response) => response.json())
//       .then((data) => showWeatherData(data));
//   loading = false;

//     //  showWeatherData(data);
//     // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
//   })
// }

//   // Current day data
// function showWeatherData(data) {
//   let { humidity, pressure } = data.main;
//   let {speed} = data.wind;
//   let {sunrise, sunset} = data.sys;
//   currentweatherItemE1.innerHTML = `

    
//       <div class="weather-item">
//         <div>humidity</div>
//         <div>${humidity}%</div>
//       </div>
//       <div class="weather-item">
//         <div>pressure</div>
//         <div>${pressure} atm</div>
//       </div>
//       <div class="weather-item">
//         <div>wind speed</div>
//         <div>${speed}</div>
//       </div>
//       <div class="weather-item">
//         <div>sunrise</div>
//         <div>${sunrise}</div>
//       </div>
//       <div class="weather-item">
//         <div>sunset</div>
//         <div>${sunset}</div>
//       </div>
//     </div>`;
// }

// getweatherData55()
// function getweatherData55() {
//   loading = true;
//   navigator.geolocation.getCurrentPosition((success) => {
//     // let (latitude,longitude)=success.coords;
//     var latitude = success.coords.latitude;
//     var longitude = success.coords.longitude;
    
//       fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=48fede77cc27bd3d38210d2319021427&cnt=6`)
//       .then((response) => response.json())
//       .then((data) => showWeatherData5(data));
//   loading = false;

//     //  showWeatherData(data);
//     // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
//   })
// }
// const dayS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
// let i = dayS.findIndex(day)
// function showWeatherData5(data) {

//   data.list.map((e)=>{
//     let { humidity, pressure,temp_max,temp_min } = e.main;
//     let {speed} = e.wind;
//     let {description} = e.weather[0];
//     weatherForecastE1.insertAdjacentHTML("beforeend", ` 
//     <div class="weather-forecast-item">
//     <div class="day">${
      
//       dayS[i+1]
//     }</div>
//     <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="weather icon" class="item">
//     <div class="temp">Night${temp_min} C</div>
//     <div class="temp">Day${temp_max} C</div>
//     <div class="temp">Wind Speed${speed} C</div>
//     <div class="temp">Sky${description} </div>

// </div>`
// )
// i++;
//   })

// }




// const timeE1 = document.getElementById('time');
// const dateE1 = document.getElementById('date');
// const currentweatherItemE1 = document.getElementById('current-weather-items');
// const timeZone = document.getElementById('time-zone');
// const countryE1 = document.getElementById('country');
// const weatherForecastE1 = document.getElementById('weather-forecast');
// const currentTempE1 = document.getElementById('current-temp');
// const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// const API_KEY = '48fede77cc27bd3d38210d2319021427';
// const time = new Date();
// let day = time.getDay();
// setInterval(() => {
//   const month = time.getMonth();
//   const date = time.getDate();
//   const hours = time.getHours();
//   const hoursin12hoursFormat = hours >= 13 ? hours % 12 : hours
//   const hour = hoursin12hoursFormat <= 9 ? '0'+hoursin12hoursFormat : hoursin12hoursFormat;
//   const minutes = time.getMinutes();
//   const min = minutes <= 9 ? '0'+ minutes : minutes;

//   let ampm;

//   if (hours >= 12)
//     ampm = 'PM';
//   else {
//     ampm = 'AM';
//   }

//   timeE1.innerHTML = hour + ':' + min + ' ' +`<span class='ampm'>${ampm}</span>` ;
//   dateE1.innerHTML = days[day] + ',' + date + ' ' + ',' + months[month];
// }, 1000);

// let loading = false;
// // function to fetch data for current day
// getweatherData()
// function getweatherData() {
//   loading = true;
//   navigator.geolocation.getCurrentPosition((success) => {
//     // let (latitude,longitude)=success.coords;
//     var latitude = success.coords.latitude;
//     var longitude = success.coords.longitude;
    
//       fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=48fede77cc27bd3d38210d2319021427`)
//       .then((response) => response.json())
//       .then((data) => showWeatherData(data));
//   loading = false;

//     //  showWeatherData(data);
//     // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
//   })
// }

//   // Current day data
// function showWeatherData(data) {
//   let { humidity, pressure } = data.main;
//   let {speed} = data.wind;
//   let {sunrise, sunset} = data.sys;
//   currentweatherItemE1.innerHTML = `

    
//       <div class="weather-item">
//         <div>humidity</div>
//         <div>${humidity}%</div>
//       </div>
//       <div class="weather-item">
//         <div>pressure</div>
//         <div>${pressure} atm</div>
//       </div>
//       <div class="weather-item">
//         <div>wind speed</div>
//         <div>${speed}</div>
//       </div>
//       <div class="weather-item">
//         <div>sunrise</div>
//         <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
//       </div>
//       <div class="weather-item">
//         <div>sunset</div>
//         <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
//       </div>
//     </div>`;
// }

// getweatherData55()
// function getweatherData55() {
//   loading = true;
//   navigator.geolocation.getCurrentPosition((success) => {
//     // let (latitude,longitude)=success.coords;
//     var latitude = success.coords.latitude;
//     var longitude = success.coords.longitude;
    
//       fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=48fede77cc27bd3d38210d2319021427&cnt=6`)
//       .then((response) => response.json())
//       .then((data) => showWeatherData5(data));
//   loading = false;

//   })
// }
// let i =day;
// function showWeatherData5(data) {
//     data.list.map((e)=>{
//         if(i===6){
//             i = 0;
//         }else i += 1;
//     let { humidity, pressure,temp_max,temp_min } = e.main;
//     let {speed} = e.wind;
//     let {description} = e.weather[0];
//     weatherForecastE1.insertAdjacentHTML("beforeend", ` 
//     <div class="weather-forecast-item">
//     <div class="day">${days[i]}</div>
//     <img src="http://openweathermap.org/img/wn//${e.weather[0].icon}@2x.png" alt="weather icon" class="item">
//     <div class="temp">Night${" "+temp_min} &#176 C</div>
//     <div class="temp">Day${" "+temp_max }&#176 C</div>

//  </div>`)})
// }



const timeE1 = document.getElementById('time');
const dateE1 = document.getElementById('date');
const currentweatherItemE1 = document.getElementById('current-weather-items');
const timeZone = document.getElementById('time-zone');
const countryE1 = document.getElementById('country');
const weatherForecastE1 = document.getElementById('weather-forecast');
const currentTempE1 = document.getElementById('current-temp');
const days = ['Sunday', 'Monday', 'Tuesday', 'wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const API_KEY = '48fede77cc27bd3d38210d2319021427';
const time = new Date();
let day = time.getDay();
setInterval(() => {
  const month = time.getMonth();
  const date = time.getDate();
  const hours = time.getHours();
  const hoursin12hoursFormat = hours >= 13 ? hours % 12 : hours
  const hour = hoursin12hoursFormat <= 9 ? '0'+hoursin12hoursFormat : hoursin12hoursFormat;
  const minutes = time.getMinutes();
  const min = minutes <= 9 ? '0'+ minutes : minutes;

  let ampm;

  if (hours >= 12)
    ampm = 'PM';
  else {
    ampm = 'AM';
  }

  timeE1.innerHTML = hour + ':' + min + ' ' +`<span class='ampm'>${ampm}</span>` ;
  dateE1.innerHTML = days[day] + ',' + date + ' ' + ',' + months[month];
}, 1000);

let loading = false;
// function to fetch data for current day
getweatherData()
function getweatherData() {
  loading = true;
  navigator.geolocation.getCurrentPosition((success) => {
    // let (latitude,longitude)=success.coords;
    var latitude = success.coords.latitude;
    var longitude = success.coords.longitude;
    
      fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=48fede77cc27bd3d38210d2319021427`)
      .then((response) => response.json())
      .then((data) => showWeatherData(data));
  loading = false;

    //  showWeatherData(data);
    // api.openweathermap.org/data/2.5/forecast/daily?lat={lat}&lon={lon}&cnt={cnt}&appid={API key}
  })
}

  // Current day data
function showWeatherData(data) {
  console.log(data)
  let { humidity, pressure,temp } = data.main;
  let {speed} = data.wind;
  let {sunrise, sunset,country} = data.sys;
  timeZone.innerHTML= `${country +" "}/ ${" "+data.name}`
  currentweatherItemE1.innerHTML = `

    
      <div class="weather-item">
        <div>humidity</div>
        <div>${humidity}%</div>
      </div>
      <div class="weather-item">
        <div>pressure</div>
        <div>${pressure} atm</div>
      </div>
      <div class="weather-item">
        <div>Temp</div>
        <div>${Math.round((temp-273.15)*100)/100} &#176 C</div>
      </div>
      <div class="weather-item">
        <div>wind speed</div>
        <div>${speed}</div>
      </div>
      <div class="weather-item">
        <div>sunrise</div>
        <div>${window.moment(sunrise * 1000).format('HH:mm a')}</div>
      </div>
      <div class="weather-item">
        <div>sunset</div>
        <div>${window.moment(sunset * 1000).format('HH:mm a')}</div>
      </div>
    </div>`;
}

getweatherData55()
function getweatherData55() {
  loading = true;
  navigator.geolocation.getCurrentPosition((success) => {
    // let (latitude,longitude)=success.coords;
    var latitude = success.coords.latitude;
    var longitude = success.coords.longitude;
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=48fede77cc27bd3d38210d2319021427&cnt=6`)
      
      .then((response) => response.json())
      .then((data) => showWeatherData5(data));
  

  })
}
let i =day;
function showWeatherData5(data) {
    data.list.map((e)=>{
        if(i===6){
            i = 0;
        }else i += 1;
    let { humidity, pressure,temp_max,temp_min } = e.main;
    let {speed} = e.wind;
    let {description} = e.weather[0];
    weatherForecastE1.insertAdjacentHTML("beforeend", ` 
    <div class="weather-forecast-item">
    <div class="day">${days[i]}</div>
    <img src="http://openweathermap.org/img/wn//${e.weather[0].icon}@2x.png" alt="weather icon" class="item">
    <div class="temp">Night${" "+Math.round((temp_min-273.15)*100)/100} &#176 C</div>
    <div class="temp">Day${" "+Math.round((temp_max-273.15)*100)/100 }&#176 C</div>

 </div>`)})
}

setInterval(()=>{
getweatherData(),
  
  getweatherData55()
  
  
  
  },900000)