<template>
  <v-list-item

    :key="item.title"
    link
    :to="item.to"
    active-class="primary"
    class="py-1"
  >
    <!--:to="item.to"  해당 속성을 넣어준다 이해는 안됨..ㅋㅋ..-->
    <v-list-item-icon>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-item-icon>

    <v-list-item-content>
      <v-list-item-title>{{ item.title }}</v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
    name: 'DefaultListItem',
    props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}

</script>

<style>

</style>
