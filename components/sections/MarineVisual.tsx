export default function MarineVisual() {
  return (
    <section className="relative h-[500px] md:h-[600px] flex items-center justify-center">
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-[#0A192F]"
        // Replace with actual image when available, using linear-gradient as a placeholder for the overlay
        style={{
          backgroundImage: `linear-gradient(to right, rgba(10, 25, 47, 0.8) 0%, rgba(10, 25, 47, 0.4) 100%), url('https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?q=80&w=2664&auto=format&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed' // Simple parallax effect
        }}
      ></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mx-auto drop-shadow-lg">
          Supporting the equipment needs of vessels
        </h2>
      </div>
    </section>
  );
}
