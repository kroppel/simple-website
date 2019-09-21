var pw = "12345678";
var urlinfo = location.search
var nextPagePath = urlinfo.substring(start = 1)
console.log(nextPagePath)
if(window.prompt("Enter the password:")!=pw) window.location = "../index.html";
else window.location = nextPagePath;