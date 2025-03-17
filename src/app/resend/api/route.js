import 'server-only';
import { Resend } from 'resend';

const resend = new Resend('re_AWzsps1T_3bSyJiHvR58b6tkTYt4ZPSad');

export const POST = async(request) => {
    const {firstname, lastname, email, company, message} = await request.json();
    const firstName = firstname ? firstname : 'firstname';
    const lastName = lastname ? lastname : 'lastname';
    const emailId = email ? email : 'email';
    const companyName = company ? company : 'company';
    const messageDetails = message ? message : 'message';

    const data = await resend.emails.send({
        from: 'team@s2a2-export-import.com',
        to: 'team@s2a2-export-import.com',
        subject: `Chocoland ${firstName} ${companyName}`,
        html: `<p>Name: ${firstName} ${lastName}</p><p>of company: ${companyName}</p><p>with email: ${emailId}</p><p>and query: ${messageDetails}</p>`
    });
    return Response.json(data);
}