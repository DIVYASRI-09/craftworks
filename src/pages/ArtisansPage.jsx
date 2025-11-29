function ArtisansPage() {
  const artisans = [

    {
      name: "Ravi Oraon",
      age: 35,
      place: "Ranchi, Jharkhand",
      product: "Bamboo Basket",
      story: "Ravi hand-weaves bamboo into strong and elegant baskets. He follows eco-friendly techniques taught by local elders. Each basket is unique, reflecting the culture of his village."
    },
    {
      name: "Kishan Munda",
      age: 50,
      place: "Purulia, West Bengal",
      product: "Dhokra Idol",
      story: "Kishan melts metal using traditional lost-wax casting. Every idol is meticulously finished by hand. His craft keeps the Dhokra metalwork alive for future generations."
    },
    {
      name: "Sita Naik",
      age: 28,
      place: "Bhagalpur, Bihar",
      product: "Handloom Stole",
      story: "Sita weaves colorful stoles on handlooms passed down in her family. She combines traditional patterns with contemporary colors. Each stole represents her dedication to textile heritage."
    }
  ];

  return (
    <main className="container" style={{ marginTop: "28px" }}>
      <h1 className="section-title">Our Artisans</h1>
      <p className="section-subtitle">Crafting heritage across regions.</p>

      <div className="elevated" style={{ padding: "18px" }}>
        <p>
          We collaborate with artisan clusters in terracotta, bamboo craft, dhokra metalwork, handloom textiles, and traditional paintings. By co-creating designs and ensuring fair trade practices, we help communities build sustainable livelihoods.
        </p>
        <ul style={{ margin: 0, paddingLeft: "18px" }}>
          <li>Direct-to-artisan pricing</li>
          <li>Design mentorship and quality training</li>
          <li>Market access and storytelling</li>
        </ul>

        <h2 style={{ marginTop: "20px" }}>Artisan Details</h2>
        {artisans.map((artisan, index) => (
          <div key={index} style={{ marginBottom: "18px", padding: "10px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <p><strong>Product:</strong> {artisan.product}</p>
            <p><strong>Name:</strong> {artisan.name}</p>
            <p><strong>Age:</strong> {artisan.age}</p>
            <p><strong>Place:</strong> {artisan.place}</p>
            <p><strong>Story:</strong> {artisan.story}</p>
          </div>
        ))}
      </div>
    </main>
  );
}

export default ArtisansPage;
