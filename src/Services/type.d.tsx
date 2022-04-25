import {HeadersDefaults} from 'axios';

export interface UseApiParams  {
    headers?: HeadersDefaults | {};
    params?: object;
    url: string;
}