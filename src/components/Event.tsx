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
            <div
                className="event"
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "2rem"
                }}
            >
                <div
                    className="event-image"
                    style={{ position: "relative", width: "35%" }}
                >
                    <img
                        src={this.props.imageUrl}
                        style={{
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center",
                            backgroundAttachment: "fixed",
                            width: "30vw",
                            height: "10vw"
                        }}
                    />
                    <h1
                        style={{
                            color: this.props.imageUrl ? "white" : "black",
                            position: "absolute",
                            top: "50",
                            left: "50"
                        }}
                    >
                        {this.props.name}
                    </h1>
                </div>
                <div
                    className="event-details"
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "space-around",
                        justifyContent: "center",
                        width: "35%"
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <div className="event-details-timing">
                            <img className="icon" src={timeIcon} />
                            <h3>date</h3>
                            <h4>time</h4>
                        </div>
                        <div className="event-details-info">
                            <img className="icon" src={infoIcon} />
                            <h3>name</h3>
                            <h4>level</h4>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <div className="event-details-location">
                            <img className="icon" src={locationIcon} />
                            <h4>{this.props.loc}</h4>
                            <h4>{this.props.city}</h4>
                        </div>
                        <div
                            className="event-details-trainer"
                            style={{ display: "flex" }}
                        >
                            <img
                                src={this.props.trainerImage}
                                style={{
                                    width: "3rem",
                                    height: "3rem",
                                    borderRadius: "50%"
                                }}
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
                    <div>
                        <img className="icon" src={userIcon} />
                        <h4>
                            {`${this.props.seatsBooked}/${this.props.seats}`}{" "}
                            booked
                        </h4>
                    </div>
                    <button>Book Now</button>
                    <p>Book before:</p>
                    <p>Mon 10 Sep 2018 - 9:00 pm</p>
                </div>
            </div>
        );
    }
}
