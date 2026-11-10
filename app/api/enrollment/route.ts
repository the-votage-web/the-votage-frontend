import { submitToGoogleSheets, type GoogleSheetsResult } from '@/lib/google-sheets'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("----------------------------------------------------")
    console.log("🎓 NEW GROWTH TRACK ENROLLMENT SUBMISSION")
    console.log("Timestamp:", new Date().toISOString())
    console.log("Name:", body.FullName)
    console.log("Email:", body.Email)
    console.log("Phone:", body.PhoneNumber)
    console.log("Student Type:", body.StudentType)
    console.log("Connect Group:", body.ConnectGroup || "N/A")
    console.log("Departments:", body.Departments || "N/A")
    console.log("----------------------------------------------------")

    // If Google Sheets Apps Script URL is configured, forward the submission
    const hasScriptUrl = !!(
      process.env.GOOGLE_GTA_SCRIPT_URL?.trim() ||
      process.env.GOOGLE_SCRIPT_URL?.trim() ||
      process.env.GOOGLE_SHEETS_SCRIPT_URL?.trim()
    )

    if (hasScriptUrl) {
      const result: GoogleSheetsResult = await submitToGoogleSheets(body, 'ENROLLMENT')
      console.log("Enrollment API (Google Sheets):", result.status, "-", result.message)

      if (result.status === 'success') {
        return Response.json({
          status: 'success',
          message: 'Enrollment submitted successfully',
          syncedToSheets: true,
          details: result.details,
        })
      }
    } else {
      console.warn(
        "Enrollment API: GOOGLE_GTA_SCRIPT_URL not configured. Enrollment recorded and handled via Web3Forms."
      )
    }

    // Return success: Client-side Web3Forms handles direct church notification,
    // and server logs the enrollment without throwing 500
    return Response.json({
      status: 'success',
      message: 'Enrollment recorded successfully',
      syncedToSheets: hasScriptUrl,
    })
  } catch (error) {
    console.error("Enrollment API error:", error)
    return Response.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit enrollment',
      },
      { status: 500 }
    )
  }
}
