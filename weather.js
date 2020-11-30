var APIKey = "&appid=86b28d062dafcd71f018333deb279dd1";


$("#find-city").on("click", function(event) {

    event.preventDefault();

    var city = $("#city-input").val();

    // Here we construct our URL
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + APIKey;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".img").html("img" + response.weather.icon)
        $(".city").html("<h1>" + response.name + " Weather Details</h1>");
        $(".wind").text("Wind Speed: " + response.wind.speed);
        $(".humidity").text("Humidity: " + response.main.humidity);
        
        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        // add temp content to html
        $(".temp").text("Temperature (K) " + response.main.temp);
        $(".tempF").text("Temperature (F) " + tempF.toFixed(2));

        // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);
    
    var lat = response.coord.lat
    var lon = response.coord.lon

    var city = $("#city-input").val();

    var queryURL = "http://api.openweathermap.org/data/2.5/uvi?" + "lat=" + lat + "&lon=" + lon + APIKey ;

    $.ajax({
        url: queryURL,
        method: "GET"
      })
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response); 

        
        $(".UVindex").text("UV Index: " + response.value);
    });
    
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + APIKey;
    
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $(".FiveDay").text("FiveDay" + response.list[0]);
    });

});

});



//var queryURL = "http://openweathermap.org/img/wn/10d@2x.png"

//$("img").img("image " + response.weather.icons)





//http://openweathermap.org/img/wn/10d@2x.png

//var WeatherIcon


