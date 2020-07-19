import { createStore, createEvent } from "effector";

const addComment = createEvent();

const $comments = createStore([]);

$comments.on(addComment, (state, newComent) => state.concat(newComent));

export { $comments, addComment };
