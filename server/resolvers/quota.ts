import { dataProvider } from "../providers/data.provider"

export default {
	Query: {
		quota: (_, { name }) => dataProvider.getQuota(name)
	},
	Mutation: {
		setQuota (_, { input }) {
			return dataProvider.setQuota(input)
		}
	}
}