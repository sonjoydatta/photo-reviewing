class LocalStorageService {
  #storage = window.localStorage;

  get(key) {
    const value = this.#storage.getItem(key);
    return value ? JSON.parse(value) : null;
  }

  set(key, value) {
    this.#storage.setItem(key, JSON.stringify(value));
  }

  remove(key) {
    this.#storage.removeItem(key);
  }
}

export default new LocalStorageService();
