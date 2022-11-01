import {
  GradientText,
  Newsletter,
  Section,
} from '@/components';

const CTA = () => (
  <Section>
    <Newsletter
      title={
        <>
          <GradientText>Contact</GradientText> Me
        </>
      }
      description={<>If you like to hire me or get in touch with me then feel free to contact me at <span>zvikasdongre@gmail.com</span></>}
    />
  </Section>
);

export { CTA };
