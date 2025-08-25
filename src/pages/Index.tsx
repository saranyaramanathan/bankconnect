import Header from "../components/Header";
import Breadcrumb from "../components/BreadCrumb";
import SearchAndFilters from "../components/SearchAndFilters";
import TimeFilter from "../components/TimeFilter";
import StatementTable from "../components/StatementTable";
import { Plus } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-surface">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        

        {/* Page Header */}
        {/* <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl  text-start font-bold text-foreground mb-2">Bank Statements</h1>
            <p className="text-muted-foreground">Manage and view all your bank statement uploads</p>
          </div>
          <div className="mt-4 lg:mt-0">
            <TimeFilter />
          </div>
        </div> */}
          <div className="text-center mb-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Smart Bank Statement
              <span className="block text-transparent bg-clip-text bg-gradient-primary mt-2">
                Analyzer
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Transform your financial data analysis with our intelligent bank statement processor. 
              Extract insights, verify transactions, and accelerate your decision-making process.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:shadow-elegant transition-all duration-300 shadow-soft">
               
                Upload Statement
              </button>
             
            </div> */}
          </div>

        {/* Search and Filters */}
        {/* <div className="mb-6">
          <SearchAndFilters />
        </div> */}
<div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 py-4 px-6">
              <div>
                {/* <Breadcrumb /> */}
                <h2 className="text-3xl font-bold text-foreground text-left mt-2">Statement Dashboard</h2>
                <p className="text-muted-foreground mt-1">Monitor and manage your bank statement analysis</p>
              </div>
              {/* <TimeFilter /> */}
            </div>
        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8 px-6">
          <div className="bg-card rounded-lg p-6 border border-border shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Statements</p>
                <p className="text-2xl font-bold text-foreground">24</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-primary rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Completed</p>
                <p className="text-2xl font-bold text-success">18</p>
              </div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-gradient-accent rounded"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Processing</p>
                <p className="text-2xl font-bold text-primary">4</p>
              </div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-primary rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border shadow-soft">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Failed</p>
                <p className="text-2xl font-bold text-destructive">2</p>
              </div>
              <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-destructive rounded"></div>
              </div>
            </div>
          </div>
        </div>
          
        {/* Main Table */}
        <StatementTable />
      </main>
    </div>
  );
};

export default Index;
