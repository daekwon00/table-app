# TypeScript 로 React 세팅 및 Table 생성

react-table의 kitchen-sink 구현\
홈페이지 [https://tanstack.com/]

## step

아래의 kitchen-sink 를 TypeScript 프로젝트로 실제 구현\
[https://tanstack.com/table/v8/docs/examples/react/kitchen-sink]

### TypeScript로 프로젝트 생성

yarn create react-app my-app --template typescript\
by [https://korinkorin.tistory.com/94]

### react-table guide 참조

guide [https://tanstack.com/table/v8/docs/guide/introduction]\

TypeScript의 프로젝트에서 codesandbox 호출\
[https://codesandbox.io/s/keen-sun-deqzq8?file=/src/App.js]\

v7 vs v8 비교\
[https://blog.logrocket.com/react-table-complete-guide/]\

### table library add

yarn add @tanstack/react-table\
by [https://github.com/TanStack/table/discussions/3772]\

이전의 library 를 삭제하려면\
yarn remove test\

test라는 패키지는 package.json, yarn lock에서 제거됩니다. dependencies, devDependencies등 모든 타입에서 패키지가 삭제됩니다.\

만약 삭제하고 완전히 제거가 안되었다면 yarn install을 해줌으로서 업데이트를 해줍니다.\
by [https://dududweb.tistory.com/103]

### v8 예제 files 적용

v8 예제 정상동작 확인\
불필요한 table 의 요소들 제거\

## 진행

TypeScript 생성 및 react-table guide 분석

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
