import { Card } from "@/components/ui/card";
import AppliedJobCard from "@/components/ui/cards/jobcard/appliedJobCard";
import { jobsData } from "@/lib/dummy-data";

export default function AppliedJobs() {
  return (
    <div>
      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 gap-x-4">
        {jobsData.length > 0 ? (
          jobsData.map((job) => <AppliedJobCard key={job.id} job={job} />)
        ) : (
          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              No jobs found matching your filters.
            </p>
          </Card>
        )}
      </div>
    </div>
  );
}
