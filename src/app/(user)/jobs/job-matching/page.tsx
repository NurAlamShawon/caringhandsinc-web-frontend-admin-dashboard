"use client";

import { useState, useMemo } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

import { jobsData, companiesData } from "@/lib/dummy-data";
import JobCard from "@/components/ui/cards/jobcard/jobCard";
import CompanyCard from "@/components/ui/cards/jobcard/companycard";

type FilterState = {
  employmentType: string[];
  workArrangement: string[];
  careerLevel: string[];
  industry: string[];
  flexibility: string[];
  specialOpportunities: string[];
  location: string[];
  salaryRange: string[];
};

type ExpandedFilters = {
  [key: string]: boolean;
};

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedFilters, setExpandedFilters] = useState<ExpandedFilters>({
    employmentType: true,
    workArrangement: true,
    careerLevel: true,
    industry: true,
    flexibility: true,
    specialOpportunities: true,
    location: true,
    salaryRange: true,
  });
  const [filters, setFilters] = useState<FilterState>({
    employmentType: [],
    workArrangement: [],
    careerLevel: [],
    industry: [],
    flexibility: [],
    specialOpportunities: [],
    location: [],
    salaryRange: [],
  });

  const toggleFilterSection = (section: string) => {
    setExpandedFilters((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleFilterChange = (category: keyof FilterState, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [category]: prev[category].includes(value)
        ? prev[category].filter((item) => item !== value)
        : [...prev[category], value],
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      employmentType: [],
      workArrangement: [],
      careerLevel: [],
      industry: [],
      flexibility: [],
      specialOpportunities: [],
      location: [],
      salaryRange: [],
    });
    setSearchQuery("");
  };

  const filteredJobs = useMemo(() => {
    return jobsData.filter((job) => {
      const matchesSearch =
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.location.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesEmploymentType =
        filters.employmentType.length === 0 ||
        filters.employmentType.includes(job.employmentType);

      const matchesWorkArrangement =
        filters.workArrangement.length === 0 ||
        filters.workArrangement.includes(job.workArrangement);

      const matchesCareerLevel =
        filters.careerLevel.length === 0 ||
        filters.careerLevel.includes(job.careerLevel);

      const matchesIndustry =
        filters.industry.length === 0 ||
        filters.industry.includes(job.industry);

      const matchesFlexibility =
        filters.flexibility.length === 0 ||
        filters.flexibility.includes(job.flexibility);

      const matchesSpecialOpportunities =
        filters.specialOpportunities.length === 0 ||
        filters.specialOpportunities.includes(job.specialOpportunities);

      const matchesLocation =
        filters.location.length === 0 ||
        filters.location.includes(job.location);

      const matchesSalaryRange =
        filters.salaryRange.length === 0 ||
        filters.salaryRange.some((range) => {
          const [min, max] = range.split("-").map(Number);
          return job.salary >= min && job.salary <= max;
        });

      return (
        matchesSearch &&
        matchesEmploymentType &&
        matchesWorkArrangement &&
        matchesCareerLevel &&
        matchesIndustry &&
        matchesFlexibility &&
        matchesSpecialOpportunities &&
        matchesLocation &&
        matchesSalaryRange
      );
    });
  }, [searchQuery, filters]);

  const FilterSection = ({
    title,
    category,
    options,
  }: {
    title: string;
    category: keyof FilterState;
    options: string[];
  }) => (
    <div className="border-b border-border pb-4 mb-4">
      <button
        onClick={() => toggleFilterSection(category)}
        className="flex items-center justify-between w-full mb-3 hover:text-teal-600 transition-colors"
      >
        <h3 className="font-medium text-lg">{title}</h3>
        <ChevronDown
          className={`w-4 h-4 transition-transform ${
            expandedFilters[category] ? "rotate-180" : ""
          }`}
        />
      </button>
      {expandedFilters[category] && (
        <div className="space-y-2">
          {options.map((option) => (
            <div key={option} className="flex items-center gap-2">
              <Checkbox
                id={`${category}-${option}`}
                checked={filters[category].includes(option)}
                onCheckedChange={() => handleFilterChange(category, option)}
              />
              <Label
                htmlFor={`${category}-${option}`}
                className="text-md cursor-pointer"
              >
                {option}
              </Label>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen  ">
      {/* Search Bar */}
      <div className="sticky top-0 z-20 bg-white border-b border-border p-4 ">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </Button>

            {/* Search Input */}
            <div className="flex flex-1 items-center border border-caption rounded-md overflow-hidden">
              <Input
                placeholder="Search jobs, companies, locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 border-none focus-visible:ring-0 focus:outline-none text-sm h-12"
              />
              <Button
                size="sm"
                className="h-12 px-6 bg-caption hover:bg-secondary/90 text-md text-white rounded-none"
              >
                <Search className="w-4 h-4" />
                <span className="hidden sm:inline ml-2">Search</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div
            className={`lg:col-span-1 ${
              mobileMenuOpen ? "block" : "hidden lg:block"
            } text-title fixed lg:static left-0 top-20 bottom-0 w-64 lg:w-auto bg-white lg:bg-transparent z-40 overflow-y-auto lg:overflow-visible`}
          >
            <Card className="p-6 lg:sticky lg:top-24 rounded-none lg:rounded-lg">
              <h2 className="text-xl font-semibold mb-6">Filters</h2>

              <FilterSection
                title="Employment Type"
                category="employmentType"
                options={[
                  "Full-Time",
                  "Part-Time",
                  "Contract",
                  "Internship",
                  "Temporary",
                  "Seasonal",
                ]}
              />

              <FilterSection
                title="Work Arrangement"
                category="workArrangement"
                options={["Remote", "Hybrid", "On-Site"]}
              />

              <FilterSection
                title="Career Level"
                category="careerLevel"
                options={[
                  "Entry-Level",
                  "Mid-Level",
                  "Senior-Level",
                  "Director",
                  "C-Level",
                ]}
              />

              <FilterSection
                title="Industry"
                category="industry"
                options={[
                  "Technology & IT",
                  "Healthcare",
                  "Finance",
                  "Education",
                  "Finance & Accounting",
                  "Marketing & Communications",
                ]}
              />

              <FilterSection
                title="Flexibility"
                category="flexibility"
                options={[
                  "Flexible Hours",
                  "Shift Work",
                  "Weekend Only",
                  "Night Shift",
                ]}
              />

              <FilterSection
                title="Special Opportunities"
                category="specialOpportunities"
                options={[
                  "Apprenticeship",
                  "Volunteer",
                  "Internship",
                  "Diversity & Inclusion",
                ]}
              />

              <FilterSection
                title="Location"
                category="location"
                options={["Washington, DC", "Maryland", "Virginia", "Remote"]}
              />

              <FilterSection
                title="Salary Range"
                category="salaryRange"
                options={[
                  "0-20000",
                  "20000-40000",
                  "40000-60000",
                  "60000-80000",
                  "80000-999999",
                ]}
              />

              {/* Action Buttons */}
              <div className="space-y-2 mt-6 border-t border-border pt-6">
                <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  Apply Filters
                </Button>
                <Button
                  variant="outline"
                  className="w-full bg-transparent"
                  onClick={handleClearFilters}
                >
                  Clear All
                </Button>
              </div>
            </Card>
          </div>

          {/* Middle Section - Job Cards */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => <JobCard key={job.id} job={job} />)
              ) : (
                <Card className="p-8 text-center">
                  <p className="text-muted-foreground">
                    No jobs found matching your filters.
                  </p>
                </Card>
              )}
            </div>
          </div>

          {/* Right Sidebar - Top Companies */}
          <div className="lg:col-span-1 bg-none">
            <div className="p-6 lg:sticky lg:top-24">
              <h2 className="text-h3 font-semibold mb-6">Top Company</h2>
              <div className="space-y-6">
                {companiesData.map((company) => (
                  <CompanyCard key={company.id} company={company} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
