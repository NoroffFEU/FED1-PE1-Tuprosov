export const ApiBase = 'https://v2.api.noroff.dev/blog/posts/shahzod';
export const repo = '/FED1-PE1-Tuprosov';

function cardTemplate(post) {
    // Create elements
    const li = document.createElement('li');
    li.classList.add('blog-item', 'card');
    li.setAttribute('id', `${post.id}`)

    const cardLink = document.createElement('a');
    cardLink.href = '#';
    cardLink.classList.add('card-link');

    const cardImage = document.createElement('img');
    cardImage.classList.add('card-image');
    cardImage.src = post.media.url;
    cardImage.alt = `${post.tags[0]} concept image`;

    const tag = document.createElement('p');
    tag.textContent = post.tags[0];

    const articleTitle = document.createElement('h3');
    articleTitle.classList.add('article-title');
    articleTitle.textContent = post.title; 

    const info = document.createElement('div');
    info.classList.add('info', 'flex');

    const author = document.createElement('p');
    author.textContent = post.author.name; 

    const date = document.createElement('p');
    date.textContent = post.updated.substr(0, 10);

    // Append elements
    info.append(author, date);
    cardLink.append(cardImage, tag, articleTitle, info);
    li.append(cardLink);

    return li;
}

function copyTextToClipboard(link) {
    navigator.clipboard.writeText(link)
        .then(() => {
            alert('link copied to clipboard!');
        })
        .catch(err => {
            console.error('Failed to copy link to clipboard:', err);
            alert('Failed to copy link to clipboard!');
        });
}
export function populateParent(posts, parent){
    parent.innerHTML = '';
    parent.append(...posts.map(cardTemplate))
}

export function singlePostTemplate (postId, page) {
    let posts;
    if (page === '/index.html') {
        posts = JSON.parse(localStorage.getItem('Posts12'));
    } else {
        posts = JSON.parse(localStorage.getItem('AllPosts'));
    }
    const post = posts.data.find(post => post.id === postId)

    // Create elements
    const tagDiv = document.createElement('div');
    tagDiv.classList.add('tag');
    const tagP = document.createElement('p');
    tagP.textContent = post.tags[0];
    tagDiv.appendChild(tagP);

    const titleH1 = document.createElement('h1');
    titleH1.classList.add('post-title');
    titleH1.textContent = post.title;

    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('details', 'flex');

    const detailsInfoDiv = document.createElement('div');
    detailsInfoDiv.classList.add('details-info', 'flex');
    const authorP = document.createElement('p');
    authorP.textContent = `Published by ${post.author.name},`;
    const dateP = document.createElement('p');
    dateP.classList.add('date');
    dateP.textContent = post.created.substr(0, 10); // Formatting date
    detailsInfoDiv.append(authorP, dateP);

    const detailsEditDiv = document.createElement('div');
    detailsEditDiv.classList.add('details-edit', 'nodisplay', 'flex');
    const editLink = document.createElement('a');
    editLink.classList.add('edit-btn');
    editLink.href = '../post/edit.html';
    const editImg = document.createElement('img');
    editImg.src = '../assets/images/Edit.png';
    editImg.alt = 'edit icon';
    const editSpan = document.createElement('span');
    editSpan.textContent = 'Edit post';
    editLink.append(editImg, editSpan);
    detailsEditDiv.appendChild(editLink);

    const shareURL = document.createElement('button');
    shareURL.classList.add('share', 'btn-reset');
    shareURL.textContent = 'Copy postlink';
    shareURL.addEventListener('click', () => {
        copyTextToClipboard(window.location.href);
    })

    detailsDiv.append(detailsInfoDiv, shareURL, detailsEditDiv);

    const postImgDiv = document.createElement('div');
    postImgDiv.classList.add('post-img');
    const postImg = document.createElement('img');
    postImg.src = post.media.url;
    postImg.alt = `${post.tags[0]} concept image`;
    postImgDiv.appendChild(postImg);

    const mainTextDiv = document.createElement('div');
    mainTextDiv.classList.add('main-text');

    const postTextP1 = document.createElement('p');
    postTextP1.classList.add('post-text');
    postTextP1.textContent = post.body;

    mainTextDiv.append(postTextP1);

    return [tagDiv, titleH1, detailsDiv, postImgDiv, mainTextDiv]
}

export function getTargetID() {
    const parameterString = window.location.search;
    const searchParameters = new URLSearchParams(parameterString);
    const postId = searchParameters.get('id');
    const page = searchParameters.get('page')
    return [postId, page];
}

export function populateBanner(posts) {
    const slides = document.querySelectorAll('.slide');
    posts.slice(0, 3).forEach((post, index) => {
        // Set the src attribute of the corresponding slide image to the imageURL of the post
        const img = document.createElement('img');
        img.src = post.media.url;
        img.alt = `${post.tags[0]} concept image`;
        slides[index].appendChild(img)
        slides[index].setAttribute('id', post.id)
        if (index == 0) {
            slides[index].classList.add("active");
        }
    })
}

export function populateBannerCard(ID) {
    const tag = document.querySelector('.tag');
    const title = document.querySelector('.slide-title');
    const author = document.querySelector('.author');
    const date = document.querySelector('.date');
    const posts = JSON.parse(localStorage.getItem('Posts12'));

    const targetPost = posts.data.find(post => post.id === ID)

    tag.textContent = targetPost.tags[0];
    title.textContent = targetPost.title;
    author.textContent = `By ${targetPost.author.name}`;
    date.textContent = targetPost.updated.substr(0, 10);
}




