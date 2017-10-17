# daum-map-wrap
Simple wrapper to load daum map async + provide TS types

## Usage

```javascript
import loadDaumMap from "daum-map-wrap";

loadDaumMap(API_KEY, "drawing").then(maps => {
    // function returns Promise of `daum.maps`
    const map = new maps.Map(mapContainer, {});

    // global object also registered
    const manager = new daum.maps.drawing.DrawingManager({
        map
    });
});
```