import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import usePreferredColorScheme from "../../../hooks/usePreferredColorScheme";
import { theme } from "../../../styles";

export const QuoteLoader = () => {
  const preferredColorScheme = usePreferredColorScheme();
  const preferredTheme = theme[preferredColorScheme];

  return (
    <SkeletonTheme
      color={preferredTheme.colors.surface3}
      highlightColor={preferredTheme.colors.surface4}
    >
      <p>
        <Skeleton count={5} />
      </p>
    </SkeletonTheme>
  );
};
