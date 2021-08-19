import React from "react";

export const Label = ({ relatesTo, children }) => (
  <label className="labelStyle" for={relatesTo}>
    {children}
  </label>
);
