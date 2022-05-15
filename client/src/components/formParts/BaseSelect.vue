<template>
   <label v-if="label">{{ label }}</label>
  <select
    :value="modelValue"
    class="field"
    v-bind="{
        ...$attrs,
    onChange:($event)=> {$emit('update:modelValue',$event.target.value)}
    }"
  >
    <option
      v-for="option in options"
      :value="option"
      :key="option"
      :selected="option === modelValue"
    >{{ option }}</option>
  </select>
  
    <span
      id="titleHelpInline"
      class="form-text"
        v-bind="$attrs"

    >
      {{span}}
    </span>
</template>

<script>
export default {
  props: {
          span:{
      type: String,
      default:''
    }
    ,
    label: {
      type: String,
      default: ''
    },
    modelValue: {
      type: [String, Number],
      default: ''
    },
    options:{
      type:Array,
      required:true  
    }
  }
}
</script>

<style scoped>
label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 5px;
    font-weight: 700;
    font-family: 'Lato', sans-serif;
    font-size: 15px;
    color: #777777;
    line-height: 1.8em;
    position: relative;
    min-height: 1px;
    padding-right: 15px;
    padding-left: 15px;
    width: 33.33333333%;
    text-align: right;
    
}
@media (min-width: 768px)
{label{
    padding-top: 7px;
    margin-bottom: 0;
    text-align: right;
}}
select{
      width: 33.33333333%;
    max-width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
        box-shadow: inset 0 1px 1px rgb(0 0 0 / 8%);
transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    font-family: 'Lato', sans-serif;

}
span{
  text-align: left;
    width: 33.33333333%;
        padding-top: 0.5em;
    margin-left: 1em;
}
</style>