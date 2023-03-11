type Properties = {
    minValue: number;
    maxValue: number;
    multiline: boolean;
    lineCount: number;
    dateFormat: string;
}


export type NumberProperty = Pick<Properties, "minValue" | "maxValue">;
export type StringProperty = Pick<Properties, "multiline" | "lineCount">;
export type DateProperty = Pick<Properties,"dateFormat">;