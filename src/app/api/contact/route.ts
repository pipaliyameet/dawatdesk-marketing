import { NextResponse } from 'next/server';
import { getDatabase } from '@/lib/mongodb';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json({ success: false, error: 'Name is required.' }, { status: 400 });
    }

    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json({ success: false, error: 'Valid email is required.' }, { status: 400 });
    }

    if (!message || typeof message !== 'string' || message.trim().length < 5) {
      return NextResponse.json({ success: false, error: 'Message must be at least 5 characters.' }, { status: 400 });
    }

    const inquiryDoc = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || '',
      subject: subject?.trim() || 'General Inquiry',
      message: message.trim(),
      source: 'Marketing Contact Form',
      status: 'UNREAD',
      createdAt: new Date()
    };

    const db = await getDatabase();
    const result = await db.collection('contact_inquiries').insertOne(inquiryDoc);

    return NextResponse.json({
      success: true,
      message: 'Your message has been received. Our team will get back to you shortly.',
      id: result.insertedId
    });
  } catch (err: any) {
    console.error('Contact API error:', err);
    return NextResponse.json({
      success: false,
      error: 'Failed to send inquiry. Please try again or contact support.'
    }, { status: 500 });
  }
}
