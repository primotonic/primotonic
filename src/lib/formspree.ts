export type FormspreePayload = Record<string, string>

export async function submitFormspree(
  data: FormspreePayload,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const formId =
    (import.meta.env.VITE_FORMSPREE_ID as string | undefined)?.trim() ||
    undefined

  if (!formId) {
    console.info('[Primotonic] Formspree not configured. Payload:', data)
    return { ok: true }
  }

  const subject =
    data.formType === 'contact'
      ? `Primotonic contact — ${data.name || 'Website'}`
      : `Primotonic project inquiry — ${data.name || 'Website'}`

  try {
    const response = await fetch(`https://formspree.io/f/${formId}`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...data,
        _subject: subject,
        _replyto: data.email,
      }),
    })

    if (!response.ok) {
      const body = (await response.json().catch(() => null)) as {
        error?: string
        errors?: Array<{ message?: string }>
      } | null
      return {
        ok: false,
        error:
          body?.error ??
          body?.errors?.[0]?.message ??
          'Something went wrong. Please try again.',
      }
    }

    return { ok: true }
  } catch {
    return {
      ok: false,
      error: 'Network error. Check your connection and try again.',
    }
  }
}
