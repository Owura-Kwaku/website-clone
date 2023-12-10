<script setup lang="ts">

import {computed, onMounted, reactive} from "vue";
import {useAppStore} from "@/store/app";
import {buildQueryParams} from "@/utils";

const appStore = useAppStore();

const data = reactive({
  filters: { page: 1, pageSize: 10 },
  headers: [
    {
      align: 'start',
      key: 'id',
      sortable: false,
      title: 'ID',
    },
    {
      key: 'title',
      title: 'Title'
    }
  ]
})

const todoList = computed(() => appStore.todos);
const pageCount = computed(() => {
  return Math.ceil(todoList.value.length / data.filters.pageSize)
});
const currentPageData = computed(() => {
  const startIndex =
      data.filters.page * data.filters.pageSize -
      data.filters.pageSize;
  const endIndex = startIndex + data.filters.pageSize;

  return todoList.value.slice(startIndex, endIndex);
});

onMounted(async () => {
  await appStore.getTodos(buildQueryParams(data.filters))
})
</script>

<template>
  <v-container class="mt-4">
    <v-row class="justify-space-between">
      <v-col cols="auto">
        <h1>form page</h1>
      </v-col>
      <v-col cols="auto">
        <v-btn :to="{
          name: 'Home'
          }"> back</v-btn>
      </v-col>
    </v-row>

    <v-row class="justify-space-around">
      <v-col cols="auto">
        <v-table>
          <thead>
          <tr>
            <th class="text-left">
              ID
            </th>
            <th class="text-left">
              Title
            </th>
          </tr>
          </thead>
          <tbody v-if="currentPageData.length">
          <tr
              v-for="item in currentPageData"
              :key="item.id"
          >
            <td>{{ item.id }}</td>
            <td>{{ item.title }}</td>
          </tr>
          </tbody>
          <template v-slot:bottom>
            <div class="text-center pt-2">
              <v-pagination
                  v-model="data.filters.page"
                  :length="pageCount"
              ></v-pagination>
            </div>
          </template>
        </v-table>
      </v-col>
    </v-row>
  </v-container>
  </template>

<style scoped>

</style>
