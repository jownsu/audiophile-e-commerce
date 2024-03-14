import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import AudioCategories from "./_components/AudioCategories";

export default function Home() {
    return (
        <div>
            <section className="relative bg-hero bg-cover bg-center bg-no-repeat text-white md:bg-lg_hero">
                <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50"></div>
                <Container
                    className="relative z-20 text-center bg-blend-darken md:text-start"
                    px="5"
                >
                    <Flex
                        direction="column"
                        align={{
                            initial: "center",
                            md: "start"
                        }}
                        justify="center"
                        gap="4"
                        className="h-[600px] sm:h-[730px]"
                    >
                        <p className="text-s3 font-light uppercase tracking-[10px] opacity-50">
                            New Product
                        </p>
                        <p className="text-s10 font-semibold uppercase leading-tight tracking-wider md:max-w-md md:text-s12">
                            XX99 Mark II Headphones
                        </p>
                        <p className="mb-3 max-w-[360px] text-s4 opacity-75">
                            Experience natural, lifelike audio and exceptional
                            build quality made for the passionate music
                            enthusiast.
                        </p>
                        <Link href="/" className="btn btn_primary">
                            See Product
                        </Link>
                    </Flex>
                </Container>
            </section>
            <Container px="5" className="pb-[140px] pt-[110px]">
                <AudioCategories />
            </Container>
        </div>
    );
}
