const initialState = {
    tasks: [],
    showTasks: [],
    taskDate: '',
    taskEntry: '',
    successMsg: '',
    errorMsg: ''
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case 'BEFORE_ADD':
            return {...state, successMsg: '', errorMsg: '' }
        
        case 'ADD_TASK':
            const isExist = state.tasks.find(task => task.task.toLowerCase() === state.taskEntry.toLowerCase());
            if (isExist) {
                return {...state, successMsg: '', errorMsg: 'Error: Task Already Exist!'}
            } else {
                return {
                    ...state,
                    tasks: [...state.tasks, action.payload],
                    taskDate: '',
                    taskEntry: '',
                    successMsg: state.taskEntry,
                    errorMsg: ''
                }
            }
        
        case 'BIND_DATE_ENTRY':
            return { ...state, taskDate: action.payload, successMsg: '', errorMsg: '' }
            
        case 'BIND_TASK_ENTRY':
            return { ...state, taskEntry: action.payload, successMsg: '', errorMsg: '' }
        
        case 'SET_ERROR':
            return { ...state, successMsg: '', errorMsg: action.payload }

        case 'SET_SUCCESS':
            return { ...state, successMsg: action.payload, errorMsg: ''}
        
        case 'SET_DISPLAY':
            return { 
                ...state, 
                showTasks: [
                    ...state.tasks
                    .filter(task => task.status === action.payload)
                    .sort((a, b) => a.date > b.date ? 1 : -1)                
                ] 
            }
        
        case 'DONE':
            const newTasks = [...state.tasks.map(task => {
                if (task.id === action.payload){
                    return {...task, status: 'done'}
                }else{
                    return task;
                }
            })];

            return { ...state, tasks: newTasks }
        
        case 'DELETE':
            return { ...state, tasks: [...state.tasks.filter(task => task.id !== action.payload)] }
        
        default:
            return state;
    }
}

export default reducer;