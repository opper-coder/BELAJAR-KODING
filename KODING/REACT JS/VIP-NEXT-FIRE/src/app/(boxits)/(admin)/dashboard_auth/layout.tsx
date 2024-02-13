import React from "react";

export default function Layout({
  children,
  product2,
  analytic,
  payments,
}: {
  children: React.ReactNode;
  product2: React.ReactNode;
  analytic: React.ReactNode;
  payments: React.ReactNode;
}) {
  return (
    <>
      <div className="p-5">{children}</div>
      <div className="px-5 flex gap-5">
        {product2}
        {analytic}
      </div>
      <div className="p-5">{payments}</div>
    </>
  );
}
