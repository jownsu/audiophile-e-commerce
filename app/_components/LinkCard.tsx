import { Box, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
    link: { href: string; label: string; image: string };
}

const LinkCard = ({ link }: Props) => {
    return (
        <Box className="relative flex flex-col items-center rounded-md bg-grey p-3 pt-20">
            <img
                src={link.image}
                alt={`Picture of ${link.label}`}
                className="absolute -top-1/3 w-32"
            />
            <Text className="mb-2 text-s4 font-bold uppercase">
                {link.label}
            </Text>
            <Link
                href={link.href}
                className="flex items-center gap-3 text-s2 font-bold text-black text-opacity-50"
            >
                SHOP{" "}
                <img
                    src="images/icon/icon-arrow-right.svg"
                    alt="right icon"
                    className="inline-block"
                />
            </Link>
        </Box>
    );
};

export default LinkCard;
