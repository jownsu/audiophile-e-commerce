"use client";
import { useRouter } from "next/navigation";

const Back = () => {
    const router = useRouter();

    return (
        <button
            className="mb-[25px] text-s4 text-black opacity-50 duration-200 hover:text-primary"
            type="button"
            onClick={() => router.back()}
        >
            Go Back
        </button>
    );
};

export default Back;
