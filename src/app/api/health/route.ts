import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'ok',
    service: 'DawatDesk Marketing & Sales Platform',
    timestamp: new Date().toISOString()
  });
}
