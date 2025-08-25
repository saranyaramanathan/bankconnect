import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Search, Filter, Download, Plus } from "lucide-react";

const SearchAndFilters = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
      {/* Left side - Search and Filters */}
      <div className="flex  sm:flex-row gap-4 flex-1">
        <div className="relative w-full flex-1 ">
          <Search className="absolute top-4 left-4 w-4 h-4 text-muted-foreground " />
          <Input
            placeholder="Search by Link ID"
            className=" pl-10 bg-muted/50 border-muted focus:bg-background"
          />
        </div>
        
        <Select>
          <SelectTrigger className="w-full sm:w-[140px] bg-muted/50 border-muted">
            <Filter className="w-4 h-4 mr-2 text-muted-foreground" />
            <SelectValue placeholder="Options" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Banks</SelectItem>
            <SelectItem value="sbi">SBI</SelectItem>
            <SelectItem value="hdfc">HDFC</SelectItem>
            <SelectItem value="icici">ICICI</SelectItem>
            <SelectItem value="axis">Axis</SelectItem>
          </SelectContent>
        </Select>

        <Button variant="outline" className="bg-muted/50 border-muted">
          <Download className="w-4 h-4 mr-2" />
          Operations
        </Button>
      </div>

      {/* Right side - Upload Button */}
      <Button className="bg-gradient-primary hover:opacity-90 shadow-elegant">
        <Plus className="w-4 h-4 mr-2" />
        Upload new statement
      </Button>
    </div>
  );
};

export default SearchAndFilters;