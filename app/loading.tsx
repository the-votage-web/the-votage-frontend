export default function Loading() {
  return (
    <div className="min-h-[70vh] bg-black text-white flex flex-col items-center justify-center gap-4">
      <div className="relative flex items-center justify-center">
        <div className="w-12 h-12 rounded-full border-2 border-white/20 border-t-white animate-spin" />
      </div>
      <p className="text-sm font-medium tracking-wider uppercase text-white/50">
        Loading...
      </p>
    </div>
  );
}
