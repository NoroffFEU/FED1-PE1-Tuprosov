import { ApiBase, repo } from "./constants.mjs";
export async function get() {

    const api = `${ApiBase}`
    let params;
    let isAllPosts = true;

    if (window.location.pathname === repo) {
        params = {
            limit: 12,
            sortOrder: 'desc'   
        };

        isAllPosts = false;
    }

    const url = new URL(api);

    if (params) {
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
    }
    

    try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
        if (isAllPosts) {
            localStorage.setItem('AllPosts', JSON.stringify(data))
        } else {
            localStorage.setItem('Posts12', JSON.stringify(data))
        }

        return data.data;
    } catch (error) {
        console.error('Error fetching posts:', error.message);
        return []; // Return an empty array if there's an error
    }
}
export async function getPost(id) {}

