import { ChevronRight } from "lucide-react";

const BreadCrumb = () => {
  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
      <a href="#" className="hover:text-foreground transition-colors">
        BankConnect
      </a>
      <ChevronRight className="w-4 h-4" />
      <span className="text-foreground font-medium">Bank Statements</span>
    </nav>
  );
};

export default BreadCrumb;