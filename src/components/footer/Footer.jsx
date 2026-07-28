function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>&copy; {new Date().getFullYear()} MyStore. All rights reserved.</p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-orange-400">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-orange-400">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
