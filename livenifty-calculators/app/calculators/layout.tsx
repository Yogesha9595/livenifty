import Sidebar from "@/components/Sidebar";

export default function CalculatorsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-blue-50 to-green-50 p-8">
      <div className="max-w-7xl mx-auto flex gap-8">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  );
}
