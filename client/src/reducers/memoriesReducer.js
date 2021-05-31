import {
  FETCH_ALL,
  CREATE,
  UPDATE,
  DELETE,
} from "../constants/actionsConstants";

const memoriesActions = (memories = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...memories, action.payload];

    case UPDATE:
      return memories.map((memory) =>
        // eğer memory._id imiz güncellenen (action.payload._id) ile eşit ise o zaman
        // action.payload yani güncelleme işlemi yapılır. Yok eğer eşit değilse
        // o zaman memory yani normal anımızı koyuyoruz.
        memory._id === action.payload._id ? action.payload : memory
      );

    case DELETE:
      return memories.filter((memory) => memory._id !== action.payload);

    default:
      return memories;
  }
};

export default memoriesActions;
