let app = new Vue({
    el: '#app',
    data() {
        return{
            todos: [], //menampung string untuk input
            todo: "" //menampung array berisi todo, ditampilkan sebagai list 
        }
    },
    created(){
        this.loadLocalStorage();
    },
    //Data task disimpan di local storage, sehingga jika di refresh tidak hilang,nmaun jika browser di close, akan hilang datanya
    watch: {
        todos(){
            localStorage.setItem("todos",JSON.stringify(this.todos))
        }
    },
 
    //method untuk menambahkan dan menghapus task. 
    methods: {
        loadLocalStorage(){
            const ls = JSON.parse(localStorage.getItem('todos'))
            if(ls == null){
                return;
            }
            this.todos=ls;
            console.log(this.todos)
        },
        addTodo() {
            this.todos.push(this.todo);
            this.todo = "";
        },
        checkTodo() {
            todo.style.textDecoration = 'line-through'
        },
        deleteTodo(index){
            this.todos.splice(index, 1);
        }
    }
})