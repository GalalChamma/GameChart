//var all_listings = [];
var game_found = null;
const params = (new URL(document.location)).searchParams;
const searchInput = params.get("game");

$(document).ready(function () {
    findGame();
});

function findGame () {
    $.getJSON("../data/games.json", function (myData) {
        //        for (let i = 0; i < myData.length; i++) {
        for (let i = 0; i < myData.length; i++) {
            //var game_name = myData[i].Name.toString().toLowerCase();
            //var search_input_lower = searchInput.toString().toLowerCase();
            if (myData[i].ID == parseInt(searchInput)) {
                game_found = {
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
            }
        }
        if (game_found!=null) {
            //all_listings.push(aGame);
            var aListing = document.createElement("div");
            aListing.id = "anElement";
            if (game_found.URL.toString().toLowerCase().includes("notfound")) {
                var image = "../images/default.png";
            } else {
                var image = game_found.URL;
            }
            aListing.innerHTML = (
                "<div id='individualGame'>" +
                "<div id='listingThumbnailContainer'>" +
                "<img id='thumbnail' src=" + image + " >" +
                "</div>" +
                "<h3>" + game_found.Name + "</h3>" +
                "<p>" + game_found.Genre + "</p>" +
                "<p>" + game_found.Year + "<br><br></p>" +
                "<p>" + game_found.Platform + "</p>" +
                "<p>" + "Developer: " + game_found.Developer + "</p>" +
                "<p>" + "Publisher: " + game_found.Publisher + "</p>" +
                "<p>" + "Global Sales: " +game_found.Global_Sales + " million"+ "</p>" +
                "<p>" + "NA Sales: " +game_found.NA_Sales + " million"+ "</p>" +
                "<p>" + "PAL Sales: " +game_found.PAL_Sales + " million"+ "</p>" +
                "<p>" + "Japan Sales: " +game_found.JP_Sales + " million"+ "</p>" +
                "<p>" + "Other Sales: " +game_found.Other_Sales + " million" + "</p>" +

                "</div>");
            $("#listings").append(aListing);
        }
    }).done(function() {
        console.log("Did we find a the game? " + (game_found!=null));
    });
}
