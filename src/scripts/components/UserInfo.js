export class UserInfo {
	constructor({username, job, avatar}) {
		this._username = username;
		this._job = job;
		this._avatar = avatar;
	}

	getUserInfo() {
		return {
			name: this._username.textContent,
			about: this._job.textContent,
		};
	}

	setUserInfo(data) {
		this._username.textContent = data.name;
		this._job.textContent = data.about;
		this._avatar.style.backgroundImage = `url(${data.avatar}`;
	}
}
