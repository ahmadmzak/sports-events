import * as React from "react";

export interface EventProps {
    compiler: string;
    framework: string;
}

export class Event extends React.Component<EventProps, {}> {
    render() {
        return (
            <h1>
                Hello from {this.props.compiler} and {this.props.framework}!
            </h1>
        );
    }
}
