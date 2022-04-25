import { Entries } from "@Store/Entries/Entries.type";



export interface EntrieForm {
  Category: { value: string };
  Description: { value: string };
  id: { value: string };
  API: { value: string };
  Auth: { value: string };
}

export interface CreateViewModalProps {
  open?: boolean;
  onClose?: () => void;
  onProceed?: (entrie: Entries) => void;
  type?: string;
  data?: Entries;
}
