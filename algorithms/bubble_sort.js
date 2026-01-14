import { STEP_TYPES } from "../engine/steps";
export function bubbleSort(inputArray) {
    const arr = [...inputArray];
    const steps = [];
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            steps.push({ type: STEP_TYPES.COMPARE, indices: [j, j + 1] });
            if (arr[j]>arr[j+1]){
                steps.push({type:STEP_TYPES.SWAP,indices:[j,j+1]});
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
        steps.push({type:STEP_TYPES.MARK_FINAL,index:n-i-1});
    }
    return { steps };
}