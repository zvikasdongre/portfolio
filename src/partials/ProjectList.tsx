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
        name="MC Status"
        description="This app is made to check the status of minecraft servers, You can check the server's status almost instantly and without any cache."
        link="https://mcstatus.vercel.app"
        img={{
          src: '/assets/images/mcstatus.png',
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
        link="https://market.controlpanel.gg/resources/author/24-blaze/"
        img={{ src: '/assets/images/theme.png', alt: 'CPGG Themes' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>ControlPanel.gg</Tags>
            <Tags color={ColorTags.EMERALD}>Themes</Tags>
            <Tags color={ColorTags.SKY}>Tailwind.css</Tags>
          </>
        }
      />
      {/* <Project
        name="Project 3"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        bibendum. Nunc non posuere consectetur, justo erat semper enim, non
        hendrerit dui odio id enim."
        link="/"
        img={{ src: '/assets/images/project-maps.png', alt: 'Project Maps' }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>Astro.js</Tags>
            <Tags color={ColorTags.INDIGO}>Bootstrap</Tags>
            <Tags color={ColorTags.ROSE}>TypeScript</Tags>
          </>
        }
      /> */}
    </div>
  </Section>
);

export { ProjectList };
