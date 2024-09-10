import {web} from "../src/application/web.js";
import supertest from 'supertest';
import {prismaClient} from "../src/application/database.js";

describe('POST /api/users', function () {
    afterEach(async function () {
        prismaClient.user.deleteMany({
            where: {
                username: 'adam'
            }
        });
    })
    it('Should return a news of users', async () => {
        const result = await supertest(web)
            .post('/api/users')
            .send({
                username: 'adam',
                password: 'secret',
                name: 'adam suseno',
            })

        expect(result.status).toBe(200);
        expect(result.body.data.username).toBe('adam');
        expect(result.body.data.name).toBe('adam suseno');
        expect(result.body.data.password).toBeUndefined();
    })
})