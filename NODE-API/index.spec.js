const app = require('./index');
const require = require('supertest');

describe('GET/users는', ()=> {
    it('...', (done)=> {
        request(app)
            .get('/users')
            .end((err, res) => {
                console.log(res.body);
                done(); //비동기 - 동기적 처리
            })
    })
})