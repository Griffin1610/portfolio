export default function CornerTriangles() {
  return (
    <div className="fixed bottom-0 right-0 w-40 h-40">
      <div className="absolute bottom-0 right-0 w-150 h-75 bg-blue-300 hover:bg-heading1 transition-colors duration-300 clip-triangle" />

      <div className="absolute bottom-0 right-0 w-80 h-40 bg-blue-500  hover:bg-heading1 transition-colors duration-300 clip-triangle" />

      <div className="absolute bottom-0 right-0 w-25 h-12 bg-heading2  hover:bg-heading1 transition-colors duration-300 clip-triangle" />
    </div>
  );
}
