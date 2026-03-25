export const metadata = {
  title: "Studio CMS — Cammarota Galgano",
  description: "Content Management Studio",
};

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div style={{ height: "100vh", maxHeight: "100vh", overflowY: "auto" }}>
      {children}
    </div>
  );
}
