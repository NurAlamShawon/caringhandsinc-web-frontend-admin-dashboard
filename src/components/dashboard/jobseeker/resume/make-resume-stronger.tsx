import { CheckCircle2, AlertCircle, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface SkillSnapshot {
  title: string;
  description: string;
  details: string[];
}

export function MakeResumeStronger() {
  const matchScore = 72;
  const keySkills = [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "AWS",
    "Git",
    "Agile",
  ];

  const experienceSnapshots: SkillSnapshot[] = [
    {
      title: "5+ years in Software Development",
      description: "Full-stack development experience",
      details: [],
    },
    {
      title: "Team Leadership",
      description: "Led cross-functional teams of 5-8 members",
      details: [],
    },
    {
      title: "Project Management",
      description: "Delivered 15+ successful projects",
      details: [],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-2">
        <h2 className="text-h4 font-bold text-foreground">
          Make Your Resume Stronger
        </h2>
        <p className="text-muted-foreground text-md py-4">
          AI has analyzed real DMV job descriptions and found ways to improve
          your resume.
        </p>
      </div>

      {/* Resume Match Score Card */}
      <div className="p-8 rounded bg-none border-2 border-border">
        <div className="space-y-6 max-w-xl mx-auto">
          <div className="flex items-center justify-center gap-2">
            <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center">
              <div className="w-2 h-2 rounded-full bg-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-foreground">
              Resume Match Score
            </h3>
          </div>
          <div className="flex justify-center">
            <div className="bg-muted p-4 rounded-lg text-center inline-block mx-auto">
              <p className="text-sm text-muted-foreground">
                Your resume matches {matchScore}% of DMV jobs
              </p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-500 h-2 rounded-full transition-all"
              style={{ width: `${matchScore}%` }}
            />
          </div>

          {/* Status Indicators */}
          <div className="flex justify-center gap-8">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-foreground">
                Education
              </span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-500" />
              <span className="text-sm font-medium text-foreground">
                Experience
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-yellow-500" />
              <span className="text-sm font-medium text-foreground">
                Skills
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Three Column Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Key Skills Card */}
        <div className="p-6 border-2 border-border">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-blue-100 flex items-center justify-center">
                <span className="text-lg font-bold">{"<>"}</span>
              </div>
              <h3 className="font-semibold text-foreground text-primary">
                Key Skills
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {keySkills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-2 bg-blue-50 text-blue-700 rounded-full  font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Snapshot Card */}
        <Card className="p-6 border border-border">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-purple-100 flex items-center justify-center">
                <span className="text-lg">👤</span>
              </div>
              <h3 className="font-semibold text-foreground text-primary">
                Experience Snapshot
              </h3>
            </div>
            <div className="space-y-3">
              {experienceSnapshots.map((snapshot, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-md font-semibold text-foreground">
                        {snapshot.title}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {snapshot.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Education Card */}
        <Card className="p-6 border border-border">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded bg-green-100 flex items-center justify-center">
                <span className="text-lg">🎓</span>
              </div>
              <h3 className="font-semibold text-foreground text-primary">
                Education
              </h3>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-md font-semibold text-foreground">
                  Bachelor of Science
                </p>
                <p className="text-md text-muted-foreground">
                  Computer Science Stanford University • 2018
                </p>
              </div>
              <div className="pt-3 border-t border-border">
                <p className="font-medium text-md font-semibold text-foreground mb-2">
                  Certifications
                </p>
                <p className="text-md text-muted-foreground">
                  AWS Solutions Architect Amazon Web Services • 2022
                </p>
              </div>
            </div>
          </div>
        </Card>
      </div>

      <div className="flex gap-4 justify-center mt-12 pb-8">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6">
          <Link href="/dashboard/jobseekers/addmoredetails">
            Continue & Add Preferences{" "}
          </Link>
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
        <Button variant="outline" className="px-8 py-6 bg-transparent ">
          Skip for now
        </Button>
      </div>
    </div>
  );
}
