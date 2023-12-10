<template>
  <v-container>
    <v-row class="align-content-center justify-center">
      <v-col cols="auto">
        <h1 class="mb-4">hello world</h1>
        <div class="mx-auto">
          <v-btn :to="{
          name: 'Form'
          }">test</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
</script>

<style>

</style>
