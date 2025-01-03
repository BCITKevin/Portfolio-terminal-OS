'use client';

import { useRouter } from 'next/navigation';
import DesktopApps from "@/lib/apps";
import { Flex, Box, Text, Image } from "@chakra-ui/react";
import { RiShutDownLine } from "react-icons/ri";
import { MdOutlineRestartAlt } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { setActiveApp, setShowAppMenu } from "../store/features/desktopSlice";

export default function DesktopHeaderAppMenu() {
    const dispatch = useDispatch();
    const router = useRouter();

    const hanldeShutdownClick = () => {
        router.push('/');
    }

    const handleRebootClick = () => {
        router.push('/');
    }

    // 지금 모바일 디바이스일때 스타일링을 다르게 주는 작업을 하고 있었어. 거의 다 했는데 앱을 눌렀을때 transform(5%) 가 부모 태그에 적용돼서 그거 고쳐야돼. 근데 일단 이 파일은 아닌듯. 그거 찾아서 고쳐. 거의 다 했다 화이팅~

    return (
        <>
            <Flex
                w="400px"
                minH="150px"
                position="absolute"
                // left="1"
                zIndex="10"
                backgroundColor="whiteAlpha.950"
                color="black"
                p={4}
                border="1px solid rgba(0, 0, 0, 0.1)"
                borderRight="1px solid rgba(0, 0, 0, 0.1)"
                borderBottom="1px solid rgba(0, 0, 0, 0.1)"
                borderRadius="8px"
                flexDir="column"
                shadow="1.5px 1.5px 1.5px rgba(0, 0, 0, 0.1)"
            >
                <Flex>
                    <Flex w="40%" borderRight="1px solid rgba(0, 0, 0, 0.1)" pt={2}>
                        Applications
                    </Flex>
                    <Flex w="60%" flexDir="column" pl={2}>
                        {DesktopApps().map((app, i) => {
                            return (
                                <Flex
                                    key={i++}
                                    alignItems="center"
                                    p={2}
                                    _hover={{ bgColor: "debian.600" }}
                                    borderRadius="5px"
                                    cursor="pointer"
                                    onClick={() => {
                                        dispatch(setActiveApp(app.appName));
                                        dispatch(setShowAppMenu(false));
                                    }}
                                >
                                    <Image
                                        src={`/icons/${app.iconName}`}
                                        w="30px"
                                        h="30px"
                                        alt={app.title}
                                    />
                                    <Box w={2} />
                                    <Text userSelect="none">{app.title}</Text>
                                </Flex>
                            );
                        })}
                    </Flex>
                </Flex>
                <Flex
                    flexDir="column"
                    borderTop="1px solid rgba(0, 0, 0, 0.1)"
                    pt={3}
                    mt={3}
                >
                    <Flex
                        _hover={{ bgColor: "debian.600" }}
                        p={2}
                        cursor="pointer"
                        w="180px"
                        borderRadius="10px"
                        alignItems="center"
                        onClick={hanldeShutdownClick}
                    >
                        <RiShutDownLine
                            width="30px"
                            height="30px"
                        />
                        <Box w={2} />
                        <Text userSelect="none">Shutdown</Text>
                    </Flex>
                    <Flex
                        _hover={{ bgColor: "debian.600" }}
                        p={2}
                        cursor="pointer"
                        w="180px"
                        borderRadius="10px"
                        alignItems="center"
                        onClick={handleRebootClick}
                    >
                        <MdOutlineRestartAlt
                            width="30px"
                            height="30px"
                        />
                        <Box w={2} />
                        <Text userSelect="none">Reboot</Text>
                    </Flex>
                </Flex>
            </Flex>
        </>
    );
}