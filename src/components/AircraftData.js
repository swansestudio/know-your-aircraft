export const AircraftData = (props) => {
    return (
        <div className="aircraft">
            <div className="data-main">
                <span>Manufacturer: {props.manufacturer}</span>
                <span>Model: {props.model}</span>
            </div>
            <hr />
            <ul className="data-rest">
                <li>
                    <span>Engine Type:</span>
                    <span>{props.engine_type}</span>
                </li>
                <li>
                    <span>Gross Weight:</span>
                    <span>{Math.round(props.gross_weight_lbs * 0.453592)} kg</span>
                </li>
                <li>
                    <span>length:</span>
                    <span>{Math.round(props.length_ft * 0.3048)} m</span>
                </li>
                <li>
                    <span>Max Speed:</span>
                    <span>{Math.round(props.max_speed_knots * 1.852)} km/h</span>
                </li>
                <li>
                    <span>Range:</span>
                    <span>{Math.round(props.range_nautical_miles * 1.852)} km</span>
                </li>
                <li>
                    <span>Wing Span:</span>
                    <span>{Math.round(props.wing_span_ft * 0.3048)} m</span>
                </li>
                <li>
                    <span>Ceiling:</span>
                    <span>{Math.round(props.ceiling_ft * 0.3048)} m</span>
                </li>
            </ul>
        </div>
    );
};