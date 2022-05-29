<template>
  <div>
    <input
      type="checkbox"
      :checked="modelValue"
      @change="
        $emit(
          'update:modelValue',
          $event.target.checked,
        )
      "
      class="field"
    />
    <label v-if="label">{{
      label
    }}</label>
    </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: row;
  align-items: center;
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  line-height: 1.8em;
  color: #777777;
}
label{
  padding-left: .4rem;
}

</style>
