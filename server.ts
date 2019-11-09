import { GraphQLServer } from "graphql-yoga"
import { default as typeDefs } from "./server/__typedefs"
import { default as resolvers } from "./server/__resolvers"
import { default as options } from "./server/options"

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(options, () => {
	console.log(`Server is running on localhost:${options.port}`)

}).catch(error => {
	console.error("Connection error", error)
})