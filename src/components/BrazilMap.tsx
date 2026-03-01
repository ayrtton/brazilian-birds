import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

export default function BrazilMap() {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 500, center: [-55, -15] }}
        >
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            fill="#EAEAEC"
                            stroke="#D6D6DA"
                            style={{
                                default: { outline: "none" },
                                hover: {
                                    fill: "rgb(39, 0, 178)",
                                    outline: "none",
                                    cursor: "pointer",
                                },
                                pressed: {
                                    fill: "rgb(89, 54, 218)",
                                    outline: "none",
                                },
                            }}
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
    );
}
