<template>
    <HelloWorld/>
</template>

<script>
const HelloWorld = () =>
  import(/* webpackChunkName: "HelloWorld" */ "@/components/HelloWorld");

export default {
  components: {
    HelloWorld
  }
};
</script>
