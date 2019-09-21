var pw = "12345678";
var nextPageUrl = "episode_template.html" + location.search;

if(window.prompt("Enter the password:")!=pw) {
    window.location = "../index.html";
    window.alert("The password you entered was incorrect!");
}
else window.location = nextPageUrl;