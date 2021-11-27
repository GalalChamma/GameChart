var matched = [];

const params = (new URL(document.location)).searchParams;
const searchInput = params.get("game");

console.log(searchInput);

var firstGameID = parseInt(searchInput.slice(0, searchInput.indexOf(',')));
var secondGameID = parseInt(searchInput.slice(searchInput.indexOf(',')+1, searchInput.length));

console.log(firstGameID);
console.log(secondGameID);

$(document).ready(function () {
    fetchingJSON();
});

function fetchingJSON () {
    $.getJSON("../data/games.json", function (myData) {
        for (let i = 0; i < myData.length; i++) {
            var game_id = parseInt(myData[i].ID);
            if (game_id == firstGameID || game_id == secondGameID) {
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
                matched.push(aGame);
            }
        }
    }).done(function() {
        console.log("Finished fetching JSON");
        console.log(matched);
        displayGames(matched);
    });
}


function displayGames(array_to_display) {
    document.getElementById("listings").innerHTML = "";
    for (var aGame of array_to_display) {
        // create a div element to house the game
        var aListing = document.createElement("div");
        aListing.id = "anElement";
        if (aGame.URL.toString().toLowerCase().includes("notfound")) {
            var image = "../images/default.png";
        } else {
            var image = aGame.URL;
        }
        aListing.innerHTML = (
            "<div class='flex-container' id='individualGame'>" +
            "<div class='box1' id='listingThumbnailContainer'>" +
            "<a href=game.html?game="+ aGame.ID + ">" +
            "<img id='thumbnail' src=" + image + ">" +
            "</a>" +
            "</div>" +
            "<div class='box2'>" +
            "<p>" + aGame.Name + "</p>" +
            "<p> Genre: " + aGame.Genre + "</p>" +
            "<p> Platform: " + aGame.Platform + "</p>" +
            "<p> Developer: " + aGame.Developer + "</p>" +
            "<p> Publisher: " + aGame.Publisher + "</p>" +
            "<p> Year: " + aGame.Year + "</p>" +
            "</div>" +
            "</div>");
        $("#listings").append(aListing);
    }
}
