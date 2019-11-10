import { dataProvider } from "../providers/data.provider"

export default {
	Query: {
		subscribers: (_, { joined }) => dataProvider.getSubscribers(joined)
	},
	Mutation: {
		createSubscriber(_, {numbers}) {
			return dataProvider.createSubscriber(numbers)
		}
	}
}