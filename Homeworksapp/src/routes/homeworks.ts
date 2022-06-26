import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
	server.get('/', async (request, reply) => {
		// add your code here
		reply.send({'mes': 'hello omar'})
	});

	server.get('/Homework', async (request, reply) => {
		// add your code here
		reply.send({'mes': 'omar finish HM'})
	});
}
