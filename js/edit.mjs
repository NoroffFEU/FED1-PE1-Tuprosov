import { create } from "./posts/create.mjs";

// if exists, retrieve id of the post
const parameterString = window.location.search;
const searchParameters = new URLSearchParams(parameterString);
const postId = searchParameters.get('id');

// if new post, get all the form data and send to api;
document.querySelector('.edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    create(formData);
})

// get the post to fill up the form fields
let post
if (postId) {
    const posts = JSON.parse(localStorage.getItem('Allposts'));
    post = posts[postId];
}

function populateForm(post) {
    document.getElementById('post_title').value = post.title;
    document.getElementById('post_body').value = post.body;
    document.getElementById('post_tag').value = post.tag;
    document.getElementById('post_description').value = post.description;
    document.getElementById('image_link').value = post.imageLink;
    document.getElementById('video_link').value = post.videoLink;
}

if (post){
    populateForm(post) 
}

    
