import React, { useState } from "react";
import {
  IoCheckmarkCircle,
  IoTime,
  IoClose,
  IoEye,
  IoDownload,
  IoAdd,
  IoSearch,
  IoFilter,
} from "react-icons/io5";
import { Helmet } from "react-helmet-async";

function Orders() {
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const orders = [
    {
      id: "ORD-001",
      service: "Social Media Campaign",
      status: "completed",
      date: "2025-01-10",
      amount: "$1,299",
      description: "Facebook and Instagram advertising campaign for Q1 2025",
      priority: "high",
      client: "Tech Startup Inc.",
    },
    {
      id: "ORD-002",
      service: "Google Ads Setup",
      status: "pending",
      date: "2025-01-15",
      amount: "$899",
      description: "Complete Google Ads campaign setup and optimization",
      priority: "medium",
      client: "E-commerce Store",
    },
    {
      id: "ORD-003",
      service: "Brand Strategy Consultation",
      status: "in-progress",
      date: "2025-01-12",
      amount: "$599",
      description: "Brand positioning and marketing strategy development",
      priority: "high",
      client: "Fashion Brand",
    },
    {
      id: "ORD-004",
      service: "Content Creation Package",
      status: "completed",
      date: "2025-01-08",
      amount: "$1,599",
      description: "Complete content package for social media and website",
      priority: "medium",
      client: "Restaurant Chain",
    },
    {
      id: "ORD-005",
      service: "Email Marketing Campaign",
      status: "cancelled",
      date: "2025-01-05",
      amount: "$399",
      description: "Automated email marketing sequence setup",
      priority: "low",
      client: "Local Business",
    },
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case "completed":
        return <IoCheckmarkCircle className="text-green-500 text-xl" />;
      case "pending":
        return <IoTime className="text-yellow-500 text-xl" />;
      case "in-progress":
        return <IoTime className="text-blue-500 text-xl animate-pulse" />;
      case "cancelled":
        return <IoClose className="text-red-500 text-xl" />;
      default:
        return <IoTime className="text-gray-500 text-xl" />;
    }
  };

  const getStatusBadge = (status) => {
    const statusStyles = {
      completed: "bg-green-100 text-green-800 border-green-200",
      pending: "bg-yellow-100 text-yellow-800 border-yellow-200",
      "in-progress": "bg-blue-100 text-blue-800 border-blue-200",
      cancelled: "bg-red-100 text-red-800 border-red-200",
    };

    return (
      <span
        className={`px-3 py-1 rounded-full text-xs font-semibold capitalize border ${statusStyles[status]}`}
      >
        {status.replace("-", " ")}
      </span>
    );
  };

  const getPriorityBadge = (priority) => {
    const priorityStyles = {
      high: "bg-red-50 text-red-700 border-red-200",
      medium: "bg-orange-50 text-orange-700 border-orange-200",
      low: "bg-gray-50 text-gray-700 border-gray-200",
    };

    return (
      <span
        className={`px-2 py-1 rounded text-xs font-medium capitalize border ${priorityStyles[priority]}`}
      >
        {priority}
      </span>
    );
  };

  const filteredOrders = orders.filter((order) => {
    const matchesTab = activeTab === "all" || order.status === activeTab;
    const matchesSearch =
      order.service.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.client.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTab && matchesSearch;
  });

  const getOrderStats = () => {
    return {
      total: orders.length,
      completed: orders.filter((o) => o.status === "completed").length,
      inProgress: orders.filter((o) => o.status === "in-progress").length,
      pending: orders.filter((o) => o.status === "pending").length,
      totalValue: orders.reduce(
        (sum, order) =>
          sum + parseFloat(order.amount.replace("$", "").replace(",", "")),
        0
      ),
    };
  };

  const stats = getOrderStats();

  return (
    <>
      <Helmet>
        <title>My Orders - Media Dost | Track Your Advertising Campaigns</title>
        <meta
          name="description"
          content="Track and manage all your advertising campaigns and services with Media Dost. View order status, download reports, and monitor your marketing investments."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='7' cy='7' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white bg-opacity-5 rounded-full animate-bounce"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
              <div className="inline-block px-4 py-2 bg-white bg-opacity-20 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                📊 ORDER MANAGEMENT
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                My Orders
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
                Track and manage all your advertising campaigns and services in
                one comprehensive dashboard.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-4 text-center border border-white border-opacity-20">
                  <div className="text-2xl font-bold">{stats.total}</div>
                  <div className="text-sm opacity-80">Total Orders</div>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-4 text-center border border-white border-opacity-20">
                  <div className="text-2xl font-bold">{stats.completed}</div>
                  <div className="text-sm opacity-80">Completed</div>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-4 text-center border border-white border-opacity-20">
                  <div className="text-2xl font-bold">{stats.inProgress}</div>
                  <div className="text-sm opacity-80">In Progress</div>
                </div>
                <div className="bg-white bg-opacity-15 backdrop-blur-md rounded-2xl p-4 text-center border border-white border-opacity-20">
                  <div className="text-2xl font-bold">
                    ${stats.totalValue.toLocaleString()}
                  </div>
                  <div className="text-sm opacity-80">Total Value</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 bg-white bg-opacity-10 rounded-3xl backdrop-blur-sm flex items-center justify-center border border-white border-opacity-20">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                      <IoEye className="text-4xl text-indigo-600" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Order Dashboard
                    </h3>
                    <p className="text-blue-200 font-medium">
                      Professional Management
                    </p>
                  </div>
                </div>
                {/* Floating Icons */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
                  <IoAdd className="text-white text-xl" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-pink-400 rounded-full flex items-center justify-center animate-pulse">
                  <IoDownload className="text-white text-xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Orders Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          {/* Search and Filter Bar */}
          <div className="bg-white rounded-2xl shadow-xl mb-8 p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              <div className="relative flex-1 max-w-md">
                <IoSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <input
                  type="text"
                  placeholder="Search orders, clients, or order IDs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
              <div className="flex gap-3">
                <button className="flex items-center gap-2 px-4 py-3 border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                  <IoFilter className="text-gray-500" />
                  <span className="text-gray-700 font-medium">Filter</span>
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 font-medium">
                  <IoAdd className="text-xl" />
                  <span>New Order</span>
                </button>
              </div>
            </div>
          </div>

          {/* Main Orders Container */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Tabs */}
            <div className="border-b border-gray-200 bg-gray-50">
              <nav className="flex space-x-8 px-8 py-2">
                {[
                  {
                    key: "all",
                    label: "All Orders",
                    count: orders.length,
                    color: "text-gray-600",
                  },
                  {
                    key: "completed",
                    label: "Completed",
                    count: orders.filter((o) => o.status === "completed")
                      .length,
                    color: "text-green-600",
                  },
                  {
                    key: "in-progress",
                    label: "In Progress",
                    count: orders.filter((o) => o.status === "in-progress")
                      .length,
                    color: "text-blue-600",
                  },
                  {
                    key: "pending",
                    label: "Pending",
                    count: orders.filter((o) => o.status === "pending").length,
                    color: "text-yellow-600",
                  },
                ].map((tab) => (
                  <button
                    key={tab.key}
                    onClick={() => setActiveTab(tab.key)}
                    className={`py-4 px-1 border-b-2 font-semibold text-sm transition-all ${
                      activeTab === tab.key
                        ? "border-indigo-500 text-indigo-600"
                        : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      {tab.label}
                      <span
                        className={`px-2 py-1 rounded-full text-xs bg-gray-100 ${tab.color}`}
                      >
                        {tab.count}
                      </span>
                    </span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Orders List */}
            <div className="p-8">
              {filteredOrders.length > 0 ? (
                <div className="space-y-6">
                  {filteredOrders.map((order) => (
                    <div
                      key={order.id}
                      className="group border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-indigo-200 transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-r from-white to-gray-50"
                    >
                      <div className="flex flex-col xl:flex-row xl:items-center xl:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-4 mb-4">
                            {getStatusIcon(order.status)}
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors">
                                  {order.service}
                                </h3>
                                {getStatusBadge(order.status)}
                                {getPriorityBadge(order.priority)}
                              </div>
                              <div className="flex items-center gap-4 text-sm text-gray-500">
                                <span className="flex items-center gap-1">
                                  <span className="w-2 h-2 bg-indigo-400 rounded-full"></span>
                                  {order.client}
                                </span>
                                <span>
                                  Order ID:{" "}
                                  <span className="font-medium text-gray-700">
                                    {order.id}
                                  </span>
                                </span>
                                <span>
                                  Date:{" "}
                                  <span className="font-medium text-gray-700">
                                    {order.date}
                                  </span>
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-gray-600 mb-4 leading-relaxed">
                            {order.description}
                          </p>
                          <div className="flex items-center justify-between">
                            <span className="text-2xl font-bold text-indigo-600">
                              {order.amount}
                            </span>
                          </div>
                        </div>
                        <div className="mt-6 xl:mt-0 xl:ml-8 flex flex-col sm:flex-row gap-3">
                          <button className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-xl hover:bg-gray-50 hover:border-indigo-300 transition-all duration-200 font-medium">
                            <IoEye className="text-lg" />
                            <span>View Details</span>
                          </button>
                          {order.status === "completed" && (
                            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:-translate-y-1 font-medium">
                              <IoDownload className="text-lg" />
                              <span>Download Report</span>
                            </button>
                          )}
                          {order.status === "in-progress" && (
                            <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:-translate-y-1 font-medium">
                              <IoEye className="text-lg" />
                              <span>Track Progress</span>
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-32 h-32 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg
                      className="w-16 h-16 text-indigo-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">
                    No orders found
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
                    {activeTab === "all"
                      ? "You haven't placed any orders yet. Start your first advertising campaign today!"
                      : `No ${activeTab.replace(
                          "-",
                          " "
                        )} orders found. Try adjusting your filters.`}
                  </p>
                  <button className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 font-semibold text-lg">
                    <IoAdd className="text-xl" />
                    Start New Project
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-indigo-100 text-indigo-600 rounded-full text-sm font-semibold mb-4">
              QUICK ACTIONS
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Need Help with Your Orders?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Access our comprehensive support system and tools to manage your
              advertising campaigns effectively
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="group bg-gradient-to-br from-indigo-50 to-purple-50 p-8 border border-indigo-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <IoAdd className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Start New Project
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Ready to launch your next advertising campaign? Get started with
                our comprehensive project setup.
              </p>
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:from-indigo-700 hover:to-purple-700 transition-all transform hover:-translate-y-1 font-semibold">
                Get Started
              </button>
            </div>
            <div className="group bg-gradient-to-br from-green-50 to-blue-50 p-8 border border-green-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <IoEye className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Contact Support
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Have questions about your orders or need assistance? Our expert
                team is here to help 24/7.
              </p>
              <button className="w-full border-2 border-green-500 text-green-600 px-6 py-3 rounded-xl hover:bg-green-50 hover:border-green-600 transition-all font-semibold">
                Get Help
              </button>
            </div>
            <div className="group bg-gradient-to-br from-orange-50 to-yellow-50 p-8 border border-orange-100 rounded-2xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <IoDownload className="text-white text-2xl" />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                View Reports
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Access detailed analytics and performance reports to track your
                campaign success and ROI.
              </p>
              <button className="w-full border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-xl hover:bg-orange-50 hover:border-orange-600 transition-all font-semibold">
                View All Reports
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Orders;
