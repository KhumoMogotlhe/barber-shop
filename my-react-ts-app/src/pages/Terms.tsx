import { Link } from 'react-router-dom';
import LegalPage from '../components/LegalPage';
import { PROMO_CODE } from '../components/PromoModal';
import { business, fullAddress } from '../data/business';
import { usePageTitle } from '../hooks/usePageTitle';

export default function Terms() {
  usePageTitle('Terms and conditions');

  return (
    <LegalPage
      title="Terms and conditions"
      intro="The fine print, in plain language. Please read it before you book."
      updated="25 September 2026"
    >
      <h2>1. About these terms</h2>
      <p>
        These terms apply to your use of this website and to every appointment booked with {business.name} ("we",
        "us"), located at {fullAddress}. By making a booking, you agree to these terms. Nothing in them limits
        your rights under the Consumer Protection Act 68 of 2008.
      </p>

      <h2>2. Making a booking</h2>
      <ul>
        <li>Your appointment is confirmed when you see the confirmation screen with your booking reference.</li>
        <li>Please give accurate contact details so we can reach you if anything changes.</li>
        <li>Each booking is for one person and one service. Book separately for each person in your group.</li>
        <li>
          If you choose "any available barber", we assign a barber who is free at your chosen time. You'll see
          their name on your confirmation.
        </li>
      </ul>

      <h2>3. Prices and payment</h2>
      <ul>
        <li>All prices are in South African rand (ZAR) and include VAT where applicable.</li>
        <li>No deposit is required. You pay in store by card or cash after your appointment.</li>
        <li>We honour the price shown when you booked. Extra services added in the chair are charged at the listed price.</li>
        <li>We may update our prices from time to time. Changes don't affect bookings already made.</li>
      </ul>

      <h2>4. Cancellations and rescheduling</h2>
      <ul>
        <li>
          You can cancel or reschedule free of charge up to 24 hours before your appointment by calling{' '}
          <a href={business.phoneHref}>{business.phone}</a> or emailing{' '}
          <a href={`mailto:${business.email}`}>{business.email}</a>.
        </li>
        <li>
          For cancellations made less than 24 hours before, or if you don't arrive, we may charge 50% of the
          service price, payable at your next visit.
        </li>
        <li>After repeated missed appointments, we may ask for payment upfront for future bookings.</li>
      </ul>

      <h2>5. Arriving late</h2>
      <p>
        Please arrive 5 minutes before your appointment. If you are more than 10 minutes late, we may need to
        shorten your service or reschedule it, so that we stay on time for the next client. A shortened
        service is charged at the full price.
      </p>

      <h2>6. Children</h2>
      <p>
        Kids pricing applies to children under 12. A parent or guardian must stay for the whole appointment.
      </p>

      <h2>7. Health and safety</h2>
      <ul>
        <li>Please tell us about any allergies, skin conditions or sensitivities before your service begins.</li>
        <li>
          We may decline or adjust a service if we believe it could harm you, for example over broken skin or
          an infectious condition.
        </li>
        <li>All tools are cleaned and disinfected between clients, and razor blades are single use.</li>
      </ul>

      <h2>8. If we need to cancel</h2>
      <p>
        Occasionally we may need to cancel or move an appointment, for example because of barber illness,
        load shedding, or other circumstances beyond our control. We'll contact you as early as possible and
        offer the next available time. You won't be charged for any appointment we cancel.
      </p>

      <h2>9. Not happy with your cut?</h2>
      <p>
        Tell us before you leave, or within 7 days of your appointment, and we'll fix it free of charge.
      </p>

      <h2>10. Promotions</h2>
      <p>
        The first-visit free line-up offer applies to new clients only, when a haircut is booked online. Mention
        the code <strong>{PROMO_CODE}</strong> when you arrive. The offer is limited to one per person, can't
        be exchanged for cash or combined with other offers, and may be withdrawn at any time without affecting
        bookings already made.
      </p>

      <h2>11. Refusing service</h2>
      <p>
        We may refuse service to anyone who is abusive, threatening or under the influence of alcohol or
        drugs, to keep our team and other clients safe.
      </p>

      <h2>12. Using this website</h2>
      <p>
        Availability shown online is updated as bookings are made but may occasionally change. The content,
        logo and design of this website belong to {business.name} and may not be copied without permission.
      </p>

      <h2>13. Liability</h2>
      <p>
        To the extent permitted by law, we are not liable for indirect losses arising from your use of this
        website or our services. Nothing in these terms excludes liability that cannot be excluded under South
        African law.
      </p>

      <h2>14. Your personal information</h2>
      <p>
        We handle your information as described in our <Link to="/privacy">privacy policy</Link>.
      </p>

      <h2>15. Changes and governing law</h2>
      <p>
        We may update these terms from time to time; the version on this page applies to new bookings. These
        terms are governed by the laws of the Republic of South Africa.
      </p>

      <h2>16. Contact us</h2>
      <p>
        Questions about these terms? Email <a href={`mailto:${business.email}`}>{business.email}</a> or call{' '}
        <a href={business.phoneHref}>{business.phone}</a>.
      </p>
    </LegalPage>
  );
}