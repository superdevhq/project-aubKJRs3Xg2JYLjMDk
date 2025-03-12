
const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-grow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Hello World</h1>
        </div>
      </div>
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; {new Date().getFullYear()} My Website. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
