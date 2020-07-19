import { createStore, createEvent } from "effector";
import { nanoid } from "nanoid";
import { toast } from "react-toastify";

const addDoc = createEvent();
const removeDoc = createEvent();

const $docs = createStore([]);

$docs
  .on(addDoc, (state, newDoc) => state.concat({ ...newDoc, id: nanoid(3) }))
  .on(removeDoc, (state, id) => state.filter((i) => i.id !== id));

addDoc.watch(() => {
  toast.info("Документ добавлен!");
});

removeDoc.watch(() => {
  toast.error("Документ удален");
});

export { $docs, addDoc, removeDoc };
