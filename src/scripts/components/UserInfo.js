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

	setUserInfo({name, about, avatar, _id}) {
		this._username.textContent = name;
		this._job.textContent = about;
		this._avatar.style.backgroundImage = `url(${avatar}`;
	}
}
