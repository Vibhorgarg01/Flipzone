import chai from 'chai'
import chaiHttp from 'chai-http'
import server from '../backend/server.js'
console.log("Vibhor");
//ASSERTION STYLE 
chai.should()
chai.use(chaiHttp)
describe("TASK API",()=>{
    describe("GET /api/users/createadmin",(done)=>{
        chai.request(server)
            .get('/api/users/createadmin')
            .end((err,response)=>{
                response.should.have.status(200);
            })
            done();
            
    });
});