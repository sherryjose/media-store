export interface TitleSuggestions {
    d: TitleData[];
    q: string;
    v: number;
}

export interface TitleData {
    i?: Image;
    id: string;
    l: string;
    q?: string;
    rank?: number;
    s?: string;
    y?: number;
}

interface Image {
    height: number;
    width: number;
    imageUrl: string;
}