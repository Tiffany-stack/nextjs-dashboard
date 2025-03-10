async function getCustomers() {
    // Simulate fetching data (replace with actual API call)
    return [
      { id: 1, name: "Alice Johnson", email: "alice@example.com" },
      { id: 2, name: "Bob Smith", email: "bob@example.com" },
    ];
  }
  
  export default async function CustomersPage() {
    const customers = await getCustomers();
  
    return (
      <div>
        <h1 className="text-2xl font-bold mb-4">Customers</h1>
        <ul>
          {customers.map((customer) => (
            <li key={customer.id} className="border-b py-2">
              <p className="font-medium">{customer.name}</p>
              <p className="text-sm text-gray-500">{customer.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  