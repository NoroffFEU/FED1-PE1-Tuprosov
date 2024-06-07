import { ApiBase } from './constants.mjs';

export async function remove(id) {
    const token = JSON.parse(localStorage.getItem('userData')).data.accessToken;

    if (!id) {
        throw new Error('Post ID is required to delete a post');
    }

    const apiUrl = `${ApiBase}/${id}`;

    try {
        const response = await fetch(apiUrl, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error(`Failed to delete post with ID ${id}`);
        }

        alert(`Post with ID ${id} has been deleted`, result);

        return result;
    } catch (error) {
        console.error('Error deleting post:', error.message);
        throw error;
    }
}
