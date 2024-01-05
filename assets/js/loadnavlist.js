// this is going to look for the navlist div and load the navlist.html file into it


// get the document navList
var navList = document.getElementById("navList");

// create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();

// open the file
// get the .html files from ../*
xhr.open('GET', '.', true);
