import { Text, Title } from '@mantine/core';
import styles from './Skills.module.css';

export function Skills() {
  const skillsInfo = {
    Languages: [
      'Java',
      'Python',
      'C',
      'C++',
      'SQL',
      'JavaScript',
      'TypeScript',
      'HTML',
      'CSS',
      'Assembly',
      'Verilog',
    ],
    Frameworks: [
      'React',
      'Node.js',
      'JUnit',
      'Mocha',
      'Cypress',
      'FastAPI',
      'Express',
      'Bootstrap',
      'Material-UI',
      'REST API',
    ],
    Tools: [
      'Redux',
      'NumPy',
      'Matplotlib',
      'scikit-learn',
      'Git',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'Neo4j',
      'Jira',
    ],
    Skills: [
      'Full Stack Development',
      'Object-Oriented Programming OOP',
      'DevOps',
      'Data Structures and Algorithms',
      'Software Engineering',
      'Frontend Development',
      'Embedded Systems',
    ],
  };

  const skillCategories = Object.entries(skillsInfo).map(([category, items]) => {
    const isOneColumn = category.toLowerCase() === 'skills';

    return (
      <div className={styles.textbox} key={category}>
        <div>
          <div className={styles.categoryTitle}>{category}</div>
        </div>
        <div className={styles.textwrapper}>
          <Text>
            <ul className={isOneColumn ? styles.onecolumn : styles.twocolumn}>
              {items.map((item, index) => (
                <li key={index} className="bulletpoint">{item}</li>
              ))}
            </ul>
          </Text>
        </div>
      </div>
    );
  });

  return (
    <div style={{ width: '100%' }} id='skills'>
      <Title style={{ textAlign: 'center', margin: '20px 20px' }}>Skills</Title>
      <div className={styles.experienceGrid}>{skillCategories}</div>
    </div>
  );
}