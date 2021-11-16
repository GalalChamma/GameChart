var matched_listings = [];

// the following line is an HTML command
const params = (new URL(document.location)).searchParams;
// the argument for the following line is dependent on the 'name' property of the search textbox on home page
const searchInput = params.get("game");

$(document).ready(function () {
    var input = document.createElement("div");
    input.innerHTML = ("<h1>" + "Search results for " + searchInput + "</h1>");
    $("#listings").append(input);
    findGame();
});

function findGame () {
    $.getJSON("../data/games.json", function (myData) {
        for (let i = 0; i < myData.length+1; i+=2) {
            var game_name1 = myData[i].Name.toString().toLowerCase();
            var game_name2 = myData[i+1].Name.toString().toLowerCase();
            var search_input_lower = searchInput.toString().toLowerCase();

            if (game_name1.includes(search_input_lower)) {
                var aGame1 = {
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
            if (game_name2.includes(search_input_lower)) {
                var aGame2 = {
                    ID: myData[i+1].ID.toString(),
                    Name: myData[i+1].Name.toString(),
                    Platform: myData[i+1].Platform.toString(),
                    Year: myData[i+1].Year.toString(),
                    Genre: myData[i+1].Genre.toString(),
                    Publisher: myData[i+1].Publisher.toString(),
                    Developer: myData[i+1].Developer.toString(),
                    Critic_Score: myData[i+1].Critic_Score.toString(),
                    User_Score: myData[i+1].User_Score.toString(),
                    NA_Sales: myData[i+1].NA_Sales.toString(),
                    PAL_Sales: myData[i+1].PAL_Sales.toString(),
                    JP_Sales: myData[i+1].JP_Sales.toString(),
                    Other_Sales: myData[i+1].Other_Sales.toString(),
                    Global_Sales: myData[i+1].Global_Sales.toString(),
                    URL: myData[i+1].URL.toString()
                }
                // add game to array
                matched_listings.push(aGame1);
                matched_listings.push(aGame2);

                // create a div element to house the game
                var aListing = document.createElement("div");
                aListing.id = "anElement";

                if (aGame1.URL.toString().toLowerCase().includes("notfound")) {
                    var image1 = "../images/default.png";
                } else {
                    var image1 = aGame1.URL;
                }

                if (aGame2.URL.toString().toLowerCase().includes("notfound")) {
                    var image2 = "../images/default.png";
                } else {
                    var image2 = aGame2.URL;
                }

                //listing search result games to the search.html
                aListing.innerHTML = (
                    "<div class='flex-container'>" +
                        "<div  class='parent' id='individualGame'>" +
                            //div for images
                            "<div class='child' id='listingThumbnailContainer'>" +
                                "<a href=game.html?game="+ aGame1.ID + ">" +
                                "<img id='thumbnail' src=" + image1 + " >" +
                                "</a>" +
                                "</div>" +
                            //div for game details
                            "<div class='child' id='listingGameDetail'>" +
                                "<p1>" + aGame1.Name + "</p1>" +
                                "<p>" + "Year released: " + aGame1.Year + "</p>" +
                                "<br>" +
                                "<p>" + "Platform: " + aGame1.Platform + "</p>" +
                                "<p>" + "Developer: " + aGame1.Developer + "</p>" +
                                "<p>" + "Global Sales: " + aGame1.Global_Sales + "M" + "</p>" +
                            "</div>"+
                        "</div>"+
                        "<div  class='parent' id='individualGame'>" +
                            //div for images
                            "<div class='child' id='listingThumbnailContainer'>" +
                                "<a href=game.html?game="+ aGame2.ID + ">" +
                                "<img id='thumbnail' src=" + image2 + " >" +
                                "</a>" +
                                "</div>" +
                            //div for game details
                            "<div class='child' id='listingGameDetail'>" +
                                "<p1>" + aGame2.Name + "</p1>" +
                                "<p>" + "Year released: " + aGame2.Year + "</p>" +
                                "<br>" +
                                "<p>" + "Platform: " + aGame2.Platform + "</p>" +
                                "<p>" + "Developer: " + aGame2.Developer + "</p>" +
                                "<p>" + "Global Sales: " + aGame2.Global_Sales + "M" + "</p>" +
                            "</div>"+
                        "</div>"+
                    "</div>");
                $("#listings").append(aListing);
            }
        }
    }).done(function() {
        console.log(matched_listings)
    });
}