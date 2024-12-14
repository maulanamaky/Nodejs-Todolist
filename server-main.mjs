export class TodoListService{

    todolist =[];

    getJSONTodolist(){
        return JSON.stringify({
            code: 200,
            status: 'OK',
            data: [
                {
                    data: this.todolist.map((value, index) => {
                        return{
                            id: index,
                            todo: value,
                        }
                    })
                }
            ]
        })
    }

    getTodolist(req, res){
        res.write(this.getJSONTodolist);
        res.end();
    }

    createTodolist(req, res){
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.todolist.push(body.todo);

            res.write(this.getJSONTodolist);
            res.end();
        })
    }

    updateTodolist(req, res){
        req.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            if(this.todolist[body.id]){
                this.todolist[body.id] = body.todo;
            }

            res.write(this.getJSONTodolist);
            res.end();
        })
    }

    deleteTodolistById(req, res){
        req.addListener('data', (data) => {
            const body = JSON.parse(data.toString());
            if(this.todolist[body.id]){
                this.todolist.splice(body.id, 1);
            }

            res.write(this.getJSONTodolist);
            res.end();
        })
    }
}