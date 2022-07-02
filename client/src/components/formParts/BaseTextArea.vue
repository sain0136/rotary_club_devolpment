<template>
  <label>{{ label }}</label>
  <textarea
    cols="5"
    rows="5"
    v-bind="$attrs"
    :placeholder="label"
    :value="modelValue"
    @input="
      $emit(
        'update:modelValue',
        $event.target.value,
      )
    "
  >
  </textarea>

  <span
    id="titleHelpInline"
    class="form-text"
    v-bind="$attrs"
  >
    {{ span }}
  </span>
</template>

<script>
export default {
  props: {
    span: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
}
</script>

<style scoped>
label {
  font-weight: 700;
  font-family: 'Lato', sans-serif;
  font-size: 1em;
  color: #777777;
  line-height: 1.8em;
  flex-grow: 1;
  align-self: center;
  text-align: end;
  width: 33.33333%;
  padding-right: 1em;
  padding-left: 1em;
}
span {
  flex-grow: 1;
  width: 11.666666%;
  align-self: center;
  padding-left: 0.5em;
}

textarea {
  flex-grow: 2;
  width: 56.66666%;
  border: solid black;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px
    rgb(0 0 0 / 8%);
  transition: border-color ease-in-out
      0.15s,
    box-shadow ease-in-out 0.15s;
  font-family: 'Lato', sans-serif;
  margin-bottom: 0.5rem;
}
</style>
