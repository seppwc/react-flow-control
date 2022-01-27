# React-Flow-Control

React component library for declarative JSX control flow.

<img height="200" width="100%" src="https://raw.githubusercontent.com/Phl3bas/react-flow-control/main/src/assets/React-flow-control.svg">



`react-flow-control` aims to replace patterns such as
```jsx
    data && <Component />
```
 or 
 
```jsx
    isBoolean ? <ComponentOne /> : <ComponentTwo />
```

which when nested and the control flow logic gets more complex can become a nightmare to reason with when reading especially with larger codeblocks within the ternary returns. `react-flow-control` instead places this logic within renderless JSX elements whose sole perpose is to render its children based on various conditions.

the most basis is the Show component.

```jsx

// This

function myComponent(){
    const {data, loading, error} = useSomeHook()

    return (
       {
           !loading ? 
                !error ?
                    (<ThingIActuallyWantToRender /> ):
                    (<ErrorComponent />)
                : ( <LoadingSpinner />)
       }
    )
}


// becomes



function myComponent(){
    const {data, loading, error} = useSomeHook()

    return (
        <Show when={!loading} fallback={()=> <LoadingSpinner/>}>
            <Show when={!error} fallback={()=><ErrorComponent/>}>
                <ThingIActuallyWantToRender />
            </Show>
        </Show>
    )
}


```

`react-flow-control` also provides utilities for loops, and switches.

## Contributing

If theres a control flow you think could be useful in this pattern please make and issue or pr. All contributions are welcome, in the form of bug fixes, docs, tests aswell as features. Below are some features of this repo for those running this package locally.
