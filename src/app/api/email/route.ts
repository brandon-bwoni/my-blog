import { connectDB } from "@/lib/config/db";
import { EmailModel } from "@/lib/models/emailModel";
import { NextRequest, NextResponse } from "next/server";
import validator from "validator";

// Loading the database connection
const loadDB = async () => {
  await connectDB();
};
loadDB();

// Adding an email to the database
export async function POST(request: NextRequest) {
  try{
  const formData = await request.formData();
  const emailData = {
    email: `${formData.get('email')}`,
  };

  // Validate email using validator module
  if(!emailData || !validator.isEmail(emailData)){
    return NextResponse.json(
      { success: false, msg: "Invalid email address" },
      { status: 400 }
    );
  }

  await EmailModel.create(emailData);
  return NextResponse.json({ success: true, msg: 'Email Subscribed' });

  }catch(error){
    console.error("Error adding email:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to subscribe email" },
      { status: 500 }
    );
  }
};

// Fetching all emails
export async function GET(request: NextRequest) {
  try{
  const emails = await EmailModel.find({});
  return NextResponse.json({ emails });
}catch(error){
  console.error("Error fetching emails:", error);
    return NextResponse.json(
      { success: false, msg: "Failed to fetch emails" },
      { status: 500 }
    );
}
}

// Delete an email
export async function DELETE(request: NextRequest) {
  try{
  const id = request.nextUrl.searchParams.get("id");

  // Check if the id is provided
  if (!id) {
    return NextResponse.json(
      { success: false, msg: "Email ID is required" },
      { status: 400 }
    );
  }

  const deletedEmail = await EmailModel.findByIdAndDelete(id);
  if (!deletedEmail) {
    return NextResponse.json(
      { success: false, msg: "Email not found" },
      { status: 404 }
    );
  }
  
  return NextResponse.json({ success: true, msg: "Email Deleted" });
}catch(error){

}
}