import { NextResponse } from "next/server"

const uri = "https://drive.google.com/uc?export=download&id=1U1JO065GuvkrQnFTclsYIlWGolmcXkCn"
const requestOptions: RequestInit = {
    method: 'GET',
    redirect: "follow",
}

export async function GET() {
    const query = await fetch(uri, requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(typeof result)
            return result
        })
    // console.log(query)
    return NextResponse.json(query)
}