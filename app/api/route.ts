

import { NextResponse } from 'next/server';

const api_url = "https://script.google.com/macros/s/AKfycbwyqWen6C8HWRFEWwXpLaVf_XlprKRvdCNlkHDhJjWJiq62iJgn2CnHlBT4Gj_G5kaE/exec"

async function GET() {

    const query = await fetch(api_url, {
        method: 'GET',
        redirect: 'follow'
    })
        .then(response => response.json())
        .then(result => console.log(result))
    // .catch(error => console.log('error', error));

    return NextResponse.json(query);
}

export { GET }