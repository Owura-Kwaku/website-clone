// Utilities
import { defineStore } from 'pinia'
import type {Todo} from "@/types/todo";
import {getAllResources, getResource} from "@/services/todos";

export const useAppStore = defineStore('app', {
  state: () => ({
    todos: []  as Todo[],
    todo: {} as Todo
  }),

  actions: {
    async getTodos (queryParams: string[]) {
      const response = await getAllResources(queryParams)
      this.todos = response.data;
    },
    async getTodo (postId: number) {
      const response = await getResource(postId)
      this.todo = response.data;
    },
  }
})
