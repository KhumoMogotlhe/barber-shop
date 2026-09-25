import LegalPage from '../components/LegalPage';
import { business, fullAddress } from '../data/business';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Privacy() {
  usePageTitle('Privacy policy');

  return (
    <LegalPage
      title="Privacy policy"
      intro="What we collect when you book, why we need it, and how you stay in control of it."
      updated="25 September 2026"
    >
      <h2>1. Who we are</h2>
      <p>
        {business.name}, {fullAddress}, is the responsible party for your personal information under the
        Protection of Personal Information Act 4 of 2013 (POPIA). Our information officer is Thabo Mokoena,
        contactable at <a href={`mailto:${business.email}`}>{business.email}</a>.
      </p>

      <h2>2. What we collect</h2>
      <ul>
        <li>Your name, email address and mobile number, when you book.</li>
        <li>Your appointment details: service, barber, date and time.</li>
        <li>Any notes you choose to add, such as style preferences or skin sensitivities.</li>
      </ul>
      <p>We only ask for what we need to manage your appointment.</p>

      <h2>3. Why we use it</h2>
      <ul>
        <li>To confirm, prepare for and manage your appointment.</li>
        <li>To contact you if your appointment needs to change.</li>
        <li>To give your barber any preferences or health notes you've shared.</li>
      </ul>
      <p>We don't sell your information or use it for marketing without your consent.</p>

      <h2>4. How your booking is stored</h2>
      <p>
        Booking details are saved in your browser's local storage on your device, so the site can show your
        confirmation and keep availability accurate. You can remove them at any time by clearing this site's
        data in your browser settings.
      </p>

      <h2>5. Cookies and browser storage</h2>
      <p>
        We don't use advertising or tracking cookies. Besides your booking, we store one small setting in
        your browser to remember that you've seen our first-visit offer, so it doesn't keep appearing.
      </p>

      <h2>6. Third-party services</h2>
      <p>
        Our contact page shows an embedded Google Map, and our calendar buttons open Google Calendar or
        download a calendar file. When you use these, the relevant provider may process information under its
        own privacy policy. Our social media links take you to those platforms, which have their own policies.
      </p>

      <h2>7. How long we keep it</h2>
      <p>
        We keep appointment information only as long as needed to provide our services and meet legal
        requirements, after which it is deleted.
      </p>

      <h2>8. Your rights</h2>
      <p>Under POPIA, you have the right to:</p>
      <ul>
        <li>Ask what personal information we hold about you, and request a copy.</li>
        <li>Ask us to correct or delete your information.</li>
        <li>Object to how we process your information.</li>
        <li>
          Lodge a complaint with the Information Regulator at{' '}
          <a href="https://inforegulator.org.za" target="_blank" rel="noopener noreferrer">
            inforegulator.org.za
          </a>
          .
        </li>
      </ul>

      <h2>9. Security</h2>
      <p>
        This website is served over a secure HTTPS connection, and we take reasonable steps to protect your
        information from loss, misuse and unauthorised access.
      </p>

      <h2>10. Children</h2>
      <p>
        Bookings for children under 18 should be made by a parent or guardian, who provides their own contact
        details.
      </p>

      <h2>11. Changes to this policy</h2>
      <p>We may update this policy from time to time. The latest version will always be on this page.</p>

      <h2>12. Contact us</h2>
      <p>
        For any privacy question or request, email <a href={`mailto:${business.email}`}>{business.email}</a> or
        call <a href={business.phoneHref}>{business.phone}</a>.
      </p>
    </LegalPage>
  );
}