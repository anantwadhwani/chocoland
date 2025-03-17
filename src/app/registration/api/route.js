import "server-only";

export const POST = async(request) => {
    const body = await request.json();
    console.log(body);
    return new Response(JSON.stringify({message: 'Successful User Login'}), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}