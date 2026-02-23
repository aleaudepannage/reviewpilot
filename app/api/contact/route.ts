import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import { CONTACT_EMAIL } from '@/lib/constants'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, company, email, phone } = body

    // Validation
    if (!name || !company || !email || !phone) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      )
    }

    const { data, error } = await resend.emails.send({
      from: 'ReviewPilot <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      subject: `Nouvelle demande de diagnostic - ${company}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #34A853;">Nouvelle demande de diagnostic gratuit</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Nom:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Entreprise:</strong> ${company}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p style="margin: 10px 0;"><strong>Téléphone:</strong> <a href="tel:${phone}">${phone}</a></p>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 30px;">
            Envoyé depuis ReviewPilot
          </p>
        </div>
      `,
    })

    if (error) {
      return NextResponse.json(
        { error: 'Erreur lors de l\'envoi de l\'email' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { 
        success: true, 
        message: 'Demande envoyée avec succès',
        emailId: data?.id
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de l\'envoi de la demande' },
      { status: 500 }
    )
  }
}
