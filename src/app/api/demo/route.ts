import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      customerName,
      phoneNumber,
      email,
      restaurantName,
      restaurantType,
      city,
      numberOfBranches,
      preferredDate,
      requirements
    } = body;

    // Strict validation
    if (!customerName || typeof customerName !== 'string' || customerName.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Full name is required (min 2 characters).' }, { status: 400 });
    }

    if (!phoneNumber || typeof phoneNumber !== 'string' || phoneNumber.trim().length < 8) {
      return NextResponse.json({ success: false, error: 'Valid phone number is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@') || !email.includes('.')) {
      return NextResponse.json({ success: false, error: 'Valid business email is required.' }, { status: 400 });
    }

    if (!restaurantName || typeof restaurantName !== 'string' || restaurantName.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Restaurant / Outlet name is required.' }, { status: 400 });
    }

    if (!city || typeof city !== 'string' || city.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'City is required.' }, { status: 400 });
    }

    const leadDoc = {
      customerName: customerName.trim(),
      phoneNumber: phoneNumber.trim(),
      email: email.trim().toLowerCase(),
      restaurantName: restaurantName.trim(),
      restaurantType: restaurantType || 'Fine Dine / Casual Dine',
      city: city.trim(),
      numberOfBranches: numberOfBranches || '1',
      preferredDate: preferredDate || null,
      requirements: requirements?.trim() || '',
      source: 'DawatDesk Marketing Website',
      status: 'NEW',
      createdAt: new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown'
    };

    const db = await getDatabase();
    const result = await db.collection('demo_requests').insertOne(leadDoc);

    return NextResponse.json({
      success: true,
      message: 'Demo request successfully scheduled. Our restaurant technology consultant will contact you within 24 hours.',
      id: result.insertedId
    });
  } catch (err: any) {
    console.error('Demo request API error:', err);
    return NextResponse.json({
      success: false,
      error: 'Failed to record demo request. Please call our sales hotline or try again.'
    }, { status: 500 });
  }
}
