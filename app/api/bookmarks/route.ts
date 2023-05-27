import { NextResponse } from "next/server"

async function GET() {

    const query =
        // await
        await fetch("https://drive.google.com/uc?export=download&id=1U1JO065GuvkrQnFTclsYIlWGolmcXkCn", { method: 'GET', headers: new Headers(), redirect: "follow" })
    // .then(response => response.json())
    // .then(bookmarkData => {
    // console.log(bookmarkData)
    // return NextResponse.json(bookmarkData)
    // })

    // console.log(query.body)

    // return NextResponse.json({})
    // return NextResponse.json(query)
    return NextResponse.json(query.json())
}

export {
    GET
}