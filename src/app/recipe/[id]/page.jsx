import Link from "next/link";


async function getData(id) {
    try {
        const res = await fetch(`https://dummyjson.com/recipes/${id}`)
        const data = await res.json();
        return data
    } catch (e) {
        throw new Error(error);

    }
}


export default async function page({ params }) {
    const recipeId = await getData(params.id)
    return (
        <div className="p-5 py-30 px-8 sm:px-16 " >
            <div className="flex flex-wrap gap-5" >

                <div>
                    <img src={recipeId.image} width={400} alt="" />
                </div>
                <div>
                    <h1 className="font-bold text-xl" >{recipeId.name}</h1>
                    <div>

                        <h2 className="italic mt-4 mb-2" >Ingredients:</h2>
                        <ul className="ml-5 list-disc grid grid-cols-1 lg:grid-cols-2 " >
                            {recipeId.ingredients.map((it, i) => (
                                <li key={i} >{it}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="my-5" >

                        <h2 className="italic mt-4 mb-2" >Instructions:</h2>

                        <ol className="ml-5 list-decimal grid " >
                            {recipeId.instructions.map((it, i) => (
                                <li key={i} >{it}</li>
                            ))}
                        </ol>
                    </div>
                    <div>
                        <p className="text-sm text-gray-600 mb-2">
                            <strong>Difficulty:</strong> {recipeId.difficulty} | <strong>Rating:</strong> {recipeId.rating} ⭐ ({recipeId.reviewCount} reviews)
                        </p>

                        <p className="text-sm text-gray-600 mb-2">
                            <strong>Prep:</strong> {recipeId.prepTimeMinutes} mins | <strong>Cook:</strong> {recipeId.cookTimeMinutes} mins
                        </p>
                    </div>

                </div>
            </div>

            <Link href={'/'} className="bg-black text-white px-4 py-2.5 " >Back to HOME</Link>


        </div>
    )
}
