export class Api {
	constructor(setting) {
		this._url = setting.url;
		this._headers = setting.headers
	}

	_getResponse(res) {
		if (res.ok) {
			return res.json()
		}
		return Promise.reject(`Ошибка: ${res.status}`)

	}

	getUserInfo() {
		return fetch(`${this._url}/users/me`, {
			method: 'GET',
			headers: this._headers,
		})
			.then(res => this._getResponse(res))
	}

	editUserInfo(data) {
		return fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.job,
			})
		})
			.then(res => this._getResponse(res))
	}

	getInitialCards() {
		return fetch(`${this._url}/cards`, {
			method: 'GET',
			headers: this._headers,
		})
			.then(res => this._getResponse(res))
	}

	addCard(item) {
		return fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: item.name,
				link: item.link
			})
		})
			.then(res => this._getResponse(res)
			)
	}

	changeAvatar(data) {
		return fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar
			})
		})
			.then(res => this._getResponse(res))
	}

	deleteCard(cardId) {
		return fetch(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(res => this._getResponse(res))
	}

	addLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		})
			.then(res => this._getResponse(res))
	}

	deleteLike(cardId) {
		return fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		})
			.then(res => this._getResponse(res))
	}


}