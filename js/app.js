'use strict';

var operationHour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function random(min,max){
    return Math.floor(Math.random() * (max - min) + min);
}
    function multi(customer,cookie){
    
        return customer*cookie;
    }


  var Seattle = {
    name :'Seattle',
    minCastPerHour:23,
    maxCastPerHour:65,
    avgCookiesPerSale:6.3,
    customerPerHour: [],
    avgCookiesPerhour: [],
    total:0,
    randomCustomer: function () {
        for (var i =0 ; i < operationHour.length ; i++){
            this.customerPerHour.push(random(this.minCastPerHour,this.maxCastPerHour));
            
        }
    },

    cookiesbuy : function(){
        for (var x=0 ; x<operationHour.length ; x++){
            this.avgCookiesPerhour.push(Math.floor(multi(this.customerPerHour[x],this.avgCookiesPerSale)));
            console.log(this.avgCookiesPerhour);
        }
    },

    getTotal : function(){
        for ( var j=0 ; j<this.avgCookiesPerhour.length;j++){
            this.total=this.total+this.avgCookiesPerhour[j];
        }

    }
            

};

 Seattle.randomCustomer();
 Seattle.cookiesbuy();
 Seattle.getTotal();
 


  


var Tokyo = {
    name :'Tokyo',
    minCastPerHour:3,
    maxCastPerHour:24,
    avgCookiesPerSale:1.2,
    customerPerHour: [],
    avgCookiesPerhour: [],
    total:0,
    randomCustomer: function () {
        for (var i =0 ; i<operationHour.length ;i++){
            this.customerPerHour.push(random(this.minCastPerHour,this.maxCastPerHour));
            console.log(this.customerPerHour);
        }
    },

    cookiesbuy : function(){
        for (var x=0 ; x<operationHour.length ; x++){
            this.avgCookiesPerhour.push(Math.floor(multi(this.customerPerHour[x],this.avgCookiesPerSale)));
            console.log(this.avgCookiesPerhour);
        }
    },

    getTotal : function(){
        for ( var j=0 ; j<this.avgCookiesPerhour.length;j++){
            this.total=this.total+this.avgCookiesPerhour[j];
        }
        return this.total;
    }
            

};
Tokyo.randomCustomer();
Tokyo.cookiesbuy();
Tokyo.getTotal();

var Dubai = {
    name :'Dubai',
    minCastPerHour:11,
    maxCastPerHour:38,
    avgCookiesPerSale:3.7,
    customerPerHour: [],
    avgCookiesPerhour: [],
    total:0,
    randomCustomer: function () {
        for (var i =0 ; i<operationHour.length ;i++){
            this.customerPerHour.push(random(this.minCastPerHour,this.maxCastPerHour));
            console.log(this.customerPerHour);
        }
    },

    cookiesbuy : function(){
        for (var x=0 ; x<operationHour.length ; x++){
            this.avgCookiesPerhour.push(Math.floor(multi(this.customerPerHour[x],this.avgCookiesPerSale)));
            console.log(this.avgCookiesPerhour);
        }
    },

    getTotal : function(){
        for ( var j=0 ; j<this.avgCookiesPerhour.length;j++){
            this.total=this.total+this.avgCookiesPerhour[j];
        }
        return this.total;
    }
            

};
Dubai.randomCustomer();
Dubai.cookiesbuy();
Dubai.getTotal();

var Paris = {
    name :'Paris',
    minCastPerHour:20,
    maxCastPerHour:38,
    avgCookiesPerSale:2.3,
    customerPerHour: [],
    avgCookiesPerhour: [],
    total:0,
    randomCustomer: function () {
        for (var i =0 ; i<operationHour.length ;i++){
            this.customerPerHour.push(random(this.minCastPerHour,this.maxCastPerHour));
            console.log(this.customerPerHour);
        }
    },

    cookiesbuy : function(){
        for (var x=0 ; x<operationHour.length ; x++){
            this.avgCookiesPerhour.push(Math.floor(multi(this.customerPerHour[x],this.avgCookiesPerSale)));
            console.log(this.avgCookiesPerhour);
        }
    },

    getTotal : function(){
        for ( var j=0 ; j<this.avgCookiesPerhour.length;j++){
            this.total=this.total+this.avgCookiesPerhour[j];
        }
        return this.total;
    }
            

};
Paris.randomCustomer();
Paris.cookiesbuy();
Paris.getTotal();


var Lima = {
    name :'Lima',
    minCastPerHour:2,
    maxCastPerHour:16,
    avgCookiesPerSale:4.6,
    customerPerHour: [],
    avgCookiesPerhour: [],
    total:0,
    randomCustomer: function () {
        for (var i =0 ; i<operationHour.length ;i++){
            this.customerPerHour.push(random(this.minCastPerHour,this.maxCastPerHour));
            console.log(this.customerPerHour);
        }
    },

    cookiesbuy : function(){
        for (var x=0 ; x<operationHour.length ; x++){
            this.avgCookiesPerhour.push(Math.floor(multi(this.customerPerHour[x],this.avgCookiesPerSale)));
            console.log(this.avgCookiesPerhour);
        }
    },

    getTotal : function(){
        for ( var j=0 ; j <this.avgCookiesPerhour.length;j++){
            this.total=this.total+this.avgCookiesPerhour[j];
        }
        return this.total;
    }
            

};
 Lima.randomCustomer();
 Lima.cookiesbuy();
 Lima.getTotal();

var shops=[Seattle,Tokyo,Dubai,Paris,Lima];
var parentMain= document.getElementById('main-id');

for (var y=0 ; y < shops.length ; y++){
    var shopName=document.createElement('h1');
    var content = shopName.textContent='';
    shopName.textContent=content + shops[y].name;
    shops[y].name;
    parentMain.appendChild(shopName);


    for (var w=0 ; w < operationHour.length ; w++){
        var shopList =document.createElement('ul');
        parentMain.appendChild(shopList);
        var hourlist=document.createElement('li');
        var totList=document.createElement('li');
        hourlist.textContent=operationHour[w]+':'+ shops[y].avgCookiesPerhour[w]+'cookies .';
        shopList.appendChild(hourlist);

    }
    totList.textContent='Total :'+ shops[y].total;
    shopList.appendChild(totList);


}







