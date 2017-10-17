declare namespace daum {
    export namespace maps {
        export class Map {
            constructor(container: HTMLElement, options: Map.Options);

            setCenter(latlng: LatLng): void;
            getCenter(): LatLng;
            setLevel(level: number, options: Map.LevelOptions): void;
            getLevel(): number;
            setMapTypeId(mapTypeId: MapTypeId): void;
            getMapTypeId(): MapTypeId;
            setBounds(bounds: LatLngBounds, paddingTop?: number, paddingRight?: number, paddingBottom?: number, paddingLeft?: number): void;
            getBounds(): LatLngBounds;
            panBy(dx: number, dy: number): void;
            panTo(latlng_or_bounds: LatLng | LatLngBounds, padding?: number): void;
            addControl(control: MapControl, position: ControlPosition): void;
            removeControl(control: MapControl): void;
            setDraggable(draggable: boolean): void;
            getDraggable(): boolean;
            setZoomable(zoomable: boolean): void;
            getZoomable(): boolean;
            setProjectionId(projectionId: ProjectionId): void;
            getProjectionId(): ProjectionId;
            relayout(): void;
            addOverlayMapTypeId(mapTypeId: MapTypeId): void;
            removeOverlayMapTypeId(mapTypeId: MapTypeId): void;
            setKeyboardShortcuts(active: boolean): void;
            getKeyboardShortcuts(): boolean;
            setCopyrightPosition(copyrightPosition: CopyrightPosition, reversed?: boolean): void;
            getProjection(): MapProjection;
            setCursor(style: string): void;
        }
        export namespace Map {
            export interface Options {
                center?: LatLng;
                level?: number;
                mapTypeId?: MapTypeId;
                draggable?: boolean;
                scrollwheel?: boolean;
                disableDoubleClick?: boolean;
                disableDoubleClickZoom?: boolean;
                projectionId?: ProjectionId;
                tileAnimation?: boolean;
                keyboardShortcuts?: boolean | {
                    speed: number;
                };
            }

            export interface LevelOptions {
                animate?: number | {
                    duration: number;
                };
                anchor?: LatLng;
            }
        }

        abstract class MapControl {}

        export namespace event {
            export function addEventListener(map: Map, event: 'center_changed', fn: () => void): void;
            export function addEventListener(map: Map, event: 'zoom_start', fn: () => void): void;
            export function addEventListener(map: Map, event: 'zoom_changed', fn: () => void): void;
            export function addEventListener(map: Map, event: 'bounds_changed', fn: () => void): void;
            export function addEventListener(map: Map, event: 'click', fn: (mouseEvent: maps.MouseEvent) => void): void;
            export function addEventListener(map: Map, event: 'dblclick', fn: (mouseEvent: maps.MouseEvent) => void): void;
            export function addEventListener(map: Map, event: 'rightclick', fn: (mouseEvent: maps.MouseEvent) => void): void;
            export function addEventListener(map: Map, event: 'mousemove', fn: (mouseEvent: maps.MouseEvent) => void): void;
            export function addEventListener(map: Map, event: 'dragstart', fn: () => void): void;
            export function addEventListener(map: Map, event: 'drag', fn: () => void): void;
            export function addEventListener(map: Map, event: 'dragend', fn: () => void): void;
            export function addEventListener(map: Map, event: 'idle', fn: () => void): void;
            export function addEventListener(map: Map, event: 'tilesloaded', fn: () => void): void;
            export function addEventListener(map: Map, event: 'maptypeid_changed', fn: () => void): void;

            export function removeEventListener(map: Map, event: 'center_changed', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'zoom_start', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'zoom_changed', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'bounds_changed', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'click', fn: (mouseEvent: maps.MouseEvent) => void): void;
            export function removeEventListener(map: Map, event: 'dblclick', fn: (mouseEvent: maps.MouseEvent) => void): void;
            export function removeEventListener(map: Map, event: 'rightclick', fn: (mouseEvent: maps.MouseEvent) => void): void;
            export function removeEventListener(map: Map, event: 'mousemove', fn: (mouseEvent: maps.MouseEvent) => void): void;
            export function removeEventListener(map: Map, event: 'dragstart', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'drag', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'dragend', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'idle', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'tilesloaded', fn: () => void): void;
            export function removeEventListener(map: Map, event: 'maptypeid_changed', fn: () => void): void;

            export function trigger(map: Map, event: 'center_changed'): void;
            export function trigger(map: Map, event: 'zoom_start'): void;
            export function trigger(map: Map, event: 'zoom_changed'): void;
            export function trigger(map: Map, event: 'bounds_changed'): void;
            export function trigger(map: Map, event: 'click', mouseEvent: maps.MouseEvent): void;
            export function trigger(map: Map, event: 'dblclick', mouseEvent: maps.MouseEvent): void;
            export function trigger(map: Map, event: 'rightclick', mouseEvent: maps.MouseEvent): void;
            export function trigger(map: Map, event: 'mousemove', mouseEvent: maps.MouseEvent): void;
            export function trigger(map: Map, event: 'dragstart'): void;
            export function trigger(map: Map, event: 'drag'): void;
            export function trigger(map: Map, event: 'dragend'): void;
            export function trigger(map: Map, event: 'idle'): void;
            export function trigger(map: Map, event: 'tilesloaded'): void;
            export function trigger(map: Map, event: 'maptypeid_changed'): void;
        }

        export class MapTypeControl extends MapControl {
            constructor();
        }

        export class ZoomControl extends MapControl {
            constructor();
        }
        
        export enum MapTypeId {
            ROADMAP,
            SKYVIEW,
            HYBRID,
            ROADVIEW,
            OVERLAY,
            TRAFFIC,
            TERRAIN,
            BICYCLE,
            BICYCLE_HYBRID,
            USE_DISTRICT
        }

        export enum ProjectionId {
            NONE,
            WCONG
        }

        export enum ControlPosition {
            TOP,
            TOPLEFT,
            TOPRIGHT,
            LEFT,
            RIGHT,
            BOTTOMLEFT,
            BOTTOM,
            BOTTOMRIGHT
        }

        export enum CopyrightPosition {
            BOTTOMLEFT,
            BOTTOMRIGHT
        }

        export class Tileset {
            constructor(width: number, height: number, urlFunc: (x: number, y: number, z: number) => string, copyright: TilesetCopyright[], dark: boolean, minZoom: number, maxZoom: number);
            constructor(width: number, height: number, getTile: (x: number, y: number, z: number) => HTMLElement, copyright: TilesetCopyright[], dark: boolean, minZoom: number, maxZoom: number);

            static add(id: string, tileset: Tileset): void;
        }

        export class TilesetCopyright {
            constructor(msg: string, shortMsg: string, minZoom: number);
        }

        export class LatLng {
            constructor(latitude: number, longitude: number);

            getLat(): number;
            getLng(): number;
            equals(latlng: LatLng): boolean;
            toString(): string;
        }

        export class LatLngBounds {
            constructor(sw: LatLng, ne: LatLng);

            equals(latlngBounds: LatLngBounds): boolean;
            toString(): string;
            getSouthWest(): LatLng;
            getNorthEast(): LatLng;
            isEmpty(): boolean;
            extend(latlng: LatLng): void;
            contain(latlng: LatLng): void;
        }

        export class Point {
            constructor(x: number, y: number);
            equals(point: Point): boolean;
            toString(): string;
        }

        export class Size {
            constructor(width: number, height: number);

            equals(size: Size): boolean;
            toString(): string;
        }

        export interface MouseEvent {
            latLng: LatLng;
            point: Point;
        }

        export class Marker {
            constructor(options: Marker.Options);

            setMap(map_or_roadview: Map | Roadview): void;
            getMap(): Map;
            setImage(image: MarkerImage): void;
            getImage(): MarkerImage;
            setPosition(position: LatLng | Viewpoint): void;
            getPosition(): LatLng;
            setZIndex(zIndex: number): void;
            getZIndex(): number;
            setVisible(visible: boolean): void;
            getVisible(): boolean;
            setTitle(title: string): void;
            getTitle(): string;
            setDraggable(draggable: boolean): void;
            getDraggable(): boolean;
            setClickable(clickable: boolean): void;
            getClickable(): boolean;
            setAltitude(altitude: number): void;
            getAltitude(): number;
            setRange(range: number): void;
            getRange(): number;
            setOpacity(opacity: number): void;
            getOpacity(): number;
        }

        export namespace Marker {
            export interface Options {
                map?: Map | Roadview;
                position?: LatLng | Viewpoint;
                image?: MarkerImage;
                title?: string;
                draggable?: boolean;
                clickable?: boolean
                zIndex?: number;
                opacity?: number;
                altitude?: number;
                range?: number;
            }
        }

        export namespace event {
            export function addEventListener(marker: Marker, event: 'click', fn: () => void): void;
            export function addEventListener(marker: Marker, event: 'mouseover', fn: () => void): void;
            export function addEventListener(marker: Marker, event: 'mouseout', fn: () => void): void;
            export function addEventListener(marker: Marker, event: 'rightclick', fn: () => void): void;
            export function addEventListener(marker: Marker, event: 'dragstart', fn: () => void): void;
            export function addEventListener(marker: Marker, event: 'dragend', fn: () => void): void;

            export function removeEventListener(marker: Marker, event: 'click', fn: () => void): void;
            export function removeEventListener(marker: Marker, event: 'mouseover', fn: () => void): void;
            export function removeEventListener(marker: Marker, event: 'mouseout', fn: () => void): void;
            export function removeEventListener(marker: Marker, event: 'rightclick', fn: () => void): void;
            export function removeEventListener(marker: Marker, event: 'dragstart', fn: () => void): void;
            export function removeEventListener(marker: Marker, event: 'dragend', fn: () => void): void;

            export function trigger(marker: Marker, event: 'click'): void;
            export function trigger(marker: Marker, event: 'mouseover'): void;
            export function trigger(marker: Marker, event: 'mouseout'): void;
            export function trigger(marker: Marker, event: 'rightclick'): void;
            export function trigger(marker: Marker, event: 'dragstart'): void;
            export function trigger(marker: Marker, event: 'dragend'): void;
        }

        export class MarkerImage {
            constructor(src: string, size: Size, options?: MarkerImage.Options);
        }

        export namespace MarkerImage {
            export interface Options {
                alt?: string;
                coords?: string;
                offset?: Point;
                shape?: string;
                spriteOrigin?: Point;
                spriteSize?: Size;
            }
        }

        export class InfoWindow {
            constructor(options: InfoWindow.Options);

            open(map_or_roadview: Map | Roadview, marker?: Marker): void;
            close(): void;
            setPosition(position: LatLng | Viewpoint): void;
            getPosition(): LatLng;
            setContent(content: HTMLElement | string): void;
            getContent(): HTMLElement | string;
            setZIndex(zIndex: number): void;
            getZIndex(): number;
            setAltitude(altitude: number): void;
            getAltitude(): number;
            setRange(range: number): void;
            getRange(): number;
        }

        export namespace InfoWindow {
            export interface Options {
                content: HTMLElement | string;
                disableAutoPan?: boolean;
                map: Map | Roadview;
                removable?: boolean;
                zIndex?: number;
                altitude?: number;
                range?: number;
            }
        }

        export class CustomOverlay {
            constructor(options: CustomOverlay.Options);

            setMap(map_or_roadview: Map | Roadview): void;
            getMap(): Map;
            setPosition(position: LatLng | Viewpoint): void;
            getPosition(): LatLng;
            setContent(content: HTMLElement | string): void;
            getContent(): HTMLElement | string;
            setVisible(visible: boolean): void;
            getVisible(): boolean;
            setZIndex(zIndex: number): void;
            getZIndex(): number;
            setAltitude(altitude: number): void;
            getAltitude(): number;
            setRange(range: number): void;
            getRange(): number;
        }

        export namespace CustomOverlay {
            export interface Options {
                clickable?: boolean;
                content: HTMLElement | string;
                map: Map | Roadview;
                position: LatLng | Viewpoint;
                xAnchor?: number;
                yAnchor?: number;
                zIndex?: number;
            }
        }

        export abstract class AbstractOverlay {
            abstract draw(): void;
            abstract onAdd(): void;
            abstract onRemove(): void;
            abstract setMap(map: Map | null): void;
            abstract getMap(): Map;
            abstract getPanels(): MapPanels;
            abstract getProjection(): MapProjection;
        }

        export interface MapPanels {
            overlayLayer: HTMLElement;
        }

        export class MapProjection {
            pointFromCoords(latlng: LatLng): Point;
            coordsFromPoint(point: Point): LatLng;
            containerPointFromCoords(latlng: LatLng): Point;
            coordsFromContainerPoint(point: Point): LatLng;
        }

        type StrokeStyles = "solid" | "shortdash" | "shortdot" | "shortdashdot"
        | "shortdashdotdot" | "dot" | "dash" | "dashdot" | "longdash"
        | "longdashdot" | "longdashdotdot";

        export class Polyline {
            constructor(options: Polyline.Options);

            setMap(map: Map | null): void;
            getMap(): Map;
            setOptions(options: Polyline.Options): void;
            setPath(path: LatLng[]): void;
            getPath(): LatLng[];
            getLength(): number;
            setZIndex(zIndex: number): void;
            getZIndex(): number;
        }

        export namespace Polyline {
            export interface Options {
                map?: Map;
                endArrow?: boolean;
                path: LatLng[] | LatLng[][];
                strokeWeight?: number;
                strokeColor?: string;
                strokeOpacity?: number;
                strokeStyle?: StrokeStyles;
                zIndex?: number;
            }
        }

        export class Polygon {
            constructor(options: Polygon.Options);

            setMap(map: Map | null): void;
            getMap(): Map;
            setOptions(options: Polygon.Options): void;
            setPath(path: LatLng[]): void;
            getPath(): LatLng[];
            getLength(): number;
            getArea(): number;
            setZIndex(zIndex: number): void;
            getZIndex(): number;
        }

        export namespace Polygon {
            export interface Options {
                map?: Map;
                fillColor?: string;
                fillOpacity?: number;
                path: LatLng[] | LatLng[][];
                strokeWeight?: number;
                strokeColor?: string;
                strokeOpacity?: number;
                strokeStyle?: StrokeStyles;
                zIndex?: number;
            }
        }

        export class Circle {
            constructor(options: Circle.Options);

            setMap(map: Map | null): void;
            getMap(): Map;
            setOptions(options: Circle.Options): void;
            setPosition(position: LatLng): void;
            getPosition(): LatLng;
            setRadius(radius: number): void;
            getRadius(): number;
            getBounds(): LatLngBounds;
            setZIndex(zIndex: number): void;
            getZIndex(): number;
        }

        export namespace Circle {
            export interface Options {
                map?: Map;
                center: LatLng;
                fillColor?: string;
                fillOpacity?: number;
                radius: number;
                strokeWeight?: number;
                strokeColor?: string;
                strokeOpacity?: number;
                strokeStyle?: StrokeStyles;
                zIndex?: number;
            }
        }

        export class Ellipse {
            constructor(options: Ellipse.Options);

            setMap(map: Map | null): void;
            getMap(): Map;
            setOptions(options: Ellipse.Options): void;
            setPosition(position: LatLng): void;
            getPosition(): LatLng;
            setRadius(radius: number): void;
            getRadius(): number;
            setRadiusX(radius: number): void;
            getRadiusX(): number;
            setRadiusY(radius: number): void;
            getRadiusY(): number;
            getBounds(): LatLngBounds;
            setZIndex(zIndex: number): void;
            getZIndex(): number;
        }

        export namespace Ellipse {
            export interface Options {
                map?: Map;
                center: LatLng;
                fillColor?: string;
                fillOpacity?: number;
                rx: number;
                ry: number;
                strokeWeight?: number;
                strokeColor?: string;
                strokeOpacity?: number;
                strokeStyle?: StrokeStyles;
                zIndex?: number;
            }
        }

        export class Rectangle {
            constructor(options: Rectangle.Options);

            setMap(map: Map | null): void;
            getMap(): Map;
            setOptions(options: Rectangle.Options): void;
            setPosition(position: LatLng): void;
            getPosition(): LatLng;
            setBounds(bounds: LatLngBounds): void;
            getBounds(): LatLngBounds;
            setZIndex(zIndex: number): void;
            getZIndex(): number;
        }

        export namespace Rectangle {
            export interface Options {
                map?: Map;
                bounds: LatLngBounds;
                fillColor?: string;
                fillOpacity?: number;
                strokeWeight?: number;
                strokeColor?: string;
                strokeOpacity?: number;
                strokeStyle?: StrokeStyles;
                zIndex?: number;
            }
        }

        type Shapes = Polyline | Polygon | Circle | Ellipse | Rectangle;

        export namespace event {
            export function addEventListener(marker: Shapes, event: 'mouseover', fn: (mouseEvent: MouseEvent) => void): void;
            export function addEventListener(marker: Shapes, event: 'mouseout', fn: (mouseEvent: MouseEvent) => void): void;
            export function addEventListener(marker: Shapes, event: 'mousemove', fn: (mouseEvent: MouseEvent) => void): void;
            export function addEventListener(marker: Shapes, event: 'mousedown', fn: (mouseEvent: MouseEvent) => void): void;
            export function addEventListener(marker: Shapes, event: 'click', fn: (mouseEvent: MouseEvent) => void): void;

            export function removeEventListener(marker: Shapes, event: 'mouseover', fn: (mouseEvent: MouseEvent) => void): void;
            export function removeEventListener(marker: Shapes, event: 'mouseout', fn: (mouseEvent: MouseEvent) => void): void;
            export function removeEventListener(marker: Shapes, event: 'mousemove', fn: (mouseEvent: MouseEvent) => void): void;
            export function removeEventListener(marker: Shapes, event: 'mousedown', fn: (mouseEvent: MouseEvent) => void): void;
            export function removeEventListener(marker: Shapes, event: 'click', fn: (mouseEvent: MouseEvent) => void): void;

            export function trigger(marker: Shapes, event: 'mouseover', mouseEvent: MouseEvent): void;
            export function trigger(marker: Shapes, event: 'mouseout', mouseEvent: MouseEvent): void;
            export function trigger(marker: Shapes, event: 'mousemove', mouseEvent: MouseEvent): void;
            export function trigger(marker: Shapes, event: 'mousedown', mouseEvent: MouseEvent): void;
            export function trigger(marker: Shapes, event: 'click', mouseEvent: MouseEvent): void;
        }

        export class Roadview {
            constructor(container: HTMLElement, options?: Roadview.Options);

            setPanoId(panoId: number, position: LatLng): void;
            getPanoId(storeId?: number, storePanoId?: number): number;
            setViewpoint(viewpoint: Viewpoint): void;
            getViewpoint(): Viewpoint;
            getViewpointWithPanoId(): Viewpoint & { panoId: number};
            getPosition(): LatLng;
            relayout(): void;
        }

        export namespace Roadview {
            export interface Options {
                panoId?: number;
                panoX?: number;
                panoY?: number;
                pan?: number;
                tilt?: number;
                zoom?: number;
            }
        }

        export namespace event {
            export function addListener(roadview: Roadview, event: 'init', fn: () => void): void;
            export function addListener(roadview: Roadview, event: 'pano_changed', fn: () => void): void;
            export function addListener(roadview: Roadview, event: 'viewpoint_changed', fn: () => void): void;
            export function addListener(roadview: Roadview, event: 'position_changed', fn: () => void): void;

            export function removeListener(roadview: Roadview, event: 'init', fn: () => void): void;
            export function removeListener(roadview: Roadview, event: 'pano_changed', fn: () => void): void;
            export function removeListener(roadview: Roadview, event: 'viewpoint_changed', fn: () => void): void;
            export function removeListener(roadview: Roadview, event: 'position_changed', fn: () => void): void;

            export function trigger(roadview: Roadview, event: 'init'): void;
            export function trigger(roadview: Roadview, event: 'pano_changed'): void;
            export function trigger(roadview: Roadview, event: 'viewpoint_changed'): void;
            export function trigger(roadview: Roadview, event: 'position_changed'): void;
        }

        export class RoadviewClient {
            constructor();

            getNearestPanoId(position: LatLng, radius: number, callback: (panoId: number | null) => void): void;
        }

        export class RoadviewOverlay {
            constructor();

            setMap(map: Map | null): void;
            getMap(): Map;
        }

        export class Viewpoint {
            constructor(pan: number, tilt: number, zoom: number, panoId?: number);

            pan: number;
            tilt: number;
            zoom: number;
            panoId?: number;
        }

        export class StaticMap {
            constructor(container: HTMLElement, options?: StaticMap.Options);

            setCenter(latlng: LatLng): void;
            getCenter(): LatLng;
            setLevel(level: number): void;
            getLevel(): number;
            setMapTypeId(mapTypeId: MapTypeId): void;
            getMapTypeId(): MapTypeId;
        }

        export namespace StaticMap {
            export interface Options {
                center: LatLng;
                level?: number;
                mapTypeId?: MapTypeId;
                marker?: Marker | Marker[];
            }

            export interface Marker {
                position?: LatLng,
                text: string
            }
        }

        export namespace services {
            export enum Status {
                OK, ZERO_RESULT, ERROR
            }

            export enum SortBy {
                ACCURACY, DISTANCE
            }

            export enum Coords {
                WGS84, WCONGNAMUL, CONGNAMUL, WTM, TM
            }

            export class Placses {
                constructor(map?: Map);

                setMap(map: Map | null): void;
                keywordSearch(
                    keyword: string,
                    callback: (result: Places.Document[], status: Status, pagination: Pagination) => void,
                    options: Places.Options
                ): void;
            }

            export namespace Places {
                export interface Options {
                    category_group_code?: string;
                    location?: LatLng;
                    x?: number;
                    y?: number;
                    radius?: number;
                    bounds?: LatLngBounds;
                    rect?: string;
                    size?: number;
                    page?: number;
                    sort?: SortBy;
                    useMapCenter?: boolean;
                    useMapBounds?: boolean;
                }

                export interface Result {
                    meta: Meta;
                    documents: Document[];
                }

                export interface Meta {
                    total_count: number;
                    pageable_count: number;
                    is_end: boolean;
                    same_name: SameName;
                }

                export interface SameName {
                    region: string[];
                    keyword: string;
                    selected_region: string;
                }

                export interface Document {
                    id: string;
                    place_name: string;
                    category_name: string;
                    category_group_code: CategoryCode;
                    category_group_name: string;
                    phone: string;
                    address_name: string;
                    road_address_name: string;
                    x: string;
                    y: number;
                    place_url: string;
                    distance: string;
                }

                export type CategoryCode = "MT1" | "CS2" | "PS3" | "SC4" | "AC5" | "PK6"
                | "OL7" | "SW8" | "BK9" | "CT1" | "AG2" | "PO3" | "AT4" | "AD5" | "FD6"
                | "CE7" | "HP8" | "PM9";
            }

            export class Geocoder {
                constructor();

                addressSearch(
                    addr: string,
                    callback: (result: Geocoder.AddressSearch.Document[], status: Status, pagination: PageTransitionEvent) => void,
                    options: Geocoder.AddressSearch.Options
                ): void;
                coord2Address(
                    x: number, y: number,
                    callback: (result: Geocoder.Coord2Address.Document[], status: Status) => void,
                    options: Geocoder.Coord2Address.Options
                ): void;
                coord2RegionCode(
                    x: number, y: number,
                    callback: (result: Geocoder.Coord2Region.Document[], status: Status) => void,
                    options: Geocoder.Coord2Region.Options
                ): void;
                transCoord(
                    x: number, y: number,
                    callback: (result: Geocoder.TransCoord.Document[], status: Status) => void,
                    options: Geocoder.TransCoord.Options
                ): void;
            }

            export namespace Geocoder {
                export namespace AddressSearch {
                    export interface Options {
                        page?: number;
                        size?: number;
                    }

                    export interface Result {
                        meta: Meta;
                        documents: Document[];
                    }

                    export interface Meta {
                        total_count: number;
                        pageable_count: number;
                        is_end: boolean;
                    }

                    export interface Document {
                        address_name: string;
                        address_type: "REGION" | "ROAD" | "REGION_ADDR" | "ROAD_ADDR";
                        x: string;
                        y: string;
                        address: AddressEx;
                        road_address: RoadAddressEx;
                    }
                }

                export namespace Coord2Address {
                    export interface Options {
                        input_coord: Coords;
                    }

                    export interface Meta {
                        total_count: 0 | 1;
                    }

                    export interface Document {
                        address: Address;
                        road_address: RoadAddress;
                    }
                }

                export namespace Coord2Region {
                    export interface Options {
                        input_coord: Coords;
                        output_coord: Coords;
                    }

                    export interface Result {
                        meta: Meta;
                        documents: Document[];
                    }

                    export interface Meta {
                        total_count: number;
                    }

                    export interface Document {
                        region_type: "H" | "B";
                        address_name: string;
                        region_1depth_name: string;
                        region_2depth_name: string;
                        region_3depth_name: string;
                        region_4depth_name: string;
                        code: string;
                        x: string;
                        y: string;
                    }
                }

                export namespace TransCoord {
                    export interface Options {
                        input_coord: Coords;
                        output_coord: Coords;
                    }

                    export interface Result {
                        meta: Meta;
                        documents: Document[];
                    }

                    export interface Meta {
                        total_count: number;
                    }

                    export interface Document {
                        x: string;
                        y: string;
                    }
                }

                export interface Address {
                    address_name: string;
                    region_1depth_name: string;
                    region_2depth_name: string;
                    region_3depth_name: string;
                    main_address_no: string;
                    sub_address_no: string;
                    zip_code: string;
                }

                export interface AddressEx extends Address {
                    region_3depth_h_name: string;
                    h_code: string;
                    b_code: string;
                    mountain_yn: string;
                    x: string;
                    y: string;
                }

                export interface RoadAddress {
                    address_name: string;
                    region_1depth_name: string;
                    region_2depth_name: string;
                    region_3depth_name: string;
                    road_name: string;
                    underground_yn: "Y" | "N";
                    main_building_no: string;
                    sub_building_no: string;
                    building_name: string;
                    zone_no: string;
                }

                export interface RoadAddressEx extends RoadAddress {
                    x: string;
                    y: string;
                }
            }

            export interface Pagination {
                nextPage(): void;
                prevPage(): void;
                gotoPage(page: number): void;
                gotoFirst(): void;
                gotoLast(): void;

                totalCount: number;
                hasNextPage: boolean;
                hasPrevPage: boolean;
                current: number;
            }
        }

        export class MarkerClusterer {
            constructor(options: MarkerClusterer.Options);

            addMarker(marker: Marker, nodraw?: boolean): void;
            removeMarker(marker: Marker, nodraw?: boolean): void;
            addMarkers(markers: Marker[], nodraw?: boolean): void;
            removeMarkers(markers: Marker[], nodraw?: boolean): void;
            clear(): void;
            redraw(): void;
            getGridSize(): number;
            setGridSize(size: number): void;
            getMinClusterSize(): number;
            setMinClusterSize(size: number): void;
            getAverageCenter(): boolean;
            setAverageCenter(bool: boolean): void;
            getMinLevel(): number;
            setMinLevel(level: number): void;
            getTexts(): string[] | MarkerClusterer.TextGetter;
            setTexts(texts: string[] | MarkerClusterer.TextGetter): void;
            getCalculator(): number[] | MarkerClusterer.Calculator;
            setCalculator(texts: number[] | MarkerClusterer.Calculator): void;
            getStyle(): any[];
            setStyles(styles: any[]): void;
        }

        export namespace MarkerClusterer {
            export interface Options {
                map: Map;
                markers: Marker[];
                gridSize?: number;
                averageCenter?: boolean;
                minLevel?: number;
                minClusterSize?: number;
                styles: any[];
                texts?: string[] | TextGetter;
                calculator?: number[] | Calculator;
                disableClickZoom?: boolean;
                clickable?: boolean;
                hoverable?: boolean;
            }

            export type TextGetter = (size: number) => string;
            export type Calculator = (size: number) => number;
        }

        export namespace event {
            export function addListener(target: MarkerClusterer, event: "clusterclick", fn: (cluster: Cluster) => void): void;
            export function addListener(target: MarkerClusterer, event: "clusterover", fn: (cluster: Cluster) => void): void;
            export function addListener(target: MarkerClusterer, event: "clusterout", fn: (cluster: Cluster) => void): void;
            export function addListener(target: MarkerClusterer, event: "clusterdblclick", fn: (cluster: Cluster) => void): void;
            export function addListener(target: MarkerClusterer, event: "clusterrightclick", fn: (cluster: Cluster) => void): void;
            export function addListener(target: MarkerClusterer, event: "clustered", fn: (clusters: Cluster[]) => void): void;

            export function removeListener(target: MarkerClusterer, event: "clusterclick", fn: (cluster: Cluster) => void): void;
            export function removeListener(target: MarkerClusterer, event: "clusterover", fn: (cluster: Cluster) => void): void;
            export function removeListener(target: MarkerClusterer, event: "clusterout", fn: (cluster: Cluster) => void): void;
            export function removeListener(target: MarkerClusterer, event: "clusterdblclick", fn: (cluster: Cluster) => void): void;
            export function removeListener(target: MarkerClusterer, event: "clusterrightclick", fn: (cluster: Cluster) => void): void;
            export function removeListener(target: MarkerClusterer, event: "clustered", fn: (clusters: Cluster[]) => void): void;
        }

        export class Cluster {
            getCenter(): LatLng;
            getBounds(): LatLngBounds;
            getSize(): number;
            getMarkers(): Marker[];
            getClusterMarker(): CustomOverlay;
        }

        export namespace drawing {
            export enum OverlayType {
                MARKER, RECTANGLE, CIRCLE, ELLIPSE, POLYLINE, ARROW, POLYGON
            }

            export class DrawingManager {
                constructor(options: DrawingManager.Options);

                setStyle(type: OverlayType, prop: string, value: any): void;
                setStrokeWeight(strokeWeight: number): void;
                setStrokeColor(strokeColor: string): void;
                select(type: OverlayType, index?: number): void;
                cancel(): void;
                undo(): void;
                redo(): void;
                redoable(): boolean;
                redoable(): boolean;
                getData(types?: OverlayType[]): any[];
                getOverlays(types?: OverlayType[]): any[];
                put(overlayType: OverlayType, param1: LatLng, param2: number): void;
                put(overlayType: OverlayType, param1: LatLngBounds | LatLng[] | LatLng[][]): void;
                remove(overlay: DrawingManager.ExtendsOverlay): void;

                addListener(event: "select", fn: (e: { overlayType: OverlayType}) => void): void;
                addListener(event: "drawstart", fn: (data: MouseEvent) => void): void;
                addListener(event: "draw", fn: (data: MouseEvent) => void): void;
                addListener(event: "drawend", fn: (data: MouseEvent) => void): void;
                addListener(event: "drawnext", fn: (data: MouseEvent) => void): void;
                addListener(event: "cancel", fn: (e: { overlayType: OverlayType}) => void): void;
                addListener(event: "remove", fn: (e: { overlayType: OverlayType}) => void): void;
                addListener(event: "state_changed", fn: () => void): void;

                removeListener(event: "select", fn: (e: { overlayType: OverlayType}) => void): void;
                removeListener(event: "drawstart", fn: (data: MouseEvent) => void): void;
                removeListener(event: "draw", fn: (data: MouseEvent) => void): void;
                removeListener(event: "drawend", fn: (data: MouseEvent) => void): void;
                removeListener(event: "drawnext", fn: (data: MouseEvent) => void): void;
                removeListener(event: "cancel", fn: (e: { overlayType: OverlayType}) => void): void;
                removeListener(event: "remove", fn: (e: { overlayType: OverlayType}) => void): void;
                removeListener(event: "state_changed", fn: () => void): void;
            }

            export namespace DrawingManager {
                export interface Options {
                    map: Map;
                    guideTooltip?: TooltipType[];
                    drawingMode?: OverlayType[];
                    markerOptions?: MarkerOptions;
                    rectangleOptions?: FilledDrawingOptions;
                    circleOptions?: FilledDrawingOptions;
                    ellipseOptions?: FilledDrawingOptions;
                    polylineOptions?: PolylineOptions;
                    arrowOptions?: ArrowOptions;
                    polygonOptions?: PolygonOptions;
                }

                export type TooltipType = "draw" | "drag" | "edit";

                export interface MarkerOptions {
                    draggable?: boolean;
                    removable?: boolean;
                    maerkerImages?: MarkerImageOptions[];
                }

                export interface MarkerImageOptionsBase {
                    src: string;
                    width: number;
                    height: number;
                    offsetX: number;
                    offsetY: number;
                    spriteWidth: number;
                    spriteHeight: number;
                    spriteOriginX: number;
                    spriteOriginY: number;
                    shape: string;
                    coords: string;
                }

                export interface MarkerImageOptions extends MarkerImageOptionsBase {
                    hoverImage?: MarkerImageOptionsBase;
                    dragImage?: MarkerImageOptionsBase;
                }

                export interface FilledDrawingOptions {
                    draggable?: boolean;
                    removable?: boolean;
                    editable?: boolean;
                    strokeWeight?: number;
                    strokeOpacity?: number;
                    strokeColor?: string;
                    strokeStyle?: StrokeStyles;
                    fillColor?: string;
                    fillOpacity?: number;
                }

                export interface PolylineOptions {
                    draggable?: boolean;
                    removable?: boolean;
                    editable?: boolean;
                    strokeWeight?: number;
                    strokeOpacity?: number;
                    strokeColor?: string;
                    strokeStyle?: StrokeStyles;
                    hintStrokeStyle?: StrokeStyles;
                    hintStrokeOpacity?: number;
                }

                export interface ArrowOptions {
                    draggable?: boolean;
                    removable?: boolean;
                    editable?: boolean;
                    strokeWeight?: number;
                    strokeOpacity?: number;
                    strokeColor?: string;
                    strokeStyle?: StrokeStyles;
                    hintStrokeStyle?: StrokeStyles;
                    hintStrokeOpacity?: number;
                    startArrow?: boolean;
                }

                export interface PolygonOptions {
                    draggable?: boolean;
                    removable?: boolean;
                    editable?: boolean;
                    strokeWeight?: number;
                    strokeOpacity?: number;
                    strokeColor?: string;
                    strokeStyle?: StrokeStyles;
                    fillColor?: string;
                    fillOpacity?: number;
                    hintStrokeStyle?: StrokeStyles;
                    hintStrokeOpacity?: number;
                }

                export interface ExtendsOverlay {}
            }

            export class Toolbox {
                constructor(options: Toolbox.Options);

                getElement(): MapControl;
            }

            export namespace Toolbox {
                export interface Options {
                    drawingManager: DrawingManager;
                }
            }

            export interface MouseEvent {
                overlayType: OverlayType;
                coords: any;
                point: Point;
                target: any;
            }
        }
    }
}