export interface PickerOptions {
  pickerOptions: {
    data: PickerItem[];
    onPickerSelectOption: (data: PickerItem[]) => void;
  };
}

export interface PickerItem {
  id: string;
  label: string;
  value: string;
}
