export default function Sidebar() {
    return (
      <aside className="w-1/4 p-4 border-r">
        <h2 className="font-bold mb-4">Filters</h2>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Customizable</h3>
          <label><input type="checkbox" className="mr-2"/> Yes</label>
        </div>
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Ideal For</h3>
          <label><input type="checkbox" className="mr-2"/> Men</label><br/>
          <label><input type="checkbox" className="mr-2"/> Women</label><br/>
          <label><input type="checkbox" className="mr-2"/> Kids</label>
        </div>
        {/* Add other filters as per the image */}
      </aside>
    );
  }
  