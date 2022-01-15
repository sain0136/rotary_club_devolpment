<template>
  <div class="outer">
    <form onsubmit="event.preventDefault();">  
      <ProjectExchangeRateSection 
        v-if="!isExchangeRateSubmitted"
        @approveExchangeRate = 'updateExchangeRate'
      />
      <div v-else>
        <legend>Application Budget Details</legend> <br> <br>
        <table>
          <th>Budget Item</th>
          <th>Supplier/Vendor</th>
          <th>Amount in <br> Local Currency</th>
          <th>Amount in <br> US/CAD</th>
          <th>Action</th>
          <tr
            v-for="item in items"
            :key="item.id">
            <!-- <td>{{link.url_type}}</td> -->
            <td>{{item.name}}</td>
            <td>{{item.supplier}}</td>
            <td>{{item.cost}}</td>
            <td>{{item.costInDollars}}</td>
            <td>
              <button @click="editItem(item.id)">Edit</button>
              <button @click="deleteItem(item.id)">Delete</button>
            </td>
          </tr>
        </table>
        <br> <br>
        <legend v-if="!isEdit">Add an item</legend>
        <legend v-else>Edit Item</legend>
        <div class="form-field">
          <span 
            class="error"
            v-if="this.v$.itemName.$error">
            Please enter an item name
          </span> <br> <br>
          <input 
            type="text"
            placeholder="Item Name"
            v-model="itemName">
        </div> <br>
        <div class="form-field">
          <span 
            class="error"
            v-if="this.v$.supplierName.$error">
            Please enter a supplier name
          </span> <br>
          <input 
            type="text"
            placeholder="Supplier Name"
            v-model="supplierName">
        </div> <br>
        <div class="form-field">
          <span 
            class="error"
            v-if="this.v$.itemCost.$error">
            Please enter an item cost
          </span> <br>
          <input 
            type="number"
            placeholder="Item Cost"
            v-model="itemCost">
        </div> <br>
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
        <h4>Total Budget ({{this.localCurrencyName}}): {{ this.totalBudget }}</h4>
        <h4>Total Budget ($): {{ this.totalBudgetInDollars }}</h4>
        <button @click="approveBudget">Submit</button> <br> <br>
      </div>
    </form>
    
  </div>
</template>

<script>

import useValidate from '@vuelidate/core'
import { required } from '@vuelidate/validators'

import ProjectExchangeRateSection from '../../project-forms/matching/ProjectExchangeRateSection.vue'

export default {
  name: 'ProjectBudgetMatching',
  components: {
    ProjectExchangeRateSection
  },
  data() {
    return {

      v$: useValidate(),

      items: [],

      isExchangeRateSubmitted: false,

      //pre variables
      localCurrencyName: '',
      exchangeRate: 0,
      dateEntered: '',

      //item variables
      itemName: '',
      supplierName: '',
      itemCost: Number,

      isEdit: false,

      itemIdToUpdate: '',

      totalBudget: 0,
    }
  },
  computed: {
    itemCostInDollars() {
      return this.itemCost * this.exchangeRate
    },
    totalBudgetInDollars() {
      return this.totalBudget * this.exchangeRate
    }
  },
  validations() {
    return {
      itemName: {required},
      supplierName: {required},
      itemCost: {required}
    }
  },
  async created() {

  },
  methods: {
    //triggered on emit from the child component
    updateExchangeRate(data) {
      this.isExchangeRateSubmitted = true
      this.localCurrencyName = data.localCurrencyName
      this.exchangeRate = data.exchangeRate
      this.dateEntered = data.dateEntered
    },

    validateItem() {

      this.v$.$validate()

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
        supplier: this.supplierName,
        cost: this.itemCost,
        costInDollars: this.itemCostInDollars
      }

      this.totalBudget += this.itemCost

      this.items.push(newItemToAdd)
      this.clean()
    },
    
    deleteItem(id) {
      //finding the item to delete
      const itemToDelete = this.items.find(item => item.id == id) 
      this.totalBudget -= itemToDelete.cost
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
          this.supplierName = item.supplier
          this.itemCost = item.cost
          this.itemIdToUpdate = item.id
        }
      })
    },
    
    updateItem() {
      const newItemToUpdate = {
        id: this.itemIdToUpdate,
        name: this.itemName,
        supplier: this.supplierName,
        cost: this.itemCost,
        costInDollars: this.itemCostInDollars
      }

      const itemToUpdateIndex = this.items.findIndex(item => item.id == this.itemIdToUpdate)

      const costDifference = (newItemToUpdate.cost - 
                              this.items[itemToUpdateIndex].cost)
      this.totalBudget += costDifference

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
      this.itemName = ''
      this.supplierName = ''
      this.itemCost = Number
    },

    //Triggered from the parent form component
    approveBudget() {
      this.$emit('approveBudget', {budget: this.totalBudgetInDollars, items: this.items})
    },
  }
}
</script>

<style scoped>

table {
  margin: auto;
}

td {
  width: 20%;
}

.outer {
  margin: auto;
  text-align: center;
  border: 1px solid black;
  width: 50%;
}

.error {
  color: red;
}

</style>

