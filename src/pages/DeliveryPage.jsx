import { useEffect, useState } from "react";
import axios from "axios";

function DeliveryPage() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch orders from backend
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/delivery-orders") // replace with your API
      .then((res) => {
        setOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch orders");
        setLoading(false);
      });
  }, []);

  // Update order status
  const updateStatus = (orderId, newStatus) => {
    axios
      .put(`http://localhost:5000/api/delivery-orders/${orderId}`, {
        status: newStatus,
      })
      .then((res) => {
        // Update order locally
        setOrders((prev) =>
          prev.map((order) =>
            order.id === orderId ? { ...order, status: newStatus } : order
          )
        );
      })
      .catch((err) => {
        alert("Failed to update status");
      });
  };

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>Delivery Page</h1>
      <p>Here you can see and update orders for delivery.</p>

      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Product</th>
            <th>Status</th>
            <th>Update Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.product}</td>
              <td>{order.status}</td>
              <td>
                <button onClick={() => updateStatus(order.id, "Delivered")}>
                  Delivered
                </button>
                <button onClick={() => updateStatus(order.id, "Pending")}>
                  Pending
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DeliveryPage;

