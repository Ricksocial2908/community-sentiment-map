const MapOverlay = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* EMEA Label */}
      <div className="absolute top-[25%] left-[45%] transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-white/70 text-4xl font-bold tracking-wider">
          EMEA
        </span>
      </div>

      {/* AMER Label */}
      <div className="absolute top-[30%] left-[20%] transform -translate-x-1/2 -translate-y-1/2">
        <span className="text-white/70 text-4xl font-bold tracking-wider">
          AMER
        </span>
      </div>

      {/* Keep the existing gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/20 to-gray-900/0" />
    </div>
  );
};

export default MapOverlay;
