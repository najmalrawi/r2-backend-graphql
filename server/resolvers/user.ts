import { dataProvider } from "../providers/data.provider"

export default {
	Query: {
		user: (_, { userPk }) => dataProvider.getUsers(userPk),
		users: () => dataProvider.getUsers(),
	},
	Mutation: {
		createUser(_, {input}) {
			return dataProvider.createUser(input)
		}
	}
}