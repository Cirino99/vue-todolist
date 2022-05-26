const myAppTodo = new Vue({
    el : '#app',
    data : {
        todoList : [
            { text : 'Dormire almeno 7 ore', done : true },
            { text : 'Allenamento in palestra', done : false },
            { text : 'Fare la spesa', done : false },
            { text : 'Leggere', done : true },
        ],
        newItem : ''
    },
    methods : {
        addItem(){
            if(this.newItem!==''){
                this.todoList.push({ text : this.newItem, done : false});
                this.newItem = '';
            }
        },
        removeItem(i){
            this.todoList.splice(i,1);
        },
        changeDoneStatus(i){
            this.todoList[i].done = !this.todoList[i].done
        }
    }
});