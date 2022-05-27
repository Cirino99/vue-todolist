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
        // metodo aggiunta nuovo item alla lista
        addItem(){
            this.newItem = this.newItem.trim();
            if(this.newItem!==''){
                this.todoList.push({ text : this.newItem, done : false});
                this.newItem = '';
            }
        },
        // metodo per rimuovere un item dalla lista
        removeItem(i){
            this.todoList.splice(i,1);
        },
        // metodo per cambiare lo stato (done) di un elemento della lista
        changeDoneStatus(i){
            this.todoList[i].done = !this.todoList[i].done;
        }
    }
});