import "./App.css";
import Rain from "./rain";

function App() {
  return (
    <>
      <Rain />
      <div className="min-h-screen bg-white text-gray-800 flex flex-col">
        {/* Hero */}
        <header className="bg-blue-600 text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">Happy Robot Factory</h1>
            <p className="text-xl mb-8">We build Twitter bots for small businesses.</p>
            <a href="/contact" className="inline-block bg-white text-blue-600 font-semibold py-3 px-6 rounded shadow hover:bg-gray-100 transition">
              Get Started
            </a>
          </div>
        </header>

        {/* Features */}
        <main className="flex-grow container mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">Automation</h2>
              <p>Schedule tweets and replies without lifting a finger.</p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">Engagement</h2>
              <p>Automatically interact with your audience to boost visibility.</p>
            </div>
            <div className="text-center p-6 border rounded-lg shadow-sm hover:shadow-md transition">
              <h2 className="text-2xl font-semibold mb-2">Growth</h2>
              <p>Analyze performance and optimize for follower growth.</p>
            </div>
          </div>
        </main>

        {/* Footer CTA */}
        <footer className="bg-gray-100 py-8">
          <div className="container mx-auto px-6 text-center">
            <p className="mb-4">Ready to see what your bot can do?</p>
            <a href="/signup" className="inline-block bg-blue-600 text-white font-semibold py-2 px-5 rounded hover:bg-blue-700 transition">
              Sign Up Now
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
