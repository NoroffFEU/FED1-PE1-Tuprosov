import { ApiBase } from "./constants.mjs";
import { header } from "./authFetch.mjs";

export async function create(postData) {
    const postId = postData.get('id');
    const name = JSON.parse(localStorage.getItem('userData')).data.name;
    const url = postId ? `${ApiBase}/${name}/${postId}` : `${ApiBase}/${name}`;
    const method = postId ? 'put' : 'post';
    const tags = postData.get('tags') ? postData.get('tags').split(',') : [];

    const newData = {};

    // Iterate over the entries of the FormData object
    for (const [key, value] of postData.entries()) {
        if (key === 'image' || key === 'video') {
            // Create a media object with url and media type
            newData.media = {
                url: value,
            };
        } else if (key === 'tags') {
            // Split the tags string into an array
            newData.tags = value.split(',');
        } else {
            // For other fields, add them directly to newData
            newData[key] = value;
        }
    }
    
    try {
        const response = await fetch(url, {
            method,
            headers: header(),
            body: JSON.stringify(newData)
        });


        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

