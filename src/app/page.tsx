"use client";

import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import { selectedCategoryAtom } from "@/lib/atom";
import {
  CombustionChamberIcon,
  EnginesIcon,
  JetEnginesIcon,
  PropellersIcon,
  RocketEnginesIcon,
  SolarSystemIcon,
  SonicFlowIcon,
  ThrustReversalIcon,
  VNDiagramIcon,
} from "@/icons/icons";
import { ROUTES } from "@/ROUTES";

export default function CategoriesPage() {
  const router = useRouter();
  const [selectedCategories, setSelectedCategories] = useState<string>();
  const [selectedCategory, setSelectedCategory] = useAtom(selectedCategoryAtom);

  const categories = [
    {
      id: "combustion-chamber",
      name: "Cámaras de Combustión",
      status: "active",
      icon: (
        <div className="bg-gradient-to-br from-pink-300 to-red-400 p-3 rounded-xl">
          <CombustionChamberIcon />
        </div>
      ),
    },
    {
      id: "engines",
      name: "Motores Alternativos",
      status: "active",
      icon: (
        <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-3 rounded-xl">
          <EnginesIcon />
        </div>
      ),
    },
    {
      id: "jet-engines",
      name: "Motores a Reacción",
      status: "disabled",
      icon: (
        <div className="bg-gradient-to-br from-purple-300 to-purple-500 p-3 rounded-xl">
          <JetEnginesIcon />
        </div>
      ),
    },
    {
      id: "thrust-reversal",
      name: "Reversores de Empuje",
      status: "active",
      icon: (
        <div className="bg-gradient-to-br from-green-300 to-green-500 p-3 rounded-xl">
          <ThrustReversalIcon />
        </div>
      ),
    },
    {
      id: "vn-diagram",
      name: "Diagrama V-n",
      status: "active",
      icon: (
        <div className="bg-gradient-to-br from-red-300 to-red-500 p-3 rounded-xl">
          <VNDiagramIcon />
        </div>
      ),
    },
    {
      id: "rocket-engines",
      name: "Motores Cohete",
      status: "disabled",
      icon: (
        <div className="bg-gradient-to-br from-purple-300 to-pink-400 p-3 rounded-xl">
          <RocketEnginesIcon />
        </div>
      ),
    },
    {
      id: "solar-system",
      name: "Sistema Solar",
      status: "disabled",
      icon: (
        <div className="bg-gradient-to-br from-yellow-300 to-orange-500 p-3 rounded-xl">
          <SolarSystemIcon />
        </div>
      ),
    },
    {
      id: "sonic",
      name: "Flujo Sónico",
      status: "disabled",
      icon: (
        <div className="bg-gradient-to-br from-blue-300 to-blue-500 p-3 rounded-xl">
          <SonicFlowIcon />
        </div>
      ),
    },
    {
      id: "propellers",
      name: "Hélices",
      status: "disabled",
      icon: (
        <div className="bg-gradient-to-br from-purple-300 to-purple-500 p-3 rounded-xl">
          <PropellersIcon />
        </div>
      ),
    },
  ];

  const filteredCategories = categories.filter(
    (category) => category.status === "active",
  );

  const toggleCategory = (categoryId: string) => {
    setSelectedCategory(categoryId);
    router.push(ROUTES.quiz);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-primary-500 text-white p-4  items-center">
        <h1 className="text-xl font-bold text-center">Seleccionar Categoría</h1>
      </div>

      {/* Categories Grid */}
      <div className="p-4">
        <div className="grid sm:grid-cols-6 grid-cols-2 gap-4">
          {filteredCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => toggleCategory(category.id)}
              className={`bg-white hover:bg-primary-50 rounded-xl p-4 shadow-md flex flex-col items-center justify-center aspect-square transition-all ${
                selectedCategories == category.id ? "ring-2 ring-blue-500" : ""
              }`}
            >
              {category.icon}
              <span
                className={`mt-3 font-medium ${selectedCategories == category.id ? "text-blue-600" : ""}`}
              >
                {category.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
