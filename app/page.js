"use client";

import { useEffect, useState } from "react";
import { gapi } from "gapi-script";
import Event from  "./components/calendar/Event";

export default function Home() {

    const [events, setEvents] = useState([]);

    const calendarID = process.env.REACT_APP_CALENDAR_ID;
    const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
    const accessToken = process.env.REACT_APP_GOOGLE_ACCESS_TOKEN;

    const getEvents = (calendarID, apiKey) => {
        function initiate() {
          gapi.client
            .init({
              apiKey: apiKey,
            })
            .then(function () {
              return gapi.client.request({
                path: `https://www.googleapis.com/calendar/v3/calendars/${calendarID}/events`,
              });
            })
            .then(
              (response) => {
                let events = response.result.items;
                setEvents(events);
              },
              function (err) {
                return [false, err];
              }
            );
        }
        gapi.load("client", initiate);
      };

    useEffect(() => {
        const events = getEvents(calendarID, apiKey);
        setEvents(events);
      }, []);

    return (
    <div className="App pt-4">
        <h1 className="text-2xl font-bold mb-4">
        React App with Google Calendar API!
        <ul>
          {events?.map((event) => (
            <li key={event.id} className="flex justify-center">
              <Event description={event.summary} />
            </li>
          ))}
        </ul>
        </h1>
    </div>
    );

}
