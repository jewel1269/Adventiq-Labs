// components/toast/toasts.tsx
"use client";

import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { CustomToast } from "./customToast";

export function AppToaster() {
  return (
    <Toaster
      position="top-right"
      toastOptions={{
        duration: 5000,
      }}
      containerStyle={{
        top: 24,
        right: 24,
      }}
      gutter={12}
    />
  );
}

/** Helpers */
export const showSuccess = (
  title: string,
  description?: string,
  opts?: { action?: { label: string; onClick: () => void } }
) => {
  toast.custom(
    (t) => (
      <CustomToast
        t={t}
        title={title}
        description={description}
        variant="success"
        action={opts?.action}
      />
    ),
    { duration: 4000 }
  );
};

export const showError = (
  title: string,
  description?: string,
  opts?: { action?: { label: string; onClick: () => void } }
) => {
  toast.custom(
    (t) => (
      <CustomToast
        t={t}
        title={title}
        description={description}
        variant="error"
        action={opts?.action}
      />
    ),
    { duration: 6000 }
  );
};

export const showLoading = (title: string, description?: string) => {
  // keep loading toast open until manually dismissed
  const id = `loading_${Date.now()}`;
  toast.custom(
    (t) => (
      <CustomToast
        t={t}
        title={title}
        description={description}
        variant="loading"
      />
    ),
    { id, duration: Infinity }
  );
  return id;
};

export const dismissToast = (id?: string) => {
  if (id) toast.dismiss(id);
  else toast.dismiss();
};
