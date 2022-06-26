import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
	server.get('/', async (request, reply) => {
		return { hello: 'world im ali' };
	});

	server.get('/Homework', async (request, reply) => {
		return { hello: 'done with the homework' };
	});
}
