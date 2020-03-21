<template>
    <div class="container">
        <div class="row justify-content-center">
          <ul>
            <li v-for="element,index in categories">{{element.name}}</li>
          </ul>
        </div>
    </div>
</template>

<style scoped>
.card {
    border:0;
    border-radius: 0.5rem;
}
.transit-1 {
    transition: all 1s;
}
.small-card {
    padding: 1rem;
    background: #f5f8fa;
    margin-bottom: 5px;
    border-radius: .25rem;
}
.card-body-dark{
    background-color: #ccc;
}
textarea {
    overflow: visible;
    outline: 1px dashed black;
    border: 0;
    padding: 6px 0 2px 8px;
    width: 100%;
    height: 100%;
    resize: none;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    components: {
        //
    },
    data(){
        return {
            categories : [],
            editingTask : null
        }
    },
    methods : {
        addNew(id) {
            let user_id = 1
            let name = "New task"
            let category_id = this.categories[id].id
            let order = this.categories[id].tasks.length

            axios.post('api/task', {user_id, name, order, category_id}).then(response => {
                this.categories[id].tasks.push(response.data.data)
            })
        },
        loadTasks() {
          this.categories.map(category => {
              axios.get(`api/category/${category.id}/tasks`).then(response => {
                  category.tasks = response.data
              })
          })
        },
        changeOrder(data){
        },
        endEditing(task) {
            this.editingTask = null

            axios.patch(`api/task/${task.id}`, {name: task.name}).then(response => {
                // You can do anything you wan't here.
            })
        },
        editTask(task){
            this.editingTask = task
        }
    },
    mounted() {
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        axios.get(`${this.baseApiUrl}/api/category`).then(response => {
            response.data.forEach((data) => {
                this.categories.push({
                    id : data.id,
                    name : data.name,
                    tasks : []
                })
            })
            this.loadTasks()
        })
    },
    computed: {
      ...mapGetters(['categories', 'baseApiUrl'])
    }
}
</script>
