import http, { get } from 'http';
import { TodoListService } from './server-main.mjs';

const service = new TodoListService();
const server = http.createServer((req, res) => {
    
    if (req.method === 'GET') {
        service.getTodolist(req, res);
    } else if (req.method === 'POST') {
        service.createTodolist(req, res);
    } else if (req.method === 'PUT') {
        service.updateTodolist(req, res);
    } else if (req.method === 'DELETE') {
        service.deleteTodolistById(req, res);
    }

    res.end();
})

server.listen(5000);