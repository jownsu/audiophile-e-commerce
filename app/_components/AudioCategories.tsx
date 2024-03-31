import { Grid } from "@radix-ui/themes";
import LinkCard from "./LinkCard";

const AudioCategories = ({ className }: { className?: string }) => {
    return (
        <Grid
            columns={{
                initial: "1",
                xs: "3"
            }}
            className={`w-full gap-x-[10px] gap-y-[75px] pb-7 pt-20 md:gap-x-[30px] ${className}`}
        >
            {LINKS.map((link) => (
                <LinkCard key={link.label} link={link} />
            ))}
        </Grid>
    );
};

const LINKS = [
    {
        href: "/category/headphones",
        label: "Headphones",
        image: "/images/category/headphones.png"
    },
    {
        href: "/category/speakers",
        label: "Speakers",
        image: "/images/category/speakers.png"
    },
    {
        href: "/category/earphones",
        label: "Earphones",
        image: "/images/category/earphones.png"
    }
];
export default AudioCategories;
