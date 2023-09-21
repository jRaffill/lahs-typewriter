import {allTags} from "../posts.js"
var tagsContainer = document.getElementById("tags")
for (const tag of allTags) {
	tagsContainer.innerHTML += "<a class=\"tag\"href=\"../tag.html?tag=" + tag + "\">" + tag + "</a>";
}