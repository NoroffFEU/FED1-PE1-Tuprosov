import { create, remove } from "./posts/index.mjs";
import { addPost } from "./posts/constants.mjs";
const postId = localStorage.getItem('targetID'); 

// if new post, get all the form data and send to api;
const form = document.querySelector('.edit-form');
form.setAttribute('id', postId);

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const id = form.getAttribute('id', postId);
    const clickedBtn = event.submitter;
    const action = clickedBtn.value
    
    
    if (action === 'save') {
        create(formData, id);
    } else if (action === 'delete') {
        remove(id);
    }
    ;
})

// get target ID and post from local storage
let targetPost
if (postId) {
    const posts = JSON.parse(localStorage.getItem('AllPosts')) || JSON.parse(localStorage.getItem('Posts12'));
    targetPost = posts.data.find(post => post.id === postId);
}
// get the post to fill up the form fields
function populateForm(post) {
    document.getElementById('post_title').value = post.title;
    document.getElementById('post_body').value = post.body;
    document.getElementById('post_tags').value = post.tags.join(',');
    document.getElementById('image_link').value = post.media.url;
}

if (targetPost){
    populateForm(targetPost) 
}

addPost();


    
