import * as React from "react";
import { Event, EventProps } from "./components/Event";
import "./App.css";

class App extends React.Component<{}, { events: EventProps[] }> {
    constructor() {
        super({}, {});
        this.state = {
            events: []
        };
    }
    componentDidMount() {
        this.getEvents();
    }
    getEvents = () => {
        let events: EventProps[] = [];
        const url =
            "https://api.fitogram.pro/providers/yogashop/events/public?from=2018-05-16T23%3A59%3A29.564Z";
        fetch(url)
            .then(req => req.json())
            .then(res => {
                console.log(res);
                for (let i = 0; i < res.length; i++) {
                    events.push({
                        name: res[i].name,
                        imageUrl: res[i].eventGroup.imageUrl,
                        loc: res[i].location.name,
                        city: res[i].location.city,
                        trainer: res[i].trainers[0].name,
                        trainerImage: res[i].trainers[0].imageUrl,
                        description: res[i].descriptions[0].text,
                        type: res[i].eventGroup.type,
                        startDateTime: res[i].startDateTime,
                        endDateTime: res[i].endDateTime,
                        info: res[i].eventGroup.name,
                        seats: res[i].seats,
                        seatsBooked: res[i].seatsBooked
                    });
                }
                this.setState({ events });
            });
    };
    render() {
        return (
            <div className="event-list">
                {this.state.events.map((event: EventProps, index: number) => (
                    <Event
                        key={index}
                        name={event.name}
                        imageUrl={event.imageUrl}
                        loc={event.loc}
                        city={event.city}
                        trainer={event.trainer}
                        trainerImage={event.trainerImage}
                        description={event.description}
                        seats={event.seats}
                        seatsBooked={event.seatsBooked}
                        info={event.info}
                        startDateTime={event.startDateTime}
                        endDateTime={event.endDateTime}
                        type={event.type}
                    />
                ))}
            </div>
        );
    }
}

export default App;
