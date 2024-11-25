import type { Metadata } from "next";
import { Header } from "@/shared/components/shared/header";

export const metadata: Metadata = {
  title: "It Global - test",
  description: "It Global - test",
};

export default function HomeLayout({
  modal,
  children,
  dashboard,
  workspace,
}: Readonly<{
  modal: React.ReactNode;
  children: React.ReactNode;
  dashboard: React.ReactNode;
  workspace: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <main className="main">
        {modal}
        {children}
        {dashboard}
        {workspace}
      </main>
    </>
  );
}
