import {allTags} from "../posts.js"
var tagsContainer = document.getElementById("tags")
for (const i of allTags) {
	tagsContainer.innerHTML += "<a class=\"tag\" href=\"../tags/" + i + ".html\">" + i + "</a>";
}