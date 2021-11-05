var all_listings = [];


$(document).ready(function () {
    var modal = document.getElementById("filterModel");
    var btn = document.getElementById("filter");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function () {
        modal.style.display = "flex";
    }

    span.onclick = function () {
        modal.style.display = "none";
    }

    document.getElementById('genre').onchange = function() {
        document.getElementById('genreList').disabled = !this.checked;
    };

    document.getElementById('year').onchange = function() {
        document.getElementById('minY').disabled = !this.checked;
        document.getElementById('maxY').disabled = !this.checked;
    };

    document.getElementById('platform').onchange = function() {
        document.getElementById('platList').disabled = !this.checked;
    };

    document.getElementById('publisher').onchange = function() {
        document.getElementById('pubT').disabled = !this.checked;
    };

    document.getElementById('developer').onchange = function() {
        document.getElementById('devT').disabled = !this.checked;
    };

    fetchingJSON();
});


function fetchingJSON () {
    $.getJSON("../data/games.json", function (myData) {
        //        for (let i = 0; i < myData.length; i++) {
        for (let i = 0; i < 10; i++) {
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
            labels: ["Global Sales", "NA Sales","PAL Sales", "Japan Sales", "Other Sales"],
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
                        all_listings[1].PAL_Sales,
                        all_listings[1].JP_Sales,
                        all_listings[1].Other_Sales
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
                        all_listings[2].PAL_Sales,
                        all_listings[2].JP_Sales,
                        all_listings[2].Other_Sales
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
                        all_listings[3].PAL_Sales,
                        all_listings[3].JP_Sales,
                        all_listings[3].Other_Sales
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
                        all_listings[4].PAL_Sales,
                        all_listings[4].JP_Sales,
                        all_listings[4].Other_Sales
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
                        all_listings[5].PAL_Sales,
                        all_listings[5].JP_Sales,
                        all_listings[5].Other_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },
                {
                    label: all_listings[6].Name,
                    backgroundColor: 'rgba(255, 145, 191,0.6)',
                    data: [
                        all_listings[6].Global_Sales,
                        all_listings[6].NA_Sales,
                        all_listings[6].PAL_Sales,
                        all_listings[6].JP_Sales,
                        all_listings[6].Other_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },{
                    label: all_listings[7].Name,
                    backgroundColor: 'rgba(152, 226, 247, 0.6)',
                    data: [
                        all_listings[7].Global_Sales,
                        all_listings[7].NA_Sales,
                        all_listings[7].PAL_Sales,
                        all_listings[7].JP_Sales,
                        all_listings[7].Other_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },{
                    label: all_listings[5].Name,
                    backgroundColor: 'rgba(205, 241, 174, 0.6)',
                    data: [
                        all_listings[8].Global_Sales,
                        all_listings[8].NA_Sales,
                        all_listings[8].PAL_Sales,
                        all_listings[8].JP_Sales,
                        all_listings[8].Other_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                },{
                    label: all_listings[9].Name,
                    backgroundColor: 'rgba(200, 150, 145, 0.6)',
                    data: [
                        all_listings[9].Global_Sales,
                        all_listings[9].NA_Sales,
                        all_listings[9].PAL_Sales,
                        all_listings[9].JP_Sales,
                        all_listings[9].Other_Sales
                    ],
                    borderWidth:1,
                    borderColor:'#777',
                    hoverBorderWidth:3,
                    hoverBorderColor:'#000'
                }]
        },
        options:{
            indexAxis: 'x',
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
                all_listings[5].Name,
                all_listings[6].Name,
                all_listings[7].Name,
                all_listings[8].Name,
                all_listings[9].Name],
            datasets:[
                {
                    data: [
                        all_listings[0].Global_Sales,
                        all_listings[1].Global_Sales,
                        all_listings[2].Global_Sales,
                        all_listings[3].Global_Sales,
                        all_listings[4].Global_Sales,
                        all_listings[5].Global_Sales,
                        all_listings[6].Global_Sales,
                        all_listings[7].Global_Sales,
                        all_listings[8].Global_Sales,
                        all_listings[9].Global_Sales
                    ],
                    //backgroundColor:'green',
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.6)',
                        'rgba(54, 162, 235, 0.6)',
                        'rgba(255, 206, 86, 0.6)',
                        'rgba(75, 192, 192, 0.6)',
                        'rgba(153, 102, 255, 0.6)',
                        'rgba(255, 159, 64, 0.6)',
                        'rgba(255, 145, 191,0.6)',
                        'rgba(152, 226, 247, 0.6)',
                        'rgba(205, 241, 174, 0.6)',
                        'rgba(200, 150, 145, 0.6)',
                        'rgba(200, 150, 145, 0.6)'
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
