import { Button } from "@/components/ui/button";
import { ArrowRight, Upload } from "lucide-react";
import Link from "next/link";

export function ActionButtons() {
  return (
    <div className="text-center">
      <div className="flex gap-4 justify-center mt-12 pb-8">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
          <Link href="/dashboard/jobseekers/makeresumestronger">
            Parse Resume & Continue
          </Link>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button variant="outline" className="px-8 py-6 bg-transparent ">
          <Upload className="w-4 h-4 mr-2" />
          Re-upload Resume
        </Button>
      </div>
      <div className="mt-6">
        <p>
          <b>Demo:</b> Show parsing error
        </p>
        <p>
          <b>Tip:</b> Ensure all information is accurate for better job matching{" "}
        </p>
      </div>
    </div>
  );
}
