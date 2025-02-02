import React, { useState } from "react";
import { HexColorPicker, HexColorInput } from "react-colorful";

interface Props {
  value?: string;
  onPickerChange: (color: string) => void;
}
const ColorPicker = ({ value, onPickerChange }: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center">
        <p>#</p>
        <HexColorInput
          color={value}
          onChange={onPickerChange}
          className="hex-input"
        />
        <HexColorPicker color={value} onChange={onPickerChange} />
      </div>
    </div>
  );
};

export default ColorPicker;
