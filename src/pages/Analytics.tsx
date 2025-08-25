import { ArrowLeft, TrendingUp, DollarSign, CreditCard, PieChart, BarChart3, Calendar, Users } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";
import { Badge } from "../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../components/ui/table";

const Analytics = () => {
  const bankStats = [
    {
      id: "sbi",
      bank: "State Bank of India",
      logo: "🏦",
      successRate: 56,
      failureRate: 44,
      vendors: ["ONEMONEY", "NADL", "FINVU"]
    },
    {
      id: "icici",
      bank: "ICICI Bank", 
      logo: "🏛️",
      successRate: 93,
      failureRate: 7,
      vendors: ["ONEMONEY", "SAAFE", "NADL", "FINVU"]
    },
    {
      id: "hdfc",
      bank: "HDFC Bank",
      logo: "🏪",
      successRate: 68,
      failureRate: 32,
      vendors: ["ONEMONEY", "SAAFE", "NADL", "FINVU"]
    },
    {
      id: "yes",
      bank: "Yes Bank",
      logo: "🏬",
      successRate: 90,
      failureRate: 10,
      vendors: ["ONEMONEY", "SAAFE", "NADL", "FINVU"]
    },
    {
      id: "apgvb",
      bank: "Andhra Pradesh Grameena Vikas Bank",
      logo: "🏢",
      successRate: 100,
      failureRate: 0,
      vendors: ["ONEMONEY"]
    }
  ];

  const overallMetrics = [
    {
      label: "Total Volume Processed",
      value: "₹10.1M",
      change: "+18.2%",
      icon: DollarSign,
      description: "Last 30 days"
    },
    {
      label: "Active Bank Partners",
      value: "12",
      change: "+2",
      icon: Users,
      description: "Connected banks"
    },
    {
      label: "Processing Accuracy",
      value: "98.4%",
      change: "+1.2%", 
      icon: TrendingUp,
      description: "Average accuracy"
    },
    {
      label: "Transactions Today",
      value: "2,847",
      change: "+15.3%",
      icon: CreditCard,
      description: "Real-time count"
    }
  ];

  const transactionTypes = [
    { type: "Credit", percentage: 45, amount: "₹4.5M", color: "bg-success" },
    { type: "Debit", percentage: 35, amount: "₹3.5M", color: "bg-primary" },
    { type: "Transfers", percentage: 15, amount: "₹1.5M", color: "bg-secondary" },
    { type: "Others", percentage: 5, amount: "₹0.6M", color: "bg-muted" }
  ];

  const monthlyData = [
    { month: "Jan", transactions: 45000, volume: 8.2 },
    { month: "Feb", transactions: 52000, volume: 9.8 },
    { month: "Mar", transactions: 48000, volume: 8.9 },
    { month: "Apr", transactions: 61000, volume: 11.2 },
    { month: "May", transactions: 58000, volume: 10.7 },
    { month: "Jun", transactions: 64300, volume: 12.1 }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-4">
            <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
              Back to Dashboard
            </Link>
          </div>
          <div className="flex items-center justify-between mt-4">
            <div>
              <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
              <p className="text-muted-foreground mt-1">Comprehensive insights and performance metrics</p>
            </div>
            <div className="flex gap-3">
              <Select defaultValue="last30">
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last7">Last 7 days</SelectItem>
                  <SelectItem value="last30">Last 30 days</SelectItem>
                  <SelectItem value="last90">Last 90 days</SelectItem>
                  <SelectItem value="last365">Last year</SelectItem>
                </SelectContent>
              </Select>
              <Button>
                <Calendar className="w-4 h-4 mr-2" />
                Custom Range
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Overall Metrics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {overallMetrics.map((metric) => (
            <Card key={metric.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <metric.icon className="w-8 h-8 text-muted-foreground" />
                  <span className="text-sm font-medium text-success">{metric.change}</span>
                </div>
                <div>
                  <p className="text-2xl font-bold mb-1">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">{metric.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-8">
          {/* Transaction Types Breakdown */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PieChart className="w-5 h-5" />
                Transaction Types
              </CardTitle>
              <CardDescription>Breakdown by transaction category</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {transactionTypes.map((type) => (
                  <div key={type.type}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">{type.type}</span>
                      <span className="text-sm text-muted-foreground">{type.percentage}%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Progress value={type.percentage} className="flex-1 h-2" />
                      <span className="text-sm font-medium w-16 text-right">{type.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Monthly Trends */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Monthly Trends
              </CardTitle>
              <CardDescription>Transaction volume and count over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {monthlyData.map((month) => (
                  <div key={month.month} className="flex items-center justify-between">
                    <div className="flex items-center gap-4 flex-1">
                      <span className="text-sm font-medium w-8">{month.month}</span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-muted-foreground">
                            {month.transactions.toLocaleString()} transactions
                          </span>
                          <span className="text-sm font-medium">₹{month.volume}M</span>
                        </div>
                        <Progress 
                          value={Math.min((month.transactions / 70000) * 100, 100)} 
                          className="h-2" 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Bank Status Dashboard */}
        <Card>
          <CardHeader className="space-y-4">
            {/* Filter Controls */}
            <div className="flex flex-wrap items-center gap-4">
              <Select defaultValue="all-vendors">
                <SelectTrigger className="w-64">
                  <SelectValue placeholder="ONEMONEY, NADL, SAAFE, FINVU" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-vendors">ONEMONEY, NADL, SAAFE, FINVU</SelectItem>
                  <SelectItem value="onemoney">ONEMONEY</SelectItem>
                  <SelectItem value="nadl">NADL</SelectItem>
                  <SelectItem value="saafe">SAAFE</SelectItem>
                  <SelectItem value="finvu">FINVU</SelectItem>
                </SelectContent>
              </Select>
              
              <Select defaultValue="last-6-hours">
                <SelectTrigger className="w-32">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="last-6-hours">Last 6 hours</SelectItem>
                  <SelectItem value="last-24-hours">Last 24 hours</SelectItem>
                  <SelectItem value="last-7-days">Last 7 days</SelectItem>
                </SelectContent>
              </Select>

              <Tabs defaultValue="overall" className="flex-1">
                <TabsList>
                  <TabsTrigger value="overall">Overall</TabsTrigger>
                  <TabsTrigger value="client">Client</TabsTrigger>
                </TabsList>
              </Tabs>

              <Button>Apply Filter</Button>
            </div>
          </CardHeader>
          
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-muted-foreground font-medium">BANK NAME</TableHead>
                  <TableHead className="text-muted-foreground font-medium">SUPPORTED VENDORS</TableHead>
                  <TableHead className="text-muted-foreground font-medium">SUCCESS RATE</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bankStats.map((bank) => (
                  <TableRow key={bank.id} className="border-b border-border">
                    <TableCell className="py-6">
                      <div className="flex items-center gap-3">
                        <span className="text-2xl">{bank.logo}</span>
                        <span className="font-medium text-foreground">{bank.bank}</span>
                      </div>
                    </TableCell>
                    <TableCell className="py-6">
                      <div className="flex flex-wrap gap-2">
                        {bank.vendors.map((vendor) => (
                          <Badge 
                            key={vendor} 
                            variant="secondary"
                            className="bg-success/10 text-success border-success/20 hover:bg-success/20"
                          >
                            {vendor}
                          </Badge>
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="py-6">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-success"></div>
                            <span className="text-success font-medium">Success: {bank.successRate}%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-destructive"></div>
                            <span className="text-destructive font-medium">Failure: {bank.failureRate}%</span>
                          </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-success to-success/80 transition-all duration-500"
                            style={{ width: `${bank.successRate}%` }}
                          />
                          <div 
                            className="h-full bg-gradient-to-r from-destructive/80 to-destructive"
                            style={{ width: `${bank.failureRate}%`, marginTop: '-12px', marginLeft: `${bank.successRate}%` }}
                          />
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;