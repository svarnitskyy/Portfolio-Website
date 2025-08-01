import { Image, Text, Title } from '@mantine/core';
import styles from './Experience.module.css';

export function Experience() {
  const experienceInfo = [
    {
      employer: 'John Deere',
      description: [
        'Built bulk edit tools with React/Redux/TypeScript, boosting editing speed by\n' +
          '                  11,000% via batch operations.',
        'Achieved 100% test coverage by implementing Mocha unit/integration tests and\n' +
          '                  Cypress end-to-end tests.',
        'Improved UX and code quality by collaborating on system design and iterating on\n' +
          '                  cross-team feedback.',
      ],
      image: "/Portfolio-Website/Images/John_Deere_logo.png",
    },
    {
      employer: 'John Deere',
      description: [
        'Built and maintained Node.js DevOps tools adopted by 10+ engineering teams to\n' +
          '                    streamline workflows.',
        'Improved AI-powered ticket router, automating ServiceNow assignments for faster\n' +
          '                    resolution.',
        'Developed SAP BTP tool with team members to enforce security settings and ensure\n' +
          '                    policy compliance.'
      ],
      image: "/Portfolio-Website/Images/John_Deere_logo.png",
    },
  ];

  const employers = experienceInfo.map((experience) => {
    return (
      <div className={styles.textbox}>
        <div className={styles.imagewrapper}>
          <Image src={experience.image} className={styles.imagebox} />
        </div>
        <Text className={styles.textwrapper}>
          <ul>
            {experience.description.map((bullet) => {
              return <li className="bulletpoint">{bullet}</li>;
            })}
          </ul>
        </Text>
      </div>
    );
  });

  return (
    <div style={{ width: '100%' }} id='experience'>
      <Title style={{ textAlign: 'center', margin: '20px 20px' }}>Experience</Title>
      <div className={styles.experiencegrid}>{employers}</div>
    </div>
  );
}