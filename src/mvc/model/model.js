"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var loadFirstData = function (data) { return ({ type: 'LOAD_FIRST_DATA', amount: data }); };
var changeBallValueFirst = function (left) { return ({ type: 'CHANGE_BALL_VALUE_FIRST', amount: left }); };
var changeBallValueSecond = function (right) { return ({ type: 'CHANGE_BALL_VALUE_SECOND', amount: right }); };
var changeState = function (props) { return ({ type: 'CHANGE_STATE', amount: props }); };
var calcLeftRight = function (state, value, min, max, widthScale) { return (value - min) * widthScale / (max - min) - state.ballWidth / 2; };
var widthStep = function (state) { return state.step * state.widthScale / (state.max - state.min); };
var calcValue = function (state, leftOrRight) { return Math.round((+leftOrRight + +state.ballWidth / 2) * (state.max - state.min) / state.widthScale + +state.min); };
var Model = /** @class */ (function () {
    function Model() {
        var _this = this;
        this.createStore = function (reducer) {
            var state;
            var callbacks = [];
            var getState = function () { return state; };
            var dispatch = function (action) {
                state = reducer(action, state);
                callbacks.forEach(function (callback) { return callback(); });
            };
            var subscribe = function (callback) {
                callbacks.push(callback);
                return callbacks.filter(function (cb) { return cb !== callback; });
            };
            return { getState: getState, dispatch: dispatch, subscribe: subscribe };
        };
        this.reducer = function (action, state) {
            switch (action.type) {
                case 'LOAD_FIRST_DATA':
                    return __assign(__assign(__assign({}, state), action.amount), { left: action.amount.oneRunner ? -action.amount.ballWidth / 2 : calcLeftRight(action.amount, action.amount.value1, action.amount.min, action.amount.max, action.amount.widthScale), right: calcLeftRight(action.amount, action.amount.value2, action.amount.min, action.amount.max, action.amount.widthScale) });
                case 'CHANGE_BALL_VALUE_FIRST':
                    if (action.amount <= 0 - state.ballWidth / 2) {
                        action.amount = 0 - state.ballWidth / 2;
                    }
                    if (action.amount >= state.right - widthStep(state)) {
                        action.amount = state.right - widthStep(state);
                    }
                    return __assign(__assign({}, state), { left: action.amount, value1: calcValue(state, action.amount) });
                case 'CHANGE_BALL_VALUE_SECOND':
                    if (action.amount >= state.widthScale - state.ballWidth / 2) {
                        action.amount = state.widthScale - state.ballWidth / 2;
                    }
                    // tslint:disable-next-line:block-spacing
                    if (action.amount <= state.left) {
                        action.amount = state.left;
                    }
                    return __assign(__assign({}, state), { right: action.amount, value2: calcValue(state, action.amount) });
                case 'CHANGE_STATE':
                    // tslint:disable-next-line:prefer-const
                    var _a = action.amount, value1 = _a.value1, value2 = _a.value2, min = _a.min, max = _a.max, step = _a.step, disableValues = _a.disableValues, vertical = _a.vertical, oneRunner = _a.oneRunner;
                    step = Number(step) <= 0 ? state.step : step;
                    step = Number(step) >= Number(max) ? state.step : step;
                    value1 = value1 || state.value1;
                    value2 = value2 || state.value2;
                    var widthScale = state.widthScale;
                    if (vertical !== state.vertical && vertical === true)
                        widthScale = widthScale / 3;
                    if (vertical !== state.vertical && vertical === false)
                        widthScale = widthScale * 3;
                    var left = state.left;
                    var right = state.right;
                    if (Number(value1) >= value2 - step || Number(value1) < Number(min))
                        value1 = state.value1;
                    if (Number(value2) <= Number(value1) + Number(step) || Number(value2) > Number(max))
                        value2 = state.value2;
                    if (Number(min) >= Number(max) + Number(step))
                        min = state.min;
                    value1 = (Number(min) >= Number(value1)) ? min : value1;
                    if (Number(min) > Number(value2)) {
                        value1 = min;
                        value2 = Number(min) + Number(step);
                    }
                    if (Number(max) <= Number(min) + Number(step))
                        max = state.max;
                    value2 = (Number(max) <= Number(value2)) ? max : value2;
                    if (Number(max) <= Number(value1)) {
                        value2 = max;
                        value1 = max - step;
                    }
                    if (min !== state.min || max !== state.max || vertical !== state.vertical || value1 !== state.value1 ||
                        value2 !== state.value2) {
                        left = calcLeftRight(state, value1, min, max, widthScale);
                        right = calcLeftRight(state, value2, min, max, widthScale);
                    }
                    return __assign(__assign({}, state), { min: min,
                        max: max,
                        disableValues: disableValues,
                        vertical: vertical,
                        oneRunner: oneRunner,
                        step: step, value1: oneRunner ? min : value1, 
                        // tslint:disable-next-line:object-shorthand-properties-first
                        value2: value2, left: oneRunner ? -state.ballWidth / 2 : left, 
                        // tslint:disable-next-line:object-shorthand-properties-first
                        right: right,
                        // tslint:disable-next-line:object-shorthand-properties-first
                        widthScale: widthScale });
                default:
                    return state;
            }
        };
        this.sendDataFromControllerToModel = function (options) { return _this.store.dispatch(loadFirstData(options)); };
        this.subscribe = function (render) { return _this.store.subscribe(function () { return render(_this.store.getState()); }); };
        this.dispatchBallValueFirst = function (left) { return _this.store.dispatch(changeBallValueFirst(left)); };
        this.dispatchBallValueSecond = function (right) { return _this.store.dispatch(changeBallValueSecond(right)); };
        this.dispatchState = function (options) { return _this.store.dispatch(changeState(options)); };
        this.store = this.createStore(this.reducer);
    }
    return Model;
}());
exports["default"] = Model;
