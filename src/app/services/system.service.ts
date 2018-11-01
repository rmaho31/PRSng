import { Injectable } from '@angular/core';

@Injectable()
export class SystemService {
	data = {
		about: 'System Service',
		user: {
			loggedIn: false,
			rememberMe: false,
			instance: null
		}
	};

	get debug() { return this.data; }

	constructor() {}
	
}