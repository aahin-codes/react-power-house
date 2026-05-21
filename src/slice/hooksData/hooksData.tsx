import type { IconType } from "react-icons";

type HookData = {
    hookName: string;
    shortDescription: string;
    description: string;
    parameters: {
        headers: string[]
        rows: string[][]
    },
    returnValues: {
        headers: string[]
        rows: string[][]
    },
    example: {
        code: string,
        language: string
    },
    label?: string;
    labelColor?: string;
    icon?: IconType
}
export const hooksData: HookData[] = [
    {
        hookName: "useState",
        shortDescription: "Adds reactive local state to a functional component.",
        description: "useState is the most fundamental React hook. It lets you declare a state variable and a function to update it. Every time the state updates, React re-renders the component with the new value. It replaces this.state and this.setState from class components, keeping state logic clean and local.",
        parameters: {
            headers: ["Parameter", "Type", "Description"],
            rows: [["initialState", "any", "The initial value of the state variable. Can be a primitive, object, array, or a lazy initializer function."]]
        },
        returnValues: {
            headers: ["Value", "Type", "Description"],
            rows: [["state", "any", "The current state value, updated after every re-render."], ["setState", "function", "A dispatch function to update the state and trigger a re-render."]]
        },
        example: {
            code: `
import { useState } from "react";

// fn component 
function libraryOfAahin(){
    const [value, setValue] = useState(0); // using initial value as 0

    // a normal function is used to increase value by one, when user click a button
    function increaseValueByOne(){
        console.log(value); //print old value
        setValue(value+1); //increased value by one
    }

    return (<div>
        <button onClick=(increaseValueByOne)>Click!!!</button>
    </div>)

}
            `,
            language: "jsx"
        },
        label: "Level 1",
        labelColor: "green"
    },
    {
        hookName: "useEffect",
        shortDescription: "Runs side effects after render — data fetching, subscriptions, DOM updates.",
        description: "useEffect lets you synchronize a component with an external system. It runs after every render by default, but the dependency array gives you precise control — run only on mount, only when specific values change, or always. The optional cleanup function handles teardown (clearing timers, unsubscribing, aborting fetches), preventing memory leaks.",
        parameters: {
            headers: ["Parameter", "Type", "Description"],
            rows: [["effect", "function", "The side-effect logic to run. Can return a cleanup function."], ["dependencies", "array (optional)", "Controls when the effect re-runs. Empty array = mount only. Omitted = every render."]]
        },
        returnValues: {
            headers: ["Value", "Type", "Description"],
            rows: [["cleanup", "function (optional)", "Returned from the effect itself. Runs before the next effect or on unmount."]]
        },
        example: {
            code: "",
            language: "jsx"
        },
        label: "Level 1",
        labelColor: "green"
    }, {
        hookName: "useRef",
        shortDescription: "Holds a mutable value that persists across renders without triggering a re-render.",
        description: "useRef returns a mutable ref object whose .current property is initialized with the passed value. Unlike state, mutating .current does not cause a re-render. It has two main use cases — accessing DOM elements directly (like focusing an input or measuring layout), and storing any mutable value that needs to survive re-renders without affecting the UI (like a previous value, a timer ID, or an interval reference).",
        parameters: {
            headers: ["Parameter", "Type", "Description"],
            rows: [["initialValue", "any", "The initial value assigned to .current. Typically null for DOM refs."]]
        },
        returnValues: {
            headers: ["Value", "Type", "Description"],
            rows: [["ref", "object", "A plain object { current: initialValue } that persists for the full lifetime of the component."]]
        },
        example: {
            code: "",
            language: "jsx"
        },
        label: "Level 1",
        labelColor: "green"
    },
    {
        hookName: "useMemo",
        shortDescription: "Caches the result of an expensive calculation between renders.",
        description: "useMemo memoizes the return value of a function. React will only recompute it when one of the listed dependencies changes — on every other render, it returns the cached result. This is purely a performance optimization. It is most valuable when a calculation is genuinely expensive (heavy filtering, sorting large lists, complex math) or when the result is passed as a prop to a memoized child and referential equality matters. Avoid overusing it — wrapping cheap calculations adds overhead without benefit.",
        parameters: {
            headers: ["Parameter", "Type", "Description"],
            rows: [["calculateValue", "function", "A pure function with no arguments that returns the value to memoize."], ["dependencies", "array", "The values the calculation depends on. Recomputes only when these change."]]
        },
        returnValues: {
            headers: ["Value", "Type", "Description"],
            rows: [["cachedValue", "any", "The memoized result. Same reference across renders until dependencies change."]]
        },
        example: {
            code: "",
            language: "jsx"
        },
        label: "Level 1",
        labelColor: "green"
    },
    {
        hookName: "useCallback",
        shortDescription: "Caches a function definition so it doesn't get recreated on every render.",
        description: "useCallback returns a memoized version of a callback function. Without it, every render creates a brand-new function reference, which can cause child components to re-render unnecessarily (since the prop looks \"different\" even if the logic is identical). useCallback is the function counterpart to useMemo — think of it as useMemo that returns a function instead of a value. It's most useful when passing callbacks to optimized children wrapped in React.memo, or as a dependency in another hook like useEffect.",
        parameters: {
            headers: ["Parameter", "Type", "Description"],
            rows: [["fn", "function", "The function to memoize."], ["dependencies", "array", "The values the function depends on. A new function is created only when these change."]]
        },
        returnValues: {
            headers: ["Value", "Type", "Description"],
            rows: [["cachedFn", "function", "The memoized function. Same reference across renders until dependencies change."]]
        },
        example: {
            code: "",
            language: "jsx"
        },
        label: "Level 1",
        labelColor: "green"
    },
    {
        hookName: "useReducer",
        shortDescription: "Manages complex state logic through a reducer function, like a lightweight Redux.",
        description: "useReducer is an alternative to useState for managing state that involves multiple sub-values or when the next state depends on the previous one in non-trivial ways. You define a reducer — a pure function that takes the current state and an action, and returns the next state. You then dispatch named actions from your component instead of setting values directly. This pattern separates what happened (the action) from how state changes (the reducer), making complex state transitions predictable, testable, and easy to read.",
        parameters: {
            headers: ["Parameter", "Type", "Description"],
            rows: [["reducer", "function", "A pure function (state, action) => newState that defines all state transitions."], ["initialState", "any", "The initial state value passed to the reducer on first render."], ["init", "function (optional)", "A lazy initializer function. Receives initialState and returns the actual starting state."]]
        },
        returnValues: {
            headers: ["Value", "Type", "Description"],
            rows: [["state", "any", "The current state value returned by the reducer."], ["dispatch", "function", "A function to send an action object to the reducer and trigger a re-render."]]
        },
        example: {
            code: "",
            language: "jsx"
        },
        label: "Level 1",
        labelColor: "green"
    }
]