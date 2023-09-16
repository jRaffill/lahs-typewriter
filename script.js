// banner typewriter effect
function typeWriter(i, txt, id) {
  if (i < txt.length) {
    document.getElementById(id).innerHTML += txt.charAt(i);
    i++;
    setTimeout(() => {typeWriter(i, txt, id);}, 100);
  }
}
typeWriter(0, "LAHS Typewriter", "banner-text");

// hardcoded post for development
// TODO: fix to dynamically load posts
var posts = [{
	"date": [2023, 9, 15],
	"dateText": "Sept. 15, 2023",
	"tags": ["news", "nonfiction"],
	"author": "CWC staff",
	"title": "We Have A Blog",
	"url": "/intro.html",
	"contentPreview": "More information coming soon!!"
}]

var postsContainer = document.getElementById("posts");
for (const i of posts) {
	var postHTML = "";
	// TODO: add link to author???
	postHTML += "<a class=\"title\" href=\"" + i.url + "\">" + i.title + "</a> \
				<p>" + i.dateText + " / by " + i.author + " / ";
	for (const tag of i.tags) {
		// TODO: figure out how searching through tags should work
		postHTML += "<a class=\"tag\"href=\"" + tag + ".html\">" + tag + "</a>";
	}

	postHTML += "</p> \
				<p> " + i.contentPreview + "</p>"
	postsContainer.innerHTML = postHTML;
}

console.log(postsContainer.innerHTML);