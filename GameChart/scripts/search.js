var matched_listings = [];

// the following line is an HTML command
const params = (new URL(document.location)).searchParams;
// the argument for the following line is dependent on the 'name' property of the search textbox on home page
const searchInput = params.get("game");

$(document).ready(function () {
    var input = document.createElement("div");
    input.innerHTML = ("<p>" + searchInput + "</p>");
    $("#listings").append(input);
    findGame();
});

function findGame () {
    $.getJSON("../data/games.json", function (myData) {
        for (let i = 0; i < myData.length; i++) {
            var game_name = myData[i].Name.toString().toLowerCase();
            var search_input_lower = searchInput.toString().toLowerCase();
            if (game_name.includes(search_input_lower)) {
                var aGame = {
                    ID: myData[i].ID.toString(),
                    Name: myData[i].Name.toString(),
                    Platform: myData[i].Platform.toString(),
                    Year: myData[i].Year.toString(),
                    Genre: myData[i].Genre.toString(),
                    Publisher: myData[i].Publisher.toString(),
                    Developer: myData[i].Developer.toString(),
                    Critic_Score: myData[i].Critic_Score.toString(),
                    User_Score: myData[i].User_Score.toString(),
                    NA_Sales: myData[i].NA_Sales.toString(),
                    PAL_Sales: myData[i].PAL_Sales.toString(),
                    JP_Sales: myData[i].JP_Sales.toString(),
                    Other_Sales: myData[i].Other_Sales.toString(),
                    Global_Sales: myData[i].Global_Sales.toString(),
                    URL: myData[i].URL.toString()
                }
                // add game to array
                matched_listings.push(aGame);

                // create a div element to house the game
                var aListing = document.createElement("div");
                aListing.id = "anElement";
                if (aGame.URL.toString().toLowerCase().includes("notfound")) {
                    var image = "../images/no_image_found.png";
                } else {
                    var image = aGame.URL;
                }
                aListing.innerHTML = (
                    "<div id='individualGame'>" +
                    "<div id='listingThumbnailContainer'>" +
                    "<img id='thumbnail' src=" + image + " >" +
                    "</div>" +
                    "<p>" + aGame.Name + "</p>" +
                    "</div>");
                $("#listings").append(aListing);
            }
        }
    }).done(function() {
        console.log(matched_listings)
    });
}