import {posts, allTags} from "./posts.js"

var currTag = window.location.search.substr(5);
console.log(currTag);

document.getElementById("currTag").innerText = currTag;

// get and display all posts
var postsContainer = document.getElementById("posts");
var index = 0;
for (const i of posts) {
	if (i.tags.includes(currTag)) {
		var postHTML = "";
		// TODO: add link to author???

		if (index > 0) {postHTML += "<hr>"};
		index++;
		
		postHTML += "<h2> <a href=\"posts/" + i.url + "\">" + i.title + "</a> </h2> \
					<p>" + i.dateText + " / by " + i.author + " / ";
		
		for (const tag of i.tags) {
			postHTML += "<a class=\"tag\"href=\"tag.html?tag=" + tag + "\">" + tag + "</a>";
		}

		postHTML += "</p> \
					<p> " + i.contentPreview + " </p> \
					<p> <a href=\"posts/" + i.url + "\"> read more... </a> </p>"
		postsContainer.innerHTML += postHTML;
	}
}

var tagsContainer = document.getElementById("tags")
for (const tag of allTags) {
	tagsContainer.innerHTML += "<a class=\"tag\"href=\"tag.html?tag=" + tag + "\">" + tag + "</a>";
}

const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
	e.preventDefault();
	const data = new FormData(form);
	document.getElementById("subscribe").disabled = "true";
	document.getElementById("email").disabled = "true";
	const action = e.target.action;
	fetch(action, {method: "POST", body: data}).then((response) => {
		console.log(response.text());
		form.innerHTML = "<p> Thank you for subscribing to our newsletter! </p>";
	}).catch(response => {
		console.error(response.text());
		form.innerHTML = "<p> There was an error submitting your data. Please refresh the page and try again. </p>";
	})
})