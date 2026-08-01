export interface FieldConfig {
  name?: string;
  id?: string;
  label?: string;
  title?: string;
  type?: string;
  required?: boolean;
  options?: Array<string | { label: string; value: any }>;
  placeholder?: string;
  [key: string]: any;
}

export interface SectionConfig {
  title?: string;
  description?: string;
  fields?: FieldConfig[];
  [key: string]: any;
}

export type PropertyConfig = SectionConfig[] | Record<string, any>;
