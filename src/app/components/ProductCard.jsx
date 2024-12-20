export default function ProductCard({ image, name }) {
    return (
      <div className="border p-4">
        <img src={image} alt={name} className="mb-4 w-full h-40 object-cover" />
        <h3 className="font-bold">{name}</h3>
        <p className="text-gray-600">Status to check on accurate live pricing</p>
      </div>
    );
  }
  