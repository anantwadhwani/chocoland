import "server-only";

export const POST = async(request) => {
    const body = await request.json();
    return new Response(JSON.stringify({message: 'Successful New User Creation'}), {
        headers: {
            'Content-Type': 'application/json'
        },
        status: 201
    });
};