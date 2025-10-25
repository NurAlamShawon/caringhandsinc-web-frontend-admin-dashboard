import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockApplicants } from "@/lib/mock-data";
import Link from "next/link";

export function RecentApply() {
  return (
    <Card className="col-span-1 shadow-sm">
      <CardHeader>
        <CardTitle>Recent Apply</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {mockApplicants.map((applicant) => (
            <div
              key={applicant.id}
              className="flex items-center justify-between pb-4 border-b last:border-0"
            >
              <div className="space-y-1">
                <p className="font-medium text-sm">{applicant.name}</p>
                <p className="text-xs text-muted-foreground">
                  {applicant.email}
                </p>
              </div>
              <Link
                href="#"
                className="text-emerald-600 hover:text-emerald-700 text-sm font-medium"
              >
                View
              </Link>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
