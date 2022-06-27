import { FastifyInstance } from 'fastify';

export default async function (server: FastifyInstance) {
	server.get('/', async (request, reply) => {
		// add your code here
		return{hello:'hi'}
	});
     
	server.get('/Homework', async (request, reply) => {
      return{hi: 'welcome'}
		

	});

}
