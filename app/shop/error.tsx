"use client";

import ErrorHandler from "@/src/components/common/ErrorHandler/ErrorHandler";

export default function Error({ reset }: { reset: () => void }) {
  return <ErrorHandler reset={reset} />;
}
