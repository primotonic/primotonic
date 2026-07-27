#!/usr/bin/env python3
"""Generate a redacted Primotonic sample vulnerability report PDF."""

from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_JUSTIFY
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch, mm
from reportlab.platypus import (
    HRFlowable,
    ListFlowable,
    ListItem,
    PageBreak,
    Paragraph,
    Preformatted,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / 'fiverr' / 'Primotonic-Sample-Vulnerability-Reports-REDACTED.pdf'

ORANGE = colors.HexColor('#ff6a00')
INK = colors.HexColor('#161412')
SOFT = colors.HexColor('#6a6158')
CREAM = colors.HexColor('#faf6f0')
LINE = colors.HexColor('#e8e0d6')


def styles():
    base = getSampleStyleSheet()
    return {
        'cover_brand': ParagraphStyle(
            'cover_brand', parent=base['Normal'], fontName='Helvetica-Bold',
            fontSize=28, textColor=ORANGE, alignment=TA_CENTER, spaceAfter=8,
        ),
        'cover_title': ParagraphStyle(
            'cover_title', parent=base['Normal'], fontName='Helvetica-Bold',
            fontSize=18, textColor=INK, alignment=TA_CENTER, spaceAfter=6, leading=24,
        ),
        'cover_sub': ParagraphStyle(
            'cover_sub', parent=base['Normal'], fontName='Helvetica',
            fontSize=11, textColor=SOFT, alignment=TA_CENTER, leading=16,
        ),
        'h1': ParagraphStyle(
            'h1', parent=base['Heading1'], fontName='Helvetica-Bold',
            fontSize=16, textColor=ORANGE, spaceBefore=4, spaceAfter=10,
        ),
        'h2': ParagraphStyle(
            'h2', parent=base['Heading2'], fontName='Helvetica-Bold',
            fontSize=12, textColor=INK, spaceBefore=14, spaceAfter=6,
        ),
        'body': ParagraphStyle(
            'body', parent=base['Normal'], fontName='Helvetica', fontSize=10,
            textColor=INK, leading=14, alignment=TA_JUSTIFY, spaceAfter=8,
        ),
        'bullet': ParagraphStyle(
            'bullet', parent=base['Normal'], fontName='Helvetica', fontSize=10,
            textColor=INK, leading=13, leftIndent=8,
        ),
        'meta': ParagraphStyle(
            'meta', parent=base['Normal'], fontName='Helvetica', fontSize=9,
            textColor=SOFT, leading=12, spaceAfter=4,
        ),
        'code': ParagraphStyle(
            'code', parent=base['Code'], fontName='Courier', fontSize=7.5,
            textColor=INK, leading=10, backColor=CREAM, borderPadding=6,
        ),
        'warn': ParagraphStyle(
            'warn', parent=base['Normal'], fontName='Helvetica-Oblique', fontSize=9,
            textColor=colors.HexColor('#8a3b12'), leading=12, alignment=TA_CENTER,
        ),
        'footer': ParagraphStyle(
            'footer', parent=base['Normal'], fontName='Helvetica', fontSize=8,
            textColor=SOFT, alignment=TA_CENTER,
        ),
    }


def bullets(items, s):
    return ListFlowable(
        [ListItem(Paragraph(i, s['bullet']), leftIndent=12, bulletColor=ORANGE) for i in items],
        bulletType='bullet', start='•', leftIndent=18, spaceBefore=2, spaceAfter=8,
    )


def code_block(text, s):
    return Preformatted(text.strip('\n'), s['code'], maxLineLength=96)


def add_header_footer(canvas, doc):
    canvas.saveState()
    canvas.setStrokeColor(ORANGE)
    canvas.setLineWidth(2)
    canvas.line(18 * mm, A4[1] - 12 * mm, A4[0] - 18 * mm, A4[1] - 12 * mm)
    canvas.setFont('Helvetica', 8)
    canvas.setFillColor(SOFT)
    canvas.drawString(18 * mm, A4[1] - 10 * mm, 'Primotonic — Sample Vulnerability Report (Redacted)')
    canvas.drawRightString(A4[0] - 18 * mm, A4[1] - 10 * mm, 'Confidential sample')
    canvas.setStrokeColor(LINE)
    canvas.setLineWidth(0.5)
    canvas.line(18 * mm, 14 * mm, A4[0] - 18 * mm, 14 * mm)
    canvas.drawCentredString(A4[0] / 2, 8 * mm, f'primotonic.com  ·  Page {doc.page}')
    canvas.restoreState()


def build():
    s = styles()
    story = []

    story.append(Spacer(1, 1.6 * inch))
    story.append(Paragraph('PRIMOTONIC', s['cover_brand']))
    story.append(Paragraph('Sample Vulnerability Reports', s['cover_title']))
    story.append(Paragraph('Redacted portfolio examples for client review', s['cover_sub']))
    story.append(Spacer(1, 0.35 * inch))
    story.append(Paragraph(
        'All client names, hostnames, tokens, account IDs, asset URLs, '
        'and third-party evidence links have been removed or replaced with placeholders. '
        'Payloads shown are inert demo markers only.',
        s['warn'],
    ))
    story.append(Spacer(1, 0.45 * inch))

    meta = [
        ['Prepared by', 'Primotonic Security / Full-Stack'],
        ['Document type', 'Portfolio sample (redacted)'],
        ['Classifications', 'Stored XSS (CWE-79)'],
        ['Original reports', '2 findings consolidated'],
        ['Status', 'For demonstration — not live targets'],
    ]
    t = Table(meta, colWidths=[1.6 * inch, 4.2 * inch])
    t.setStyle(TableStyle([
        ('FONTNAME', (0, 0), (0, -1), 'Helvetica-Bold'),
        ('FONTNAME', (1, 0), (1, -1), 'Helvetica'),
        ('FONTSIZE', (0, 0), (-1, -1), 9),
        ('TEXTCOLOR', (0, 0), (0, -1), ORANGE),
        ('TEXTCOLOR', (1, 0), (1, -1), INK),
        ('BACKGROUND', (0, 0), (-1, -1), CREAM),
        ('BOX', (0, 0), (-1, -1), 0.5, LINE),
        ('INNERGRID', (0, 0), (-1, -1), 0.25, LINE),
        ('LEFTPADDING', (0, 0), (-1, -1), 8),
        ('RIGHTPADDING', (0, 0), (-1, -1), 8),
        ('TOPPADDING', (0, 0), (-1, -1), 6),
        ('BOTTOMPADDING', (0, 0), (-1, -1), 6),
    ]))
    story.append(t)
    story.append(PageBreak())

    # Finding 1
    story.append(Paragraph('Finding 1 — Stored XSS in CMS Promo Content', s['h1']))
    story.append(Paragraph(
        'Severity: <b>Critical</b> &nbsp;|&nbsp; Type: Stored XSS (CWE-79) &nbsp;|&nbsp; '
        'Vector: Low-privilege operator → public player portal',
        s['meta'],
    ))
    story.append(HRFlowable(width='100%', thickness=1, color=ORANGE, spaceAfter=10))

    story.append(Paragraph('Summary of Findings', s['h2']))
    story.append(Paragraph(
        'A Stored Cross-Site Scripting (XSS) vulnerability was identified in a '
        'confidential content-management system (CMS) used to publish promotional '
        'content to a public player portal. An authenticated operator with limited '
        'privileges could submit HTML/JavaScript into promo content fields. The CMS '
        'accepted and stored the markup without adequate sanitization. When published, '
        'the content rendered on the public portal and executed in visiting players’ '
        'browsers — enabling session/token theft and account takeover.',
        s['body'],
    ))
    story.append(bullets([
        'CMS accepted HTML/Markdown via an authenticated GraphQL mutation without sanitizing dangerous markup.',
        'Stored content rendered on the public player portal and executed in the visitor context.',
        'A low-privilege <b>OPERATOR</b> role could update public-facing content fields (insufficient permission controls).',
        'Because session material was readable from JavaScript on the portal, stored XSS enabled credential theft and hijack.',
    ], s))

    story.append(Paragraph('Product Assets (redacted)', s['h2']))
    story.append(bullets([
        'Environment: Backoffice / CMS — <font face="Courier">REDACTED_CMS_HOST</font>',
        'Public portal — <font face="Courier">REDACTED_PLAYER_PORTAL</font>',
        'Admin API — GraphQL <font face="Courier">POST /graphql</font> on <font face="Courier">REDACTED_ADMIN_API</font>',
        'Affected: CMS content editor, <font face="Courier">UpdateContentField</font> mutation, portal promo renderer',
    ], s))

    story.append(Paragraph('Vulnerability Type', s['h2']))
    story.append(bullets([
        'CWE-79: Stored Cross-Site Scripting (Persistent XSS)',
        'Root causes: unsanitized stored HTML; unsafe client rendering (e.g. innerHTML patterns); weak server-side validation; missing role granularity',
    ], s))

    story.append(Paragraph('Proof of Concept (sanitized)', s['h2']))
    story.append(Paragraph(
        'High-level flow: update CMS promo content with an XSS marker; open the public promo page; '
        'observe execution in the player session context. Live hostnames, tokens, site IDs, asset URLs, '
        'and exfiltration endpoints are redacted below.',
        s['body'],
    ))
    story.append(Paragraph('<b>Steps</b>', s['meta']))
    story.append(bullets([
        'Authenticate to Backoffice as OPERATOR and open CMS → Content Management.',
        'Intercept/save the <font face="Courier">UpdateContentField</font> request and insert a demo payload into a content array value.',
        'Submit the update (payload persists in storage).',
        'Open the public portal promo page while authenticated as a player.',
        'Observe demo alert / marker execution (original research used a private webhook — omitted).',
    ], s))
    story.append(Paragraph('Example request (redacted)', s['meta']))
    story.append(code_block("""
POST /graphql HTTP/2
Host: REDACTED_ADMIN_API
Referer: https://REDACTED_CMS_HOST/
Role: OPERATOR
Authorization: Bearer REDACTED_TOKEN
Content-Type: application/json
Origin: https://REDACTED_CMS_HOST

{
  "operationName": "UpdateContentField",
  "query": "mutation UpdateContentField($input: UpdateContentFieldInput!) { updateContentField(input: $input) { __typename } }",
  "variables": {
    "input": {
      "id": "promos",
      "site": "REDACTED_SITE_ID",
      "value": [{
        "0": "REDACTED_PROMO_TITLE",
        "1": "<p>General Mechanics</p><img src=x onerror=alert('DEMO_XSS')>",
        "2": "https://REDACTED_CDN/REDACTED_ASSET",
        "3": "https://REDACTED_CDN/REDACTED_ASSET",
        "6": false
      }]
    }
  }
}
""", s))

    story.append(Paragraph('Impact', s['h2']))
    story.append(bullets([
        'Persistent XSS on a public content channel affects every future viewer of the promo.',
        'Critical severity: low-privilege insider → player account takeover and direct financial risk.',
        'Possible session/token theft, unauthorized actions as the victim player, and brand/trust damage.',
    ], s))

    story.append(Paragraph('Remediation (recommended)', s['h2']))
    story.append(bullets([
        'Sanitize/allowlist HTML server-side before persist; encode on output.',
        'Avoid unsafe DOM sinks; use a vetted sanitizer if rich text is required.',
        'Enforce least-privilege: separate who can edit public content from read-only operators.',
        'Prefer HttpOnly cookies for session material; harden CSP.',
    ], s))
    story.append(PageBreak())

    # Finding 2
    story.append(Paragraph('Finding 2 — Stored XSS in Backoffice Prepared Messages', s['h1']))
    story.append(Paragraph(
        'Severity: <b>High / Critical</b> &nbsp;|&nbsp; Type: Stored XSS (persistent) &nbsp;|&nbsp; '
        'Vector: Message author → privileged admin viewers',
        s['meta'],
    ))
    story.append(HRFlowable(width='100%', thickness=1, color=ORANGE, spaceAfter=10))

    story.append(Paragraph('Summary of Findings', s['h2']))
    story.append(Paragraph(
        'An attacker (or malicious insider) could inject HTML/JavaScript into a prepared-message '
        'content field in the backoffice messaging UI. When another administrator opened the message '
        'via “View”, the payload executed in their browser context — risking privileged account '
        'compromise, unauthorized actions, and data exfiltration. Message content was not sanitized '
        'or encoded before HTML render.',
        s['body'],
    ))

    story.append(Paragraph('Product Assets (redacted)', s['h2']))
    story.append(bullets([
        'Environment: Backoffice (UAT / Production as applicable) — <font face="Courier">REDACTED_ADMIN_HOST</font>',
        'Component: Internal / prepared message creation UI and message detail renderer',
        'Endpoint: GraphQL mutation <font face="Courier">createInternalPreparedMessage</font> via <font face="Courier">POST /graphql</font> on <font face="Courier">REDACTED_TRIGGER_HOST</font>',
        'Note: Edge WAF did not reliably block long / encoded XSS payloads in testing',
    ], s))

    story.append(Paragraph('Vulnerability Type', s['h2']))
    story.append(bullets([
        'Stored Cross-Site Scripting (XSS) — persistent',
        'Inadequate output encoding / input validation on message title/content fields',
    ], s))

    story.append(Paragraph('Proof of Concept (sanitized)', s['h2']))
    story.append(bullets([
        'Open Admin Panel → Internal Messaging → create prepared message.',
        'Insert a demo payload into content (or title), e.g. <font face="Courier">&lt;img src=x onerror="alert(\'DEMO_XSS\')"&gt;</font>',
        'Select any recipient(s) and submit.',
        'Message appears in Prepared Messages table.',
        'When an admin clicks <b>View</b>, the payload executes in their session.',
    ], s))
    story.append(Paragraph('Example request (redacted)', s['meta']))
    story.append(code_block("""
POST /graphql?_q=CreateInternalPreparedMessage HTTP/2
Host: REDACTED_TRIGGER_HOST
Referer: https://REDACTED_ADMIN_HOST/
Origin: https://REDACTED_ADMIN_HOST
Authorization: Bearer REDACTED_TOKEN
Content-Type: application/json
Platform-Code: REDACTED

{
  "operationName": "createInternalPreparedMessage",
  "query": "mutation createInternalPreparedMessage($input: CreateInternalPreparedMessageInput!) { createInternalPreparedMessage(input: $input) }",
  "variables": {
    "input": {
      "id": "REDACTED_MESSAGE_ID",
      "icon": "MESSAGE",
      "popup": true,
      "title": "test",
      "content": "<img src=x onerror=alert('DEMO_XSS')>",
      "recipients": {
        "filter": { "id": { "in": ["REDACTED_USER_ID"] } }
      }
    }
  }
}
""", s))

    story.append(Paragraph('Impact', s['h2']))
    story.append(bullets([
        'Session/token theft from browser storage can take over privileged backoffice accounts that view the message.',
        'Persistent XSS remains until the message is removed or sanitized.',
        'Pivot risk: act as the victim admin, change settings, read sensitive data, or escalate via UI actions.',
    ], s))

    story.append(Paragraph('Remediation (recommended)', s['h2']))
    story.append(bullets([
        'Encode all message fields on render; disallow raw HTML unless strictly sanitized.',
        'Treat internal messaging as an untrusted input channel between privileged users.',
        'Tighten WAF/API validation for script sinks; add CSP and HttpOnly session cookies where applicable.',
        'Audit “View” templates for unsafe HTML injection points.',
    ], s))

    story.append(Spacer(1, 0.35 * inch))
    story.append(HRFlowable(width='100%', thickness=1, color=LINE, spaceAfter=10))
    story.append(Paragraph(
        'End of redacted sample. Original evidence screenshots, Drive links, live hostnames, '
        'and exfiltration URLs intentionally omitted. Contact Primotonic for scoped assessments.',
        s['warn'],
    ))
    story.append(Spacer(1, 0.2 * inch))
    story.append(Paragraph('primotonic.com · hello@primotonic.com', s['footer']))

    OUT.parent.mkdir(parents=True, exist_ok=True)
    doc = SimpleDocTemplate(
        str(OUT),
        pagesize=A4,
        leftMargin=18 * mm,
        rightMargin=18 * mm,
        topMargin=20 * mm,
        bottomMargin=18 * mm,
        title='Primotonic — Sample Vulnerability Reports (Redacted)',
        author='Primotonic',
        subject='Redacted stored XSS portfolio samples',
    )
    doc.build(story, onFirstPage=add_header_footer, onLaterPages=add_header_footer)
    print(f'Wrote {OUT}')


if __name__ == '__main__':
    build()
