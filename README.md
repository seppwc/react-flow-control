# React-Flow-Control

Component library for declaritive JSX control flow.


## Show

The show component is used to replace a typical patters of
```jsx
    data && <Component />
```
 or 
 
```jsx
    isBoolean ? <ComponentOne /> : <ComponentTwo />
```

which when nested and the control flow logic gets more complex can become a nightmare to reason with when reading. Show has two props `when` which takes a boolean condition and will render any children if true and return null if false. This pattern covers useing the `&&` operator.

for ternary logic we can use the `fallback` prop, which takes a jsx componentor function that returns a jsx object (same thing whatever.) the recommended pattern is to separate your fallback component into a separate component rather than inlining a component.

this logic forces use to rewrite our logic to best reflect what we want to show our user and then reduce other use cases to other components.

```jsx
    /**
     *   Show({when: boolean, fallback: ()=>JSX.Element }): JSX.Element | null
     */

    function MyComponent(){

        const [data, loading, error] = useSomeHookToGetStuff()

        return (
            <Show when={!loading}>
                <Show when={!error} fallback={ErrorMessage}>
                    <ComponentYouWantToShow data={data}>
                </Show>
            </Show>)
    }

```


## For

For attempts to tidy up Array.mapping everything we need to loop over, and provides utility for looping over objects using for...in and for..of syntax.  An extra utility this provides is iterations are automatically keyed for you (no need to lazily use the index anymore!).

`For` has 3 exclusionary props (aka. you can only use one at a time), `each`, `of`, `in`

The `each` prop takes an array of `T[]` and will iteratate over the array using array.prototype.map under the hood. each item is then rendered using a render prop function passed as the child of the `For` component (see example below).

The `in` prop takes an object and loops over the keys.
the `of` prop takes an object and loops over the values


```jsx
    /**
     *   For({each?: T[], of?: T extends object, in?: T extends object): React.NodeArray
     */

    function MyComponent(){

        const myArray = [
            {name: "Sepp" , age: 34 },
            {name: "Henry", age: 4 },
            {name: "Edward", age: 2},
            {name: "Elizabeth", age: 33}
        ]

        return (
            <For each={myArray}>
               {
                   (item, index, array)=><ComponentToRender name={item.name} />
               }
            </For>)
    }

```


## Contributing

If theres a control flow you think could be useful in this pattern please make and issue or pr. All contributions are welcome, in the form of bug fixes, docs, tests aswell as features. Below are some features of this repo for those running this package locally.

### Add a new component

- You can automatically create a new component using the `yarn component:new` command.
- Or, you can manually add the new component directory in the `src/components` directory following this folder structure

```
├── MyComponent
|   ├── __tests__
|   |   ├── MyComponent.test.tsx
|   ├── MyComponent.scss
|   ├── MyComponent.stories.tsx
|   ├── MyComponent.tsx
|   ├── index.ts

```

Once you have created your new component make sure you have exported it in the `src/components/index.ts` file. Doing so allows the component to be compiled into the final bundle using rollup.

```
// src/components/index.ts
export \* from './MyComponent';
export \* from './SomeOtherComponent';

```

> You can skip all of this and use the built in component generator. The template for the component is in `_templates/component/with-prompt`. Simply run the following command to automatically create your new component. It will prompt you for the component name and then build out all the files and correct exports.`yarn component:new`

You can develop your new component using storybook as your playground. Once you have added the `.stories.tsx` file for you new component, you can run `yarn storybook` to start the service.

## Tests

```

$ yarn test

```

With coverage

```

$ yarn test:coverage

```

Watch

```

$ yarn test:watch

```

## Prettier

```

$ yarn format

```

Validate project formatting

```

$ yarn format:check

```

## Lint

```

$ yarn lint

```

## Storybook

```

$ yarn storybook

```

## Building your library

```

$ yarn build

```

The build output will go into the `dist` directory

## Github Actions

This project contains a github action workflow called `ci.yaml`. This workflow runs a job that will test, lint, and build the code. If the code passes and you are on the `master` branch it will also run the publish job to send the new version off to npm.


## Committing Code Changes

The commit messages are critical for allowing the [Semantic Releases](https://semantic-release.gitbook.io/) to work correctly. We use the [Conventional Commit](https://www.conventionalcommits.org/en/v1.0.0/) commit message format.

The commit message should be structured as follows:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Any line of the commit message cannot be longer than 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

#### Type

Must be one of the following:

- **build**: Changes that affect the build system or external dependencies (this correlates with `PATCH` in semantic versioning)
- **ci**: Changes to our CI configuration files and scripts (no version changes)
- **docs**: Documentation only changes (no version changes)
- **feat**: A new feature (this correlates with `MINOR` in semantic versioning).
- **fix**: A bug fix (this correlates with `PATCH` in semantic versioning).
- **perf**: A code change that improves performance (this correlates with `PATCH` in semantic versioning).
- **refactor**: A code change that neither fixes a bug nor adds a feature (no version changes)
- **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc) (no version changes)
- **test**: Adding missing tests or correcting existing tests (no version changes)
- **revert**: Reverts a previous commit (this correlates with `PATCH` in semantic versioning).

#### Description

The Description contains a succinct description of the change:

- use the imperative, present tense: "change" not "changed" nor "changes"
- don't capitalize the first letter
- no dot (.) at the end

#### Body (optional)

Use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

#### Footer (optional)

The footer should contain any information about **Breaking Changes** and is also the place to
reference GitHub issues that this commit **Closes**.

### Breaking Changes

A commit that has the text `BREAKING CHANGE:` at the beginning of its optional body or footer section introduces a breaking API change (correlating with `MAJOR` in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

should start with the word `BREAKING CHANGE:` with a space or two newlines. The rest of the commit message is then used for this.

### Revert

If the commit reverts a previous commit, it should begin with `revert: `, followed by the header of the reverted commit. In the body it should say: `This reverts commit <hash>.`, where the hash is the SHA of the commit being reverted.

### Examples

[see examples](https://www.conventionalcommits.org/en/v1.0.0/#examples)

---

## Changelog

The changelog.md is automatically generated from the following types of commits:

- `feat`
- `fix`
- `perf`
- `revert`

In addition to these types, any `breaking change` will also be added to the changelog.
