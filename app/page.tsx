import { Container, Flex } from "@radix-ui/themes";
import Link from "next/link";
import AudioCategories from "./_components/AudioCategories";
import AudioGear from "./_components/AudioGear";
import Image from "next/image";

export default function Home() {
    return (
        <div>
            <section
                id="hero_section"
                className="relative bg-hero bg-cover bg-center bg-no-repeat text-white md:bg-lg_hero"
            >
                <div className="absolute left-0 top-0 z-10 h-full w-full bg-black opacity-50"></div>
                <Container className="relative z-20 px-10 text-center bg-blend-darken md:text-start">
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
                        <Link href="/product/xx99-mark-two-headphones" className="btn btn_primary">
                            See Product
                        </Link>
                    </Flex>
                </Container>
            </section>
            <Container className="px-6 sm:px-10">
                <section
                    id="audio_categories_section"
                    className="mb-5 pb-[72px] pt-[110px] sm:pb-[48px] md:pb-[120px]"
                >
                    <AudioCategories />
                </section>

                <section id="zx9_speaker_section">
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
                        className="mb-5 overflow-hidden rounded-md bg-primary bg-circle_pattern bg-cover bg-[center_top_-130px] bg-no-repeat px-7 pb-[55px] pt-[62px] sm:mb-[32px] sm:pb-[64px] md:bg-[length:75%] md:bg-[position:-25%_10%] md:pb-0 md:pl-[138px] md:pr-[122px]"
                    >
                        <Image
                            height={380}
                            width={460}
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
                            <Link href="/product/zx9-speaker" className="btn btn_secondary mx-auto md:mx-0">
                                See Product
                            </Link>
                        </div>
                    </Flex>
                </section>

                <section id="zx7_speaker_section">
                    <Flex
                        direction="column"
                        justify="center"
                        className="mb-6 h-[320px] rounded-md bg-[url('/images/speaker-zx7.jpg')] bg-cover bg-center bg-no-repeat px-[26px] sm:mb-[32px] sm:bg-[url('/images/sm-speaker-zx7.jpg')] sm:px-[63px] md:bg-[url('/images/md-speaker-zx7.jpg')] md:px-[96px]"
                    >
                        <p className="mb-[30px] text-s8 font-semibold uppercase tracking-wide">
                            ZX7 Speaker
                        </p>
                        <Link href="/product/zx7-speaker" className="btn btn_outline">
                            See Product
                        </Link>
                    </Flex>
                </section>

                <section id="yx1_earphones_section">
                    <Flex
                        direction={{
                            initial: "column",
                            sm: "row"
                        }}
                        className="mb-[120px] gap-6 sm:mb-[96px] sm:gap-3 md:mb-[200px] md:gap-[30px]"
                    >
                        <div className="h-[200px] rounded-md bg-[url('/images/earphones-yx1.jpg')] bg-cover bg-center bg-no-repeat sm:h-[320px] sm:w-1/2 sm:bg-[url('/images/sm-earphones-yx1.jpg')] md:bg-[url('/images/md-earphones-yx1.jpg')]"></div>
                        <div className="sm:p-15 box-border flex h-[200px] flex-col justify-center gap-8 rounded-sm bg-grey pl-6 sm:h-[320px] sm:w-1/2 sm:pl-11 md:pl-24">
                            <p className="text-s8 font-bold uppercase tracking-wide">
                                YX1 Earphones
                            </p>
                            <Link href="/product/yx1-earphones" className="btn btn_outline">
                                See Product
                            </Link>
                        </div>
                    </Flex>
                </section>
                <AudioGear />
            </Container>
        </div>
    );
}
