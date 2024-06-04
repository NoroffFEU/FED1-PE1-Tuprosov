import { initializeSlider } from "./carousel.mjs";
import { get } from "./posts/index.mjs";
import { populateParent, populateBanner, populateBannerCard, addPost } from "./posts/constants.mjs";
import { transferPostID } from "./transferID.mjs";

initializeSlider();
const posts = await get();
const parent = document.querySelector('.blog-list');
populateParent(posts, parent)
transferPostID();
populateBanner(posts);
// to load banner card content when page loads
const slideID = document.querySelector('.slide').getAttribute('id');
populateBannerCard(slideID)
addPost();
