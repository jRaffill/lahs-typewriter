import {allTags} from "../posts.js"
var tagsContainer = document.getElementById("tags")
for (const tag of allTags) {
	tagsContainer.innerHTML += "<a class=\"tag\"href=\"../tag.html?tag=" + tag + "\">" + tag + "</a>";
}

const form = document.getElementById("form");
form.addEventListener("submit", function(e) {
	e.preventDefault();
	const data = new FormData(form);
	document.getElementById("subscribe").disabled = "true";
	document.getElementById("email").disabled = "true";
	const action = e.target.action;
	fetch(action, {method: "POST", body: data}).then((response) => {
		response.text().then((text) => {
			console.log(text);
			if (JSON.parse(text).result == "error") {
				form.innerHTML = "<p> There was an error submitting your data. Please refresh the page and try again.</p>"
			} else {
				form.innerHTML = "<p> Thank you for subscribing to our newsletter! </p>";
			}
		})
	})
})

const comment = document.getElementById("comment");
const commentName = document.getElementById("name");
comment.addEventListener("submit", function(e) {
	e.preventDefault();
	document.getElementById("url").value = window.location.pathname;
	if (!commentName.value) {
		commentName.value = "Anonymous";
	}
	const data = new FormData(comment);
	const action = e.target.action;
	commentName.disabled = "true";
	document.getElementById("commentText").disabled = "true";
	document.getElementById("postComment").disabled = "true";
	fetch(action, {method: "POST", body: data}).then((response) => {
		response.text().then((text) => {
			console.log(text);
			if (JSON.parse(text).result == "error") {
				comment.innerHTML = "<p> There was an error submitting your data. Please refresh the page and try again.</p>"
			} else {
				comment.innerHTML = "<p><em>Your comment is being processed. Check back soon!</em></p>";
			}
		})
	})
});

var storedComments = {};
const comments = document.getElementById("comments");
const getCommentAction = "https://script.google.com/macros/s/AKfycbzRjihFyyg94RuaXE4k05VAOetSpnv1QqvxB3l3nKptyMw60zK4-I3OhcgcSE21I84B/exec"
fetch(getCommentAction, {method: "GET"}).then((response) => {
	response.text().then((text) => {
		document.getElementById("existingComments").innerHTML = "";
		storedComments = JSON.parse(text);
		storedComments.shift();
		for (const com of storedComments) {
			if (com.Url == window.location.pathname) {
				var date = new Date (com.Date);
				document.getElementById("existingComments").innerHTML += "<em> <u>" + com.Name + ", " + date.getMonth() + "/" + date.getDate() + "/" + date.getFullYear() + ": </u> </em>" + 
				" <p class=\"comment\"> " + com.Comment + "</p>";
				console.log(com);
			}
		}
	})
}).catch((e) => {
	console.log(e);
})