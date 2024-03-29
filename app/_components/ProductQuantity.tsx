"use client";
interface Props {
    variant?: "sm" | "lg";
    value?: number;
    handleAdd?: (newValue: number) => void;
    handleMinus?: (newValue: number) => void;
    handleRemove?: () => void;
}

const ProductQuantity = ({ value = 1, variant = "sm", handleAdd, handleMinus, handleRemove }: Props) => {

    const handleAddClick = () => {
        if (value < 10 && handleAdd) {
            handleAdd(value + 1);
        }
    };

    const handleMinusClick = () => {
        if(value > 1 && handleMinus){
            handleMinus(value - 1);
        }

        if(value === 1 && handleRemove){
            handleRemove();
        }
    };

    let size = "";

    if (variant === "sm") {
        size = "h-[32px] w-[96px]";
    } 
    else {
        size = "h-[48px] w-[120px]";
    }

    return (
        <div
            className={`flex items-center justify-between bg-grey text-s2 font-bold ${size}`}
        >
            <button
                type="button"
                className="px-[20px] opacity-50 duration-200 hover:text-primary"
                onClick={handleMinusClick}
            >
                -
            </button>
            <span>{value}</span>
            <button
                type="button"
                className="px-[20px] opacity-50 duration-200 hover:text-primary"
                onClick={handleAddClick}
            >
                +
            </button>
        </div>
    );
};

export default ProductQuantity;
