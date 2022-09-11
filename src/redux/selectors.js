import { createSelector } from "@reduxjs/toolkit";

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritySelector = (state) => state.filters.priorities;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritySelector,
  (todoList, searchText, filterStatus, filterPriority) => {
    const todosRemaining = todoList.filter((todo) => {
      if (filterStatus === "All") {
        return filterPriority.length
          ? todo.name.includes(searchText) && filterPriority.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (filterStatus === "Completed" ? todo.completed : !todo.completed) && 
        (filterPriority.length ? filterPriority.includes(todo.priority) : true)
      );
    });
    return todosRemaining;
  }
);
