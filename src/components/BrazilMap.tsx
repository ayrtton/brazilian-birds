import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

export default function BrazilMap() {
    return (
        <ComposableMap
            projection="geoMercator"
            projectionConfig={{ scale: 500, center: [-55, -15] }}
        >
            <Geographies geography={geoUrl} className="map">
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography
                            key={geo.rsmKey}
                            geography={geo}
                            className="map__path"
                        />
                    ))
                }
            </Geographies>
        </ComposableMap>
    );
}
