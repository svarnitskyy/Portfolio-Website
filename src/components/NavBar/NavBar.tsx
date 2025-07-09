import { Box, Button, Divider, Flex, Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

import './NavBar.css';

export function Navbar() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const buttonSize = isMobile ? 'xs' : 'md';

  return (
    <Box className="navbar">
      <Flex className="navbar-inner" align="center" justify="space-between">
        {!isMobile && (
          <Box className="logo">
            <Button variant="subtle">
              <Image src="/Portfolio-Website/Images/favicon.svg" h={40} fit="contain" />
            </Button>
          </Box>
        )}

        <Box className="nav-links-wrapper">
          <Flex className="nav-links" gap={isMobile ? 'xs' : 'sm'} justify="center" wrap="nowrap">
            <a href="#aboutme">
              <Button variant="subtle" size={buttonSize}>
                About
              </Button>
            </a>
            <a href="#experience">
              <Button variant="subtle" size={buttonSize}>
                Experience
              </Button>
            </a>
            <a href="#skills">
              <Button variant="subtle" size={buttonSize}>
                Skills
              </Button>
            </a>
            <a href="#contact">
              <Button variant="subtle" size={buttonSize}>
                Contact
              </Button>
            </a>
          </Flex>
        </Box>
      </Flex>
      <Divider />
    </Box>
  );
}
