<template>
  <v-layout fill-height>
    <v-fade-transition mode="out-in">
      <slot/>
    </v-fade-transition>
  </v-layout>
</template>

<script>
export default {
    data: () => ({}),
};
</script>
