import * as React from "react";
import { Event } from "./components/Event";

class App extends React.Component {
    render() {
        return <Event compiler="typescript" framework="react" />;
    }
}

export default App;
