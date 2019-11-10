import { AppInfo, Subscriber, Branch, User } from "../types"

class DataProvider {

	appInfo: AppInfo = {
		name: "Apple"
	}

	users:User[] = [
		{ pk: 1, branch: 1, subscriber: 1, password: "1", role: 0, firstName: "Muhammad", lastName: "Najimov" },
		{ pk: 2, branch: 1, subscriber: 3, password: "1", role: 1, firstName: "Yahyo", lastName: "Najimov" },
		{ pk: 3, branch: 2, subscriber: 2, password: "1", role: 0, firstName: "Adham", lastName: "Muhammadjonov" },
	]

	subscribers:Subscriber[] = [
		{ pk: 1, number: 935104050, joined: true },
		{ pk: 2, number: 93555666, joined: true },
		{ pk: 3, number: 933104433, joined: true },
		{ pk: 4, number: 945001000, joined: false },
		{ pk: 5, number: 945019099, joined: false },
		{ pk: 6, number: 945011020, joined: false },
		{ pk: 7, number: 943207777, joined: false },
		{ pk: 8, number: 943456756, joined: false },
		{ pk: 9, number: 943339999, joined: false },
		{ pk: 10, number: 943667711, joined: false },
	]

	quota:Object = {
		branchLimit: 2,
		projectLimit: 3,
		userLimit: 10,
	}

	getAppInfo(): AppInfo {
		return this.appInfo;
	}

	setAppInfo(prop: string, val?: string) {
		if(prop in this.appInfo) this.appInfo[prop] = val
		return this.appInfo;
	}

	getSubscribers( joined?: boolean ) {

		return undefined === joined ? this.subscribers : this.subscribers.filter((subscriber: Subscriber) => subscriber.joined === joined)
	}

	createSubscriber( numbers: number[] ): Subscriber[] {

		let pk = this.subscribers.length + 1;

		let newSubscribers:Subscriber[] = []

		for (let n of numbers) {

			let newSubscriber = { pk: pk, number: n, joined: false }

			this.subscribers.push(newSubscriber)

			newSubscribers.push(newSubscriber)

			++pk;
		}

		return newSubscribers
	}

	getBranches() {

		const data:Branch[] = [
			{ pk: 1, name: "Olmazor", code: 10101 },
			{ pk: 2, name: "Uchtepa", code: 20020 },
		]

		return data
	}

	getUsers(userPk?: number) {

		return undefined === userPk ? this.users : this.users.find((user: User) => user.pk === userPk)
	}

	getQuota(name: string) {

		return name in this.quota ? { name, value: this.quota[name] } : { name, value: null }
	}

	setQuota( input: { name: string, value: number } ) {

		if (input.name in this.quota) {
			this.quota[input.name] = input.value

			return { name: input.name, value: this.quota[input.name] }
		}
	}

	createUser(input: { branch: number, subscriber: number, password: string, role: number, firstName?: string, lastName?: string }): User | void {

		const subscriber = this.subscribers.find((subscriber: Subscriber) => subscriber.pk === input.subscriber)

		if (subscriber && !subscriber.joined) {

			const newUser:User = {
				pk: this.users.length + 1,
				branch: 0,
				subscriber: 0,
				password: "",
				role: 1,
				firstName: "",
				lastName: ""
			}

			for ( let prop in input ) {
				newUser[prop] = input[prop]
			}

			this.users.push(newUser)

			subscriber.joined = true

			return newUser
		}
	}
}

export const dataProvider:DataProvider = new DataProvider()