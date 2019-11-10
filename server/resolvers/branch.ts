import { dataProvider } from "../providers/data.provider"

export default {
	Query: {
		branches: () => dataProvider.getBranches()
	}
}