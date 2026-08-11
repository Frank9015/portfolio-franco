import type { APIRoute } from 'astro';
import nodemailer from 'nodemailer';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { nombre, email, telefono, mensaje } = data;

    if (!nombre || !email || !mensaje) {
      return new Response(
        JSON.stringify({ message: 'Por favor completa todos los campos requeridos.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Configure Nodemailer transporter if ENV vars present, otherwise mock log
    const user = process.env.SMTP_USER || '';
    const pass = process.env.SMTP_PASS || '';

    if (user && pass) {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: { user, pass }
      });

      await transporter.sendMail({
        from: `"${nombre}" <${email}>`,
        to: 'francoborottov@gmail.com',
        subject: `[Portfolio Contacto] Mensaje de ${nombre}`,
        html: `
          <h2>Nuevo mensaje desde tu sitio web de portafolio</h2>
          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Teléfono / Empresa:</strong> ${telefono || 'No especificado'}</p>
          <p><strong>Mensaje:</strong></p>
          <p>${mensaje}</p>
        `
      });
    } else {
      console.log('API Contacto Mock received:', { nombre, email, telefono, mensaje });
    }

    return new Response(
      JSON.stringify({ message: '¡Gracias por contactarme! Te responderé a la brevedad.' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error enviando contacto:', error);
    return new Response(
      JSON.stringify({ message: 'Ocurrió un error al enviar tu mensaje. Por favor intenta de nuevo.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
