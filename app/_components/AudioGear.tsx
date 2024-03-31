import { Flex } from "@radix-ui/themes";

const AudioGear = ({ className }: { className?: string }) => {
    return (
        <section id="audio_gear_section" className={className}>
            <Flex
                direction={{
                    initial: "column",
                    md: "row"
                }}
                align={{
                    md: "center"
                }}
                justify={{}}
                className="mb-[118px] gap-[36px] sm:mb-[97px] sm:gap-[63px] md:mb-[120px] md:gap-[30px]"
            >
                <div className="h-[300px] rounded-md bg-[url('/images/best-gear.jpg')] bg-cover bg-center bg-no-repeat sm:h-[320px] sm:bg-[url('/images/sm-best-gear.jpg')] md:order-2 md:h-[588px] md:w-1/2 md:bg-[url('/images/md-best-gear.jpg')]"></div>
                <div className="text-center text-black sm:mx-auto sm:max-w-[570px] md:mx-0 md:w-1/2 md:text-start">
                    <p className="mb-[30px] text-s8 font-bold uppercase leading-none sm:mb-[34px] sm:text-s11 md:order-1 md:max-w-[400px]">
                        Bringing you the{" "}
                        <span className="text-primary">best</span> audio gear
                    </p>
                    <p className="text-s4 opacity-50 md:max-w-[430px]">
                        Located at the heart of New York City, Audiophile is the
                        premier store for high end headphones, earphones,
                        speakers, and audio accessories. We have a large
                        showroom and luxury demonstration rooms available for
                        you to browse and experience a wide range of our
                        products. Stop by our store to meet some of the
                        fantastic people who make Audiophile the best place to
                        buy your portable audio equipment.
                    </p>
                </div>
            </Flex>
        </section>
    );
};

export default AudioGear;
