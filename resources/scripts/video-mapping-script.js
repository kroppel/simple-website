function getQueryVariable(variable)
{
       var query = window.location.search.substring(1);
       var vars = query.split("&");
       for (var i=0;i<vars.length;i++) {
               var pair = vars[i].split("=");
               if(pair[0] == variable){return pair[1];}
       }
       return(false);
}

var mp4 = "../resources/mp4/" + getQueryVariable("src");
document.getElementById("mp4-video").setAttribute(qualifiedName = "src", value = mp4)
document.getElementById("episode-title").innerHTML = getQueryVariable("title").replace(/%20/g, " ").replace(/%27/g, "'")

