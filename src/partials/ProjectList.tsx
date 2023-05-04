import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from '@/components';

const ProjectList = () => (
  <Section
    title={
      <>
        Work <GradientText>/ Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">

      <Project
        name="0x001 Cloud Website"
        description="0x001 Cloud is a powerful, affordable, and fast hosting service available. With our custom hardware, we can get the most performance."
        link="https://0x001.cloud"
        img={{ src: '/assets/images/0x001-cloud.webp', alt: '0x001 Cloud Website' }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Website</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
      <Project
        name="Lightning Hosting Website"
        description="Lightning Hosting is a Cheap, Reliable and Fast Game Hosting Platform."
        link="https://lightning-hosting.eu"
        img={{ src: '/assets/images/lightning-hosting.webp', alt: 'Lightning Hosting Website' }}
        category={
          <>
            <Tags color={ColorTags.EMERALD}>Website</Tags>
            <Tags color={ColorTags.PURPLE}>Paymenter.org</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
      <Project
        name="MC Status"
        description="This app is made to check the status of minecraft servers, You can check the server's status almost instantly and without any cache."
        link="https://mcstatus.vercel.app"
        img={{
          src: '/assets/images/mcstatus.webp',
          alt: 'MC Status',
        }}
        category={
          <>
            <Tags color={ColorTags.ORANGE}>Svelte Kit</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
            <Tags color={ColorTags.LIME}>Web Development</Tags>
          </>
        }
      />
      <Project
        name="CPGG Themes"
        description="These are some themes I made for ControlPanel.gg software."
        link="https://market.ctrlpanel.gg/resources/author/24-blaze/"
        img={{ src: '/assets/images/theme.webp', alt: 'CPGG Themes' }}
        category={
          <>
            <Tags color={ColorTags.BLUE}>ControlPanel.gg</Tags>
            <Tags color={ColorTags.EMERALD}>Themes</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
