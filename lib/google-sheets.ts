export interface GoogleSheetsResult {
  status: 'success' | 'error'
  message: string
  details?: string
}

export async function submitToGoogleSheets(
  data: Record<string, unknown>,
  formType?: string
): Promise<GoogleSheetsResult> {
  const scriptUrl =
    (formType ? process.env.GOOGLE_GTA_SCRIPT_URL : undefined) ||
    process.env.GOOGLE_SCRIPT_URL ||
    process.env.GOOGLE_SHEETS_SCRIPT_URL

  if (!scriptUrl?.trim()) {
    return {
      status: 'error',
      message: 'Server configuration error: Missing GOOGLE_SCRIPT_URL',
      details: 'Neither GOOGLE_GTA_SCRIPT_URL nor GOOGLE_SCRIPT_URL is configured in environment variables.',
    }
  }

  const response = await fetch(scriptUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
    redirect: 'follow',
  })

  const responseText = await response.text()

  if (!response.ok) {
    return {
      status: 'error',
      message: `Google Sheets submission failed: ${response.status} ${response.statusText}`,
      details: responseText,
    }
  }

  // Attempt to parse JSON response if provided by Apps Script
  try {
    const json = JSON.parse(responseText)
    if (json.status === 'success' || json.result === 'success' || json.ok === true) {
      return { status: 'success', message: 'Submitted successfully', details: responseText }
    }
  } catch {}

  const lower = responseText.toLowerCase()
  const isHtml = lower.includes('<!doctype') || lower.includes('<html')

  if (!isHtml && (lower.includes('success') || lower.includes('ok') || lower.includes('thank'))) {
    return { status: 'success', message: 'Submitted successfully', details: responseText }
  }

  return {
    status: 'error',
    message: responseText || 'Submission may have failed. Please try again.',
    details: responseText.substring(0, 500),
  }
}
