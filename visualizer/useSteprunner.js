import {useState} from "react";
import {STEP_TYPES} from "../engine/steps.js";
export function useSteprunner(steps) {
    const [array,setArray]=useState([...initialArray]);
    const [activeindices,setactiveIndices]=useState([]);
    const [finalindices,setfinalIndices]=useState([]);
    const [stepIndex,setStepIndex]=useState(0);
        function runnextStep(){

        }
    return{
        array, activeindices, finalindices, runnextStep,
    };
}