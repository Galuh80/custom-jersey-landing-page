export type DesignPattern =
    | "solid"
    | "vertical-stripes"
    | "hoops"
    | "pinstripes"
    | "diagonal"
    | "sash"
    | "halves"
    | "yoke"
    | "gradient"
    | "checker"
    | "side-panels"
    | "center-block"
    | "v-sash"
    | "yoke-stripes"
    | "double-sash"
    | "shoulder-panels"
    | "chest-band"
    | "gradient-hem"
    | "lightning";

export interface DesignPreset {
    id: string;
    name: string;
    pattern: DesignPattern;
    colors: [string, string];
    stripeCount?: number;
    stripeWidth?: number;
}

export const designPresets: DesignPreset[] = [
    {
        id: "rayo",
        name: "Rayo",
        pattern: "v-sash",
        colors: ["#0789e8", "#123b69"],
        stripeWidth: 17,
    },
    {
        id: "strike",
        name: "Strike",
        pattern: "shoulder-panels",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "vivo",
        name: "Vivo",
        pattern: "chest-band",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "sweep",
        name: "Sweep",
        pattern: "diagonal",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 1,
        stripeWidth: 22,
    },
    {
        id: "monaco",
        name: "Monaco",
        pattern: "double-sash",
        colors: ["#0789e8", "#123b69"],
        stripeWidth: 16,
    },
    {
        id: "pure",
        name: "Pure",
        pattern: "solid",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 0,
    },
    {
        id: "dirt",
        name: "Dirt",
        pattern: "gradient-hem",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "spartak",
        name: "Spartak",
        pattern: "center-block",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "ajax",
        name: "Ajax",
        pattern: "side-panels",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "olympique",
        name: "Olympique",
        pattern: "halves",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "deportivo",
        name: "Deportivo",
        pattern: "pinstripes",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 7,
        stripeWidth: 4,
    },
    {
        id: "calcio",
        name: "Calcio",
        pattern: "yoke-stripes",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 3,
    },
    {
        id: "cross",
        name: "Cross",
        pattern: "sash",
        colors: ["#0789e8", "#123b69"],
        stripeWidth: 18,
    },
    {
        id: "city",
        name: "City",
        pattern: "solid",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 0,
    },
    {
        id: "tackle",
        name: "Tackle",
        pattern: "hoops",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 3,
    },
    {
        id: "pool",
        name: "Pool",
        pattern: "vertical-stripes",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 1,
        stripeWidth: 18,
    },
    {
        id: "style",
        name: "Style",
        pattern: "v-sash",
        colors: ["#0789e8", "#123b69"],
        stripeWidth: 12,
    },
    {
        id: "nou-camp",
        name: "Nou Camp",
        pattern: "vertical-stripes",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 3,
        stripeWidth: 19,
    },
    {
        id: "steps",
        name: "Steps",
        pattern: "hoops",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 7,
    },
    {
        id: "gladiator",
        name: "Gladiator",
        pattern: "shoulder-panels",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "fight",
        name: "Fight",
        pattern: "solid",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 0,
    },
    {
        id: "horizon",
        name: "Horizon",
        pattern: "vertical-stripes",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 1,
        stripeWidth: 24,
    },
    {
        id: "level",
        name: "Level",
        pattern: "side-panels",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "champion",
        name: "Champion",
        pattern: "yoke",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "maracana",
        name: "Maracana",
        pattern: "chest-band",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "hattrick",
        name: "Hattrick",
        pattern: "double-sash",
        colors: ["#0789e8", "#123b69"],
        stripeWidth: 12,
    },
    {
        id: "san-siro",
        name: "San Siro",
        pattern: "shoulder-panels",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "captain",
        name: "Captain",
        pattern: "solid",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 0,
    },
    {
        id: "victory",
        name: "Victory",
        pattern: "yoke",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "final",
        name: "Final",
        pattern: "solid",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 0,
    },
    {
        id: "zebra",
        name: "Zebra",
        pattern: "diagonal",
        colors: ["#0789e8", "#123b69"],
        stripeCount: 5,
        stripeWidth: 7,
    },
    {
        id: "orion",
        name: "Orion",
        pattern: "lightning",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "burn",
        name: "Burn",
        pattern: "gradient-hem",
        colors: ["#0789e8", "#123b69"],
    },
    {
        id: "solid-brand",
        name: "Solid Kuning",
        pattern: "solid",
        colors: ["#fef013", "#fef013"],
        stripeCount: 0,
    },
    {
        id: "classic-blue",
        name: "Classic Blue",
        pattern: "vertical-stripes",
        colors: ["#1e3a8a", "#ffffff"],
        stripeCount: 2,
        stripeWidth: 10,
    },
    {
        id: "tackle-red",
        name: "Tackle Hoops",
        pattern: "hoops",
        colors: ["#b91c1c", "#f8fafc"],
        stripeCount: 3,
    },
    {
        id: "pinstripe-navy",
        name: "Pinstripe Navy",
        pattern: "pinstripes",
        colors: ["#0f172a", "#38bdf8"],
        stripeCount: 4,
        stripeWidth: 6,
    },
    {
        id: "sash-forest",
        name: "Sash Forest",
        pattern: "sash",
        colors: ["#065f46", "#fef013"],
        stripeWidth: 14,
    },
    {
        id: "split-violet",
        name: "Split Violet",
        pattern: "halves",
        colors: ["#7c3aed", "#ffffff"],
    },
    {
        id: "yoke-sky",
        name: "Yoke Sky",
        pattern: "yoke",
        colors: ["#0ea5e9", "#082f49"],
    },
    {
        id: "gradient-flame",
        name: "Gradient Flame",
        pattern: "gradient",
        colors: ["#ef4444", "#7f1d1d"],
    },
    {
        id: "checker-mono",
        name: "Checker Mono",
        pattern: "checker",
        colors: ["#111827", "#f9fafb"],
        stripeCount: 5,
    },
    {
        id: "diagonal-amber",
        name: "Diagonal Amber",
        pattern: "diagonal",
        colors: ["#f59e0b", "#1f2937"],
        stripeCount: 3,
        stripeWidth: 12,
    },
    {
        id: "side-panel-red",
        name: "Side Panel Red",
        pattern: "side-panels",
        colors: ["#ffffff", "#dc2626"],
    },
    {
        id: "sky-hoops",
        name: "Sky Hoops",
        pattern: "hoops",
        colors: ["#0284c7", "#e0f2fe"],
        stripeCount: 2,
    },
    {
        id: "gold-pinstripe",
        name: "Gold Pinstripe",
        pattern: "pinstripes",
        colors: ["#111827", "#facc15"],
        stripeCount: 5,
        stripeWidth: 5,
    },
    {
        id: "blackout",
        name: "Blackout",
        pattern: "solid",
        colors: ["#0b0b0b", "#1f2937"],
        stripeCount: 0,
    },
    {
        id: "center-emerald",
        name: "Center Block",
        pattern: "center-block",
        colors: ["#ecfdf5", "#059669"],
    },
];
