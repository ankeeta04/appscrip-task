export default function Header() {
    return (
      <header className="flex justify-between items-center px-6 py-4 border-b">
        <div className="text-xl font-bold">LOGO</div>
        <nav className="flex gap-6">
          <a href="#" className="hover:underline">Shop</a>
          <a href="#" className="hover:underline">Skills</a>
          <a href="#" className="hover:underline">Stories</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact Us</a>
        </nav>
        <div className="flex gap-4">
          <a href="#">Login</a>
          <a href="#">Cart</a>
        </div>
      </header>
    );
  }
  