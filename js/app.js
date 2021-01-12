'use strict';

var operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
function multi(customer, cookie) {

    return customer * cookie;
}
var shops = [];

//Constructor

function CookiesShop(name, minCastPerHour, maxCastPerHour, avgCookiesPerSale) {
    this.name = name;
    this.minCastPerHour = minCastPerHour;
    this.maxCastPerHour = maxCastPerHour;
    this.avgCookiesPerSale = avgCookiesPerSale;
    this.total = 0;
    this.customerPerHour = [];
    this.avgCookiesPerhour = [];
    shops.push(this);


}
CookiesShop.prototype.randomCustomer = function () {
    for (var i = 0; i < operationHour.length; i++) {
        this.customerPerHour.push(random(this.minCastPerHour, this.maxCastPerHour));
    }
}


CookiesShop.prototype.cookiesbuy = function () {
    for (var x = 0; x < operationHour.length; x++) {
        console.log(this.customerPerHour[x]);
        console.log(this.avgCookiesPerSale);
        this.avgCookiesPerhour.push(Math.floor(multi(this.customerPerHour[x], this.avgCookiesPerSale)));
        console.log(this.avgCookiesPerhour);
    }

}
CookiesShop.prototype.getTotal = function () {
    for (var j = 0; j < this.avgCookiesPerhour.length; j++) {
        this.total = this.total + this.avgCookiesPerhour[j];
    }

}

CookiesShop.prototype.render = function(){
    var branchRow = document.createElement('tr');
    var branchName=document.createElement('td')
    branchName.textContent=this.name;
    branchRow.appendChild(branchName);
    table.appendChild(branchRow);




    for (var i=0 ; i<this.avgCookiesPerhour.length ; i++){
        var numberOfCookie=document.createElement('td');
        numberOfCookie.textContent=this.avgCookiesPerhour[i];
        branchRow.appendChild(numberOfCookie);
        

    }
    var total=document.createElement('td');
    total.textContent=this.total;
    branchRow.appendChild(total);


}
var parentMain = document.getElementById('main-id');

var table=document.createElement('table')
parentMain.appendChild(table);
  var headerRow =document.createElement('th');
  headerRow.textContent='';
  table.appendChild(headerRow);
for (var i=0 ; i <=operationHour.length ; i++){
    var headerRow =document.createElement('th');
    headerRow.textContent=operationHour[i];
    table.appendChild(headerRow);
}
headerRow.textContent='Total';




var Seattle = new CookiesShop('Seattle', 23, 65, 6.3);
Seattle.randomCustomer();
Seattle.cookiesbuy();
Seattle.getTotal();
Seattle.render();


var Tokyo = new CookiesShop('Tokyo', 3, 24, 1.2);
Tokyo.randomCustomer();
Tokyo.cookiesbuy();
Tokyo.getTotal();
Tokyo.render();


var Dubai = new CookiesShop('Dubai', 11, 38, 3.7);
Dubai.randomCustomer();
Dubai.cookiesbuy();
Dubai.getTotal();
Dubai.render();



var Paris = new CookiesShop('Paris', 20, 38, 2.3);
Paris.randomCustomer();
Paris.cookiesbuy();
Paris.getTotal();
Paris.render();



var Lima = new CookiesShop('Lima', 2, 16, 4.6);
Lima.randomCustomer();
Lima.cookiesbuy();
Lima.getTotal();
Lima.render();



//

// for (var y = 0; y < shops.length; y++) {
//     var shopName = document.createElement('h1');
//     var content = shopName.textContent = '';
//     shopName.textContent = content + shops[y].name;
//     shops[y].name;
//     parentMain.appendChild(shopName);


//     for (var w = 0; w < operationHour.length; w++) {
//         var shopList = document.createElement('ul');
//         parentMain.appendChild(shopList);
//         var hourlist = document.createElement('li');
//         var totList = document.createElement('li');
//         hourlist.textContent = operationHour[w] + ':' + shops[y].avgCookiesPerhour[w] + 'cookies .';
//         shopList.appendChild(hourlist);

//     }
//     totList.textContent = 'Total :' + shops[y].total;
//     shopList.appendChild(totList);

// }











