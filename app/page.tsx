export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-6">
          PostgreSQL Database as a Service
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Create temporary PostgreSQL databases in seconds.
        </p>

        <button className="bg-black text-white px-8 py-4 rounded mt-6">
          Get Started
        </button>
      </div>
    </main>
  );
}