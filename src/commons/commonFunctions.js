export function getCurrentUser() {
    const currentLoginUser = window.sessionStorage.getItem('currentUser');
    return currentLoginUser ? JSON.parse(currentLoginUser) : null;
}

export function setCurrentUser(currentUser) {
    window.sessionStorage.setItem('currentUser', JSON.stringify(currentUser));
}

export function toHome() {
    window.sessionStorage.clear();
    return window.location.href = '/home.html';
}

export function getRangeNum(min, max) {
    const range = max - min + 1;
    return Math.floor(Math.random() * range + min);
}