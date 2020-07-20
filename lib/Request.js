const fetch = require('node-fetch');

module.exports = class Request {

    async post(params, body) {
        const res = await fetch(this._createUrl(params), {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body,
        });
        const data = res.json();

        return data;
    }

    async get(params, query) {
        const res = await fetch(this._createUrl(params, query));
        const data = res.json();

        return data;
    }

    _createUrl(params, query) {
        const url = new URL('https://service.sovetromantica.com/v1');

        url.pathname += `/${params.join('/')}`;
        if (query) Object.entries(query).forEach(([key, value]) => url.searchParams.append(key, value));

        return url.href;
    }

}