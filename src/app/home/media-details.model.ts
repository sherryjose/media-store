export interface MediaDetails {
    title: string;
    id: string;
    year?: number;
    runningTimeInMinutes?: number;
    image?: Image
    numberOfEpisodes?: number;
    seriesEndYear?: number;
    seriesStartYear?: number;
    titleType?: string;
}

interface Image {
    height: number;
    width: number;
    url: string;
}