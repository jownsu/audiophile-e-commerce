import { Grid } from "@radix-ui/themes";
import LinkCard from "./LinkCard";

const AudioCategories = () => {
    return (
        <Grid
            columns={{
                initial: "1",
                xs: "3"
            }}
            className="w-full gap-x-4 gap-y-16 rounded-b-md bg-white px-5 pb-7 pt-20"
        >
            {LINKS.map((link) => (
                <LinkCard key={link.label} link={link} />
            ))}
        </Grid>
    );
};

const LINKS = [
    {
        href: "/headphones",
        label: "Headphones",
        image: "images/category/headphones.png"
    },
    {
        href: "/speakers",
        label: "Speakers",
        image: "images/category/speakers.png"
    },
    {
        href: "/Earphones",
        label: "Earphones",
        image: "images/category/earphones.png"
    }
];
export default AudioCategories;