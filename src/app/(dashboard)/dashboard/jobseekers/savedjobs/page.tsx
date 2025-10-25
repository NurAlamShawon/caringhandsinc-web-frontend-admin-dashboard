import { Card } from "@/components/ui/card";

import JobCard from "@/components/ui/cards/jobcard/jobCard";
import { jobsData } from "@/lib/dummy-data";

export default function SavedJobs() {
  return (
    <div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {jobsData.length > 0 ? (
          jobsData.map((job) => <JobCard key={job.id} job={job} />)
        ) : (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              Your Dont have any saved jobs
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
