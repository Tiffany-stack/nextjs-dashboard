import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      {/* Sidebar */}
      <nav className="w-full flex-none md:w-64 p-4 bg-gray-200">
        <ul>
          <li>
            <Link href="/dashboard">🏠 Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/customers">👥 Customers</Link>
          </li>
          <li>
            <Link href="/dashboard/invoices">📄 Invoices</Link>
          </li>
        </ul>
      </nav>

      {/* Main content */}
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
