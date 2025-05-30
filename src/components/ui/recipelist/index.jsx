import Link from "next/link";
export const metadata = {
  title: "Food List ",
  description: "Generated by create next app",
};
export default function RecipeList({ product }) {
    return (
        <div className="p-4 pt-28">
            <h1 className="text-3xl font-bold mb-6 text-center">Featured Recipe</h1>
            <div className="grid px-4 sm:px-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    product.map((product, index) => (
                        <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition duration-300">
                            <Link href={`/recipe/${product.id}`} >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h2 className="text-xl font-semibold mb-2">{product.name}</h2>

                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {product.tags.map((tag, i) => (
                                            <span key={i} className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded-full">
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>

                                    <p className="text-sm text-gray-600 mb-2">
                                        <strong>Difficulty:</strong> {product.difficulty} | <strong>Rating:</strong> {product.rating} ⭐ ({product.reviewCount} reviews)
                                    </p>

                                    <p className="text-sm text-gray-600 mb-2">
                                        <strong>Prep:</strong> {product.prepTimeMinutes} mins | <strong>Cook:</strong> {product.cookTimeMinutes} mins
                                    </p>

                                    <div className="mt-4">
                                        <h3 className="font-semibold mb-1">Ingredients:</h3>
                                        <ul className="list-disc list-inside text-sm text-gray-700">
                                            {product.ingredients?.map((ingredient, i) => (
                                                <li key={i}>{ingredient}</li>
                                            ))}
                                            {/* {product.ingredients.length > 3 && (
                                                <li className="italic text-gray-400">+ more...</li>
                                            )} */}
                                        </ul>
                                    </div>
                                </div>
                            </Link>

                        </div>

                    ))
                }

            </div>
        </div>
    );
}
