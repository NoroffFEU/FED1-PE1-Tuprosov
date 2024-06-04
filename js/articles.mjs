import { get } from "./posts/index.mjs";
import { populateParent } from "./posts/constants.mjs";
import { transferPostID } from "./transferID.mjs";

const allPosts = await get();
const parent = document.querySelector('.blog-list');
populateParent(allPosts, parent)
transferPostID();
