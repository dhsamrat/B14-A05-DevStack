import type { Itechnology } from "../../types/type";
import TechnologyCard from "./TechnologyCard";
import MyStack from "./myStack";

interface TechnologyProps {
    technologies: Itechnology[];
    selectedTech: Itechnology[];
    onAddToStack: (tech: Itechnology) => void;
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
}

const Techonology = ({
    technologies,
    selectedTech,
    onAddToStack,
    onRemove,
    onRemoveAll,
}: TechnologyProps) => {
    return (
        <section className="max-w-7xl mx-auto px-4 py-10">

            {/* Technology Heading */}
            <div className="py-4 mb-4">
                <h2 className="font-bold text-xl text-[#0F172A]">
                    Explore the <span className="text-[#EC4899]">Technologies</span>
                </h2>

                <p className="text-gray-500">
                    Pick one technology per category to build your ideal stack.
                </p>
            </div>

            {/* Cards + Your Stack */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                {/* Technology Cards */}
                <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                        {technologies.map((tech) => {
                            const isSelected = selectedTech.some(
                                (item) => item.id === tech.id
                            );

                            return (
                                <TechnologyCard
                                    key={tech.id}
                                    tech={tech}
                                    isSelected={isSelected}
                                    onAdd={onAddToStack}
                                />
                            );
                        })}

                    </div>
                </div>

                {/* Your Stack */}
                <div className="lg:col-span-1">
                    <MyStack
                        selectedTech={selectedTech}
                        onRemove={onRemove}
                        onRemoveAll={onRemoveAll}
                    />
                </div>

            </div>
        </section>
    );
};

export default Techonology;