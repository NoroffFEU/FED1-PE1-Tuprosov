let allPosts

async function fetchData(url) {
    try {
        const data = await fetch(url);
	    const json = await data.json();
	    return json;
    } catch (error) {
        alert('Error displaying data:', error);
    }    
}

async function getAllPosts(){
    if(!allPosts) {
        const apiUrl = 'https://api.noroff.dev/api/v2/blog/posts';
        allPosts  = await fetchData(apiUrl)
    }
}

await getAllPosts();
export {allPosts}





