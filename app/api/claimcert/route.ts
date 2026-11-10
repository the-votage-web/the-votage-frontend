import { submitToGoogleSheets, type GoogleSheetsResult } from '@/lib/google-sheets'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log("----------------------------------------------------")
    console.log("🎓 NEW GROWTH TRACK CERTIFICATE CLAIM")
    console.log("Timestamp:", new Date().toISOString())
    console.log("Name:", body.FullName || body.StudentName)
    console.log("Email:", body.Email)
    console.log("Phone:", body.PhoneNumber)
    console.log("Cohort:", body.Cohort || "N/A")
    console.log("----------------------------------------------------")

    const hasScriptUrl = !!(
      process.env.GOOGLE_GTA_SCRIPT_URL?.trim() ||
      process.env.GOOGLE_SCRIPT_URL?.trim() ||
      process.env.GOOGLE_SHEETS_SCRIPT_URL?.trim()
    )

    if (hasScriptUrl) {
      const result: GoogleSheetsResult = await submitToGoogleSheets(body, 'CERT')
      console.log("ClaimCert API (Google Sheets):", result.status, "-", result.message)

      if (result.status === 'success') {
        return Response.json({
          status: 'success',
          message: 'Certificate claim submitted successfully',
          syncedToSheets: true,
          details: result.details,
        })
      }
    } else {
      console.warn(
        "ClaimCert API: GOOGLE_GTA_SCRIPT_URL not configured. Request recorded and handled via Web3Forms."
      )
    }

    return Response.json({
      status: 'success',
      message: 'Certificate claim received successfully',
      syncedToSheets: hasScriptUrl,
    })
  } catch (error) {
    console.error("ClaimCert API error:", error)
    return Response.json(
      {
        status: 'error',
        message: error instanceof Error ? error.message : 'Failed to submit certificate claim',
      },
      { status: 500 }
    )
  }
}
