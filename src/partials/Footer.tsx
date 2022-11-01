import { FooterCopyright, Section } from '@/components';

import { AppConfig } from '@/utils/AppConfig';

const Footer = () => (
  <Section>
    <FooterCopyright site_name={AppConfig.author} />
  </Section>
);

export { Footer };
