<template>
  <div class="container-fluid" id="board">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Stores</h5>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <!-- init -->
                <form>
                  <div class="form-group">
                    <div class="col-12">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                      <small id="name" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">Add</button>
                </form>
                <!-- end -->
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr v-for="element,index in stores">
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">{{ element.id }}</th>
                      <td>{{ element.name }}</td>
                      <td class="text-right">
                        <button class="btn btn-warning" type="button" name="button">
                          <i class="fa fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-danger" type="button" name="button">
                          <i class="fa fa-trash"></i> Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    components: {
        //
    },
    data(){
        return {
          userId: localStorage.getItem('user_id'),
          categories : [],
          editingTask : null
        }
    },
    methods : {
        addNew(id) {
          let name = "New task"
          let category_id = this.categories[id].id
          let order = this.categories[id].tasks.length

          axios.post('api/task', {user_id, name, order, category_id}).then(response => {
              this.categories[id].tasks.push(response.data.data)
          })
        },
        loadTasks() {
          this.categories.map(category => {
              axios.get(`${this.baseApiUrl}/api/category/${category.id}/tasks`).then(response => {
                  category.tasks = response.data
              })
          })
        },
        changeOrder(data){
        },
        endEditing(task) {
            this.editingTask = null

            axios.patch(`${this.baseApiUrl}/api/task/${task.id}`, {name: task.name}).then(response => {
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

        axios.get('api/category').then(response => {
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
    }
}
</script>
