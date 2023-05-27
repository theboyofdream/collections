import { NextResponse } from "next/server"

const uri = "https://drive.google.com/uc?export=download&id=1U1JO065GuvkrQnFTclsYIlWGolmcXkCn"
// const requestOptions: RequestInit = {
const requestOptions = {
    method: 'GET',
    // headers: new Headers(),
    redirect: "follow",
}
// async function GET() {
// function GET(res: Response) {
// function GET() {
// await fetch(uri, requestOptions)
//     .then(r => r.json())
//     .then(rr => console.log(rr))

// const query = await fetch(uri, requestOptions)
//   const query = await fetch(uri, requestOptions)
// const jsonResponse = query.json()
// await fetch("https://drive.google.com/uc?export=download&id=1U1JO065GuvkrQnFTclsYIlWGolmcXkCn", { method: 'GET', headers: new Headers(), redirect: "follow" })
// .then(response => response.json())
// .then(bookmarkData => {
// console.log(bookmarkData)
// return NextResponse.json(bookmarkData)
// })

// console.log(jsonResponse)

// return NextResponse.json({})

// return NextResponse.redirect(uri, requestOptions)// fetch(uri, requestOptions)
// return NextResponse.json(fetch(uri, requestOptions).then(r => console.log(r.text())))
// return NextResponse.json("query")
// return NextResponse.json(jsonResponse)
// export async function GET(request: Request) {
export async function GET() {
    // let query = await fetch(uri, requestOptions)
    // let response = query.text()

    // const promise = new Promise((resolve,reject)=>{
    const response = await fetch(uri, requestOptions)
        .then(response => response.json())
        .then(result => {
            return result
            // return JSON.stringify(result)
        })
    // .catch(error => reject(error))
    // })
    return NextResponse.json(response)
    // return new Response(response, {
    //     status: 200,
    //     headers: {
    //         'Access-Control-Allow-Origin': '*',
    //         'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    //         'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    //     }
    // });
}
// }

// export {
//     GET
// }