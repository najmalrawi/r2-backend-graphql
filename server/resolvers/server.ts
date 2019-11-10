import { dataProvider } from "../providers/data.provider"

export default {
	Query: {
		version: () => 1.0,
		app: () => dataProvider.getAppInfo()
	},
	Mutation: {
		setInfo(_, {input}) {
			return dataProvider.setAppInfo(input.prop, input.val)
		}
	}
}