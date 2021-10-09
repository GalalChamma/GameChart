var all_listings = [];


$(document).ready(function () {
    fetchingJSON();
});


function fetchingJSON () {
    $.getJSON("../data/GameSales.json", function (myData) {
        //        for (let i = 0; i < myData.length; i++) {
        for (let i = 0; i < 6; i++) {
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
            }
            all_listings.push(aGame);
            var aListing = document.createElement("div");
            aListing.id = "anElement";
            aListing.innerHTML = (
                "<div id='individualGame'>" +
                "<p>" + "Name: " + myData[i].Name + "</p>" +
                "</div>");
            $("#listings").append(aListing);
        }
    }).done(function() {
        getChart('bar', 'myChart');
        getChart2('pie', 'myChart2');
        getChart2('doughnut', 'myChart3');
        console.log(all_listings)
    });
}


function getChart(chartType, divElement) {
    let myChart = document.getElementById(divElement).getContext('2d');

    // how do i loop through a given array of games? or do we have to assume a given size and hard code it?
    let gameChart = new Chart(myChart, {
        type:chartType, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels: ["Global Sales", "NA Sales","PAL Sales"],
            datasets:[
                {
                    label:all_listings[0].Name ,
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    data: [
                        all_listings[0].Global_Sales,
                        all_listings[0].NA_Sales,
                        all_listings[0].PAL_Sales
                        ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },
                {
                    label: all_listings[1].Name,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    data: [
                        all_listings[1].Global_Sales,
                        all_listings[1].NA_Sales,
                        all_listings[1].PAL_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },
                {
                    label: all_listings[2].Name,
                    backgroundColor: 'rgba(255, 206, 86, 0.6)',
                    data: [
                        all_listings[2].Global_Sales,
                        all_listings[2].NA_Sales,
                        all_listings[2].PAL_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },{
                    label: all_listings[3].Name,
                    backgroundColor: 'rgba(75, 192, 192, 0.6)',
                    data: [
                        all_listings[3].Global_Sales,
                        all_listings[3].NA_Sales,
                        all_listings[3].PAL_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },{
                    label: all_listings[4].Name,
                    backgroundColor: 'rgba(153, 102, 255, 0.6)',
                    data: [
                        all_listings[4].Global_Sales,
                        all_listings[4].NA_Sales,
                        all_listings[4].PAL_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },{
                    label: all_listings[5].Name,
                    backgroundColor: 'rgba(255, 159, 64, 0.6)',
                    data: [
                        all_listings[5].Global_Sales,
                        all_listings[5].NA_Sales,
                        all_listings[5].PAL_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                }]
        },
        options:{
            indexAxis: 'y',
            responsive:true,
            title:{
                display:true,
                text:'Largest Cities In Massachusetts',
                fontSize:25
            },
            legend:{
                display:true,
                position:'right',
                labels:{
                    fontColor:'#000'
                }
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                }
            },
            tooltips:{
                enabled:true
            }
        }
    });
}

function getChart2(chartType, divElement) {
    let myChart = document.getElementById(divElement).getContext('2d');

    // how do i loop through a given array of games? or do we have to assume a given size and hard code it?
    let gameChart = new Chart(myChart, {
        type:chartType, // bar, horizontalBar, pie, line, doughnut, radar, polarArea
        data:{
            labels: [all_listings[0].Name,
                all_listings[1].Name,
                all_listings[2].Name,
                all_listings[3].Name,
                all_listings[4].Name,
                all_listings[5].Name],
            datasets:[
                {
                    data: [
                        all_listings[0].Global_Sales,
                        all_listings[1].Global_Sales,
                        all_listings[2].Global_Sales,
                        all_listings[3].Global_Sales,
                        all_listings[4].Global_Sales,
                        all_listings[5].Global_Sales
                    ],
                    //backgroundColor:'green',
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 99, 132, 0.6)'
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                }]
        },
        options:{
            responsive:true,
            title:{
                display:true,
                text:'Largest Cities In Massachusetts',
                fontSize:25
            },
            legend:{
                display:true,
                position:'right',
                labels:{
                    fontColor:'#000'
                }
            },
            layout:{
                padding:{
                    left:50,
                    right:0,
                    bottom:0,
                    top:0
                }
            },
            tooltips:{
                enabled:true
            }
        }
    });
}
