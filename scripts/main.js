var serviceURL = "http://www.adapptalo.com/test/services/";
//var serviceURL = "http://localhost/test/services/";
// JavaScript Document
 
// Wait for PhoneGap to load
document.addEventListener("deviceready", onDeviceReady, false);
 
// PhoneGap is ready
function onDeviceReady() {
}
//=======================Ajax View=======================//
function showAjaxView() {
    getAjax();
}
 
function getAjax(){
    $.ajax({
            type:"GET",
            url: serviceURL + 'getbeers.php'
        }).done(function( data ) {
               updateStackStatListView(data);
            });
}
 
function updateStackStatListView( data ) {
    alert(JSON.stringify(data));
    $("#stackStats").kendoMobileListView({
        dataSource: kendo.data.DataSource.create({data: data.items}),
        template: $("#stackStatsTemplate").html()
    });
}
