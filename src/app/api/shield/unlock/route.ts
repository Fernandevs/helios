import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { secret } = await request.json();
    
    let targetUrl = '';
    
    // In production, ensure these are set in your .env or .env.local
    if (secret === (process.env.SHIELD_SECRET_LOGIN || 'admin-login')) {
      targetUrl = '/login';
    } else if (secret === (process.env.SHIELD_SECRET_FORGOT || 'admin-forgot')) {
      targetUrl = '/forgot-password';
    } else if (secret === (process.env.SHIELD_SECRET_RESET || 'admin-reset')) {
      targetUrl = '/update-password';
    }

    if (targetUrl) {
      const response = NextResponse.json({ success: true, redirectUrl: targetUrl });
      
      // Set the shield cookie to grant access
      response.cookies.set({
        name: '_h_shield',
        value: 'granted',
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, // 1 week
        sameSite: 'lax',
      });

      return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid sequence' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Bad request' }, { status: 400 });
  }
}
