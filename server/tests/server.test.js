const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
    let todos = [{
        text: 'Learn node js completely'
    }, {
        text: 'Practice by building some thing cool'
    }, {
        text: 'Practice again face challenges, learn the experiences and win'
    }, {
        text: 'Start learning React.js'
    }];

    Todo.remove({}).then(() => {
        return Todo.insertMany(todos)
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {

        let text = 'Testing new todo';

        request(app)
        .post('/todos')
        .send({text})
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text);
        })
        .end((err, res) => {
            if (err) {
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(5);
                expect(todos[todos.length-1].text).toBe(text);
                done();
            }).catch(e => done(e));
        });
    });

    it('should not create todo with invalid body data', (done) => {
        request(app)
        .post('/todos')
        .send({})
        .expect(400)
        .end((err, res) => {
            if (err) {
                return done(err);
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(4);
                done();
            }).catch(e => done(e));
        });
    });

    describe('GET /todos', () => {

        it('should fetch all todos', (done) => {
            request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(4);
            }).end(() => done());
        });

    });
});
