import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
		server.get('/', async (request, reply) => {
		reply.send('meshal shmri')

	});

	server.get('/Homework', async (request, reply) => {
		reply.send('meshal')
	});
}
