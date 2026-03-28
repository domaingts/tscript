interface Ctx {
    env?: Record<string, string>;
    device: Device,
    proxy: any;
    http: {
        get(url: string, options?: Options): Promise<Response>;
        post(url: string, options?: Options): Promise<Response>;
    };
    widgetFamily: string,
}

interface Device {
    cellular?: Cellular,
    wifi?: Wifi,
    ipv4?: Ipv4,
    ipv6?: Ipv6,
    dnsServers?: string[],
}

interface Cellular {
    carrier?: string,
    radio?: string,
}

interface Wifi {
    ssid?: string,
    bssid?: string,
}

interface Ipv4 {
    address?: string,
    gateway?: string,
    interface?: string,
}

interface Ipv6 {
    address?: string,
    interface?: string,
}

interface Options {
    headers?: Headers | Record<string, string | string[]>;
    body?: string | Uint8Array | Object | ReadableStream;
    timeout?: number;
}

// egern.d.ts

/** Widget Configuration in Egern Profile */
interface WidgetConfig {
    /** Unique widget name (must match a generic script if not set manually) */
    name: string;
    /** Optional script name if different from widget name */
    script_name?: string;
    /** Optional environment variables passed to widget script */
    env?: Record<string, string>;
}

/** Egern Profile configuration (partial) */
interface EgernProfile {
    widgets?: WidgetConfig[];
    // Note: other config sections omitted for brevity
}

/** Widget size families */
type WidgetFamily =
    | "systemSmall"
    | "systemMedium"
    | "systemLarge"
    | "systemExtraLarge"
    | "accessoryCircular"
    | "accessoryRectangular"
    | "accessoryInline";

/** Base element properties shared by all widget elements */
interface BaseElement {
    type: string;
    /** Optional URL to open when tapped */
    url?: string;
    /** Optional opacity (0.0–1.0) */
    opacity?: number;
    /** Optional flex value for layout */
    flex?: number;
    /** Optional padding */
    padding?: number | [number, number, number, number];
    /** Optional background color */
    backgroundColor?: Color | AdaptiveColor;
    /** Optional background gradient */
    backgroundGradient?: Gradient;
    /** Optional background image */
    backgroundImage?: string;
}

/** Widget root container */
interface WidgetElement extends BaseElement {
    type: "widget";
    children: Element[];
    /** Optional spacing between children */
    gap?: number;
    /** Optional refresh time (ISO 8601) */
    refreshAfter?: string;
}

/** Stack container */
interface StackElement extends BaseElement {
    type: "stack";
    // direction?: "row" | "column";
    // alignItems?: "start" | "center" | "end";
    direction?: string;
    alignItems?: string;
    gap?: number;
    children: BaseElement[];
}

/** Text element */
interface TextElement extends BaseElement {
    type: "text";
    text: string;
    font?: Font;
    textColor?: Color | AdaptiveColor;
    textAlign?: "left" | "center" | "right";
    maxLines?: number;
    minScale?: number;
}

/** Image element */
interface ImageElement extends BaseElement {
    type: "image";
    src: string;
    color?: Color | AdaptiveColor;
    /** Optional resize mode */
    resizeMode?: "contain" | "cover";
    /** Optional size override */
    width?: number;
    height?: number;
    resizable?: boolean;
    borderRadius?: number | "auto";
    borderWidth?: number;
    borderColor?: Color;
}

/** Spacer element */
interface SpacerElement extends BaseElement {
    type: "spacer";
    length?: number;
}

/** Date element */
interface DateElement extends BaseElement {
    type: "date";
    date: string; // ISO 8601
    format?: string;
    font?: Font;
    textColor?: Color | AdaptiveColor;
    textAlign?: "left" | "center" | "right";
    maxLines?: number;
    minScale?: number;
}

/** Union of all widget elements */
type Element =
    | WidgetElement
    | StackElement
    | TextElement
    | ImageElement
    | SpacerElement
    | DateElement;

/** Font description */
interface Font {
    size?: number | string;
    // weight?: "ultraLight" | "thin" | "light" | "regular" | "medium" | "semibold" | "bold" | "heavy" | "black";
    weight?: string;
    family?: string;
}

/** Color can be a simple string or adaptive across light/dark */
type Color = string;
interface AdaptiveColor {
    light: string;
    dark: string;
}

/** Gradient types */
interface Gradient {
    type: "linear" | "radial" | "angular";
    colors: string[];
    stops?: number[];
    /** Linear fields */
    startPoint?: Point;
    endPoint?: Point;
    /** Radial fields */
    center?: Point;
    startRadius?: number;
    endRadius?: number;
    /** Angular fields */
    startAngle?: number;
    endAngle?: number;
}

/** Simple point coordinate */
interface Point {
    x: number;
    y: number;
}

/** Global `ctx` available in Egern Widget Scripts */
interface EgernCtx {
    widgetFamily?: WidgetFamily;
    env: Record<string, string>;
}

/**
 * Widget Script return type
 * The root must be a widget element
 */
type WidgetDSL = WidgetElement;