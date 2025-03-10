async function getInvoices() {
    return [
      { id: 101, amount: "$250", status: "Paid" },
      { id: 102, amount: "$150", status: "Pending" },
    ];
  }
  
  export default async function InvoicesPage() {
    const invoices = await getInvoices();
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Invoices</h1>
        <ul>
          {invoices.map((invoice) => (
            <li key={invoice.id} className="border-b py-2">
              <p>Invoice #{invoice.id}</p>
              <p>Amount: {invoice.amount}</p>
              <p>Status: {invoice.status}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  