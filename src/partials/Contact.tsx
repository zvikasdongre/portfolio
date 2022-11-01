import {
  GradientText,
  Section,
} from '@/components';

const Contact = () => (
  <Section>
    <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
      <div className="sm:w-10/12">
        <div className="text-2xl font-bold"><GradientText>Contact</GradientText> Me</div>

        <p className="mt-3 text-gray-300">If you like to hire me or get in touch with me then feel free to contact me at <a href='mailto:zvikasdongre@gmail.com'><GradientText>zvikasdongre@gmail.com</GradientText></a></p>
      </div>

    </div>

  </Section>
);

export { Contact };
