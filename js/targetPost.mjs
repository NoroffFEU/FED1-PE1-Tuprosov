import { singlePostTemplate, getTargetID } from "./posts/constants.mjs";

function displayTargetPost(id, page) {
    const postContainer = document.querySelector('.container-main');
    postContainer.append(...singlePostTemplate(id, page));
    
}

// if exists, retrieve id of the post
const [postId, page] = getTargetID();
localStorage.setItem('targetID', postId)
displayTargetPost(postId, page)


