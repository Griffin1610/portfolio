export default function CornerTriangles() {
  return (
    <div className="fixed bottom-0 right-0 w-40 h-40">
      <div className="absolute bottom-0 right-0 w-[32em] h-[16em] max-w-[30vw] max-h-[15vw] clip-triangle tri-glow-1" />

      <div className="absolute bottom-0 right-0 w-[20em] h-[10em] max-w-[20vw] max-h-[10vw] clip-triangle tri-glow-2" />

      <div className="absolute bottom-0 right-0 w-[8em] h-[4em] max-w-[12vw] max-h-[6vw] clip-triangle tri-glow-3" />
    </div>
  );
}
