type ResponseData = {
    location: string;
    time: string;
    rating: number;
};
type Timeframe = {
    from: string;
    to: string;
};
type ForecastData = {
    generatedAt: string;
    requestedAt: string;
    location: string;
    dataStartAt: string;
    dataEndAt: string;
    windowSize: number;
    optimalDataPoints: OptimalDataPoint[];
    forecastData: ForecastDataPoint[];
};
type OptimalDataPoint = {
    location: string;
    timestamp: string;
    duration: number;
    value: number;
};
type ForecastDataPoint = {
    location: string;
    timestamp: string;
    duration: number;
    value: number;
};
type ApiResponse = {
    location: string;
    time: string;
    rating: number;
    duration: string;
};
type Forecast = {
    location: string;
    timeframe: Timeframe;
    rating: number;
    n: number;
    decay: number;
};
type Suggestion = {
    location: string;
    time: string;
    rating: number;
    duration: string;
};
