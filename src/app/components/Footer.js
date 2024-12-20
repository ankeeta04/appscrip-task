export default function Footer() {
    return (
      <footer className="mt-8 bg-gray-100 p-8">
        <div className="flex justify-between">
          <div>
            <h3 className="font-bold mb-4">Be the first to know</h3>
            <input type="email" placeholder="Your email..." className="border p-2" />
            <button className="bg-black text-white p-2 ml-2">Subscribe</button>
          </div>
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul>
              <li><a href="#" className="hover:underline">Orders & Shipping</a></li>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              {/* Add more links */}
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            {/* Add social media links */}
          </div>
        </div>
      </footer>
    );
  }
  