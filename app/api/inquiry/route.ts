import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

let supabase: ReturnType<typeof createClient> | null = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey);
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.fullName || !data.email || !data.companyName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    let inquiryId = `temp-${Date.now()}`;

    // If Supabase is configured, save to database
    if (supabase) {
      try {
        const { data: inquiry, error } = await (supabase as any)
          .from("inquiries")
          .insert([
            {
              full_name: data.fullName,
              company_name: data.companyName,
              email: data.email,
              phone: data.phone,
              preferred_contact: data.preferredContact,
              industry: data.industry,
              description: data.description,
              service_id: data.serviceId,
              budget_range: data.budgetRange,
              timeline: data.timeline,
              preferred_contact_time: data.preferredContactTime,
              agreed_to_privacy: data.agreedToPrivacy,
              additional_comments: data.additionalComments,
              form_data: data, // Store complete form data as JSON
              created_at: new Date().toISOString(),
            },
          ])
          .select();

        if (error) {
          console.error("Database error:", error);
          throw error;
        }

        if (inquiry && inquiry.length > 0) {
          inquiryId = inquiry[0].id;
          console.log("✅ Inquiry saved to database with ID:", inquiryId);
        }
      } catch (dbError) {
        console.error("❌ Supabase Error:", dbError);
        // Fall back to logging if database fails
      }
    }

    // Log the data for debugging
    console.log("📝 New Inquiry Received:");
    console.log("=".repeat(50));
    console.log("ID:", inquiryId);
    console.log("Name:", data.fullName);
    console.log("Company:", data.companyName);
    console.log("Email:", data.email);
    console.log("Phone:", data.phone);
    console.log("Service:", data.serviceId);
    console.log("Preferred Contact:", data.preferredContact);
    console.log("Industry:", data.industry);
    console.log("Preferred Contact Time:", data.preferredContactTime);
    console.log("=".repeat(50));
    console.log("Full Data:", JSON.stringify(data, null, 2));
    console.log("=".repeat(50));

    // TODO: Send email notification
    // Example with Resend, SendGrid, or Nodemailer:
    // await sendEmail({
    //   to: "info@weber.com",
    //   subject: `New Inquiry from ${data.companyName}`,
    //   html: generateEmailTemplate(data),
    // });

    // TODO: Send auto-reply to client
    // await sendEmail({
    //   to: data.email,
    //   subject: "Thank you for your inquiry - Weber",
    //   html: generateAutoReplyTemplate(data),
    // });

    return NextResponse.json(
      {
        success: true,
        message: "Inquiry submitted successfully",
        data: {
          id: inquiryId,
          timestamp: new Date().toISOString(),
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Error processing inquiry:", error);
    return NextResponse.json(
      { error: "Failed to process inquiry. Please try again." },
      { status: 500 }
    );
  }
}

// Helper function to generate email template (TODO: customize)
function generateEmailTemplate(data: any): string {
  return `
    <h1>New Inquiry Received</h1>
    <h2>Contact Information</h2>
    <ul>
      <li><strong>Name:</strong> ${data.fullName}</li>
      <li><strong>Company:</strong> ${data.companyName}</li>
      <li><strong>Email:</strong> ${data.email}</li>
      <li><strong>Phone:</strong> ${data.phone}</li>
      <li><strong>Preferred Contact:</strong> ${data.preferredContact}</li>
      <li><strong>Preferred Time:</strong> ${data.preferredContactTime}</li>
      <li><strong>Industry:</strong> ${data.industry}</li>
    </ul>
    <h2>Project Details</h2>
    <p><strong>Description:</strong> ${data.description}</p>
    <p><strong>Budget Range:</strong> ${data.budgetRange}</p>
    <p><strong>Timeline:</strong> ${data.timeline}</p>
    <h2>Full Data</h2>
    <pre>${JSON.stringify(data, null, 2)}</pre>
  `;
}

// Helper function to generate auto-reply template (TODO: customize)
function generateAutoReplyTemplate(data: any): string {
  return `
    <h1>Thank You for Your Inquiry!</h1>
    <p>Dear ${data.fullName},</p>
    <p>Thank you for reaching out to Weber. We have received your inquiry and our team will review it shortly.</p>
    <p>We'll get back to you within 24 hours during your preferred contact time: <strong>${data.preferredContactTime}</strong>.</p>
    <p>In the meantime, feel free to explore our portfolio and learn more about our services.</p>
    <br>
    <p>Best regards,</p>
    <p><strong>The Weber Team</strong></p>
  `;
}
