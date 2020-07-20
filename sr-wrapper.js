const Request = require('./lib/Request');

module.exports = class SRWrapper {

    constructor() {
        this._request = new Request();
    }

    /**
     * @description Поиск тайтла по части названия
     * @param {String} name Часть названия аниме, на английском или русском
     */
    animeSearch(name) {
        return this._request.get(['animesearch'], { anime_name: name });
    }

    /**
     * @description Получение информации об аниме по ID
     * @param {Number} id ID аниме
     */
    anime(id) {
        return this._request.get(['anime', id]);
    }

    /**
     * @description Получение списка аниме с сортировкой по ID и опциональными фильтрами
     * @param {Number} offset Начало страницы
     * @param {Number} limit Количество тайтлов на странице
     * @param {String} studio Название студии
     */
    list(offset, limit, studio) {
        return this._request.get(['list'], { offset, limit, studio });
    }

    /**
     * @description Получение информации об аниме по списку ID
     * @param {Array<String>} ids Список ID
     */
    animes(ids) {
        return this._request.post(['animes'], `anime_id_array=[${ids}]`);
    }

    /**
     * @description Получение списка ID тайтлов в онгоинге
     */
    ongoing() {
        return this._request.get(['ongoing']);
    }

    /**
     * @description Получение списка эпизодов выбранного тайтла
     * @param {Number} id ID аниме
     */
    episodes(id) {
        return this._request.get(['anime', id, 'episodes']);
    }

    /**
     * @description Получение информации об эпизоде
     * @param {Number} id ID эпизода
     */
    episode(id) {
        return this._request.get(['episode', id]);
    }

    /**
     * @description Получение последних 15-и эпизодов
     */
    lastEpisodes() {
        return this._request.get(['last_episodes']);
    }

}