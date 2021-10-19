var all_listings = [];


$(document).ready(function () {
    fetchingJSON();
});


function fetchingJSON () {
    $.getJSON("../data/games.json", function (myData) {
        //        for (let i = 0; i < myData.length; i++) {
        for (let i = 0; i < myData.length; i++) {
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
        showTable();
    });
}
function showTable() {
    let rowData = [];

    // specify the columns
    const columnDefs = [
            {
                field: 'action',
                cellRenderer: 'btnCellRenderer',
                cellRendererParams: {
                    clicked: function(field) {
                        // alert(`${field} was clicked`);

                        // future: take user to the following page
                        document.location = 'game.html?game=' + field
                    }
                },
                minWidth: 150
            },
            {field: "name", sortable: true, filter: true, resizable: true},
            {field: "yearReleased",sortable: true, filter: true, resizable: true},
            {field: "genre",sortable: true, filter: true, resizable: true},
            {field: "platform",sortable: true, filter: true, resizable: true},
            {field: "developer",sortable: true, filter: true, resizable: true},
            {field: "publisher",sortable: true, filter: true, resizable: true},
            {field: "globalSales",sortable: true, filter: true, resizable: true},
            {field: "NASales",sortable: true, filter: true, resizable: true},
            {field: "PALSales",sortable: true, filter: true, resizable: true}
        ];

    // Adding all of the games to the rowData array to be used for rows in the table
    for (let i = 0; i < all_listings.length; i++) {
        var myObj = {
            action: all_listings[i].ID,
            name: all_listings[i].Name,
            yearReleased: all_listings[i].Year,
            genre : all_listings[i].Genre,
            platform: all_listings[i].Platform,
            developer: all_listings[i].Developer,
            publisher: all_listings[i].Publisher,
            globalSales: all_listings[i].Global_Sales,
            NASales: all_listings[i].NA_Sales,
            PALSales: all_listings[i].PAL_Sales,
        }
        rowData.push(myObj);
    }



    // let the grid know which columns and what data to use
    const gridOptions = {
        columnDefs: columnDefs,
        rowData: rowData,
        pagination: true,
        paginationPageSize: 100,
        components: {
            btnCellRenderer: ViewButton
        }
    };

    // lookup the container we want the Grid to use
    const eGridDiv = document.querySelector('#myGrid');

    // create the grid passing in the div to use together with the columns & data we want to use
    new agGrid.Grid(eGridDiv, gridOptions)
    //gridOptions.columnApi.autoSizeAllColumns();
    //gridOptions.api.sizeColumnsToFit();
    gridOptions.columnApi.autoSizeColumns(['action','name','yearReleased','genre','platform','developer','publisher','globalSales','naSales','palSales'], false);


}




// btn-cell-renderer.js

function ViewButton() {}

ViewButton.prototype.init = function(params) {
    this.params = params;

    this.eGui = document.createElement('button');
    this.eGui.innerHTML = 'View';

    this.btnClickedHandler = this.btnClickedHandler.bind(this);
    this.eGui.addEventListener('click', this.btnClickedHandler);
}

ViewButton.prototype.getGui = function() {
    return this.eGui;
}

ViewButton.prototype.destroy = function() {
    this.eGui.removeEventListener('click', this.btnClickedHandler);
}

ViewButton.prototype.btnClickedHandler = function(event) {
    this.params.clicked(this.params.value);
}

