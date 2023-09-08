import { AircraftData } from "./AircraftData"

export function Aircrafts({ aircrafts }) {
    const content = aircrafts.map((item, index) => (
        <AircraftData key={index} {...item} />
    ));
    return content;
}