// API KEY :  be9ff22154c259ee7cb563939e17c8f9

//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=be9ff22154c259ee7cb563939e17c8f9

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
    if (day >= 7) {
        day = 0;
    }
    dayOutput[i].innerHTML = weekdays[day];
}

document.getElementById("check").addEventListener("click", function(){

    var city = document.getElementById("city").value;
    console.log(city);

    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=be9ff22154c259ee7cb563939e17c8f9")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            /*
            console.log(data);
            //console.log(data.list[0])
            console.log(data.list[0].weather[0].icon);

            // TODAY
            var t1_img = document.getElementById("one");
            var t1_icon = data.list[0].weather[0].icon;

            t1_img.setAttribute("src", "http://openweathermap.org/img/wn/"+t1_icon+"@2x.png");

            // TOMORROW
            var t2_img = document.getElementById("two");
            var t2_icon = data.list[0].weather[0].icon;
            */
            var temp1_arr = [];
            var temp2_arr = [];
            var temp3_arr = [];
            var temp4_arr = [];
            var temp5_arr = [];

            var list = data.list;

            list.forEach(function(dataEveryThreeHours){

                //console.log(dataEveryThreeHours);


                var dateNumber = parseInt((dataEveryThreeHours.dt_txt).slice(8,10));
                let today = new Date().getDate();

                if (dateNumber == today){
                    temp1_arr.push(dataEveryThreeHours.main.temp);
                }
                else if  (dateNumber == today + 1){
                    temp2_arr.push(dataEveryThreeHours.main.temp);
                }
                else if  (dateNumber == today + 2){
                    temp3_arr.push(dataEveryThreeHours.main.temp);
                }
                else if  (dateNumber == today + 3){
                    temp4_arr.push(dataEveryThreeHours.main.temp);
                }
                else if  (dateNumber == today + 4){
                    temp5_arr.push(dataEveryThreeHours.main.temp);
                }
                else {}
            });

            var sum1 = temp1_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp1").innerText = (sum1 / (temp1_arr.length)).toFixed(1) + " °C";

            var sum2 = temp2_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp2").innerText = (sum2 / (temp2_arr.length)).toFixed(1) + " °C";

            var sum3 = temp3_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp3").innerText = (sum3 / (temp3_arr.length)).toFixed(1) + " °C";

            var sum4 = temp4_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp4").innerText = (sum4 / (temp4_arr.length)).toFixed(1) + " °C";

            var sum5 = temp5_arr.reduce(function (accumulator, currentValue) {
                return accumulator + currentValue;
            }, 0);
            document.getElementById("temp5").innerText = (sum5 / (temp5_arr.length)).toFixed(1) + " °C";


        })
});