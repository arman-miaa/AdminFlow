const PatientLocationMap = () => {
  const locations = [
    { name: "Malihog", count: 35, x: "20%", y: "30%" },
    { name: "Dharmapuri", count: 5, x: "60%", y: "40%" },
    { name: "Mohammadpur", count: 14, x: "80%", y: "60%" },
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold mb-4">Patient Location Trend</h3>
      <div className="flex space-x-4 mb-4">
        {locations.map((loc, index) => (
          <span key={index} className="text-sm text-blue-600">
            {loc.name} {loc.count}
          </span>
        ))}
      </div>
      <div className="relative h-48 bg-gray-100 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-300"></div>
        {locations.map((loc, index) => (
          <div
            key={index}
            className="absolute w-4 h-4 bg-blue-500 rounded-full transform -translate-x-1/2 -translate-y-1/2"
            style={{ left: loc.x, top: loc.y }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default PatientLocationMap;
