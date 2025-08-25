import { ArrowLeft, Download, FileText, TrendingUp, AlertCircle, CheckCircle, Clock, Filter } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Progress } from "../components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../components/ui/select";

const Reports = () => {
  const reportData = [
    {
      id: "RPT001",
      title: "Monthly Transaction Analysis",
      bank: "HDFC Bank",
      status: "completed",
      date: "2024-01-15",
      transactions: 1247,
      accuracy: 98.5,
      issues: 2
    },
    {
      id: "RPT002",
      title: "Quarterly Income Verification", 
      bank: "ICICI Bank",
      status: "processing",
      date: "2024-01-14",
      transactions: 892,
      accuracy: 97.2,
      issues: 5
    },
    {
      id: "RPT003",
      title: "Annual Financial Summary",
      bank: "SBI",
      status: "pending",
      date: "2024-01-13",
      transactions: 2156,
      accuracy: 99.1,
      issues: 1
    }
  ];

  const summaryStats = [
    {
      label: "Total Reports Generated",
      value: "1,247",
      trend: "+12%",
      icon: FileText
    },
    {
      label: "Average Processing Time",
      value: "2.3 min",
      trend: "-8%",
      icon: Clock
    },
    {
      label: "Success Rate",
      value: "98.7%",
      trend: "+2.1%",
      icon: CheckCircle
    },
    {
      label: "Data Accuracy",
      value: "99.2%",
      trend: "+1.5%",
      icon: TrendingUp
    }
  ];

  const getStatusBadge = (status: string) => {
    const variants = {
      completed: "default",
      processing: "secondary", 
      pending: "outline"
    } as const;
    
    const colors = {
      completed: "text-success-foreground bg-success",
      processing: "text-secondary-foreground bg-secondary",
      pending: "text-muted-foreground bg-muted"
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants]} className={colors[status as keyof typeof colors]}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </Badge>
    );
  };

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
              <h1 className="text-3xl font-bold text-foreground text-left">Reports</h1>
              <p className="text-muted-foreground mt-1">Comprehensive analysis and reporting dashboard</p>
            </div>
            <div className="flex gap-3">
              <Button variant="outline">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button>
                <Download className="w-4 h-4 mr-2" />
                Export All
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Summary Statistics */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {summaryStats.map((stat) => (
            <Card key={stat.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-success mt-1">{stat.trend}</p>
                  </div>
                  <stat.icon className="w-8 h-8 text-muted-foreground" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filter Controls */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Report Filters</CardTitle>
            <CardDescription>Filter reports by bank, date range, and status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-3">
              <div>
                <label className="text-sm font-medium mb-2 block">Bank</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Banks</SelectItem>
                    <SelectItem value="hdfc">HDFC Bank</SelectItem>
                    <SelectItem value="icici">ICICI Bank</SelectItem>
                    <SelectItem value="sbi">State Bank of India</SelectItem>
                    <SelectItem value="axis">Axis Bank</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Date Range</label>
                <Select defaultValue="last30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="last30">Last 30 days</SelectItem>
                    <SelectItem value="last90">Last 90 days</SelectItem>
                    <SelectItem value="last180">Last 6 months</SelectItem>
                    <SelectItem value="last365">Last year</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label className="text-sm font-medium mb-2 block">Status</label>
                <Select defaultValue="all">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="completed">Completed</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reports Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Reports</CardTitle>
            <CardDescription>Overview of all generated reports and their status</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {reportData.map((report) => (
                <div key={report.id} className="border border-border rounded-lg p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                        <FileText className="w-6 h-6 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{report.title}</h3>
                        <p className="text-sm text-muted-foreground">Report ID: {report.id}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      {getStatusBadge(report.status)}
                      <Button variant="outline" size="sm">
                        <Download className="w-4 h-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Bank</p>
                      <p className="font-medium">{report.bank}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Generated On</p>
                      <p className="font-medium">{report.date}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Transactions</p>
                      <p className="font-medium">{report.transactions.toLocaleString()}</p>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Issues Found</p>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{report.issues}</span>
                        {report.issues > 0 ? (
                          <AlertCircle className="w-4 h-4 text-yellow-500" />
                        ) : (
                          <CheckCircle className="w-4 h-4 text-success" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm text-muted-foreground">Data Accuracy</p>
                      <p className="text-sm font-medium">{report.accuracy}%</p>
                    </div>
                    <Progress value={report.accuracy} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;