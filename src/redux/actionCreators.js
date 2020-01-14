"use strict";
exports.__esModule = true;
var actions_1 = require("./actions");
var loadFirstData = function (data) {
    return {
        type: actions_1.LOAD_FIRST_DATA,
        amount: data
    };
};
exports.loadFirstData = loadFirstData;
var changeBallValueFirst = function (left) {
    return {
        type: actions_1.CHANGE_BALL_VALUE_FIRST,
        amount: left
    };
};
exports.changeBallValueFirst = changeBallValueFirst;
var changeBallValueSecond = function (right) {
    return {
        type: actions_1.CHANGE_BALL_VALUE_SECOND,
        amount: right
    };
};
exports.changeBallValueSecond = changeBallValueSecond;
var changeMin = function (min) {
    return {
        type: actions_1.CHANGE_MIN,
        amount: min
    };
};
exports.changeMin = changeMin;
var changeMax = function (max) {
    return {
        type: actions_1.CHANGE_MAX,
        amount: max
    };
};
exports.changeMax = changeMax;
var changeValueFirst = function (value) {
    return {
        type: actions_1.CHANGE_VALUE_FIRST,
        amount: value
    };
};
exports.changeValueFirst = changeValueFirst;
var changeValueSecond = function (value) {
    return {
        type: actions_1.CHANGE_VALUE_SECOND,
        amount: value
    };
};
exports.changeValueSecond = changeValueSecond;
var disableRunnersValues = function () {
    return {
        type: actions_1.DISABLE_RUNNERS_VALUES
    };
};
exports.disableRunnersValues = disableRunnersValues;
var toggleVerticalPosition = function () {
    return {
        type: actions_1.TOGGLE_VERTICAL_POSITION
    };
};
exports.toggleVerticalPosition = toggleVerticalPosition;
var enableOneRunner = function (enable) {
    return {
        type: actions_1.ENABLE_ONE_RUNNER,
        amount: enable
    };
};
exports.enableOneRunner = enableOneRunner;
var changeStep = function (step) {
    return {
        type: actions_1.CHANGE_STEP,
        amount: step
    };
};
exports.changeStep = changeStep;