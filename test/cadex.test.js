const request = require('supertest');
const app = require("../app");
const cadexModule = require("../app/middleware/cadex");
const data = require("../data/parts.json");

// describe vient amener une batterie de test
describe("Cadex middleware génère un cadex",()=>{
    // je génère un cadex
    const cadex = cadexModule.generate();

    it('should be an object', async () => {
        expect(cadex).toBeInstanceOf(Object);
    });

    it('should have name property',()=>{
        expect(cadex).toHaveProperty("name");
    });

    it('should have verb property',()=>{
        expect(cadex).toHaveProperty("verb");
    });

    it('should have adjective property',()=>{
        expect(cadex).toHaveProperty("adjective");
    });

    it('should have complement property',()=>{
        expect(cadex).toHaveProperty("complement");
    });

    it('should be string',()=>{
        expect(typeof cadex.name).toBe('string');
        expect(typeof cadex.verb).toBe('string');
        expect(typeof cadex.complement).toBe('string');
        expect(typeof cadex.adjective).toBe('string');
    });

    it('should in parts.json',()=>{
        expect(data.names).toContain(cadex.name);
        expect(data.verbs).toContain(cadex.verb);
        expect(data.adjectives).toContain(cadex.adjective);
        expect(data.complements).toContain(cadex.complement);
    });
});

// On teste notre route
describe('GET /v1/cadex', function() {
    it('responds with json', async function() {
      const response = await request(app)
        .get('/v1/cadex')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/);

        // console.log(response);

        // on teste si le type du retour est du json
        // expect(response.headers["Content-Type"]).toMatch(/json/);
        expect(response.status).toEqual(200);
        
      //expect(response.body.email).toEqual('foo@bar.com');
    });
  });

  