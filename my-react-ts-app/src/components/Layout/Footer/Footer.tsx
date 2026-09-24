import { FaInstagram, FaFacebookF, FaTiktok } from 'react-icons/fa6';
import { Container } from '../../ui/Container';
import { Logo } from '../../ui/Logo';
import { business, fullAddress, mapsUrl } from '../../../data/business';
import { hours } from '../../../data/hours';
import { mainNav, legalNav } from '../../../data/navigation';
import { formatTime } from '../../../lib/dates';
import * as S from './Footer.styles';

const socialIcons = {
  instagram: FaInstagram,
  facebook: FaFacebookF,
  tiktok: FaTiktok,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <S.FooterWrap>
      <Container>
        <S.Grid>
          <S.Brand>
            <Logo />
            <S.Text>{business.description}</S.Text>
            <S.Socials>
              {business.socials.map(({ label, href, icon }) => {
                const Icon = socialIcons[icon];
                return (
                  <S.SocialLink
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${business.shortName} on ${label}`}
                  >
                    <Icon aria-hidden="true" />
                  </S.SocialLink>
                );
              })}
            </S.Socials>
          </S.Brand>

          <div>
            <S.ColTitle>Explore</S.ColTitle>
            <S.LinkList>
              {mainNav.map((item) => (
                <li key={item.to}>
                  <S.FooterLink to={item.to}>{item.label}</S.FooterLink>
                </li>
              ))}
              <li>
                <S.FooterLink to="/book">Book an appointment</S.FooterLink>
              </li>
            </S.LinkList>
          </div>

          <div>
            <S.ColTitle>Visit us</S.ColTitle>
            <S.LinkList>
              <li>
                <S.ExternalLink href={mapsUrl} target="_blank" rel="noopener noreferrer">
                  {fullAddress}
                </S.ExternalLink>
              </li>
              <li>
                <S.ExternalLink href={business.phoneHref}>{business.phone}</S.ExternalLink>
              </li>
              <li>
                <S.ExternalLink href={`mailto:${business.email}`}>{business.email}</S.ExternalLink>
              </li>
            </S.LinkList>
          </div>

          <div>
            <S.ColTitle>Opening hours</S.ColTitle>
            <S.HoursList>
              {hours.map((h) => (
                <li key={h.day}>
                  <span>{h.label}</span>
                  <span>
                    {h.open && h.close ? `${formatTime(h.open)} – ${formatTime(h.close)}` : 'Closed'}
                  </span>
                </li>
              ))}
            </S.HoursList>
          </div>
        </S.Grid>

        <S.Bottom>
          <span>
            © {year} {business.name}. All rights reserved.
          </span>
          <S.LegalLinks>
            {legalNav.map((item) => (
              <S.FooterLink key={item.to} to={item.to}>
                {item.label}
              </S.FooterLink>
            ))}
          </S.LegalLinks>
        </S.Bottom>
      </Container>
    </S.FooterWrap>
  );
}