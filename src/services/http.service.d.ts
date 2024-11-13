export interface ApiResponse<T = unknown> {
    status: number;
    data: T;
}
export declare const GET: (apiPath: string) => Promise<ApiResponse>;
