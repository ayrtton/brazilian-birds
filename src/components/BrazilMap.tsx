import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl =
    "https://raw.githubusercontent.com/codeforamerica/click_that_hood/master/public/data/brazil-states.geojson";

export default function BrazilMap() {
    return (
        <div className="map">
            <ComposableMap
                className="map__svg"
                projection="geoMercator"
                width={800}
                height={800}
                projectionConfig={{ scale: 950, center: [-55, -15] }}
            >
                <Geographies className="map__path" geography={geoUrl}>
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
        </div>
    );
}
