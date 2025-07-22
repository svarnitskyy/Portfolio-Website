import { IconBrandGithub, IconBrandGmail, IconBrandLinkedin } from '@tabler/icons-react';
import { ActionIcon, Anchor, Group, Image } from '@mantine/core';
import classes from './Footer.module.css';

const links = [
  { link: '#aboutme', label: 'About Me' },
  { link: '#experience', label: 'Experience' },
  { link: '#skills', label: 'Skills' },
];

export function Footer() {
  const items = links.map((link) => (
    <Anchor c="dimmed" key={link.label} href={link.link} lh={1} size="sm">
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <div className={classes.inner}>
        <Image
          src="/Portfolio-Website/Images/favicon.svg"
          h={40}
          style={{ maxWidth: 'fit-content' }}
          fit="contain"
        />
        <Group className={classes.links}>{items}</Group>

        <Group gap="xs" justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            variant="default"
            radius="xl"
            component="a"
            href="https://github.com/svarnitskyy"
            rel="noopener noreferrer"
            target="_blank"
          >
            <IconBrandGithub size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              component="a"
              href="https://www.linkedin.com/in/svyatoslav-varnitskyy/"
              rel="noopener noreferrer"
              target="_blank"
          >
            <IconBrandLinkedin size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
              size="lg"
              variant="default"
              radius="xl"
              component="a"
              href="mailto:varnitskyysvyatoslav@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
          >
            <IconBrandGmail size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </div>
    </div>
  );
}