# Vue SimplestHuePicker

A component to add a radial colopicker as a Vue component inside your Vue.js application

## Install
```npm
npm install --save vue-simplest-hue-radial-picker
```

## Demo
Here is the codesandbox [demo](https://codesandbox.io/s/4624pn109)

## Usage

Add the component in your vue template
```html
<template>
  <div>
        <simplest-hue-picker v-model="color"></simplest-hue-picker>
  </div>
</template>
```
import the component in your vue script
```javascript
<script>
import SimplestHuePicker from "vue-simplest-hue-radial-picker";
export default {
  name: "parent-component",
  components: { SimplestHuePicker },
  data() {
    return {
      color: {
        hue: 0
      }
    };
  }
};
</script>
```
 `color.hue` will contain the picker value (from 0 to 360)


