// API KEY :  be9ff22154c259ee7cb563939e17c8f9

//Displaying the days

let weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

let dayOutput = document.getElementsByClassName("day");

let day = new Date().getDay();

for (let i = 0; i < dayOutput.length; i++, day++) {
    if (day > 6) {
        day = 0;
    }
    dayOutput[i].innerHTML = weekdays[day];
}


// Fetching the OpenWeatherMap information

document.getElementById("check").addEventListener("click", function(){

    var city = document.getElementById("city").value;
    console.log(city);

    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=be9ff22154c259ee7cb563939e17c8f9")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data.list);

            /*
            console.log(data);
            //console.log(data.list[0])
            console.log(data.list[0].weather[0].icon);

            // TODAY
            var t1_img = document.getElementById("one");
            var t1_icon = data.list[0].weather[0].icon;

            t1_img.setAttribute("src", "http://openweathermap.org/img/wn/"+t1_icon+"@2x.png");
            */
            var temp1_arr = [];
            var tempMin1_arr = [];
            var tempMax1_arr = [];
            var weather1 = [];

            var temp2_arr = [];
            var tempMin2_arr = [];
            var tempMax2_arr = [];
            var weather2 = [];

            var temp3_arr = [];
            var tempMin3_arr = [];
            var tempMax3_arr = [];
            var weather3 = [];

            var temp4_arr = [];
            var tempMin4_arr = [];
            var tempMax4_arr = [];
            var weather4 = [];

            var temp5_arr = [];
            var tempMin5_arr = [];
            var tempMax5_arr = [];
            var weather5 = [];

            var list = data.list;

            let day1 = new Date();
            var dateNow = day1.getDate();

            var day2 = new Date();
            day2.setDate(dateNow+1);
            var date2 = day2.getDate();

            var day3 = new Date();
            day3.setDate(dateNow+2);
            var date3 = day3.getDate();

            var day4 = new Date();
            day4.setDate(dateNow+3);
            var date4 = day4.getDate();

            var day5 = new Date();
            day5.setDate(dateNow+4);
            var date5 = day5.getDate();


            list.forEach(function(dataEveryThreeHours){

                //console.log(dataEveryThreeHours);


                var dateNumber = parseInt((dataEveryThreeHours.dt_txt).slice(8,10));


                if (dateNumber == dateNow){
                    temp1_arr.push(dataEveryThreeHours.main.temp);
                    tempMin1_arr.push(dataEveryThreeHours.main.temp_min);
                    tempMax1_arr.push(dataEveryThreeHours.main.temp_max);
                    weather1.push(dataEveryThreeHours.weather[0].main);

                }
                else if  (dateNumber == date2){
                    temp2_arr.push(dataEveryThreeHours.main.temp);
                    tempMin2_arr.push(dataEveryThreeHours.main.temp_min);
                    tempMax2_arr.push(dataEveryThreeHours.main.temp_max);
                    weather2.push(dataEveryThreeHours.weather[0].main);
                }
                else if  (dateNumber == date3){
                    temp3_arr.push(dataEveryThreeHours.main.temp);
                    tempMin3_arr.push(dataEveryThreeHours.main.temp_min);
                    tempMax3_arr.push(dataEveryThreeHours.main.temp_max);
                    weather3.push(dataEveryThreeHours.weather[0].main);
                }
                else if  (dateNumber == date4){
                    temp4_arr.push(dataEveryThreeHours.main.temp);
                    tempMin4_arr.push(dataEveryThreeHours.main.temp_min);
                    tempMax4_arr.push(dataEveryThreeHours.main.temp_max);
                    weather4.push(dataEveryThreeHours.weather[0].main);
                }
                else if  (dateNumber == date5){
                    temp5_arr.push(dataEveryThreeHours.main.temp);
                    tempMin5_arr.push(dataEveryThreeHours.main.temp_min);
                    tempMax5_arr.push(dataEveryThreeHours.main.temp_max);
                    weather5.push(dataEveryThreeHours.weather[0].main);
                }
                else {}
            });

            //Get the most occurring element in weather array | https://stackoverflow.com/questions/53509971/get-most-occurring-elements-in-array-javascript

            const mostFrequent = data => data.reduce((r,c,i,a) => {
                r[c] = (r[c] || 0) + 1;
                r.max = r[c] > r.max ? r[c] : r.max;
                if(i == a.length-1) {
                    r = Object.entries(r).filter(([k,v]) => v == r.max && k != 'max')
                    return r.map(x => x[0])
                }
                return r
            }, {max: 0});

            console.log(mostFrequent(weather1)[0]);

            //DAY ONE temp
            var sum1 = temp1_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMin1 = tempMin1_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMax1 = tempMax1_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp1").innerText = (sum1 / (temp1_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMin1").innerText = (sumMin1 / (tempMin1_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMax1").innerText = (sumMax1 / (tempMax1_arr.length)).toFixed(1) + " °C";

            //DAY ONE icon
            var icon1 = document.getElementById("icon1");

            if ((mostFrequent(weather1)[0]) == "Rain"){
                icon1.setAttribute("src", "http://openweathermap.org/img/wn/10d@2x.png");
            }
            else if ((mostFrequent(weather1)[0]) == "Thunderstorm"){
                icon1.setAttribute("src", "http://openweathermap.org/img/wn/11d@2x.png");
            }
            else if ((mostFrequent(weather1)[0]) == "Clouds"){
                icon1.setAttribute("src", "http://openweathermap.org/img/wn/04d@2x.png");
            }
            else if ((mostFrequent(weather1)[0]) == "Clear"){
                icon1.setAttribute("src", "http://openweathermap.org/img/wn/01d@2x.png");
            }
            else if ((mostFrequent(weather1)[0]) == "Snow"){
                icon1.setAttribute("src", "http://openweathermap.org/img/wn/13d@2x.png");
            }
            else if ((mostFrequent(weather1)[0]) == "Drizzle"){
                icon1.setAttribute("src", "http://openweathermap.org/img/wn/09d@2x.png");
            }
            else{
                icon1.setAttribute("src", "http://openweathermap.org/img/wn/50d@2x.png");
            }

            //DAY TWO
            var sum2 = temp2_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMin2 = tempMin2_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMax2 = tempMax2_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp2").innerText = (sum2 / (temp2_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMin2").innerText = (sumMin2 / (tempMin2_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMax2").innerText = (sumMax2 / (tempMax2_arr.length)).toFixed(1) + " °C";

            //DAY THREE
            var sum3 = temp3_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMin3 = tempMin3_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMax3 = tempMax3_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp3").innerText = (sum3 / (temp3_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMin3").innerText = (sumMin3 / (tempMin3_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMax3").innerText = (sumMax3 / (tempMax3_arr.length)).toFixed(1) + " °C";

            //DAY FOUR
            var sum4 = temp4_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMin4 = tempMin4_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMax4 = tempMax4_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp4").innerText = (sum4 / (temp4_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMin4").innerText = (sumMin4 / (tempMin1_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMax4").innerText = (sumMax4 / (tempMax1_arr.length)).toFixed(1) + " °C";

            //DAY FIVE
            var sum5 = temp5_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMin5 = tempMin5_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            var sumMax5 = tempMax5_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp5").innerText = (sum5 / (temp5_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMin5").innerText = (sumMin5 / (tempMin5_arr.length)).toFixed(1) + " °C";
            document.getElementById("tempMax5").innerText = (sumMax5 / (tempMax5_arr.length)).toFixed(1) + " °C";


        })
});