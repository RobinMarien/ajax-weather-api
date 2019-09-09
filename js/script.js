// API KEY :  be9ff22154c259ee7cb563939e17c8f9

//http://api.openweathermap.org/data/2.5/weather?q=London&APPID=be9ff22154c259ee7cb563939e17c8f9

document.getElementById("check").addEventListener("click", function(){

    var city = document.getElementById("city").value;
    console.log(city);

    fetch("http://api.openweathermap.org/data/2.5/forecast?q="+city+"&units=metric&APPID=be9ff22154c259ee7cb563939e17c8f9")
        .then(function(response){
            return response.json();
        })
        .then(function(data){
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



        })
});