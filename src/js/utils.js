const storage = {
    //string
    get(key) {
        return localStorage.getItem(key)
    },
    set(key, value) {
        localStorage.setItem(key, value);
    },
}

export {
storage
};
// local storage = permanente
// local section = permanece na aba até que ela seja fechada