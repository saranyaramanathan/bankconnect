
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Search, Plus, ChevronDown, Filter,FileText, MoreHorizontal, ChevronLeft, ChevronRight,Download,Eye } from "lucide-react";

const StatementTable = () => {
 const statements = [
    {
      linkId: "SK NOUSAD",
      name: "MR SK NOUSAD",
      sessionId: "41fb0987-e93f-4ec0-8d0f-833dbf771f01",
      bank: "indusind",
      uploadType: "pdf",
      uploadOn: "Aug 14, 2024",
      status: "completed"
    },
    {
      linkId: "S B ELECTRICALS",
      name: "S B ELECTRICALS",
      sessionId: "e5393fc1-b662-4b8b-bdec-251fdacfa828",
      bank: "karnataka",
      uploadType: "pdf",
      uploadOn: "Aug 14, 2024",
      status: "processing"
    },
    {
      linkId: "ADHANA READYMADE GARMENTS",
      name: "M/S. ADHANA READYM...",
      sessionId: "21457cdb-393c-436c-af92-598169d40983",
      bank: "hdfc",
      uploadType: "pdf",
      uploadOn: "Aug 14, 2024",
      status: "completed"
    },
    {
      linkId: "Divya Ganga",
      name: "DIVYA GANGA ENTERP...",
      sessionId: "b7e6c23a-a24f-41f9-b1da-54386f517e6e",
      bank: "ubi",
      uploadType: "pdf",
      uploadOn: "Aug 14, 2024",
      status: "failed"
    },
    {
      linkId: "VIJAYA ENGINEERING WORKS",
      name: "M/ VIJAYA ENGINEER...",
      sessionId: "d11ebede-e953-4cee-87b5-1db0a496d6ee",
      bank: "sbi",
      uploadType: "pdf",
      uploadOn: "Aug 14, 2024",
      status: "completed"
    }
  ];

  const getBankBadgeColor = (bank) => {
    const colors = {
      indusind: "bg-blue-100 text-blue-800",
      karnataka: "bg-green-100 text-green-800",
      hdfc: "bg-purple-100 text-purple-800",
      ubi: "bg-orange-100 text-orange-800",
      sbi: "bg-red-100 text-red-800"
    };
    return colors[bank] || "bg-gray-100 text-gray-800";
  };

  const getStatusBadge = (status) => {
    const variants = {
      completed: "bg-success/10 text-success",
      processing: "bg-primary/10 text-primary",
      failed: "bg-destructive/10 text-destructive"
    };
    return variants[status] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="bg-background p-6">
      {/* Header with search and actions */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          
           

      <div className="relative flex items-center ">
            
            <Input
              placeholder="Search"
              className="pl-10 w-80 bg-background border-input h-10"
            />
            <Search className="absolute left-4 text-muted-foreground w-4 h-4 pointer-events-none" />
          </div>


        </div>
        
        <div className="flex items-center gap-2">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground ">
            <Plus className="w-4 h-4 mr-2" />
            Add Statement
          </Button>
          
          <Button variant="outline" className="bg-background">
            <ChevronDown className="w-4 h-4 mr-2" />
            Actions
          </Button>
          
          <Button variant="outline" className="bg-background">
            <Filter className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </div>
      </div>

      {/* Table */}
      <Table className="mb-8">
        <TableHeader>
          <TableRow className="bg-muted/50">
           
            <TableHead className="font-semibold text-foreground text-center">NAME</TableHead>
            <TableHead className="font-semibold text-foreground text-center">BANK</TableHead>
            <TableHead className="font-semibold text-foreground text-center">UPLOAD TYPE</TableHead>
            <TableHead className="font-semibold text-foreground text-center">UPLOAD DATE</TableHead>
            {/* <TableHead className="font-semibold text-foreground">ACTIONS</TableHead> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {statements.map((statement, index) => (
            <TableRow key={index} className="hover:bg-muted/30 transition-colors">
             
              <TableCell className="text-muted-foreground">{statement.name}</TableCell>
              
              <TableCell>
                <Badge className={getBankBadgeColor(statement.bank)}>
                  {statement.bank.toUpperCase()}
                </Badge>
              </TableCell>
              <TableCell>
                <div className="flex items-center space-x-2">
                  <FileText className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{statement.uploadType}</span>
                </div>
              </TableCell>
              <TableCell className="text-muted-foreground">{statement.uploadOn}</TableCell>
             
              {/* <TableCell>
                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" className="p-2">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="p-2">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              </TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>


      {/* Pagination */}
      <div className="flex items-center justify-between mt-6">
        <div className="text-sm text-muted-foreground">
          Showing <span className="font-medium">1-10</span> of <span className="font-medium">1000</span>
        </div>
        
       
    <nav class="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        
        <ul class="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
            </li>
            <li>
                <a href="#" aria-current="page" class="flex items-center justify-center px-3 h-8 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
            </li>
            <li>
                <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
            </li>
            <li>
        <a href="#" class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
            </li>
        </ul>
    </nav>
      </div>
    </div>
  );
};

export default StatementTable;