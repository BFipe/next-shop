"use client";

import ErrorHandler from "@/src/components/common/ErrorHandler/ErrorHandler";

export default function Error() {
  return <ErrorHandler showRetryButton={false} />;
}
