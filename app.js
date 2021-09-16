// const App = {
//     data() {
//         return{
//             counter: 0,
//             title: "Счетчик"
//         }
//     },
//     methods(){
//     }
// }

// Vue.createApp(App).mount("#app")

const App = {
    data(){
        return{
            title: "Список Дел",
            placeholderString: "Введите задачу на день",
            inputValue: "",
            notes: [],
            ind: 0
        }
    },
    methods: {
        inputChange(event){
            this.inputValue = event.target.value
        },
        addNewNotes(){
            if(this.inputValue != ""){
            this.notes.push(this.inputValue)
            this.inputValue = "";
        } else{
            alert("Вы ничего не ввели")
        }
        },
        removeNotes(ind){
            this.notes.splice(ind, 1)
        }
    }
}


Vue.createApp(App).mount("#app")