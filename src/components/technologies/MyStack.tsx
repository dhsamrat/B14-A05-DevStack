import type { Itechnology } from "../../types/type";
import StackTechnology from "./StackTechnology";

interface MyStackProps {
    selectedTech: Itechnology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const MyStack = ({
    selectedTech,
    onRemove,
    onRemoveAll,
}: MyStackProps) => {
    return (
        <div className="border border-gray-200 rounded-xl p-5 bg-white sticky top-5">

            {/* Header */}
            <div>
                <h2 className="text-xl font-bold">
                    Your Stack
                </h2>

                <p className="text-xs text-gray-500 mt-1">
                    {selectedTech.length === 0
                        ? "No Technology Selected."
                        : `${selectedTech.length} ${selectedTech.length === 1
                            ? "Technology"
                            : "Technology"
                        } Selected`}
                </p>
            </div>

            {/* Empty State */}
            {selectedTech.length === 0 ? (
                <div className="border border-dashed border-gray-300 rounded-lg p-8 mt-5 text-center">
                    <p className="text-sm text-gray-400">
                        Your stack is empty.
                    </p>
                </div>
            ) : (
                <>
                    {/* Selected Technologies */}
                    <div className="mt-5">
                        <StackTechnology
                            selectedTech={selectedTech}
                            onRemove={onRemove}
                        />
                    </div>

                    {/* Remove All Button */}
                    <button
                        onClick={onRemoveAll}
                        className="w-full mt-5 border border-red-200 text-red-500 hover:bg-red-50 py-2 rounded-lg text-sm font-medium transition"
                    >
                        Remove All
                    </button>
                </>
            )}

        </div>
    );
};

export default MyStack;