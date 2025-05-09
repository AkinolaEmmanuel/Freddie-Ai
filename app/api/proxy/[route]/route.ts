import { NextRequest } from 'next/server';

const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://api-freddie.ai-wk.com";

export async function handler(req: NextRequest, context: {params: {route: string}}) 
{
    const method = req.method;
    const { params } = context;
    const targetUrl = params.route;
    if (!targetUrl) {
        throw new Error('Route parameter is missing');
    }
    const url = `${API_URL}/${targetUrl}`;

    const headers = new Headers(req.headers);
    if (!API_URL) {
        throw new Error('API_URL is not defined');
    }
    headers.set('host', new URL(API_URL).host);

    const body = ['POST', 'PUT', 'PATCH'].includes(method) ? await req.body : null;

    const response = await fetch(url, {
        method,
        headers,
        body,
    });

    const contentType = response.headers.get('content-type') || 'application/json';
    const responseBody = await response.text();

    return new Response(
        responseBody, {
            status: response.status,
            headers: {
                'content-type': contentType,
                'access-control-allow-origin': '*',
                'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
                'access-control-allow-headers': '*',
            },
        }

    );

}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;