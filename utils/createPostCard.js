import { shortenText } from './shortenText.js';
import { createPostModal } from './postModal.js';

export function createPostCard({ id, title, body, appState }) {
    const postDiv = document.createElement('div');
    const idDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const bodyDiv = document.createElement('div');

    postDiv.className = 'post';
    postDiv.id = id;
    idDiv.textContent = id;
    titleDiv.textContent = shortenText(title);
    bodyDiv.className = 'post-body';
    bodyDiv.textContent = body;

    postDiv.addEventListener('click', (event) => {
        getClickedPost(event, appState);
    });

    postDiv.appendChild(idDiv);
    postDiv.appendChild(titleDiv);
    postDiv.appendChild(bodyDiv);

    return postDiv;
}

function getClickedPost(event, appState) {
    const postDiv = event.target.closest('.post');
    const id = postDiv.id;

    const post = appState.posts.find((p) => p.id === +id);

    createPostModal(post, id);
}