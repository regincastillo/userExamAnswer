export interface SnackBarProp {
    children?: string;
    severity: "error" | "success" | undefined;
    show: boolean;
  }