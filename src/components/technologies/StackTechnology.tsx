import type { Itechnology } from "../../types/type";

interface StackTechnologyProps {
    selectedTech: Itechnology[];
    onRemove: (id: string) => void;
}

const StackTechnology = ({
    selectedTech,
    onRemove,
}: StackTechnologyProps) => {
    return (
        <div className="space-y-3">
            {selectedTech.map((tech) => (
                <div
                    key={tech.id}
                    className="flex items-center justify-between border border-gray-200 rounded-lg p-3">

                    {/* Icon + Name */}
                    <div className="flex items-center gap-3">

                        <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-9 h-9 object-contain" />

                        <div>
                            <h3 className="text-sm font-semibold">
                                {tech.name}
                            </h3>

                            <p className="text-xs text-gray-500">
                                {tech.category}
                            </p>
                        </div>

                    </div>

                    {/* Remove */}
                    <button
                        onClick={() => onRemove(tech.id)}
                        className="text-gray-400 hover:text-red-500 text-lg"
                        title="Remove"
                    >
                        ✕
                    </button>

                </div>
            ))}

        </div>
    );
};

export default StackTechnology;