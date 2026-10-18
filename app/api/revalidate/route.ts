import { NextRequest, NextResponse } from 'next/server'
import { revalidatePath } from 'next/cache'

// Called by a Contentful webhook whenever an entry is published/unpublished, so
// editors see their changes immediately instead of waiting out the 10 minute
// revalidate window in lib/contentful.ts.
//
// Contentful is configured to send a secret header; without a matching
// CONTENTFUL_REVALIDATE_SECRET the route refuses to do anything, since an open
// endpoint would let anyone force page rebuilds.
const SECRET = process.env.CONTENTFUL_REVALIDATE_SECRET

// Contentful sends the secret as a custom header. Both spellings are accepted
// because the webhook UI lets you name the header freely and it's easy to
// misremember which one was configured.
function providedSecret(req: NextRequest): string | null {
  return (
    req.headers.get('x-contentful-webhook-secret') ??
    req.headers.get('x-vercel-reval-key')
  )
}

export async function POST(req: NextRequest) {
  if (!SECRET) {
    return NextResponse.json(
      { revalidated: false, reason: 'not configured' },
      { status: 503 },
    )
  }

  if (providedSecret(req) !== SECRET) {
    return NextResponse.json(
      { revalidated: false, reason: 'bad secret' },
      { status: 401 },
    )
  }

  // Revalidate all pages that consume Contentful CMS data
  revalidatePath('/')
  revalidatePath('/home')
  revalidatePath('/about')
  revalidatePath('/connect')
  revalidatePath('/sermons')
  revalidatePath('/growth-track')

  return NextResponse.json({ revalidated: true, at: Date.now() })
}
