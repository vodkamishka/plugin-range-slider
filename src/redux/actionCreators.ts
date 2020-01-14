import {
    LOAD_FIRST_DATA,
    CHANGE_BALL_VALUE_FIRST,
    CHANGE_BALL_VALUE_SECOND,
    CHANGE_MIN,
    CHANGE_MAX,
    CHANGE_VALUE_FIRST,
    CHANGE_VALUE_SECOND,
    DISABLE_RUNNERS_VALUES,
    TOGGLE_VERTICAL_POSITION,
    ENABLE_ONE_RUNNER,
    CHANGE_STEP,
} from './actions';

const loadFirstData = (data:any) => {
    return {
        type: LOAD_FIRST_DATA,
        amount: data
    }
}

const changeBallValueFirst = (left: string) => {
    return {
        type: CHANGE_BALL_VALUE_FIRST,
        amount: left
    }
}

const changeBallValueSecond = (right: string) => {
    return {
        type: CHANGE_BALL_VALUE_SECOND,
        amount: right
    }
}

const changeMin = (min: string) => {
    return {
        type: CHANGE_MIN,
        amount: min
    }
}

const changeMax = (max: string) => {
    return {
        type: CHANGE_MAX,
        amount: max
    }
}

const changeValueFirst = (value: string) => {
    return {
        type: CHANGE_VALUE_FIRST,
        amount: value
    }
}

const changeValueSecond = (value: string) => {
    return {
        type: CHANGE_VALUE_SECOND,
        amount: value
    }
}

const disableRunnersValues = () => {
    return {
        type: DISABLE_RUNNERS_VALUES
    }
}

const toggleVerticalPosition = () => {
    return {
        type: TOGGLE_VERTICAL_POSITION
    }
}

const enableOneRunner = (enable: boolean) => {
    return {
        type: ENABLE_ONE_RUNNER,
        amount: enable
    }
}

const changeStep = (step: string) => {
    return {
        type: CHANGE_STEP,
        amount: step
    }
}

export {
    loadFirstData,
    changeBallValueFirst,
    changeBallValueSecond,
    changeMin,
    changeMax,
    changeValueFirst,
    changeValueSecond,
    disableRunnersValues,
    toggleVerticalPosition,
    enableOneRunner,
    changeStep 
}