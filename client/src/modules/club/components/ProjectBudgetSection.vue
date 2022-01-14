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
    <legend v-if="!isEdit">Add an item</legend>
    <legend v-else>Edit Item</legend>
    <span 
      class="error"
      v-if="this.v$.itemName.$error">
      Please enter an item name
    </span> <br> <br>
    <input 
      type="text"
      placeholder="Item Name"
      v-model="itemName"> <br> <br>
    <span 
      class="error"
      v-if="this.v$.itemCost.$error">
      Please enter an item cost
    </span> <br>
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
      @click="validateItem">
      Add
    </button> <br> <br> <br>
    <h4>Total Budget: {{ this.totalItemizedBudget }}</h4>
    <button @click="approveBudget">Submit</button> <br> <br>
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

export default {
  name: 'ProjectBudgetSection',
  data() {
    return {

      v$: useValidate(),

      items: [],

      itemName: null,
      itemCost: null,

      isEdit: false,

      itemIdToUpdate: '',

      totalItemizedBudget: 0,
    }
  },
  validations() {
    return {
      itemName: {required},
      itemCost: {required}
    }
  },
  async created() {

  },
  methods: {

    validateItem() {

      this.v$.$validate()
      console.log(this.itemName)

      if(!this.v$.$error) {
        if(this.isEdit) {
          this.updateItem()
        } else {
          this.createItem()
        }
      }
    },

    createItem() {
      const newItemToAdd = {
        id: Date.now(), //unique id
        name: this.itemName,
        cost: this.itemCost
      }

      this.totalItemizedBudget += this.itemCost

      this.items.push(newItemToAdd)
      this.clean()
    },
    
    deleteItem(id) {
      //finding the item to delete
      const itemToDelete = this.items.find(item => item.id == id) 
      this.totalItemizedBudget -= itemToDelete.cost
      //filtering out the array with the item found
      this.items = this.items.filter(item => item.id != id)
    },

    /**
     * This method prepares the component for the update
     * by populating the fields and changing the button
     * from create to update
     */
    editItem(id) {
      this.isEdit = true
      this.items.forEach(item => {
        if(item.id == id) {
          this.itemName = item.name
          this.itemCost = item.cost
          this.itemIdToUpdate = item.id
        }
      })
    },
    
    updateItem() {
      const newItemToUpdate = {
        id: this.itemIdToUpdate,
        name: this.itemName,
        cost: this.itemCost
      }

      const itemToUpdateIndex = this.items.findIndex(item => item.id == this.itemIdToUpdate)

      const costDifference = (newItemToUpdate.cost - 
                              this.items[itemToUpdateIndex].cost)
      this.totalItemizedBudget += costDifference

      /**
       * old item is replaced with the new one 
       * that's been created upon the old item's 
       * updated data
       */
      this.items[itemToUpdateIndex] = newItemToUpdate
      this.cancel()
    },

    cancel() {
      this.isEdit = false
      this.clean()
    },

    clean() {
      this.itemName = '',
      this.itemCost = Number
    },

    //Triggered from the parent form component
    approveBudget() {
      this.$emit('approveBudget', {budget: this.totalItemizedBudget, items: this.items})
    },
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

.error {
  color: red;
}

</style>

