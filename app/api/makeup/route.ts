import { submitToGoogleSheets, type GoogleSheetsResult } from '@/lib/google-sheets'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("----------------------------------------------------")
    console.log("🎓 NEW GROWTH TRACK MAKE-UP CLASS REQUEST")
    console.log("Timestamp:", new Date().toISOString())
    console.log("Name:", body.FullName || body.StudentName)
    console.log("Email:", body.Email)
    console.log("Phone:", body.PhoneNumber)
    console.log("Classes Missed:", body.ClassesMissed || body.Classes || "N/A")
    console.log("----------------------------------------------------")

    const hasScriptUrl = !!(
      process.env.GOOGLE_GTA_SCRIPT_URL?.trim() ||
      process.env.GOOGLE_SCRIPT_URL?.trim() ||
      process.env.GOOGLE_SHEETS_SCRIPT_URL?.trim()
    )

    if (hasScriptUrl) {
      const result: GoogleSheetsResult = await submitToGoogleSheets(body, 'MAKEUP')
      console.log("Makeup API (Google Sheets):", result.status, "-", result.message)

      if (result.status === 'success') {
        return Response.json({
          status: 'success',
          message: 'Make-up class request submitted successfully',
          syncedToSheets: true,
          details: result.details,
        })
      }
    } else {
      console.warn(
        "Makeup API: GOOGLE_GTA_SCRIPT_URL not configured. Request recorded and handled via Web3Forms."
      )
    }

    return Response.json({
      status: 'success',
      message: 'Make-up class request received successfully',
      syncedToSheets: hasScriptUrl,
    })
  } catch (error) {
    console.error("Makeup API error:", error)
    return Response.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit make-up class request',
      },
      { status: 500 }
    )
  }
}
