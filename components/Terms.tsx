import React from 'react';

export const Terms: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6">
       <h1 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900 tracking-tight">Terms and Conditions</h1>
       <div className="prose prose-zinc prose-lg max-w-none text-zinc-600">
          <p className="lead text-xl text-zinc-500 mb-8">Last updated: February 2025</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">1. Acceptance of Terms</h2>
          <p className="mb-4">By downloading or using the OmniAlbum app, these terms will automatically apply to you – you should make sure therefore that you read them carefully before using the app.</p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">2. Use of Service</h2>
          <p className="mb-4">OmniAlbum is a client application for self-hosted services. You are responsible for:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>maintaining the security of your own server.</li>
            <li>ensuring you have the right to access the content on the servers you connect to.</li>
            <li>managing backups of your data. OmniAlbum is not a backup service provider.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">3. Intellectual Property</h2>
          <p className="mb-4">The OmniAlbum application, including its original content, features, and functionality, are and will remain the exclusive property of OmniAlbum and its licensors. The application is licensed, not sold, to you for use strictly in accordance with these Terms.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">4. Disclaimer of Warranties</h2>
          <p className="mb-4">The Service is provided on an "AS IS" and "AS AVAILABLE" basis. OmniAlbum makes no representations or warranties of any kind, express or implied, regarding the operation of the Service or the information, content, or materials included therein.</p>
          <p className="mb-4">We do not guarantee that the application will function with all versions of Immich, Nextcloud, or PhotoPrism, as these are third-party software projects that change independently.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">5. Limitation of Liability</h2>
          <p className="mb-4">In no event shall OmniAlbum be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">6. Changes to Terms</h2>
          <p className="mb-4">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">7. Contact Us</h2>
          <p className="mb-4">If you have any questions about these Terms, please contact us at <a href="mailto:varunraj.026@gmail.com" className="text-brand-600 hover:text-brand-800 underline">varunraj.026@gmail.com</a>.</p>
       </div>
    </div>
  );
};