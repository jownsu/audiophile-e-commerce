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
            <Container px="5">
                <section className="pb-[72px] pt-[110px] sm:pb-[48px] md:pb-[120px]">
                    <AudioCategories />
                </section>

                <section>
                    <Flex
                        direction={{
                            initial: "column",
                            md: "row"
                        }}
                        align={{
                            initial: "center"
                        }}
                        justify={{
                            initial: "center",
                            md: "between"
                        }}
                        className="my-5 overflow-hidden rounded-md bg-primary bg-circle_pattern bg-cover bg-[center_top_-130px] bg-no-repeat px-7 pb-[55px] pt-[62px] sm:pb-[64px] md:bg-[length:75%] md:bg-[position:-25%_10%] md:pb-0 md:pl-[138px] md:pr-[122px]"
                    >
                        <img
                            src="/images/speaker-zx9.png"
                            alt="Speaker"
                            className="mb-[40px] w-[172px] sm:mb-[68px] sm:w-[180px] md:mb-0 md:w-[380px] md:translate-y-4"
                        />
                        <div className="text-center text-white md:text-start">
                            <p className="mx-auto mb-[28px] max-w-[220px] text-center text-s10 font-semibold uppercase leading-none tracking-wider sm:max-w-[270px] sm:text-s12 md:mx-0 md:text-start">
                                ZX9 Speaker
                            </p>
                            <p className="mb-[26px] text-s4 opacity-75 sm:mb-[42px] sm:max-w-[350px]">
                                Upgrade to premium speakers that are
                                phenomenally built to deliver truly remarkable
                                sound.
                            </p>
                            <Link href="/" className="btn btn_secondary">
                                See Product
                            </Link>
                        </div>
                    </Flex>
                </section>

                <section>
                    <Flex
                        direction="column"
                        justify="center"
                        className="h-[320px] rounded-md bg-[url('/images/speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat px-[26px] sm:bg-[url('/images/sm-speaker-zx7.jpg')] sm:px-[63px] md:bg-[url('/images/md-speaker-zx7.jpg')] md:px-[96px]"
                    >
                        <p className="mb-[30px] text-s8 font-semibold uppercase tracking-wide">
                            ZX7 Speaker
                        </p>
                        <Link href="/" className="btn btn_outline">
                            See Product
                        </Link>
                    </Flex>
                </section>
            </Container>
        </div>
    );
}
