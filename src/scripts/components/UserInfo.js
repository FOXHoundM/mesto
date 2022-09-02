export class UserInfo {
	constructor({ username, job }) {
		this._username = username;
		this._job = job;
	}

	getUserInfo() {
		return {
			username: this._username.textContent,
			job: this._job.textContent,
		};
	}

	setUserInfo({ username, job }) {
		this._username.textContent = username;
		this._job.textContent = job;
	}
}
