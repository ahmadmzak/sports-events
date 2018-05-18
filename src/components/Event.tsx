import * as React from "react";
import "./Event.css";

const locationIcon = require("./images/location-mark.svg") as string;
const userIcon = require("./images/user.svg") as string;
const timeIcon = require("./images/clock.svg") as string;
const infoIcon = require("./images/notification.svg") as string;

export interface EventProps {
    imageUrl: string;
    name: string;
    loc: string;
    city: string;
    trainer: string;
    trainerImage: string;
    description: string;
    seats: number;
    seatsBooked: number;
    startDateTime: string;
    endDateTime: string;
    type: string;
    info: string;
}

export class Event extends React.Component<EventProps, {}> {
    constructor(props: EventProps) {
        super(props);
    }
    render() {
        return (
            <div className="event">
                <div className="event-image">
                    <img
                        className="event-image-image"
                        src={this.props.imageUrl}
                    />
                    <h1
                        className="event-image-text"
                        style={{
                            color: this.props.imageUrl ? "white" : "black"
                        }}
                    >
                        {this.props.name}
                    </h1>
                </div>
                <div className="event-details">
                    <div className="event-details-section">
                        <div className="detail event-details-timing">
                            <img className="icon" src={timeIcon} />
                            <div>
                                <h3>{this.props.startDateTime}</h3>
                                <h4>time</h4>
                            </div>
                        </div>
                        <div className="detail event-details-info">
                            <img className="icon" src={infoIcon} />
                            <div>
                                <h3>{this.props.info}</h3>
                                <h4>{this.props.type}</h4>
                            </div>
                        </div>
                    </div>
                    <div className="event-details-section">
                        <div className="detail event-details-location">
                            <img className="icon" src={locationIcon} />
                            <div>
                                <h4>{this.props.loc}</h4>
                                <h4>{this.props.city}</h4>
                            </div>
                        </div>
                        <div className="detail event-details-trainer">
                            <img
                                className="icon"
                                src={this.props.trainerImage}
                            />
                            <h4>{this.props.trainer}</h4>
                        </div>
                    </div>
                    <div className="event-details-desc">
                        <p>
                            {this.props.description.replace(
                                /<(?:.|\n)*?>/gm,
                                ""
                            )}
                        </p>
                    </div>
                </div>
                <div className="event-booking">
                    <div className="detail events-detail-booking">
                        <img className="icon" src={userIcon} />
                        <h4>
                            {`${this.props.seatsBooked}/${this.props.seats}`}{" "}
                            booked
                        </h4>
                    </div>
                    <button>Book Now</button>
                    <p>Book before:</p>
                    <p>{this.props.endDateTime}</p>
                </div>
            </div>
        );
    }
}
