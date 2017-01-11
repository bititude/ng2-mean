import { AdminComponent } from './admin.component';

export const STATES = [{
	name: 'admin',
	url: '/admin',
	component: AdminComponent,
	data: {
		authenticate: 'admin'
	}
}]