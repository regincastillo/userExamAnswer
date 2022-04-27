export interface EntriesData {
  entriesData: Entries[];
  pending: boolean;
  loaded: boolean;
}

export interface Entries {
  id: string
  API: string;
  Description: string;
  Auth: string;
  Category: string;
}


export interface Action  {
  payload: any;
  type: string;
}