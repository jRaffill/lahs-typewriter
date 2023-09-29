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
		console.log(response.text());
		form.innerHTML = "<p> Thank you for subscribing to our newsletter! </p>";
	}).catch(response => {
		console.error(response.text());
		form.innerHTML = "<p> There was an error submitting your data. Please refresh the page and try again. </p>";
	})
})