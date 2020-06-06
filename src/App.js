import React, { Suspense } from "react";

// Part 4 - React.lazy
import "./App.css";

import Page1 from "./components/Page1.jsx";

// Part 2 - Code Splitting - manual
// import Page2 from "./components/Page2.jsx";
// import Page3 from "./components/Page3.jsx";

// Part 3 - Cleaner Code Splitting
// import { AsyncComponent } from "./components/AsyncComponent";

// Part 4 - React.lazy
const Page2Lazy = React.lazy(() => import("./components/Page2"));
const Page3Lazy = React.lazy(() => import("./components/Page3"));

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      route: "page1",

      // Part 2 - Code Splitting - manual
      // component: null,
    };
  }

  onRouteChange = (route) => {
    // Part 1 - No Code Splitting
    // this.setState({ route });

    // Part 2 - Code Splitting - manual
    // if (route === "page1") {
    //   this.setState({ route: route });
    // } else if (route === "page2") {
    //   import("./components/Page2")
    //     .then((Page2) => {
    //       this.setState({
    //         route: route,
    //         component: Page2.default,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // } else {
    //   import("./components/Page3")
    //     .then((Page3) => {
    //       this.setState({
    //         route: route,
    //         component: Page3.default,
    //       });
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //     });
    // }

    // Part 3 - Cleaner Code Splitting
    // this.setState({ route });

    // Part 4 - React.Lazy
    this.setState({ route });
  };

  render() {
    // Part 1 - No code splitting
    // switch (this.state.route) {
    //   case "page2":
    //     return <Page2 onRouteChange={this.onRouteChange} />;
    //   case "page3":
    //     return <Page3 onRouteChange={this.onRouteChange} />;
    //   default:
    //     return <Page1 onRouteChange={this.onRouteChange} />;
    // }

    // Part 2 - No Code Splitting - manual
    // if (this.state.route === "page1") {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else {
    //   return <this.state.component onRouteChange={this.onRouteChange} />;
    // }

    // Part 3 - Cleaner Code Splitting
    // if (this.state.route === "page1") {
    //   return <Page1 onRouteChange={this.onRouteChange} />;
    // } else if (this.state.route === "page2") {
    //   const AsyncPage2 = AsyncComponent(() => import("./components/Page2"));
    //   return <AsyncPage2 onRouteChange={this.onRouteChange} />;
    // } else {
    //   const AsyncPage3 = AsyncComponent(() => import("./components/Page3"));
    //   return <AsyncPage3 onRouteChange={this.onRouteChange} />;
    // }

    // Part 4 - React.Lazy
    switch (this.state.route) {
      case "page2":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page2Lazy onRouteChange={this.onRouteChange} />
          </Suspense>
        );
      case "page3":
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <Page3Lazy onRouteChange={this.onRouteChange} />
          </Suspense>
        );
      default:
        return <Page1 onRouteChange={this.onRouteChange} />;
    }
  }
}

export default App;
