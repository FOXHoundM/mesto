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

	async getUserInfo() {
		const res = await fetch(`${this._url}/users/me`, {
			method: 'GET',
			headers: this._headers,
		});
		return this._getResponse(res);
	}

	async editUserInfo(data) {
		const res = await fetch(`${this._url}/users/me`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				name: data.name,
				about: data.job,
			})
		});
		return this._getResponse(res);
	}

	async getInitialCards() {
		const res = await fetch(`${this._url}/cards`, {
			method: 'GET',
			headers: this._headers,
		});
		return this._getResponse(res);
	}

	async addCard(item) {
		const res = await fetch(`${this._url}/cards`, {
			method: 'POST',
			headers: this._headers,
			body: JSON.stringify({
				name: item.name,
				link: item.link
			})
		});
		return this._getResponse(res);
	}

	async changeAvatar(data) {
		const res = await fetch(`${this._url}/users/me/avatar`, {
			method: 'PATCH',
			headers: this._headers,
			body: JSON.stringify({
				avatar: data.avatar
			})
		});
		return this._getResponse(res);
	}

	async deleteCard(cardId) {
		const res = await fetch(`${this._url}/cards/${cardId}`, {
			method: 'DELETE',
			headers: this._headers,
		});
		return this._getResponse(res);
	}

	async addLike(cardId) {
		const res = await fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'PUT',
			headers: this._headers,
		});
		return this._getResponse(res);
	}

	async deleteLike(cardId) {
		const res = await fetch(`${this._url}/cards/${cardId}/likes`, {
			method: 'DELETE',
			headers: this._headers,
		});
		return this._getResponse(res);
	}


}