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

/* variable mp4 enthält pfad zur mp4-datei */
//var mp4 = "../mounting_point/simpsons_episodes/" + getQueryVariable("src");
var mp4 = "https://drive.google.com/file/d/1rySCZebGE8lDtP31ptDLn3M-3AAj6rtP/preview";
document.getElementById("mp4-video-src").setAttribute(qualifiedName = "src", value = mp4)
document.getElementById("episode-title").innerHTML = getQueryVariable("title").replace(/%20/g, " ").replace(/%27/g, "'")

