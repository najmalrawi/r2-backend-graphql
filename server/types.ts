export interface AppInfo {
	name: string
}

export interface Subscriber {
	pk: number
	number: number
	joined: boolean
}

export interface Branch {
	pk: number
	name: string
	code: number
}

export interface User {
	pk: number
	branch: Branch | number
	subscriber: Subscriber | number
	password: string
	role: number
	firstName: string
	lastName: string
}

export interface Quota {
	pk: number
	name: string
	value: string
}