import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Form Submissions - Weber Admin",
  description: "View and manage form submissions",
};

export default function FormsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
