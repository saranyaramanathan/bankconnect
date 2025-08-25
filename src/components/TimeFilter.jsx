import { Button } from "../components/ui/button";
import { CalendarDays } from "lucide-react";
import { useState } from "react";

const TimeFilter = () => {
  const [activeFilter, setActiveFilter] = useState("1M");

  const timeFilters = [
    { label: "24H", value: "24H" },
    { label: "1W", value: "1W" },
    { label: "2W", value: "2W" },
    { label: "1M", value: "1M" },
    { label: "6M", value: "6M" },
    { label: "1Y", value: "1Y" },
  ];

  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1 bg-muted rounded-lg p-1">
        {timeFilters.map((filter) => (
          <Button
            key={filter.value}
            variant={activeFilter === filter.value ? "default" : "ghost"}
            size="sm"
            onClick={() => setActiveFilter(filter.value)}
            className={
              activeFilter === filter.value
                ? "bg-primary text-primary-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            }
          >
            {filter.label}
          </Button>
        ))}
      </div>
      <Button variant="outline" size="sm">
        <CalendarDays className="w-4 h-4" />
      </Button>
    </div>
  );
};

export default TimeFilter;