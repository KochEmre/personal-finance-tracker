import * as actionTypes from "./actionTypes"

export function addBudget(budget){
    return {type: actionTypes.ADD_BUDGET, payload:budget}
}

export function updateBudget(budget){
    return {type: actionTypes.UPDATE_BUDGET, payload:budget}
}

export function deleteBudget(budget){
    return {type: actionTypes.DELETE_BUDGET, payload:budget}
}