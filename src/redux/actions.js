export const addTodo = (data) => {
    return {
        type: 'todoList/addTodo',
        payload: data
    }
}
export const toggleStatusTodo = (todoId) => {
    return {
        type: 'todoList/toggleStatusTodo',
        payload : todoId
    }
}



export const searchFilterChange = (text) => {
    return {
        type: 'filters/searchFilterChange',
        payload: text
    }
}

export const statusFilterChange = (status) => {
    return {
        type: 'filters/statusFilterChange',
        payload: status
    }
}
export const priorityFilterChange = (priority) => {
    return {
        type: 'filters/prioritiesFilterChange',
        payload: priority
    }
}

