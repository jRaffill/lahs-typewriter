import {posts, allTags} from "../posts.js"

var currTag = document.getElementById("currTag").innerText;

// get and display all posts
var postsContainer = document.getElementById("posts");
for (const i of posts) {
	if (i.tags.includes(currTag)) {
		var postHTML = "";
		// TODO: add link to author???

		if (posts.indexOf(i) > 0) {postHTML += "<hr>"};

		postHTML += "<h2> <a href=\"../posts/" + i.url + "\">" + i.title + "</a> </h2> \
					<p>" + i.dateText + " / by " + i.author + " / ";
		
		for (const tag of i.tags) {
			postHTML += "<a class=\"tag\"href=\"" + tag + ".html\">" + tag + "</a>";
		}

		postHTML += "</p> \
					<p> " + i.contentPreview + " </p> \
					<p> <a href=\"../posts/" + i.url + "\"> read more... </a> </p>"
		postsContainer.innerHTML += postHTML;
	}
}

var tagsContainer = document.getElementById("tags")
for (const i of allTags) {
	tagsContainer.innerHTML += "<a class=\"tag\" href=\"" + i + ".html\">" + i + "</a>";
}