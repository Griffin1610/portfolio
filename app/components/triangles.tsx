export default function CornerTriangles() {
  return (
    <div className="fixed bottom-0 right-0 w-40 h-40">
      <div className="absolute bottom-0 right-0 w-[32em] h-[16em] max-w-[30vw] max-h-[15vw] bg-blue-300 hover:bg-heading1 transition-colors duration-300 clip-triangle" />

      <div className="absolute bottom-0 right-0 w-[20em] h-[10em] max-w-[20vw] max-h-[10vw] bg-blue-500  hover:bg-heading1 transition-colors duration-300 clip-triangle" />

      <div className="absolute bottom-0 right-0 w-[8em] h-[4em] max-w-[12vw] max-h-[6vw] bg-heading2  hover:bg-heading1 transition-colors duration-300 clip-triangle" />
    </div>
  );
}
