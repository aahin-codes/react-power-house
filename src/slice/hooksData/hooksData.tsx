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
// Importing the hooks we need
import { useState } from 'react';

// Defining our component — a function that returns UI (must start with a capital letter)
function LibraryOfAahin() {

    // useState(0) creates a state variable called 'value', starting at 0
    // 'value'    → the current value we can read
    // 'setValue' → the function we call to update that value
    const [value, setValue] = useState(0);

    // This function runs every time the button is clicked
    function increaseValueByOne() {

        // Logs the current value to the browser console (helpful for learning/debugging)
        console.log(value);

        // Updates the value by 1
        // We use 'prevValue' (the latest state) instead of 'value' directly
        // This avoids bugs when multiple updates happen at the same time
        setValue(prevValue => prevValue + 1);
    }

    // The UI this component displays on screen
    return (
        <div>
            {/* When the button is clicked, it calls increaseValueByOne */}
            <button onClick={increaseValueByOne}>Click!!!</button>

            {/* Displays the current value — updates automatically when state changes */}
            <p>Current Value: {value}</p>
        </div>
    );
}

// Exports this component so other files can import and use it
export default LibraryOfAahin;
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
            code: `
// Importing the hooks we need
import { useState, useEffect } from 'react';

// Defining our component (must start with a capital letter)
function LibraryOfAahin() {

    const [value, setValue] = useState(0);

    // This function runs every time the button is clicked
    function increaseValueByOne() {

        console.log(value);
        setValue(prevValue => prevValue + 1);

    }

    // useEffect watches for changes and runs code when they happen
    // This one watches 'value' — so it runs every time value changes
    useEffect(() => {

        // This message appears in the console every time React re-renders
        // due to 'value' changing — great for seeing when re-renders happen
        console.log("useEffect ran — value is now:", value);

        return () => {
            console.log("Cleanup ran — value was:", value);
            // ↑ Notice this logs the OLD value before the new effect runs
            // This is because the cleanup remembers the value from its own run
        };

    }, [value]);
    // ↑ This is the dependency array
    // → Empty []        means run only once on first load
    // → [value]         means run every time 'value' changes
    // → No []           means run on every single render

    // The UI this component shows on screen
    return (
        <div>
            {/* Clicking this button calls increaseValueByOne */}
            <button onClick={increaseValueByOne}>Click!!!</button>

            {/* Shows the current value — auto updates when state changes */}
            <p>Current Value: {value}</p>
        </div>
    );
}

// Exports this component so other files can import and use it
export default LibraryOfAahin;

            `,
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
            code: `
// Importing the hooks we need
import { useState, useEffect, useRef } from 'react';

function LibraryOfAahin() {

    // useState — tracks the current counter value (causes re-renders)
    const [value, setValue] = useState(0);

    // useRef — tracks how many times the button was clicked
    // POINT 1: useRef does NOT cause a re-render when it changes
    // POINT 2: useRef remembers its value between renders
    // 'renderCount.current' is how you READ and WRITE a ref value
    const clickCount = useRef(0);

    // useRef — used to directly access the paragraph DOM element
    // This is the SECOND common use case for useRef (grabbing HTML elements)
    const paragraphRef = useRef(null);
    // ↑ starts as null — React will fill it in when the component loads

    function increaseValueByOne() {

        // Updating the ref value directly — no setter function needed!
        // Unlike useState, we just directly change '.current'
        clickCount.current = clickCount.current + 1;

        // Logging both so beginners can see the difference
        console.log("Button clicked:", clickCount.current, "times");

        // Updates state — this WILL cause a re-render
        setValue(prevValue => prevValue + 1);
    }

    useEffect(() => {

        // Accessing the real DOM element using the ref
        // Just like document.querySelector() but the React way
        console.log("Paragraph DOM element:", paragraphRef.current);

        // Directly changing the DOM element's style using the ref
        // This highlights the paragraph briefly when value changes
        paragraphRef.current.style.color = "green";

        // CLEANUP — resets the color before next effect runs
        return () => {
            console.log("Cleanup — resetting paragraph color");
            paragraphRef.current.style.color = "black";
        };

    }, [value]);
    // ↑ runs every time value changes

    return (
        <div>
            {/* Button triggers the counter increase */}
            <button onClick={increaseValueByOne}>Click!!!</button>

            {/* 'ref={paragraphRef}' connects this element to our useRef */}
            {/* Now paragraphRef.current points directly to this <p> tag */}
            <p ref={paragraphRef}>Current Value: {value}</p>

            {/* 
                ⚠️ Important: clickCount.current is NOT shown here as state
                If you display it here, it won't auto-update on screen
                because useRef doesn't trigger re-renders!
                It only updates visually when useState causes a re-render
                
            */}
            <p>Button clicked: {clickCount.current} times</p>
        </div>
    );
}

export default LibraryOfAahin;
            `,
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
            code: `
// Importing the hooks we need
import { useState, useEffect, useRef, useMemo } from 'react';

function LibraryOfAahin() {

    // useState — tracks the counter value (causes re-renders)
    const [value, setValue] = useState(0);

    // useState — tracks a separate input (to show useMemo in action)
    const [name, setName] = useState("");

    // useRef — tracks how many times heavy calculation actually ran
    // Remember: useRef is silent — won't cause re-renders
    const calculationCount = useRef(0);

    // useMemo — remembers the RESULT of a calculation
    // Only re-calculates when 'value' changes
    // If 'name' changes — this is SKIPPED, returns saved result instead
    const heavyCalculation = useMemo(() => {

        // Tracking how many times this actually runs
        calculationCount.current = calculationCount.current + 1;
        console.log("Heavy calculation ran!", calculationCount.current, "times");

        // Simulating a heavy/slow calculation using the value
        // Imagine this is sorting 10000 items or processing big data
        let result = 0;
        for (let i = 0; i <= value * 1000; i++) {
            result += i;
        }

        // This result is REMEMBERED (memoized) until 'value' changes
        return result;

    }, [value]);
    // ↑ Dependency array — only re-calculate when 'value' changes
    //   If only 'name' changes, useMemo returns the SAVED result instantly


    useEffect(() => {

        // This runs every time value changes
        console.log("useEffect ran — value is now:", value);
        console.log("useMemo saved result:", heavyCalculation);

        return () => {
            console.log("🧹 Cleanup ran — value was:", value);
        };

    }, [value]);

    return (
        <div>
            <h2>useMemo Example</h2>

            {/* TYPE in the input — triggers re-render but NOT the heavy calculation */}
            {/* Watch the console — heavy calculation won't run when typing! */}
            <input
                type="text"
                value={name}
                placeholder="Type here — no heavy calc!"

                // onChange updates 'name' state on every keystroke
                // This causes a re-render BUT useMemo skips the calculation
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            {/* Clicking THIS button changes 'value' — triggers the heavy calculation */}
            <button onClick={() => setValue(prevValue => prevValue + 1)}>
                Increase Value (triggers calculation)
            </button>

            <br /><br />

            {/* Shows current value */}
            <p>Current Value: {value}</p>

            {/* Shows the memoized result — already calculated, just reading it */}
            <p>Heavy Calculation Result: {heavyCalculation}</p>

            {/* Shows how many times the heavy calculation actually ran */}
            {/* This is the KEY proof that useMemo is working! */}
            <p>Calculation ran: {calculationCount.current} times</p>

            {/* Shows current name — updates on every keystroke */}
            <p>Name: {name}</p>

        </div>
    );
}

export default LibraryOfAahin;
            `,
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
            code:`
// Importing the hooks we need
import { useState, useEffect, useRef, useMemo, useCallback } from 'react';

function LibraryOfAahin() {

    // useState — tracks the counter value (causes re-renders)
    const [value, setValue] = useState(0);

    // useState — tracks a separate input (to show useCallback in action)
    const [name, setName] = useState("");

    // useRef — tracks how many times the function was actually recreated
    // Remember: useRef is silent — won't cause re-renders
    const functionCreateCount = useRef(0);

    // useCallback — remembers the FUNCTION itself
    // Only recreates the function when 'value' changes
    // If 'name' changes — this is SKIPPED, returns saved function instead
    // This is the KEY difference from useMemo:
    // useMemo   remembers a RESULT
    // useCallback remembers a FUNCTION
    const increaseValueByOne = useCallback(() => {

        // Tracking how many times this function was actually recreated
        functionCreateCount.current = functionCreateCount.current + 1;
        console.log("Function recreated!", functionCreateCount.current, "times");

        // Safely increases value by 1 using the previous state
        setValue(prevValue => prevValue + 1);

    }, []);
    // Dependency array — empty means this function is created ONCE
    // and never recreated again, no matter how many re-renders happen


    // Without useCallback this function would be recreated on EVERY render
    // With useCallback it is saved and reused until dependencies change
    const handleNameChange = useCallback((e) => {

        console.log("handleNameChange called with:", e.target.value);

        // Updates name state on every keystroke
        setName(e.target.value);

    }, []);
    // Empty array — this function never needs to be recreated
    // because it does not depend on any state or prop


    useEffect(() => {

        // This runs every time value changes
        console.log("useEffect ran — value is now:", value);

        return () => {
            console.log("Cleanup ran — value was:", value);
        };

    }, [value]);


    // Simulating a child component receiving the function as a prop
    // In real apps, useCallback shines when passing functions to child components
    // Without useCallback — child re-renders every time because function is "new"
    // With useCallback — child skips re-render because function is "same"
    console.log("Parent component rendered");

    return (
        <div>
            <h2>useCallback Example</h2>

            {/* TYPE in the input — triggers re-render but NOT function recreation */}
            {/* Watch the console — function recreation count stays the same! */}
            <input
                type="text"
                value={name}
                placeholder="Type here — no function recreation!"

                // handleNameChange is memoized — same function reference every render
                onChange={handleNameChange}
            />

            <br /><br />

            {/* Clicking THIS button calls the memoized increaseValueByOne function */}
            <button onClick={increaseValueByOne}>
                Increase Value
            </button>

            <br /><br />

            {/* Shows current value */}
            <p>Current Value: {value}</p>

            {/* Shows how many times the function was actually recreated */}
            {/* This is the KEY proof that useCallback is working! */}
            <p>Function recreated: {functionCreateCount.current} times</p>

            {/* Shows current name — updates on every keystroke */}
            <p>Name: {name}</p>

        </div>
    );
}

export default LibraryOfAahin;
            `,
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
            code:`
// Importing the hooks we need
import { useState, useReducer, useEffect, useRef } from 'react';

// ACTION TYPES — plain strings that describe WHAT happened
// Storing them as constants avoids typos like "INCREMNT" instead of "INCREMENT"
// Think of these as the names of buttons on a remote control
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET     = "RESET";
const SET_NAME  = "SET_NAME";

// REDUCER FUNCTION — lives OUTSIDE the component
// This is a pure function that takes two things:
// 1. state  — the current state (everything we are tracking)
// 2. action — an object describing WHAT happened and with WHAT data
//
// Think of reducer like a BANK TELLER:
// You (the component) send a REQUEST (action)
// The teller (reducer) looks at the request and updates the ACCOUNT (state)
// You never touch the account directly — the teller handles it
function reducer(state, action) {

    console.log("Reducer called with action:", action.type);
    console.log("State before update:", state);

    // switch checks WHAT action was dispatched
    // each case handles a different action type
    switch (action.type) {

        case INCREMENT:
            // Returns a NEW state object with value increased by 1
            // We spread '...state' to keep everything else the same
            // and only change what we need to change
            return {
                ...state,
                value: state.value + 1
            };

        case DECREMENT:
            // Returns a NEW state object with value decreased by 1
            // We prevent going below 0 using Math.max
            return {
                ...state,
                value: Math.max(0, state.value - 1)
            };

        case RESET:
            // Returns a NEW state object with value back to 0
            return {
                ...state,
                value: 0
            };

        case SET_NAME:
            // action.payload carries extra data sent with the action
            // In this case it carries the new name typed in the input
            return {
                ...state,
                name: action.payload
            };

        // Always have a default case — returns current state unchanged
        // This handles any unknown action types safely
        default:
            console.log("Unknown action type:", action.type);
            return state;
    }
}

// INITIAL STATE — the starting values for everything we are tracking
// This is like the opening balance of a bank account
// Keeping it outside the component makes it easy to find and change
const initialState = {
    value: 0,
    name: ""
};

function LibraryOfAahin() {

    // useReducer takes two things:
    // 1. reducer  — the function that handles state updates
    // 2. initialState — the starting values
    //
    // It gives back two things:
    // 1. state    — the current state object (read from here)
    // 2. dispatch — the function to send actions (write through here)
    //
    // dispatch is like pressing a button on the remote control
    // reducer is like the TV responding to that button press
    const [state, dispatch] = useReducer(reducer, initialState);

    // useRef — tracks how many times dispatch was called
    // Silent tracker — won't cause re-renders
    const dispatchCount = useRef(0);

    // This function dispatches the INCREMENT action
    // dispatch sends an ACTION OBJECT to the reducer
    // action object always has a 'type' — tells reducer what to do
    function handleIncrement() {
        dispatchCount.current = dispatchCount.current + 1;
        console.log("Dispatching INCREMENT — dispatch count:", dispatchCount.current);

        // Sending action to reducer
        // Reducer sees { type: "INCREMENT" } and handles it
        dispatch({ type: INCREMENT });
    }

    function handleDecrement() {
        dispatchCount.current = dispatchCount.current + 1;
        console.log("Dispatching DECREMENT — dispatch count:", dispatchCount.current);

        // Sending action to reducer
        // Reducer sees { type: "DECREMENT" } and handles it
        dispatch({ type: DECREMENT });
    }

    function handleReset() {
        dispatchCount.current = dispatchCount.current + 1;
        console.log("Dispatching RESET — dispatch count:", dispatchCount.current);

        dispatch({ type: RESET });
    }

    function handleNameChange(e) {
        dispatchCount.current = dispatchCount.current + 1;
        console.log("Dispatching SET_NAME with payload:", e.target.value);

        // This action carries extra data using 'payload'
        // payload is the standard name for extra data in an action
        // Reducer sees { type: "SET_NAME", payload: "Aahin" } and handles it
        dispatch({ type: SET_NAME, payload: e.target.value });
    }

    useEffect(() => {

        console.log("useEffect ran — full state is now:", state);

        return () => {
            console.log("Cleanup ran — state was:", state);
        };

    }, [state]);
    // Watching the entire state object — runs when anything in state changes

    return (
        <div>
            <h2>useReducer Example</h2>

            {/* Input for name — dispatches SET_NAME with payload */}
            <input
                type="text"
                value={state.name}
                placeholder="Type your name"
                onChange={handleNameChange}
            />

            <br /><br />

            {/* Each button dispatches a different action type */}
            <button onClick={handleIncrement}>Increase Value</button>
            <button onClick={handleDecrement}>Decrease Value</button>
            <button onClick={handleReset}>Reset</button>

            <br /><br />

            {/* Reading directly from state object */}
            <p>Current Value: {state.value}</p>
            <p>Name: {state.name}</p>

            {/* Proof that dispatch was called — updates when useState causes render */}
            <p>Total dispatches: {dispatchCount.current}</p>

        </div>
    );
}

export default LibraryOfAahin;
            `,
            language: "jsx"
        },
        label: "Level 1",
        labelColor: "green"
    }
]