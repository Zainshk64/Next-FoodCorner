import RecipeList from '@/components/ui/recipelist'
import { Skeleton } from '@/components/ui/skeleton'
import React from 'react'

async function fetchList() {
    try {
        const res = await fetch('https://dummyjson.com/recipes')
        const data = await res.json()
        return data?.recipes
        
    } catch (e) {
        // console.log(e);
        
        
    }
    
}

export default async function recipe() {
    const product = await fetchList();
    return (
        <div>
            <RecipeList product={product} />
        </div>
    )
}
