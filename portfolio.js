const form = document.getElementById("blog-form");
const title = document.forms["blog-form"]["title"];
const post = document.forms["blog-form"]["post"];
const isEmpty = str => !str.trim().length;

function formValidation(e) {

  title.style.border = 0;
  post.style.border = 0;

  if (isEmpty(title.value)) {
    title.style.border = "1px solid red";
  }
  if (isEmpty(post.value)) {
    post.style.border = "1px solid red";
  }
  if (isEmpty(title.value) || isEmpty(post.value)) {
    e.preventDefault();
    alert("Please fill in all fields.")
  }
}

function clearForm(e) {
  if (!confirm("Clear all fields?")) {
      e.preventDefault();
  }
}

form.addEventListener("submit", formValidation);
form.addEventListener("reset", clearForm);