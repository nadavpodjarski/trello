import { v4 as uuid } from "uuid";
const LOCALSTORAGE_KEY = "trello ¯_(ツ)_/¯";

export const initializeState = () => {
  const newBoard = createBoard();

  return { boards: { [newBoard.id]: newBoard }, currentBoard: newBoard.id };
};

const createBoard = () => ({
  id: uuid(),
  title: "Fresh Board",
  columns: [
    {
      id: uuid(),
      title: "Todo",
      cards: [
        {
          id: uuid(),
          title: "This is a card",
          img:
            "https://cdn.pixabay.com/photo/2021/01/09/20/33/sunset-5903426_960_720.jpg",
        },
        {
          id: uuid(),
          title: "This is a card 2",
          img:
            "https://cdn.pixabay.com/photo/2021/04/13/05/20/beach-6174684_960_720.jpg",
        },
        {
          id: uuid(),
          title: "This is a card 3",
          img:
            "https://cdn.pixabay.com/photo/2019/07/10/22/23/beach-4329694_960_720.jpg",
        },
      ],
    },
    { id: uuid(), title: "In Progress", cards: [] },
    { id: uuid(), title: "Done", cards: [] },
  ],
});

export const createCard = (title) => ({
  id: uuid(),
  title,
  img: "",
});

export const createColumn = (title) => ({
  id: uuid(),
  title,
  cards: [],
});

export const getStateFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

export const setStateToLocalStorage = (state) =>
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(state));
