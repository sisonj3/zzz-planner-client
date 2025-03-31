// Check if local storage is supported in browser
export default function checkStorage(type) {
    let storage;

    try {
        storage = window[type];
        const x = "__storage_test__";

        storage.setItem(x, x);
        storage.removeItem(x);

        return true;
    } catch (e) {
        return (
            e instanceof DOMException &&
            e.name == "QuotaExceededError" &&
            storage && storage.length !== 0
        );
    }
}