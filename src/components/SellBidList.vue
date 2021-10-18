<template>
   <v-card class="d-flex flex-column" height="100%">
    <v-card-subtitle>Making bid:</v-card-subtitle>
    <v-card-text class="makebid">
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
      <div>A</div>
    </v-card-text>
    <v-card-actions>
      <v-btn-toggle
        class="d-flex justify-space-between w-100"
        width="100%"
        style="width:100%"
      >
        <v-btn color="red lighten-2" @click="reserve">
          Buy Order
        </v-btn>
        <v-btn color="green lighten-2" @click="reserve">
          Sell order
        </v-btn>
      </v-btn-toggle>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  components: {},
  name: "SellBidList",

  data() {
    return {};
  },
};
</script>
<style scoped>
.makebid {
  background: blue;
  color: white;
  height: 100%;
  overflow: scroll;
}
</style>
