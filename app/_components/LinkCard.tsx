import { Box, Text } from "@radix-ui/themes";
import Link from "next/link";

interface Props {
    link: { href: string; label: string; image: string };
}

const LinkCard = ({ link }: Props) => {
    return (
        <Link
            className="group relative flex h-[165px] flex-col items-center justify-end rounded-md bg-grey p-[22px] md:h-[204px]"
            href={link.href}
        >
            <img
                src={link.image}
                alt={`Picture of ${link.label}`}
                className="absolute top-[-35%] w-[140px] object-contain md:w-[215px]"
            />
            <Text className="mb-2 text-s4 font-semibold uppercase text-black md:text-s5">
                {link.label}
            </Text>
            <Text className="flex items-center gap-3 text-s2 font-semibold text-black text-opacity-50 duration-200 group-hover:text-primary">
                SHOP{" "}
                <img
                    src="/images/icon/icon-arrow-right.svg"
                    alt="right icon"
                    className="inline-block"
                />
            </Text>
        </Link>
    );
};

export default LinkCard;
