import chai from "chai";
import chaiHttp from "chai-http";

import app from "../app";

chai.use(chaiHttp);

chai.should();

describe("welcome message",()=>{
    it("should display a welcome message on the landing page", ()=>{
        chai.request(app)
        .get("/")
        .then(res =>{
            res.status.should.be.equal(200);
            res.body.message.should.be("welcome to my article app");
        })
        .catch(err => console.log(err));
    })
})
