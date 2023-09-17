import {posts, allTags} from "./posts.js";

// banner typewriter effect
function typeWriter(i, txt, id) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    var speed = 100 + Math.floor(Math.random() * 50);
    setTimeout(() => {typeWriter(i, txt, id);}, speed);
  }
}
typeWriter(0, "LAHS Typewriter", "banner-text");

// get and display all posts
var postsContainer = document.getElementById("posts");
for (const i of posts) {
	var postHTML = "";
	// TODO: add link to author???

	if (posts.indexOf(i) > 0) {postHTML += "<hr>"};

	postHTML += "<h2> <a href=\"posts/" + i.url + "\">" + i.title + "</a> </h2> \
				<p>" + i.dateText + " / by " + i.author + " / ";
	
	for (const tag of i.tags) {
		postHTML += "<a class=\"tag\"href=\"tags/" + tag + ".html\">" + tag + "</a>";
	}

	postHTML += "</p> \
				<p> " + i.contentPreview + " </p> \
				<p> <a href=\"posts/" + i.url + "\"> read more... </a> </p>"
	postsContainer.innerHTML += postHTML;
}

var tagsContainer = document.getElementById("tags")
for (const i of allTags) {
	tagsContainer.innerHTML += "<a class=\"tag\" href=\"tags/" + i + ".html\">" + i + "</a>";
}