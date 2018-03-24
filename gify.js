$(document).ready(function () {



    var animalArray = ["dog", "cat", "monkey", "mouse", "elephant", "lion", "tiger", "bear", "ostrich"]
    for (var i = 0; i < animalArray.length; i++) {
        var newBtn = $("<button class='animalBtn'></button>");
        newBtn.text(animalArray[i]);
        $("#button-div").append(newBtn);
    }
    buttonSelect();







    function apicall(btnText) {
        // var animal = $("button").text();
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + btnText + "&api_key=cIzQ2aJwHt8s72O4ZDpwXVX8LpRi78L1&limit=10";

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(queryURL);
                console.log(response);

                var results = response.data;
                for (var i = 0; i < results.length; i++) {
                    var animalDiv = $("<div>");
                    var p = $("<p>").text("Rating: " + results[i].rating);
                    var animalImage = $("<img>");

                    animalImage.attr("src", results[i].images.fixed_height.url);
                    animalDiv.append(p);
                    animalDiv.append(animalImage);

                    $("#gif-view").prepend(animalDiv);

                }
            });
    }

    function buttonSelect() {
        $(".animalBtn").on("click", function () {
            var btnText = this.innerHTML;
            console.log(btnText);
            apicall(btnText);
            $("#gif-view").empty();
        })
    }


    $("#add-gif").on("click", function () {
        event.preventDefault();

        var userInput = $("#gif-input").val().trim();
        var newButton = $("<button class='animalBtn'></button>")

        newButton.append(userInput);
        $("#button-div").append(newButton);
        buttonSelect();
    });





});