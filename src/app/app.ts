import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  name = 'Lalitha Jakkamsetti';
  role = 'Front-End Developer & Software Tester';

  sendMessage(event: Event) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;

    // Show red borders on invalid fields after submit
    form.classList.add('submitted');

    // Stop if any field is invalid
    if (!form.checkValidity()) {
      return;
    }

    // Get form values
    const name = (form.elements.namedItem('Name') as HTMLInputElement).value;
    const email = (form.elements.namedItem('Email') as HTMLInputElement).value;
    const message = (form.elements.namedItem('Message') as HTMLTextAreaElement).value;

    // Email subject
    const subject = `Portfolio Contact - ${name}`;

    // Email body
    const body = `Name: ${name}
Email: ${email}

Message:
${message}`;

    // Create Gmail email link
    const mailtoLink =
      `mailto:lalithajakkamsetti2@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    // Open email application
    window.location.href = mailtoLink;
  }
}