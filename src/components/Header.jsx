import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Building2, Menu, User,Bell } from "lucide-react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="bg-gradient-primary  border-b border-border shadow-soft">
      <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8  rounded-lg flex items-center justify-center">
                <Building2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold  bg-clip-text text-foreground/70">
                FinanceBox
              </span>
            </div>
          </div>

          {/* Navigation */}
          {/* <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary font-medium border-b-2 border-primary pb-1">
              Statements
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Bank Status
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Settings
            </a>
          </nav> */}
          <nav className="hidden md:flex items-center justify-center space-x-1">
           
            
            <Link to="/analytics">
            <Button variant="ghost" className="text-foreground/70 font-bold  hover:bg-gradient-accent ">
              Analytics
            </Button>
            </Link>
            <Link to="/reports">
            <Button variant="ghost" className="text-foreground/70 font-bold  hover:bg-gradient-accent">
              Reports
            </Button>
            </Link>
            <Link to="/settings">
            <Button variant="ghost" className="text-foreground/70 font-bold  hover:bg-gradient-accent">
              Settings
            </Button>
            </Link>
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center  space-x-4">
            
            <Button variant="ghost" size="sm" className=" flex items-center justify-center hover:text-foreground">
              <Bell className="w-8 h-8" />
            </Button>
            <Button variant="ghost" size="sm" className="  flex items-center justify-center hover:text-foreground">
              <User className="w-8 h-8" />
            </Button>
           
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;