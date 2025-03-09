export type strokeColor = "#000000" | "#FF0000" | "#2196f3" | "#008000" | "#ffab5b"

export interface Stroke{
    points: Offset[],
    color: strokeColor,
    brushSize: number,
}

export interface Offset{
    x: number,
    y: number,
}