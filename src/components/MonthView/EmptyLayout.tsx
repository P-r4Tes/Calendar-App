export function EmptyLayout() {
  return (
    <div className="flex flex-col h-full">
      {Array(6)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="flex flex-1">
            {Array(7)
              .fill(0)
              .map((_, index) => (
                <div key={index} className="flex flex-1 border border-gray-200"></div>
              ))}
          </div>
        ))}
    </div>
  );
}
