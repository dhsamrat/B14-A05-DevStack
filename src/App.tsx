import { useEffect, useState } from "react";

import Techonology from "./components/technologies/Techonology";

import type { Itechnology } from "./types/type";
import { Bounce, toast } from "react-toastify";
import Nav from "./components/Nav";
import Banner from "./components/Banner";

function App() {
  const [technologies, setTechnologies] = useState<Itechnology[]>([]);
  const [selectedTech, setSelectedTech] = useState<Itechnology[]>([]);
  const [loading, setLoading] = useState(true);

  // Get technology data from data.json
  useEffect(() => {
    fetch("/data.json").then((res) => res.json())
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
        setLoading(false);
      });
  }, []);

  // Add technology
  const handleAddToStack = (tech: Itechnology) => {
    const alreadyAdded = selectedTech.some(
      (item) => item.id === tech.id
    );

    if (alreadyAdded) {
      toast.warn(`${tech.name} is already in your stack!`);
      return;
    }

    setSelectedTech((prev) => [...prev, tech]);
    // toast.success(`${tech.name} added successfully!`)
    toast.success(`${tech.name} added to your stack!`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };

  // Remove one technology
  const handleRemove = (id: string) => {
    const techRemove = selectedTech.find((tech) => tech.id === id);

    setSelectedTech((prev) =>
      prev.filter((tech) => tech.id !== id)
    );

    if (techRemove) {
      toast.warn(`${techRemove.name} removed from your stack!`);
    }
  };

  // Remove all technologies
  const handleRemoveAll = () => {
    setSelectedTech([]);
    toast.error("All technology removed!");
  };

  return (
    <>
      <Nav />

      <Banner />
      {loading ? (
        <h2 className="text-center py-10">
          Loading.......
        </h2>
      ) : (
        <Techonology
          technologies={technologies}
          selectedTech={selectedTech}
          onAddToStack={handleAddToStack}
          onRemove={handleRemove}
          onRemoveAll={handleRemoveAll}
        />
      )}
    </>
  );
}

export default App;
