export interface PickerOptions {
  pickerOptions: {
    data: PickerItem[];
    onPickerSelectOption: (data: PickerItem[]) => void;
    pickerArraySelected: PickerItem[];
    setPickerArraySelected: (data: PickerItem[]) => void;
    multiple?: boolean;
  };
}

export interface TextOptions {
  textOptions: {
    contextMenuHidden?: boolean;
    error?: boolean;
  };
}

export interface PickerItem {
  id: string;
  label: string;
  value: string;
}
