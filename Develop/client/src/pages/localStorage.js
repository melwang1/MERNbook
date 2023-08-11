import SavedBooks from "./SavedBooks";

export const getSavedBookIds = () => {
    const saveBookIds = localStorage.getItem ('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : [];

    return saveBookIds;
};

export const saveBookIds = (bookIdArr) => {
    if (bookIdArr.length) {
        localStorage.setItem ('saved_books', JSON.stringify(bookIdArr));
    } else {
        localStorage.removeItem ('saved_books');
    }
};

export const removeBookId = (bookId) => {
    const saveBookIds =localStorage.getItem('saved_books')
    ? JSON.parse(localStorage.getItem('saved_books'))
    : null;

    if (saveBookIds) {
        return false;
    }

    const updatedSavedBookIds = saveBookIds?.filter ((savedBookId) => savedBookId !== bookId);
    localStorage.setItem ('saved_books', JSON.stringify(updatedSavedBookIds));
    return true;
}