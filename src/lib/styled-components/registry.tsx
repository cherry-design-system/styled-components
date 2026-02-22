"use client";
import React, { useState } from "react";
import { useServerInsertedHTML } from "next/navigation";
import { ServerStyleSheet, StyleSheetManager } from "styled-components";

function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  const isServer = typeof window === "undefined";

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  return (
    <StyleSheetManager
      sheet={isServer ? styledComponentsStyleSheet.instance : undefined}
      enableVendorPrefixes
    >
      {children}
    </StyleSheetManager>
  );
}

export { StyledComponentsRegistry };
