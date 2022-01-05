<template>
  <div>
    <legend>Itemized Budget</legend> <br> <br>
    <table>
      <th>Item</th>
      <th>Cost</th>
      <th>Action</th>
      <tr
        v-for="item in items"
        :key="item.id">
        <!-- <td>{{link.url_type}}</td> -->
        <td>{{item.name}}</td>
        <td>{{item.cost}}</td>
        <td>
          <button @click="editItem(item.id)">Edit</button>
          <button @click="deleteItem(item.id)">Delete</button>
        </td>
      </tr>
    </table>
    <br> <br>
    <h4>Total Budget: {{ this.totalItemizedBudget }}</h4>
    <legend v-if="!isEdit">Add an item</legend>
    <legend v-else>Edit Item</legend>
    <input 
      type="text"
      placeholder="Item Name"
      v-model="itemName"> <br> <br>
    <input 
      type="number"
      placeholder="Item Cost"
      v-model="itemCost"> <br> <br>
    <button
      v-if="isEdit"
      @click="updateItem">Update</button>
    <button
      v-if="isEdit"
      @click="cancel">
      Cancel
    </button>
    <button
      v-else
      @click="addNewItem">
      Add
    </button> <br> <br>
  </div>
</template>

<script>

export default {
  name: 'ProjectItemizedBudget',
  data() {
    return {
      items: [],

      itemName: '',
      itemCost: '',

      isEdit: false,

      itemIdToUpdate: '',

      totalItemizedBudget: 0,
    }
  },
  async created() {

  },
  methods: {
    async addNewItem() {
      let newItemToAdd = {
        id: Date.now(),
        name: this.itemName,
        cost: this.itemCost
      }

      this.totalItemizedBudget += this.itemCost

      this.items.push(newItemToAdd)
      this.itemName = '',
      this.itemCost = Number
    },
    async deleteItem(id) {
      let itemToDelete = this.items.find(item => item.id == id)
      this.totalItemizedBudget -= itemToDelete.cost
      this.items = this.items.filter(item => item.id != id)
    },
    async editItem(id) {
      this.isEdit = true
      this.items.forEach(item => {
        if(item.id == id) {
          this.itemName = item.name
          this.itemCost = item.cost
          this.itemIdToUpdate = item.id
        }
      })
    },
    async updateItem() {
      let newItemToUpdate = {
        id: this.itemIdToUpdate,
        name: this.itemName,
        cost: this.itemCost
      }
      let foundIndex = this.items.findIndex(item => item.id == this.itemIdToUpdate)

      let costDifference = (newItemToUpdate.cost - this.items[foundIndex].cost)
      this.totalItemizedBudget += costDifference

      this.items[foundIndex] = newItemToUpdate
      this.cancel()
    },
    async cancel() {
      this.isEdit = false
      this.itemName = '',
      this.itemCost = Number
    }
  }
}
</script>

<style scoped>

table {
  margin: auto;
}

td {
  width: 30%;
}

div {
  margin: auto;
  text-align: center;
  border: 1px solid black;
  width: 50%;
}
</style>

