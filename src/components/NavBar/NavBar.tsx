import { Button, Flex, Image, Divider, Box } from '@mantine/core';
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
                            <Image src="./src/Images/favicon.svg" h={40} fit="contain" />
                        </Button>
                    </Box>
                )}

                <Box className="nav-links-wrapper">
                    <Flex className="nav-links" gap={isMobile ? 'xs' : 'sm'} justify="center" wrap="nowrap">
                        <a href="#top"><Button variant="subtle" size={buttonSize}>Home</Button></a>
                        <Button variant="subtle" size={buttonSize}>About</Button>
                        <Button variant="subtle" size={buttonSize}>Projects</Button>
                        <Button variant="subtle" size={buttonSize}>Contact</Button>
                    </Flex>
                </Box>
            </Flex>
            <Divider />
        </Box>
    );
}
