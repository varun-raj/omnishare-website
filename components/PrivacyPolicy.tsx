import React from 'react';

export const PrivacyPolicy: React.FC = () => {
  return (
    <div className="pt-32 pb-24 max-w-3xl mx-auto px-6">
       <h1 className="text-4xl md:text-5xl font-bold mb-8 text-zinc-900 tracking-tight">Privacy Policy</h1>
       <div className="prose prose-zinc prose-lg max-w-none text-zinc-600">
          <p className="lead text-xl text-zinc-500 mb-8">Last updated: February 2025</p>

          <p className="mb-6">At OmniAlbum, we believe your photos are yours. Our application is designed to connect directly to your self-hosted servers (Immich, Nextcloud, PhotoPrism) without routing data through our servers. We prioritize your privacy and data sovereignty above all else.</p>
          
          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">1. Data Collection</h2>
          <p className="mb-4">OmniAlbum does not collect, store, or transmit your personal photos, album metadata, or server credentials to us or any third parties. All data transfer occurs directly between your device and your self-hosted server.</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li><strong>Photos & Videos:</strong> Remain on your server and your device cache.</li>
            <li><strong>Credentials:</strong> Stored securely in your device's Keychain.</li>
            <li><strong>Usage Data:</strong> We do not track user behavior or analytics.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">2. Network Activity</h2>
          <p className="mb-4">The application communicates exclusively with:</p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Your configured server endpoints (e.g., your Immich or Nextcloud instance).</li>
            <li>Apple iCloud (if you enable syncing features).</li>
            <li>OS-level services for map tiles (Apple Maps) if location features are used.</li>
          </ul>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">3. Local Processing</h2>
          <p className="mb-4">All image processing, thumbnail generation, and machine learning features (such as object recognition or smart sorting) are performed locally on your device or leveraged from your self-hosted server's API. We do not process your content on our servers.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">4. Third-Party Services</h2>
          <p className="mb-4">The App may interface with third-party services only at your explicit direction (e.g., sharing a photo to Instagram). In these cases, the data handling is governed by the privacy policy of the receiving service.</p>

          <h2 className="text-2xl font-bold mt-12 mb-4 text-zinc-900">5. Contact Us</h2>
          <p className="mb-4">If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@omnialbum.app" className="text-brand-600 hover:text-brand-800 underline">privacy@omnialbum.app</a>.</p>
       </div>
    </div>
  );
};